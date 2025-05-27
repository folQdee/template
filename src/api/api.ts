import { Band, NewsItem } from '../App';
import angelmaker from '../images/angelmaker.png';


/**
 * Имитация запроса списка групп
 * @returns {Promise<Band[]>} Список групп
 */
export async function fetchBands(): Promise<Band[]> {
  return [
    {
      id: 1,
      name: 'Gojira',
      genre: 'Progressive Death Metal',
      country: 'France',
      logoUrl: angelmaker
    },
    {
      id: 2,
      name: 'Behemoth',
      genre: 'Blackened Death Metal',
      country: 'Poland',
      logoUrl: '/images/decay.jpg'
    },
    {
      id: 3,
      name: 'Lorna Shore',
      genre: 'Deathcore',
      country: 'USA',
      logoUrl: 'src/images/angelmaker.png'
    }
  ];
}

/**
 * Имитация загрузки новостей
 * @returns {Promise<NewsItem[]>} Список новостей
 */
export async function fetchNews(): Promise<NewsItem[]> {
  return [
    {
      id: '1',
      title: 'Gojira анонсировали новый альбом',
      url: 'https://metalnews.example.com/gojira',
      publishedAt: '2025-05-20'
    },
    {
      id: '2',
      title: 'Behemoth выступят на Wacken 2025',
      url: 'https://metalnews.example.com/behemoth',
      publishedAt: '2025-05-18'
    }
  ];
}
