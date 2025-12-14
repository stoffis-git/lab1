import Footer from '@/components/Footer';
import PathSelector from '@/components/PathSelector';
import HeroSplit from '@/components/HeroSplit';
import '../page.css';
import './page.css';

export default function HowItWorks() {
  return (
    <main>
      {/* Section 01: Hero */}
      <HeroSplit
        headline={['CHOOSE YOUR', 'PATH TO', 'OPTIMIZATION.']}
        image="/Lab1-image-testkit-woman.webp"
        imageAlt="Personalized nutrition paths"
      />

      {/* Section 02: Path Selector */}
      <div id="paths">
        <PathSelector />
      </div>

      {/* Section 04: Help Me Decide */}
      <section className="help-decide">
        <div className="help-decide__container">
          <p className="help-decide__intro">Both paths make you feel better. Choose based on how you want to start.</p>

          <div className="help-decide__columns">
            <div className="help-decide__column">
              <h3 className="help-decide__column-header">Start with General if:</h3>
              <ul className="help-decide__column-list">
                <li>You need relief now</li>
                <li>Testing feels overwhelming</li>
                <li>You prefer simplicity</li>
                <li>You want to try before testing</li>
              </ul>
            </div>
            <div className="help-decide__divider"></div>
            <div className="help-decide__column">
              <h3 className="help-decide__column-header">Start with Personalized if:</h3>
              <ul className="help-decide__column-list">
                <li>You're curious about your data</li>
                <li>You want maximum optimization</li>
                <li>You enjoy tracking progress</li>
                <li>You value the companion app</li>
              </ul>
            </div>
          </div>

          <div className="help-decide__cta-wrapper">
            <a href="/get-started" className="help-decide__cta-button">Get started →</a>
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

