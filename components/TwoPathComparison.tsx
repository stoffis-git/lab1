import { ReactNode } from 'react';
import './TwoPathComparison.css';
import './Button.css';
import Button from './Button';

interface PathData {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  ctaText: string;
  ctaHref: string;
}

interface TwoPathComparisonProps {
  leftPath: PathData;
  rightPath: PathData;
  className?: string;
}

export default function TwoPathComparison({
  leftPath,
  rightPath,
  className = '',
}: TwoPathComparisonProps) {
  return (
    <section className={`two-path ${className}`}>
      <div className="two-path__grid">
        <div className="two-path__card two-path__card--essential">
          <h3 className="two-path__card-title">{leftPath.title}</h3>
          <p className="two-path__card-subtitle">{leftPath.subtitle}</p>
          <p className="two-path__card-description">{leftPath.description}</p>
          <div className="two-path__card-content">
            {leftPath.features.map((feature, index) => (
              <p key={index} className="two-path__card-feature">
                {feature}
              </p>
            ))}
          </div>
          <Button
            variant="secondary"
            href={leftPath.ctaHref}
            className="two-path__card-button"
          >
            {leftPath.ctaText} →
          </Button>
        </div>

        <div className="two-path__card two-path__card--precision">
          <h3 className="two-path__card-title">{rightPath.title}</h3>
          <p className="two-path__card-subtitle">{rightPath.subtitle}</p>
          <p className="two-path__card-description">{rightPath.description}</p>
          <div className="two-path__card-content">
            {rightPath.features.map((feature, index) => (
              <p key={index} className="two-path__card-feature">
                {feature}
              </p>
            ))}
          </div>
          <Button
            variant="secondary"
            href={rightPath.ctaHref}
            className="two-path__card-button two-path__card-button--inverted"
          >
            {rightPath.ctaText} →
          </Button>
        </div>
      </div>
    </section>
  );
}

