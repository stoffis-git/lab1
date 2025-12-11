'use client';

import { useState, useEffect } from 'react';
import './VariantShowcase.css';

const variants = [
  { 
    id: 'women-25-40', 
    name: 'Women 25-40', 
    description: 'Optimized for energy, iron, B12, magnesium',
    image: '/Lab1-image-product-essential_selection.png'
  },
  { 
    id: 'men-30-45', 
    name: 'Men 30-45', 
    description: 'Optimized for vitamin D, zinc, omega-3',
    image: '/Lab1-image-product-essential_selection.png'
  },
  { 
    id: 'women-40-55', 
    name: 'Women 40-55', 
    description: 'Optimized for hormonal balance, energy',
    image: '/Lab1-image-product-essential_selection.png'
  },
  { 
    id: 'men-45-60', 
    name: 'Men 45-60', 
    description: 'Optimized for vitality, metabolic health',
    image: '/Lab1-image-product-essential_selection.png'
  },
  { 
    id: 'post-menopause', 
    name: 'Post-Menopause', 
    description: 'Optimized for bone health, calcium, K2',
    image: '/Lab1-image-product-essential_selection.png'
  },
  { 
    id: 'vegetarian-vegan', 
    name: 'Vegetarian / Vegan', 
    description: 'Optimized for B12, iron, omega-3 DHA',
    image: '/Lab1-image-product-essential_selection.png'
  },
];

export default function VariantShowcase() {
  const [activeVariant, setActiveVariant] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const container = document.querySelector('.variant-showcase__list');
      if (!container) return;

      const scrollTop = container.scrollTop;
      const itemHeight = 120; // Approximate height of each variant item
      const newActive = Math.round(scrollTop / itemHeight);
      
      if (newActive !== activeVariant && newActive >= 0 && newActive < variants.length) {
        setActiveVariant(newActive);
      }
    };

    const container = document.querySelector('.variant-showcase__list');
    container?.addEventListener('scroll', handleScroll);
    
    return () => {
      container?.removeEventListener('scroll', handleScroll);
    };
  }, [activeVariant]);

  const handleVariantClick = (index: number) => {
    setActiveVariant(index);
    const container = document.querySelector('.variant-showcase__list');
    const item = document.querySelector(`[data-variant-index="${index}"]`);
    if (container && item) {
      item.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <section className="variant-showcase">
      <div className="variant-showcase__container">
        <h2 className="variant-showcase__title">Explore our variants</h2>
        <div className="variant-showcase__content">
          <div className="variant-showcase__list-container">
            <div className="variant-showcase__list">
              {variants.map((variant, index) => (
                <div
                  key={variant.id}
                  data-variant-index={index}
                  className={`variant-showcase__item ${activeVariant === index ? 'variant-showcase__item--active' : ''}`}
                  onClick={() => handleVariantClick(index)}
                >
                  <h3 className="variant-showcase__item-name">{variant.name}</h3>
                  <p className="variant-showcase__item-desc">{variant.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="variant-showcase__image">
            <div className="variant-showcase__image-wrapper">
              <img 
                src={variants[activeVariant].image} 
                alt={variants[activeVariant].name}
                className="variant-showcase__image-img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



