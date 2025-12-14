'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Button from './Button';
import './PathSelector.css';

export default function PathSelector() {
  const [activePersona, setActivePersona] = useState<'health' | 'performance' | 'longevity'>('health');
  const [imageIndex, setImageIndex] = useState<{ [key: string]: number }>({
    health: 0,
    performance: 0,
    longevity: 0,
  });
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const essentialContent = {
    subtitle: 'For those who want to begin today.',
    description: 'No testing. No waiting. Choose from 6 pattern-based formulas designed for your stage of life.',
    stats: [
      { number: '6', label: 'Formulas to choose from' },
      { number: '~2×', label: 'Better than generic' },
      { number: '0', label: 'Tests required' },
      { number: 'Today', label: 'Start date' }
    ],
    advantages: [
      {
        title: 'Start immediately',
        description: 'No waiting for test results. No scheduling appointments. Begin feeling better today with pattern-based formulas designed for people like you.'
      },
      {
        title: 'No complexity',
        description: 'Skip the testing process entirely. No DNA kits to mail, no blood draws to schedule, no waiting weeks for results. Just premium nutrition, delivered.'
      },
      {
        title: 'Pattern-based intelligence',
        description: 'Our formulas are built on statistical analysis of what works for people in your stage of life. Not guessing—data-driven patterns, ready now.'
      },
      {
        title: 'Choose your formula',
        description: 'Select from 6 pattern-based formulas, each designed for different life stages and needs. All ready to ship today—no customization required.'
      },
      {
        title: 'Simple and effective',
        description: 'One formula, delivered monthly. No app to learn, no dashboards to track. Just take your supplements and feel the difference.'
      }
    ],
    features: [
      'This is the path of trust—choosing what\'s right for most people like you, formulated with care for common needs.',
      'You\'ll feel better. Pattern-based intelligence targets the statistically most common needs.',
      'And when you\'re ready for more, we\'ll be here.'
    ],
    ctaText: 'Begin here',
    ctaHref: '/get-started?path=essential',
  };

  const coreContent = {
    subtitle: 'For those who want to know.',
    description: 'DNA testing reveals your genetic truth. Blood testing tracks your transformation. Your formula evolves every 3 months.',
    stats: [
      { number: '3-4×', label: 'Better than generic' },
      { number: '30', label: 'Genetic markers' },
      { number: '45', label: 'Biomarkers tracked' }
    ],
    features: [
      'This is the path of certainty—not guessing what might work, but knowing what will.',
      'You\'ll feel optimal. Personalized formulas based on YOUR data are 3-4× more effective than guessing.',
      'This is the deep work.'
    ],
    ctaText: 'Discover your biology',
    ctaHref: '/get-started?path=precision',
  };

  const corePersonas = {
    health: {
      title: 'Health',
      images: [
        '/Lab1-image-health-mom.webp',
        '/Lab1-image-health-youngman.png',
      ],
      alt: 'Health persona - Wellness and vitality',
      stats: [
        { number: 'Pregnancy', label: 'Safe supplementation' },
        { number: 'Hormonal', label: 'Balance support' },
        { number: 'Recovery', label: 'Postpartum healing' }
      ]
    },
    performance: {
      title: 'Performance',
      images: [
        '/Lab1-image-performance-runner.png',
        '/Lab1-image-performance-yoga.webp',
      ],
      alt: 'Performance persona - Athletic excellence',
      stats: [
        { number: '3-4×', label: 'Better than generic' },
        { number: 'Recovery', label: 'Enhanced speed' },
        { number: 'Endurance', label: 'Peak output' }
      ]
    },
    longevity: {
      title: 'Longevity',
      images: [
        '/Lab1-image-longevity-man.png',
        '/Lab1-image-health-longevity_female.webp',
      ],
      alt: 'Longevity persona - Long-term health optimization',
      stats: [
        { number: 'Cellular', label: 'Health focus' },
        { number: 'Aging', label: 'Slow markers' },
        { number: 'Vitality', label: 'Long-term' }
      ]
    }
  };

  // Auto-rotate images every 4 seconds
  useEffect(() => {
    // Clear any existing interval
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    // Start fresh interval - this ensures the current image stays for the full period
    intervalRef.current = setInterval(() => {
      setImageIndex((prev) => {
        const currentIndex = prev[activePersona];
        const nextIndex = (currentIndex + 1) % 2;
        return {
          ...prev,
          [activePersona]: nextIndex,
        };
      });
    }, 4000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [activePersona]);

  return (
    <section className="path-guide">
      <div className="path-guide__wrapper">
        {/* Core Block (First) */}
        <div className="path-guide__block path-guide__block--core">
          <div className="path-guide__container">
            {/* Left: Sticky Headline */}
            <div className="path-guide__headline-wrapper">
              <h2 className="path-guide__headline">PERSONALIZED</h2>
            </div>

            {/* Right: Content */}
            <div className="path-guide__content">
              <div className="path-guide__intro">
                <span className="path-guide__brand-label">Lab1 CORE</span>
                <p className="path-guide__subtitle">{coreContent.subtitle}</p>
                <p className="path-guide__description">{coreContent.description}</p>
              </div>

              {/* Persona Image Section */}
              <div className="path-guide__persona-section">
                <div className="path-guide__persona-image-container">
                  <div className="path-guide__persona-slideshow">
                    {corePersonas[activePersona].images.map((image, index) => {
                      const isActive = imageIndex[activePersona] === index;
                      return (
                        <div
                          key={`${activePersona}-${index}`}
                          className={`path-guide__persona-slide ${isActive ? 'path-guide__persona-slide--active' : ''}`}
                        >
                          {image ? (
                            <div
                              className={`path-guide__persona-image-wrapper ${
                                activePersona === 'performance' && index === 0 ? 'path-guide__persona-image-wrapper--performance-runner' : ''
                              } ${
                                activePersona === 'performance' && index === 1 ? 'path-guide__persona-image-wrapper--performance-yoga' : ''
                              }`}
                              style={{
                                transform:
                                  activePersona === 'performance' && index === 0
                                    ? 'scale(2.5)'
                                    : activePersona === 'performance' && index === 1
                                    ? 'scale(1.2)'
                                    : undefined,
                                transformOrigin:
                                  activePersona === 'performance' && index === 0
                                    ? 'top right'
                                    : activePersona === 'performance' && index === 1
                                    ? 'center'
                                    : undefined,
                              }}
                            >
                              <Image
                                src={image}
                                alt={`${corePersonas[activePersona].alt} - Image ${index + 1}`}
                                fill
                                sizes="(max-width: 1200px) 50vw, 33vw"
                                className="path-guide__persona-image"
                                style={{
                                  objectFit: 'cover',
                                  objectPosition:
                                    activePersona === 'performance' && index === 0 ? '200px -50px' : 'center',
                                }}
                              />
                            </div>
                          ) : (
                            <div className="path-guide__persona-image-placeholder">
                              <span className="path-guide__persona-placeholder-text">{corePersonas[activePersona].title}</span>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                  <div className="path-guide__persona-dots">
                    {corePersonas[activePersona].images.map((_, index) => (
                      <div
                        key={index}
                        className={`path-guide__persona-dot ${imageIndex[activePersona] === index ? 'path-guide__persona-dot--active' : ''}`}
                      />
                    ))}
                  </div>
                </div>
                <div className="path-guide__persona-tiles">
                  <button
                    className={`path-guide__persona-tile ${activePersona === 'health' ? 'path-guide__persona-tile--active' : ''}`}
                    onClick={() => {
                      // Clear existing interval to reset timer
                      if (intervalRef.current) {
                        clearInterval(intervalRef.current);
                        intervalRef.current = null;
                      }
                      setActivePersona('health');
                    }}
                    aria-label="Health persona"
                  >
                    <span className="path-guide__persona-tile-label">Health</span>
                  </button>
                  <button
                    className={`path-guide__persona-tile ${activePersona === 'performance' ? 'path-guide__persona-tile--active' : ''}`}
                    onClick={() => {
                      // Clear existing interval to reset timer
                      if (intervalRef.current) {
                        clearInterval(intervalRef.current);
                        intervalRef.current = null;
                      }
                      setActivePersona('performance');
                    }}
                    aria-label="Performance persona"
                  >
                    <span className="path-guide__persona-tile-label">Performance</span>
                  </button>
                  <button
                    className={`path-guide__persona-tile ${activePersona === 'longevity' ? 'path-guide__persona-tile--active' : ''}`}
                    onClick={() => {
                      // Clear existing interval to reset timer
                      if (intervalRef.current) {
                        clearInterval(intervalRef.current);
                        intervalRef.current = null;
                      }
                      setActivePersona('longevity');
                    }}
                    aria-label="Longevity persona"
                  >
                    <span className="path-guide__persona-tile-label">Longevity</span>
                  </button>
                </div>
              </div>

              {/* Stats Grid - Persona Specific */}
              <div className="path-guide__stats-container">
                <div key={activePersona} className="path-guide__stats-grid path-guide__stats-grid--persona">
                  {[
                    { number: 'General', label: 'HEALTH FOCUS', persona: 'health' },
                    { number: '41', label: 'MARKERS', persona: 'health' },
                    { number: 'Balance & Wellbeing', label: 'IMPROVEMENT', persona: 'health' },
                    { number: 'Energy', label: 'HEALTH FOCUS', persona: 'performance' },
                    { number: '38', label: 'MARKERS', persona: 'performance' },
                    { number: 'Power & Recovery', label: 'IMPROVEMENT', persona: 'performance' },
                    { number: 'Aging', label: 'HEALTH FOCUS', persona: 'longevity' },
                    { number: '44', label: 'MARKERS', persona: 'longevity' },
                    { number: 'Inflamation & Vitality', label: 'IMPROVEMENT', persona: 'longevity' },
                  ]
                    .filter((item) => item.persona === activePersona)
                    .map((item, idx) => (
                      <div key={idx} className="path-guide__stat-tile path-guide__stat-tile--core">
                        <div className="path-guide__stat-number">{item.number}</div>
                        <div className="path-guide__stat-label">{item.label}</div>
                      </div>
                    ))}
                </div>
              </div>

              {/* Process Steps */}
              <div className="path-guide__process">
                {/* Step 1: DNA+Blood Test */}
                <div className="path-guide__process-step">
                  <div className="path-guide__process-number">1</div>
                  <div className="path-guide__process-content">
                    <div className="path-guide__process-text">
                      <h4 className="path-guide__process-title">Get DNA + Blood Test</h4>
                      <p className="path-guide__process-description">
                        Pick up at pharmacy or delivery at home.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Step 2: Monthly Subscription */}
                <div className="path-guide__process-step">
                  <div className="path-guide__process-number">2</div>
                  <div className="path-guide__process-content">
                    <div className="path-guide__process-text">
                      <h4 className="path-guide__process-title">Receive Personalized Lab1</h4>
                      <p className="path-guide__process-description">
                        Personalized formula delivered on subscription basis.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Step 3: Health Report */}
                <div className="path-guide__process-step">
                  <div className="path-guide__process-number">3</div>
                  <div className="path-guide__process-content">
                    <div className="path-guide__process-text">
                      <h4 className="path-guide__process-title">Learn about your Data</h4>
                      <p className="path-guide__process-description">
                        Gain insights and establish a starting point for treatment.
                      </p>
                      <ul className="path-guide__process-details">
                        <li>Download Lab1 app</li>
                        <li>View your complete biomarker dashboard</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Step 4: Retest & Adapt */}
                <div className="path-guide__process-step">
                  <div className="path-guide__process-number">4</div>
                  <div className="path-guide__process-content">
                    <div className="path-guide__process-text">
                      <h4 className="path-guide__process-title">Retest After 3 Months</h4>
                      <p className="path-guide__process-description">
                        Blood test adapts your formula. Most people reach optimal health in 6-9 months (2-3 cycles).
                      </p>
                      <ul className="path-guide__process-details">
                        <li>Track long-term trends in app</li>
                        <li>Get personalized guidance</li>
                        <li>Ongoing education & insights</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Step 5: Retainer (Optional) */}
                <div className="path-guide__process-step path-guide__process-step--optional">
                  <div className="path-guide__process-number">5</div>
                  <div className="path-guide__process-content">
                    <div className="path-guide__process-text">
                      <h4 className="path-guide__process-title">Retainer Formula <span className="path-guide__process-optional">(Optional)</span></h4>
                      <p className="path-guide__process-description">
                        Keep markers optimal with long-term support.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Companion App Card */}
              <div className="path-guide__app-card">
                <div className="path-guide__app-card-icon">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="8" y="4" width="24" height="32" rx="2" stroke="currentColor" strokeWidth="2"/>
                    <line x1="16" y1="8" x2="24" y2="8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <h4 className="path-guide__app-card-title">Companion App</h4>
                <p className="path-guide__app-card-body">Your personal biology dashboard. Track all biomarkers over time, understand what each marker means, get personalized education.</p>
                <p className="path-guide__app-card-detail">Access test results, progress charts, and expert guidance anytime.</p>
              </div>

              {/* Optimization Statement */}
              <div className="path-guide__optimization-statement">
                <p className="path-guide__optimization-main">3-4× more effective than guessing</p>
                <p className="path-guide__optimization-subtext">Generic supplements guess at your needs. Pattern-based formulas are ~2× better. Personalized formulas based on YOUR data are 3-4× more effective.</p>
              </div>

              {/* CTA Button */}
              <div className="path-guide__cta-wrapper">
                <Button href="/products/core" variant="primary" fullWidth>
                  EXPLORE PERSONALIZED
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Essential Block (Second) */}
        <div className="path-guide__block">
          <div className="path-guide__container">
            {/* Left: Sticky Headline */}
            <div className="path-guide__headline-wrapper">
              <h2 className="path-guide__headline">GENERAL</h2>
            </div>

            {/* Right: Visual Content */}
            <div className="path-guide__content">
              <div className="path-guide__intro">
                <span className="path-guide__brand-label">Lab1 ESSENTIAL</span>
                <p className="path-guide__subtitle">{essentialContent.subtitle}</p>
                <p className="path-guide__description">{essentialContent.description}</p>
              </div>

              {/* Persona Image Section - Essential (Everybody) */}
              <div className="path-guide__persona-section">
                <div className="path-guide__persona-image-container">
                  <img 
                    src="/Lab1-image-general-people.webp" 
                    alt="General Path - Premium nutrition formulas" 
                    className="path-guide__persona-image"
                  />
                </div>
              </div>

              {/* Stats Grid */}
              <div className="path-guide__stats-grid path-guide__stats-grid--four">
                {essentialContent.stats.map((stat, index) => (
                  <div key={index} className="path-guide__stat-tile">
                    <div className="path-guide__stat-number">{stat.number}</div>
                    <div className="path-guide__stat-label">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Advantages */}
              <div className="path-guide__advantages">
                {essentialContent.advantages.map((advantage, index) => (
                  <div key={index} className="path-guide__advantage-item">
                    <h4 className="path-guide__advantage-title">{advantage.title}</h4>
                    <p className="path-guide__advantage-description">{advantage.description}</p>
                  </div>
                ))}
              </div>

              {/* Features */}
              <div className="path-guide__features-grid">
                {essentialContent.features.map((feature, index) => (
                  <div key={index} className="path-guide__feature-tile">
                    <p className="path-guide__feature-text">{feature}</p>
                  </div>
                ))}
              </div>

              {/* Optimization Statement */}
              <div className="path-guide__optimization-statement path-guide__optimization-statement--general">
                <p className="path-guide__optimization-main">~2× more effective than generic supplements</p>
                <p className="path-guide__optimization-subtext">Generic supplements guess blindly (1×). Our pattern-based formulas target the statistically most common needs for people like you (2×). Not as precise as Personalized (3-4×), but significantly better than guessing.</p>
              </div>

              {/* CTA Button */}
              <div className="path-guide__cta-wrapper">
                <Button href="/products/essential" variant="primary" fullWidth>
                  EXPLORE GENERAL
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
