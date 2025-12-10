import { ReactNode } from 'react';
import './SplitSection.css';

interface SplitSectionProps {
  image?: string;
  imageAlt?: string;
  imageSide?: 'left' | 'right';
  children: ReactNode;
  className?: string;
  splitRatio?: '50-50' | '40-60';
}

export default function SplitSection({
  image,
  imageAlt = 'Section image',
  imageSide = 'left',
  children,
  className = '',
  splitRatio = '50-50',
}: SplitSectionProps) {
  const gridColumns =
    splitRatio === '40-60' ? '2fr 3fr' : '1fr 1fr';

  return (
    <section
      className={`split-section split-section--${imageSide} ${className}`}
      style={{ gridTemplateColumns: gridColumns }}
    >
      {image && (
        <div className="split-section__image">
          <img src={image} alt={imageAlt} />
        </div>
      )}
      <div className="split-section__content">{children}</div>
    </section>
  );
}

