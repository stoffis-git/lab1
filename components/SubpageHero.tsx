import React from 'react';
import Link from 'next/link';
import './SubpageHero.css';

interface SubpageHeroProps {
  pageNumber: string;
  label: string;
  headline: string[];
  body: string[];
  question?: string;
}

export default function SubpageHero({
  pageNumber,
  label,
  headline,
  body,
  question,
}: SubpageHeroProps) {
  return (
    <>
      {/* Breadcrumb navigation */}
      <nav className="breadcrumb">
        <Link href="/">Home</Link> / <span>{label}</span>
      </nav>

      <section className="subpage-hero">
        <div className="subpage-hero__container">
          {/* Page number (left) and label (right) */}
          <div className="subpage-hero__header">
            <span className="subpage-hero__number">{pageNumber}</span>
            <span className="subpage-hero__label">{label}</span>
          </div>

          {/* Headline (left-aligned) */}
          <h1 className="subpage-hero__headline">
            {headline.map((line, index) => (
              <React.Fragment key={index}>
                {line}
                {index < headline.length - 1 && <br />}
              </React.Fragment>
            ))}
          </h1>

          {/* Body text with vertical rule */}
          <div className="subpage-hero__body">
            {body.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
            {question && (
              <p className="subpage-hero__question">{question}</p>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

