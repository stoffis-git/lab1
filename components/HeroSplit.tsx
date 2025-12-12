import React from 'react';
import Image from 'next/image';
import './HeroSplit.css';

interface HeroSplitProps {
  headline: string[];
  subtext?: string;
  ctaText?: string;
  ctaHref?: string;
  image?: string;
  imageAlt?: string;
  isPriority?: boolean;
}

export default function HeroSplit({
  headline,
  subtext,
  ctaText,
  ctaHref = '#start',
  image,
  imageAlt = 'Hero image',
  isPriority = false,
}: HeroSplitProps) {
  return (
    <section className="hero-split">
      <div className="hero-split__images">
        {image && (
          <>
            <div className="hero-split__image hero-split__image--full hero-split__image--desktop">
              <Image
                src={image}
                alt={imageAlt}
                fill
                priority={isPriority}
                sizes="100vw"
                className="hero-split__image-content"
                style={{ objectFit: 'cover', objectPosition: 'center', transform: 'scale(1.15)' }}
              />
            </div>
            <div className="hero-split__image hero-split__image--full hero-split__image--mobile">
              <Image
                src={image}
                alt={imageAlt}
                fill
                priority={isPriority}
                sizes="100vw"
                className="hero-split__image-content"
                style={{ objectFit: 'cover', objectPosition: 'center', transform: 'scale(1.15)' }}
              />
            </div>
          </>
        )}
      </div>

      {/* Left side content */}
      <div className="hero-split__content hero-split__content--left">
        <h1 className="hero-split__headline">
          {headline.map((line, index) => {
            // Special handling for "you." in science page
            if (line.includes('you.')) {
              const parts = line.split('you.');
              return (
                <span
                  key={index}
                  className={`hero-split__headline-line hero-split__headline-line--${index === 0 ? 'left' : index === 1 ? 'center' : 'right'}`}
                  style={{ animationDelay: `${500 + index * 150}ms` }}
                >
                  {parts[0]}
                  <span className="hero-split__headline-you">you.</span>
                </span>
              );
            }
            return (
              <span
                key={index}
                className={`hero-split__headline-line hero-split__headline-line--${index === 0 ? 'left' : index === 1 ? 'center' : 'right'}`}
                style={{ animationDelay: `${500 + index * 150}ms` }}
              >
                {line}
              </span>
            );
          })}
        </h1>
      </div>

      {/* Right side content */}
      {subtext && (
        <div className="hero-split__content hero-split__content--right">
          <p className="hero-split__subtext">
            {subtext.includes('Personalized') ? (
              <>
                {subtext.split('Personalized')[0].trim()}
                <br />
                {'Personalized' + subtext.split('Personalized')[1]}
              </>
            ) : (
              subtext.split('. ').map((part, index, array) => (
                <React.Fragment key={index}>
                  {part}
                  {index < array.length - 1 && (
                    <>
                      .<br className="hero-split__subtext-break" />
                    </>
                  )}
                </React.Fragment>
              ))
            )}
          </p>
          {ctaText && (
            <a href={ctaHref} className="hero-split__cta">
              {ctaText} →
            </a>
          )}
        </div>
      )}

      <div className="hero-split__scroll-indicator">
        Scroll to explore ↓
      </div>
    </section>
  );
}

