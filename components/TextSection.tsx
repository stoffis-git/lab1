import { ReactNode } from 'react';
import './TextSection.css';

interface TextSectionProps {
  children: ReactNode;
  headline?: string;
  background?: 'white' | 'cream';
  maxWidth?: number;
  className?: string;
}

export default function TextSection({
  children,
  headline,
  background = 'white',
  maxWidth = 600,
  className = '',
}: TextSectionProps) {
  return (
    <section className={`text-section text-section--${background} ${className}`}>
      <div className="text-section__container" style={{ maxWidth: `${maxWidth}px` }}>
        {headline && <h2 className="text-section__headline">{headline}</h2>}
        <div className="text-section__body">{children}</div>
      </div>
    </section>
  );
}

