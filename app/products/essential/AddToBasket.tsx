'use client';

import { useState } from 'react';
import { useBasket } from '@/contexts/BasketContext';
import QuantityStepper from '@/components/QuantityStepper';
import Button from '@/components/Button';
import Link from 'next/link';
import './AddToBasket.css';

const variants = [
  { id: 'women-25-40', name: 'Women 25-40', description: 'Energy, iron, B12, magnesium' },
  { id: 'men-30-45', name: 'Men 30-45', description: 'Vitamin D, zinc, omega-3' },
  { id: 'women-40-55', name: 'Women 40-55', description: 'Hormonal balance, energy' },
  { id: 'men-45-60', name: 'Men 45-60', description: 'Vitality, metabolic health' },
  { id: 'post-menopause', name: 'Post-Menopause', description: 'Bone health, calcium, K2' },
  { id: 'vegetarian-vegan', name: 'Vegetarian / Vegan', description: 'B12, iron, omega-3 DHA' },
];

interface AddToBasketProps {
  productType: 'essential' | 'core';
  variant?: string;
  price: number;
  title: string;
  image: string;
}

export default function AddToBasket({ productType, price, title, image }: AddToBasketProps) {
  const { addItem } = useBasket();
  const [selectedVariant, setSelectedVariant] = useState<string>('');
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);

  const isDisabled = !selectedVariant;

  const handleAddToBasket = () => {
    if (isDisabled) return;
    
    const variant = variants.find(v => v.id === selectedVariant);
    addItem({
      productType,
      variant: variant?.name,
      quantity,
      price,
      title: `${title} - ${variant?.name}`,
      image,
    });
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <div className="add-to-basket">
      {productType === 'essential' && (
        <>
          <div className="add-to-basket__variants">
            <label className="add-to-basket__variants-label">Select your variant</label>
            <div className="add-to-basket__dropdown">
              <select
                className="add-to-basket__select"
                value={selectedVariant}
                onChange={(e) => setSelectedVariant(e.target.value)}
              >
                <option value="">Choose a variant...</option>
                {variants.map((variant) => (
                  <option key={variant.id} value={variant.id}>
                    {variant.name} — {variant.description}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="add-to-basket__quantity">
            <label className="add-to-basket__quantity-label">Quantity:</label>
            <QuantityStepper value={quantity} onChange={setQuantity} min={1} max={10} />
          </div>
        </>
      )}
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
        BUY AT LOCATION NEAR ME
      </Link>
    </div>
  );
}

