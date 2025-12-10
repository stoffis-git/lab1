'use client';

import { useState } from 'react';
import './ProductCarousel.css';

interface ProductCarouselProps {
  images: string[];
  alt: string;
  variant?: 'default' | 'core';
}

export default function ProductCarousel({ images, alt, variant = 'default' }: ProductCarouselProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className={`product-carousel ${variant === 'core' ? 'product-carousel--core' : ''}`}>
      <div className="product-carousel__main">
        <img
          src={images[selectedIndex]}
          alt={alt}
          className="product-carousel__main-image"
        />
      </div>
      {images.length > 1 && (
        <div className="product-carousel__thumbnails">
          {images.map((image, index) => (
            <button
              key={index}
              className={`product-carousel__thumbnail ${selectedIndex === index ? 'product-carousel__thumbnail--active' : ''}`}
              onClick={() => setSelectedIndex(index)}
              aria-label={`View image ${index + 1}`}
            >
              <img
                src={image}
                alt={`${alt} - view ${index + 1}`}
                className="product-carousel__thumbnail-image"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

