'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useBasket } from '@/contexts/BasketContext';
import Basket from './Basket';
import './Navigation.css';
import './Button.css';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isBasketOpen, setIsBasketOpen] = useState(false);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('up');
  const lastScrollY = React.useRef(0);
  const { getItemCount } = useBasket();
  const itemCount = getItemCount();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < 50) {
        setIsScrolled(false);
        setScrollDirection('up');
        document.documentElement.style.setProperty('--header-height', '50px');
        document.documentElement.style.setProperty('--header-margin-offset', '50px');
      } else {
        setIsScrolled(true);
        const direction = currentScrollY > lastScrollY.current ? 'down' : 'up';
        setScrollDirection(direction);
        // When header is hidden (scrolling down), sticky headers should be at top
        if (direction === 'down') {
          document.documentElement.style.setProperty('--header-height', '0px');
          document.documentElement.style.setProperty('--header-margin-offset', '0px');
        } else {
          document.documentElement.style.setProperty('--header-height', '50px');
          document.documentElement.style.setProperty('--header-margin-offset', '50px');
        }
      }
      
      lastScrollY.current = currentScrollY;
    };

    // Set initial values
    document.documentElement.style.setProperty('--header-height', '50px');
    document.documentElement.style.setProperty('--header-margin-offset', '50px');

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'header--scrolled' : ''} header--${scrollDirection}`}>
      <div className="header__container">
        <Link href="/" className="header__logo">
          Lab1
        </Link>

        <nav className={`header__nav ${isMobileMenuOpen ? 'header__nav--open' : ''}`}>
          <Link href="/how-it-works" className="header__nav-link" onClick={() => setIsMobileMenuOpen(false)}>
            HOW IT WORKS
          </Link>
          <Link href="/science" className="header__nav-link" onClick={() => setIsMobileMenuOpen(false)}>
            SCIENCE
          </Link>
          <Link href="/about" className="header__nav-link" onClick={() => setIsMobileMenuOpen(false)}>
            ABOUT
          </Link>
          <Link href="/faq" className="header__nav-link" onClick={() => setIsMobileMenuOpen(false)}>
            FAQ
          </Link>
          {itemCount > 0 && (
            <button
              className="header__basket header__basket--mobile"
              onClick={() => {
                setIsBasketOpen(true);
                setIsMobileMenuOpen(false);
              }}
              aria-label={`Open basket (${itemCount} items)`}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 4H5C3.89543 4 3 4.89543 3 6V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V6C21 4.89543 20.1046 4 19 4H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <path d="M7 4V2C7 1.44772 7.44772 1 8 1H16C16.5523 1 17 1.44772 17 2V4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <path d="M9 9V13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <path d="M15 9V13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <span>Basket ({itemCount})</span>
              {itemCount > 0 && (
                <span className="header__basket-count">{itemCount}</span>
              )}
            </button>
          )}
          <Link href="/get-started" className="btn btn--secondary btn--small header__cta header__cta--mobile" onClick={() => setIsMobileMenuOpen(false)}>
            Get Started
          </Link>
        </nav>

        <div className="header__actions">
          {itemCount > 0 && (
            <button
              className="header__basket"
              onClick={() => setIsBasketOpen(true)}
              aria-label={`Open basket (${itemCount} items)`}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 4H5C3.89543 4 3 4.89543 3 6V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V6C21 4.89543 20.1046 4 19 4H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <path d="M7 4V2C7 1.44772 7.44772 1 8 1H16C16.5523 1 17 1.44772 17 2V4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <path d="M9 9V13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <path d="M15 9V13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              {itemCount > 0 && (
                <span className="header__basket-count">{itemCount}</span>
              )}
            </button>
          )}
          <Link href="/get-started" className="btn btn--secondary btn--small header__cta">
            Get Started
          </Link>
        </div>

        <button
          className="header__mobile-toggle"
          aria-label="Toggle menu"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <Basket isOpen={isBasketOpen} onClose={() => setIsBasketOpen(false)} />
    </header>
  );
}

