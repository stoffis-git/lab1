import Footer from '@/components/Footer';
import Button from '@/components/Button';
import Image from 'next/image';
import '../page.css';
import './page.css';

export default function About() {
  return (
    <main>
      {/* Section 01: Hero - Full width image with centered headline */}
      <section className="about-hero-new">
        <div className="about-hero-new__image">
          <Image
            src="/Lab1-image-expert-team.png"
            alt="Lab1 expert team"
            fill
            priority
            quality={85}
            sizes="100vw"
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
        </div>
        <div className="about-hero-new__overlay" />
        <div className="about-hero-new__content">
          <h1 className="about-hero-new__headline">
            <span>Trusted by elite sport.</span>
            <span>Guaranteed for you.</span>
          </h1>
        </div>
      </section>

      {/* Section 02: Expert Quote */}
      <section className="about-expert-quote">
        <div className="about-expert-quote__container">
          <p className="about-expert-quote__text">
            "Elite sports medicine doesn't belong only on the field. Everyone deserves formulations based on real biomarkers that evolve with them."
          </p>
          <p className="about-expert-quote__author">– Christian Haser, Head of Medical Department, Eintracht Frankfurt e.V.</p>
        </div>
      </section>

      {/* Section 03: Pharma Grade for Everyone */}
      <section className="about-pharma">
        <div className="about-pharma__container">
          <h2 className="about-pharma__headline">Health, truly accessible.</h2>
          <p className="about-pharma__text">
            We combine the latest biochemistry research with modern professional sports practice—and pharma-grade ingredients—to make real health optimization available to everyone.
          </p>
        </div>
      </section>

      {/* Section 04: Expertise Heading */}
      <section className="about-expertise-heading find-us-section">
        <h2 className="find-us-headline">BUILT AT THE INTERSECTION</h2>
      </section>

      {/* Section 04: Expertise - Three Worlds */}
      <section className="about-expertise">
        <div className="about-expertise__container">
          <div className="about-expertise__grid">
            <div className="about-expertise__card">
              <span className="about-expertise__card-number">01</span>
              <h3 className="about-expertise__card-title">Sports Medicine</h3>
              <p className="about-expertise__card-text">
                Professional football clubs. Olympic-level athletics.
                Where biological optimization meets human potential.
            </p>
          </div>
            <div className="about-expertise__card">
              <span className="about-expertise__card-number">02</span>
              <h3 className="about-expertise__card-title">Clinical Practice</h3>
              <p className="about-expertise__card-text">
                Decades in orthopedics, physiotherapy, laboratory medicine.
                Where "clinically normal" meets "functionally optimal."
            </p>
          </div>
            <div className="about-expertise__card">
              <span className="about-expertise__card-number">03</span>
              <h3 className="about-expertise__card-title">Orthomolecular Science</h3>
              <p className="about-expertise__card-text">
                Nutrition science, biochemistry, nutrigenomics.
                Where most supplements fail, ours are designed to work.
            </p>
          </div>
          </div>
        </div>
      </section>

      {/* Section 04: CTA */}
      <section className="about-cta">
        <div className="about-cta__container">
          <h2 className="about-cta__headline">
            We're not here to sell you supplements.
          </h2>
          <p className="about-cta__subtext">
            We're here to help you understand<br />
            what your body has been trying to tell you.
        </p>
          <div className="about-cta__buttons">
            <Button variant="secondary" size="large" href="/products/essential">
              Explore Essential →
            </Button>
            <Button variant="secondary" size="large" href="/products/core">
              Start Testing →
            </Button>
          </div>
        </div>
      </section>

      {/* Section 05: Team Banner */}
      <section className="about-team-banner">
        <div className="about-team-banner__image">
          <Image
            src="/Lab1-image-team.png"
            alt="Lab1 team working together"
            fill
            quality={85}
            sizes="100vw"
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
        </div>
        <div className="about-team-banner__content">
          <h2 className="about-team-banner__headline">
            <span>A team that powers</span>
            <span>champions like you.</span>
          </h2>
        </div>
      </section>

      {/* Footer */}
      <Footer
        logo="Lab1"
        tagline="Personalized nutrition for the body you have, not the one you're supposed to want."
        columns={[
          {
            title: 'Explore',
            links: [
              { label: 'Products', href: '/get-started' },
              { label: 'How it works', href: '/how-it-works' },
            ],
          },
          {
            title: 'Learn',
            links: [
              { label: 'About Lab1', href: '/about' },
              { label: 'Science', href: '/science' },
              { label: 'FAQ', href: '/faq' },
            ],
          },
          {
            title: 'Connect',
            links: [
              { label: 'Contact', href: '/contact' },
              { label: 'Locations', href: '/locations' },
            ],
          },
        ]}
        copyright="© 2025 Lab1. All rights reserved."
        legalLinks={[
          { label: 'Privacy Policy', href: '/privacy' },
          { label: 'Terms of Service', href: '/terms' },
        ]}
      />
    </main>
  );
}
