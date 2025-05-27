import React from 'react';
import { Band } from '../App';
import { BandCard } from './BandCard';

type Props = {
  bands: Band[];
};

/**
 * Список групп
 * @param props Свойства компонента
 * @returns JSX-элемент
 */
export function BandList({ bands }: Props) {
  return (
    <section>
      <h2>Группы</h2>
      <div className="band-grid">
        {bands.map(band => (
          <BandCard key={band.id} band={band} />
        ))}
      </div>
    </section>
  );
}
