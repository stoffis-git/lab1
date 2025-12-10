import { ReactNode } from 'react';
import './ThreeColumnGrid.css';

interface ColumnData {
  quote: string;
  answer: string;
}

interface ThreeColumnGridProps {
  columns: ColumnData[];
  className?: string;
}

export default function ThreeColumnGrid({
  columns,
  className = '',
}: ThreeColumnGridProps) {
  return (
    <section className={`three-column-grid ${className}`}>
      {columns.map((column, index) => (
        <div key={index} className="three-column-grid__column">
          <p className="three-column-grid__quote">{column.quote}</p>
          <p className="three-column-grid__answer">{column.answer}</p>
        </div>
      ))}
    </section>
  );
}

