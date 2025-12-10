import './StatCard.css';

interface StatCardProps {
  number: string | number;
  label: string;
  variant?: 'light' | 'dark';
  className?: string;
}

export default function StatCard({
  number,
  label,
  variant = 'light',
  className = '',
}: StatCardProps) {
  return (
    <div className={`stat-card stat-card--${variant} ${className}`}>
      <div className="stat-card__number">{number}</div>
      <div className="stat-card__label">{label}</div>
    </div>
  );
}

