import React from 'react';
import { Band } from '../App';

type Props = {
  band: Band;
};

/**
 * Карточка группы
 * @param props Свойства компонента
 * @returns JSX-элемент
 */
export function BandCard({ band }: Props) {
  return (
    <div className="band-card" role="button" tabIndex={0} aria-label={`Группа ${band.name}`}>
      <img src={band.logoUrl} alt={band.name} className="band-logo" loading="lazy" />
      <h3>{band.name}</h3>
      <p>{band.genre} ({band.country})</p>
    </div>
  );
}
