'use client';

import Footer from '@/components/Footer';
import Button from '@/components/Button';
import Link from 'next/link';
import ProductCarousel from '@/components/ProductCarousel';
import CoreClient from './CoreClient';
import AddToBasket from './AddToBasket';
import './page.css';

export default function CoreProduct() {
  return (
    <main className="product-page product-page--core">
      <section className="product-hero product-hero--core">
        <div className="product-hero__container">
          <nav className="product-hero__breadcrumb">
            <Link href="/">Home</Link> / <Link href="/get-started">Products</Link> / <span>Core</span>
          </nav>
          <div className="product-hero__content">
            <div className="product-hero__left">
              <ProductCarousel
                images={[
                  '/Lab1-image-product-core_personalized-levitating.png',
                  '/Lab1-image-product-core_clean.png'
                ]}
                alt="Lab1 Core product"
                variant="core"
              />
            </div>
            <div className="product-hero__right">
              <div className="product-hero__badge">Core</div>
              <h1 className="product-hero__title">DNA + blood testing. Evolving formulas.</h1>
              <p className="product-hero__description">
                Deep personalization through genetic and biomarker analysis. Your formula evolves every 3 months based on your body's actual needs and responses.
              </p>
              <div className="product-hero__price">From $199/month</div>
              <div className="product-hero__features">
                <div className="product-hero__feature">
                  <span className="product-hero__feature-label">Optimization level</span>
                  <span className="product-hero__feature-value">85%+</span>
                </div>
                <div className="product-hero__feature">
                  <span className="product-hero__feature-label">Genetic markers</span>
                  <span className="product-hero__feature-value">30</span>
                </div>
                <div className="product-hero__feature">
                  <span className="product-hero__feature-label">Biomarkers tracked</span>
                  <span className="product-hero__feature-value">45</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="product-version-picker-section">
        <div className="product-version-picker-section__container">
          <CoreClient />
        </div>
      </section>

      <section className="product-details product-details--core">
        <div className="product-details__container">
          <div className="product-details__content">
            <div className="product-details__layout">
              <div className="product-details__left">
                <h2 className="product-details__title">What you get</h2>
                <div className="product-details__grid">
                  <div className="product-details__item">
                    <h3 className="product-details__item-title">Deep Personalization</h3>
                    <p className="product-details__item-text">
                      DNA testing reveals your genetic truth. Blood testing tracks your transformation. This is the path of certainty—not guessing what might work, but knowing what will.
                    </p>
                  </div>
                  <div className="product-details__item">
                    <h3 className="product-details__item-title">85%+ Optimization</h3>
                    <p className="product-details__item-text">
                      You'll feel optimal. 85%+ of what your biology is capable of. This is the deep work—personalized nutrition that evolves with your body's actual needs.
                    </p>
                  </div>
                  <div className="product-details__item">
                    <h3 className="product-details__item-title">Evolving Formulas</h3>
                    <p className="product-details__item-text">
                      Your formula evolves every 3 months based on genetic and biomarker analysis. Continuous optimization through 30 genetic markers and 45 biomarkers tracked.
                    </p>
                  </div>
                </div>
              </div>
              <div className="product-details__right">
                <AddToBasket
                  productType="core"
                  price={199}
                  title="Lab1 Core"
                  image="/Lab1-image-product-core_personalized-levitating.png"
                />
              </div>
            </div>
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



