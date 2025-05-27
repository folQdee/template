import React from 'react';
import { NewsItem } from '../App';

type Props = {
  news: NewsItem[];
};

/**
 * Блок новостей
 * @param props Свойства компонента
 * @returns JSX-элемент
 */
export function NewsBlock({ news }: Props) {
  return (
    <section>
      <h2>Новости</h2>
      <ul className="news-list">
        {news.map(item => (
          <li key={item.id} className="news-item">
            <a href={item.url} target="_blank" rel="noopener noreferrer">{item.title}</a>
            <br />
            <small>{item.publishedAt}</small>
          </li>
        ))}
      </ul>
    </section>
  );
}
