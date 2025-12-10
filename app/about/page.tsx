import Footer from '@/components/Footer';
import Button from '@/components/Button';
import '../page.css';
import './page.css';

export default function About() {
  return (
    <main>
      {/* Section 01: Hero - Half/Half with background */}
      <section className="about-hero">
        <div className="about-hero__container">
          <div className="about-hero__left">
            <h1 className="about-hero__headline">ABOUT LAB1</h1>
          </div>
          <div className="about-hero__right">
            <div className="about-hero__grid">
              <div className="about-hero__tile">
                <div className="about-hero__tile-number">01</div>
                <div className="about-hero__tile-text">Measure biology</div>
              </div>
              <div className="about-hero__tile">
                <div className="about-hero__tile-number">02</div>
                <div className="about-hero__tile-text">Correct deficiencies</div>
              </div>
              <div className="about-hero__tile">
                <div className="about-hero__tile-number">03</div>
                <div className="about-hero__tile-text">Optimize quarterly</div>
              </div>
              <div className="about-hero__tile about-hero__tile--accent">
                <div className="about-hero__tile-accent-text">
                  Not guesswork.<br />
                  Precision.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 02: Expert Assurance - Split with Image */}
      <section className="about-problem">
        <div className="about-problem__container">
          <div className="about-problem__image">
            <img src="/Lab1-image-placeholder.png" alt="Lab1 expert assurance" />
          </div>
          <div className="about-problem__content">
            <span className="about-problem__eyebrow">EXPERT ASSURANCE</span>
            <h2 className="about-problem__headline">
              Trusted by elite sport. Guaranteed for you.
            </h2>
            <p className="about-problem__text">
              Official health and nutrition coaches of Eintracht Frankfurt e.V.:
            </p>
            <ul className="about-problem__list">
              <li><strong>Fabian Plachel</strong> — oversees health strategy</li>
              <li><strong>Christian Haser</strong> — oversees nutrition and formulation</li>
            </ul>
            <p className="about-problem__text">
              They don’t just advise—they guarantee the formulations work as intended.
            </p>
          </div>
        </div>
      </section>

      {/* Section 03: The Numbers - 2x2 Grid */}
      <section className="about-stats">
        <div className="about-stats__container">
          <div className="about-stats__left">
            <h2 className="about-stats__headline">THE DATA</h2>
            <p className="about-stats__subtext">
              These aren't marketing numbers.<br />
              These are genetic realities.
            </p>
          </div>
          <div className="about-stats__grid">
            <div className="about-stats__tile">
              <div className="about-stats__number">40%</div>
              <p className="about-stats__label">carry MTHFR variants affecting folate processing</p>
            </div>
            <div className="about-stats__tile">
              <div className="about-stats__number">40%</div>
              <p className="about-stats__label">have FADS variants affecting omega-3 conversion</p>
            </div>
            <div className="about-stats__tile">
              <div className="about-stats__number">2-3x</div>
              <p className="about-stats__label">difference in vitamin D needs due to VDR polymorphisms</p>
            </div>
            <div className="about-stats__tile about-stats__tile--cta">
              <p className="about-stats__cta-text">Your multivitamin doesn't know this.</p>
              <p className="about-stats__cta-emphasis">We do.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 04: How We're Different - Three Columns */}
      <section className="about-difference">
        <div className="about-difference__column">
          <p className="about-difference__contrast">Most personalized nutrition asks you questions.</p>
          <p className="about-difference__answer">WE MEASURE YOUR BIOLOGY.</p>
        </div>
        <div className="about-difference__column">
          <p className="about-difference__contrast">Most supplements give you one formula forever.</p>
          <p className="about-difference__answer">WE ROTATE YOURS QUARTERLY.</p>
        </div>
        <div className="about-difference__column">
          <p className="about-difference__contrast">Most companies optimize for sales.</p>
          <p className="about-difference__answer">WE OPTIMIZE FOR BIOMARKERS.</p>
        </div>
      </section>

      {/* Section 05: Expertise - Dark Section with Cards */}
      <section className="about-expertise">
        <div className="about-expertise__container">
          <h2 className="about-expertise__headline">Built at the intersection of three worlds</h2>
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
          <p className="about-expertise__closing">
            This isn't theory. It's evidence, tested under the most demanding conditions.
          </p>
        </div>
      </section>

      {/* Section 07: CTA */}
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
            <Button variant="secondary" size="large" href="/get-started?path=essential">
              Explore Essential →
            </Button>
            <Button variant="secondary" size="large" href="/get-started?path=precision">
              Start Testing →
            </Button>
          </div>
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
              { label: 'Essential', href: '/get-started?path=essential' },
              { label: 'Core', href: '/get-started?path=precision' },
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
