'use client';

import { useState } from 'react';
import Image from 'next/image';
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
        <Image
          src={images[selectedIndex]}
          alt={alt}
          fill
          priority={selectedIndex === 0}
          quality={selectedIndex === 0 ? 90 : 85}
          sizes="(max-width: 768px) 100vw, 50vw"
          className="product-carousel__main-image"
          style={{ objectFit: 'cover' }}
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
              <Image
                src={image}
                alt={`${alt} - view ${index + 1}`}
                width={80}
                height={80}
                quality={75}
                className="product-carousel__thumbnail-image"
                style={{ objectFit: 'cover' }}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

