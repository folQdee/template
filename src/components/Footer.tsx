import React from 'react';

/**
 * Подвал сайта
 * @component
 */
export function Footer() {
  return (
    <footer>
      <p>&copy; {new Date().getFullYear()} Metal Universe. Все права защищены.</p>
    </footer>
  );
}
