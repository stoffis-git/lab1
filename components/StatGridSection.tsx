import { ReactNode } from 'react';
import './StatGridSection.css';

interface StatItem {
  number: string;
  text: string;
  isHighlighted?: boolean;
}

interface StatGridSectionProps {
  headline: string;
  subtext: string;
  stats: StatItem[];
  image?: string;
  imageAlt?: string;
  ctaText?: string;
  ctaHref?: string;
}

export default function StatGridSection({
  headline,
  subtext,
  stats,
  image,
  imageAlt,
  ctaText,
  ctaHref,
}: StatGridSectionProps) {
  return (
    <section className="stat-grid-section">
      <div className="stat-grid-section__container">
        {/* Left Column: Headline, Text, Image */}
        <div className="stat-grid-section__left">
          <h2 className="stat-grid-section__headline">{headline}</h2>
          <p className="stat-grid-section__subtext">{subtext}</p>
          {image && (
            <div className="stat-grid-section__image">
              <img src={image} alt={imageAlt || ''} />
            </div>
          )}
        </div>

        {/* Right Column: 2x2 Grid */}
        <div className="stat-grid-section__right">
          <div className="stat-grid">
            {stats.map((stat, index) => {
              const isHighlighted = stat.isHighlighted;
              const content = (
                <>
                  <div className="stat-tile__number">{stat.number}</div>
                  <p className="stat-tile__text">{stat.text}</p>
                  {isHighlighted && ctaText && (
                    <div className="stat-tile__cta">
                      {ctaText} →
                    </div>
                  )}
                </>
              );

              if (isHighlighted && ctaHref) {
                return (
                  <a
                    key={index}
                    href={ctaHref}
                    className="stat-tile stat-tile--highlighted stat-tile--link"
                  >
                    {content}
                  </a>
                );
              }

              return (
                <div
                  key={index}
                  className="stat-tile"
                >
                  {content}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

