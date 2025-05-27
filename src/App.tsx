import React, { useEffect, useState } from 'react';
import './index.css';
import { BandList } from './components/BandList';
import { NewsBlock } from './components/NewsBlock';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { fetchBands, fetchNews } from './api/api';

export type Band = {
  id: number;
  name: string;
  genre: string;
  country: string;
  logoUrl: string;
};

export type NewsItem = {
  id: string;
  title: string;
  url: string;
  publishedAt: string;
};

/**
 * Основной компонент приложения Metal Universe
 * @component
 */
function App() {
  const [bands, setBands] = useState<Band[]>([]);
  const [news, setNews] = useState<NewsItem[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const [bandsData, newsData] = await Promise.all([
          fetchBands(),
          fetchNews(),
        ]);
        setBands(bandsData);
        setNews(newsData);
      } catch (e) {
        setError('Не удалось загрузить данные. Попробуйте позже.');
        console.error(e);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  return (
    <div className="container">
      <Header />
      <main>
        {error && <p className="error">{error}</p>}
        {loading ? (
          <p className="loading">Загрузка...</p>
        ) : (
          <>
            <BandList bands={bands} />
            <NewsBlock news={news} />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
