import TextSection from '@/components/TextSection';
import Footer from '@/components/Footer';
import './page.css';

export default function Terms() {
  return (
    <main>
      <TextSection background="white" maxWidth={800}>
        <h2 className="text-section__headline">Terms of Service</h2>
        <p className="text-section__meta">Last updated: January 2024</p>
        
        <h3>1. Acceptance of Terms</h3>
        <p>
          By accessing and using Lab1's services, you accept and agree to be bound by these Terms of Service.
        </p>

        <h3>2. Services</h3>
        <p>
          Lab1 provides personalized nutrition supplements based on:
        </p>
        <ul className="simple-list">
          <li>Essential Path: Age, gender, and lifestyle-based formulas</li>
          <li>Precision Path: DNA and biomarker testing with evolving formulas</li>
        </ul>

        <h3>3. Subscriptions</h3>
        <p>
          Our services are provided on a subscription basis. You can:
        </p>
        <ul className="simple-list">
          <li>Pause your subscription at any time</li>
          <li>Skip shipments when needed</li>
          <li>Cancel your subscription at any time</li>
          <li>Switch between Essential and Precision Paths</li>
        </ul>

        <h3>4. Testing Services</h3>
        <p>
          For Precision Path, testing is included in your subscription.
          You can choose between at-home testing or partner lab testing.
        </p>

        <h3>5. Product Information</h3>
        <p>
          Supplements are not intended to diagnose, treat, cure, or prevent any disease.
          Always consult with your healthcare provider before starting any supplement regimen.
        </p>

        <h3>6. Returns and Refunds</h3>
        <p>
          Unopened products can be returned within 30 days for a full refund.
          Opened products are not eligible for return due to health and safety regulations.
        </p>

        <h3>7. Limitation of Liability</h3>
        <p>
          Lab1 is not liable for any health outcomes resulting from supplement use.
          We provide personalized formulas based on your data, but individual results may vary.
        </p>

        <h3>8. Changes to Terms</h3>
        <p>
          We reserve the right to modify these terms at any time.
          Continued use of our services constitutes acceptance of modified terms.
        </p>

        <h3>9. Contact</h3>
        <p>
          For questions about these Terms, contact us at:<br />
          Email: legal@lab1.com<br />
          Address: [Your Company Address]
        </p>
      </TextSection>

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

