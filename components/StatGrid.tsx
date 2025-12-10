import { ReactNode } from 'react';
import './StatCard.css';

interface StatGridProps {
  children: ReactNode;
  columns?: number;
  className?: string;
}

export default function StatGrid({
  children,
  columns = 4,
  className = '',
}: StatGridProps) {
  return (
    <div
      className={`stat-grid ${className}`}
      style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}
    >
      {children}
    </div>
  );
}

