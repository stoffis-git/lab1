'use client';

import { useState } from 'react';
import { useBasket } from '@/contexts/BasketContext';
import Button from '@/components/Button';
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

  const handleAddToBasket = () => {
    addItem({
      productType,
      variant,
      quantity: 1,
      price,
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
      >
        {isAdded ? 'Added to Basket ✓' : 'Add to Basket'}
      </Button>
    </div>
  );
}

