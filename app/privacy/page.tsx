import TextSection from '@/components/TextSection';
import Footer from '@/components/Footer';
import './page.css';

export default function Privacy() {
  return (
    <main>
      <TextSection background="white" maxWidth={800}>
        <h2 className="text-section__headline">Privacy Policy</h2>
        <p className="text-section__meta">Last updated: January 2024</p>
        
        <h3>1. Information We Collect</h3>
        <p>
          We collect information you provide directly to us, including:
        </p>
        <ul className="simple-list">
          <li>Personal information (name, email, shipping address)</li>
          <li>Health information (symptoms, goals, age, gender)</li>
          <li>Genetic data (if you choose Precision Path)</li>
          <li>Biomarker data (if you choose Precision Path)</li>
          <li>Payment information (processed securely through third-party providers)</li>
        </ul>

        <h3>2. How We Use Your Information</h3>
        <p>We use your information to:</p>
        <ul className="simple-list">
          <li>Formulate your personalized supplements</li>
          <li>Process your orders and subscriptions</li>
          <li>Communicate with you about your account and products</li>
          <li>Improve our services and develop new products</li>
          <li>Comply with legal obligations</li>
        </ul>

        <h3>3. Data Security</h3>
        <p>
          Your genetic and health data is encrypted and stored separately from your identity.
          We use industry-standard security measures to protect your information.
        </p>

        <h3>4. Data Sharing</h3>
        <p>
          We do not sell your data. We do not share your genetic information with third parties.
          We only share necessary information with:
        </p>
        <ul className="simple-list">
          <li>Testing laboratories (for processing your samples)</li>
          <li>Shipping providers (for delivering your products)</li>
          <li>Payment processors (for processing transactions)</li>
        </ul>

        <h3>5. Your Rights</h3>
        <p>You have the right to:</p>
        <ul className="simple-list">
          <li>Access your data</li>
          <li>Download your complete data</li>
          <li>Request deletion of your data</li>
          <li>Opt out of marketing communications</li>
        </ul>

        <h3>6. Contact Us</h3>
        <p>
          For questions about this Privacy Policy, contact us at:<br />
          Email: privacy@lab1.com<br />
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

