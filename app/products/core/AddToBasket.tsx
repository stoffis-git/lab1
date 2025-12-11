'use client';

import { useState } from 'react';
import { useBasket } from '@/contexts/BasketContext';
import Button from '@/components/Button';
import Link from 'next/link';
import '../essential/AddToBasket.css';

interface AddToBasketProps {
  productType: 'essential' | 'core';
  variant?: string;
  price: number;
  title: string;
  image: string;
}

export default function AddToBasket({ productType, variant, price, title, image }: AddToBasketProps) {
  const { addItem } = useBasket();
  const [isAdded, setIsAdded] = useState(false);

  const isDisabled = !variant;

  const handleAddToBasket = () => {
    if (isDisabled) return;
    
    // For Core products, price is one month (59€) + test (125€) = 184€
    const finalPrice = productType === 'core' ? 59 + 125 : price;
    
    addItem({
      productType,
      variant,
      quantity: 1,
      price: finalPrice,
      title,
      image,
    });
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <div className="add-to-basket">
      <Button
        variant="primary"
        onClick={handleAddToBasket}
        className="add-to-basket__button"
        fullWidth
        disabled={isDisabled}
      >
        {isAdded ? 'Added to Basket ✓' : 'Add to Basket'}
      </Button>
      <Link href="/locations" className="add-to-basket__secondary">
        Get Tested Near Me
      </Link>
    </div>
  );
}

