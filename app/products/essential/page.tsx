'use client';

import Footer from '@/components/Footer';
import Link from 'next/link';
import ProductCarousel from '@/components/ProductCarousel';
import AddToBasket from './AddToBasket';
import './page.css';

export default function EssentialProduct() {
  return (
    <main className="product-page">
      <section className="product-hero">
        <div className="product-hero__container">
          <nav className="product-hero__breadcrumb">
            <Link href="/">Home</Link> / <Link href="/get-started">Products</Link> / <span>Essential</span>
          </nav>
          <div className="product-hero__content">
            <div className="product-hero__left">
              <ProductCarousel
                images={[
                  '/Lab1-image-product-essential_selection.png'
                ]}
                alt="Lab1 Essential product"
              />
            </div>
            <div className="product-hero__right">
              <div className="product-hero__badge">Essential</div>
              <h1 className="product-hero__title">Begin today. No testing required.</h1>
              <p className="product-hero__description">
                Premium formulas customized for your stage of life. Start your journey with trusted, science-backed nutrition that adapts to your demographic profile.
              </p>
              <div className="product-hero__pricing">
                <div className="product-hero__pricing-item">
                  <span className="product-hero__pricing-amount">49€</span>
                  <span className="product-hero__pricing-label">per month for your formula</span>
                </div>
              </div>
              <div className="product-hero__cta">
                <AddToBasket
                  productType="essential"
                  price={49}
                  title="Lab1 Essential"
                  image="/Lab1-image-product-essential_selection.png"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="product-details">
        <div className="product-details__container">
          <div className="product-details__content">
            <div className="product-details__layout">
              <div className="product-details__left">
                <h2 className="product-details__title">What you get</h2>
                <div className="product-details__grid">
                  <div className="product-details__item">
                    <h3 className="product-details__item-title">Premium Formulas</h3>
                    <p className="product-details__item-text">
                      Science-backed nutrition tailored to your demographic profile. No testing required—just premium formulas designed for your stage of life.
                    </p>
                  </div>
                  <div className="product-details__item">
                    <h3 className="product-details__item-title">70-75% Optimization</h3>
                    <p className="product-details__item-text">
                      This is the path of trust—choosing what's right for most people like you, formulated with care for common needs. You'll feel better, 70-75% of the way to optimal.
                    </p>
                  </div>
                  <div className="product-details__item">
                    <h3 className="product-details__item-title">Start Today</h3>
                    <p className="product-details__item-text">
                      No waiting, no testing. Begin your journey with trusted nutrition that adapts to your demographic profile. When you're ready for more, we'll be here.
                    </p>
                  </div>
                </div>
              </div>
              <div className="product-details__right">
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

