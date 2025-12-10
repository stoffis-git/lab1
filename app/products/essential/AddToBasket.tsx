'use client';

import { useState } from 'react';
import { useBasket } from '@/contexts/BasketContext';
import QuantityStepper from '@/components/QuantityStepper';
import Button from '@/components/Button';
import './AddToBasket.css';

interface AddToBasketProps {
  productType: 'essential' | 'core';
  variant?: string;
  price: number;
  title: string;
  image: string;
}

export default function AddToBasket({ productType, variant, price, title, image }: AddToBasketProps) {
  const { addItem } = useBasket();
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToBasket = () => {
    addItem({
      productType,
      variant,
      quantity,
      price,
      title,
      image,
    });
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <div className="add-to-basket">
      {productType === 'essential' && (
        <div className="add-to-basket__quantity">
          <label className="add-to-basket__quantity-label">Quantity:</label>
          <QuantityStepper value={quantity} onChange={setQuantity} min={1} max={10} />
        </div>
      )}
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

