import Footer from '@/components/Footer';
import Link from 'next/link';
import './page.css';

export default function GetStarted() {
  return (
    <main className="get-started-page">
      <section className="get-started-hero">
        <div className="get-started-hero__container">
          <nav className="get-started-hero__breadcrumb">
            <a href="/">Home</a> / <span>Products</span>
          </nav>
        </div>
      </section>

      <section className="products-section">
        <div className="products-section__container">
          <div className="products-grid">
            {/* Essential Product */}
            <Link href="/products/essential" className="product-card">
              <div className="product-card__image-container">
                <img src="/Lab1-image-product-essential_assembly.png" alt="Essential line preview" className="product-card__image" />
              </div>
              <div className="product-card__content">
                <div className="product-card__badge">Essential</div>
                <h2 className="product-card__title"><span className="nowrap">Begin today.</span> <span className="nowrap">No testing required.</span></h2>
                <p className="product-card__description">
                  Premium formulas customized for your stage of life. Start your journey with trusted, science-backed nutrition that adapts to your demographic profile.
                </p>
                <div className="product-card__price-cta">
                  <div className="product-card__price">From 49€</div>
                  <div className="product-card__cta">View Product →</div>
                </div>
              </div>
            </Link>

            {/* Core/Personalized Product */}
            <Link href="/products/core" className="product-card product-card--core">
              <div className="product-card__image-container">
                <img src="/Lab1-image-product-core_clean.png" alt="Core line preview" className="product-card__image" />
              </div>
              <div className="product-card__content">
                <div className="product-card__badge product-card__badge--core">Core</div>
                <h2 className="product-card__title">Personalized to DNA & blood.</h2>
                <p className="product-card__description">
                  Deep personalization through genetic and biomarker analysis. Your formula evolves every 3 months based on your body's actual needs and responses.
                </p>
                <div className="product-card__price-cta">
                  <div className="product-card__price">From 59€/month</div>
                  <div className="product-card__cta">View Product →</div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <Footer
        logo="Lab1"
        tagline="Personalized nutrition for the body you have, not the one you're supposed to want."
        columns={[
          {
            title: 'Explore',
            links: [
              { label: 'Essential', href: '/products/essential' },
              { label: 'Core', href: '/products/core' },
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
