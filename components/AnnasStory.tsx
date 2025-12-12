'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import './AnnasStory.css';

export default function AnnasStory() {
  const [visibleSteps, setVisibleSteps] = useState<Set<number>>(new Set());
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Intersection Observer for month steps - with staggered delays
    const observers: IntersectionObserver[] = [];

    stepRefs.current.forEach((ref, index) => {
      if (!ref) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // Add delay based on index so they appear one after another
              setTimeout(() => {
                setVisibleSteps((prev) => new Set(prev).add(index));
              }, index * 100); // 100ms delay between each step
            }
          });
        },
        {
          threshold: 0.1,
          rootMargin: '0px 0px -20px 0px',
        }
      );

      observer.observe(ref);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  const steps = [
    {
      month: 'Month 0',
      text: "Waking up felt like dragging myself through mud. Brain fog by noon.",
    },
    {
      month: 'Month 3',
      text: "I noticed I wasn't reaching for coffee at 10am anymore.",
    },
    {
      month: 'Month 6',
      text: "I worked a full day and still wanted to see friends at night.",
    },
    {
      month: 'Month 9',
      text: "I forgot what tired felt like.",
    },
  ];

  return (
    <section className="annas-story">
      <div className="annas-story__container">
        {/* Left: Content */}
        <div className="annas-story__content">
          <h2 className="annas-story__title">ANNA'S STORY</h2>
          
          <blockquote className="annas-story__quote">
            "I thought being tired was just<br />
            being a busy person in my 30s."
          </blockquote>
          
          <div className="annas-story__timeline">
            {steps.map((step, index) => (
              <div
                key={index}
                ref={(el) => {
                  stepRefs.current[index] = el;
                }}
                className={`annas-story__moment ${
                  visibleSteps.has(index) ? 'annas-story__moment--visible' : ''
                }`}
                style={{
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                <strong>{step.month}:</strong><br />
                {step.text}
              </div>
            ))}
          </div>
          
          <blockquote className="annas-story__quote-large">
            "Lab1 didn't give me energy.<br />
            They gave me back my life."
          </blockquote>
          
          <p className="annas-story__attribution">— Anna, 34</p>
        </div>

        {/* Right: Sticky Image */}
        <div className="annas-story__image-wrapper">
          <div className="annas-story__image">
            <Image
              src="/Lab1-image-women-smile.png"
              alt="Anna, satisfied Lab1 customer"
              fill
              quality={85}
              sizes="(max-width: 1023px) 100vw, 50vw"
              className="annas-story__image-content"
              style={{ objectFit: 'cover', objectPosition: 'calc(50% - 50px) center' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

