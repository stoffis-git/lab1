'use client';

import { useState } from 'react';
import { useBasket } from '@/contexts/BasketContext';
import './Basket.css';

interface BasketProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Basket({ isOpen, onClose }: BasketProps) {
  const { items, removeItem, updateQuantity, getTotalPrice, clearBasket } = useBasket();
  const [isProcessing, setIsProcessing] = useState(false);

  if (!isOpen) return null;

  const handleCheckout = () => {
    setIsProcessing(true);
    // Simulate checkout process
    setTimeout(() => {
      alert('Checkout functionality would be implemented here');
      setIsProcessing(false);
    }, 500);
  };

  return (
    <>
      <div className="basket-overlay" onClick={onClose} />
      <div className="basket">
        <div className="basket__header">
          <h2 className="basket__title">Your Basket</h2>
          <button className="basket__close" onClick={onClose} aria-label="Close basket">
            ×
          </button>
        </div>

        <div className="basket__content">
          {items.length === 0 ? (
            <div className="basket__empty">
              <p className="basket__empty-text">Your basket is empty</p>
            </div>
          ) : (
            <>
              <div className="basket__items">
                {items.map((item) => (
                  <div key={item.id} className="basket__item">
                    <div className="basket__item-image">
                      <img src={item.image} alt={item.title} />
                    </div>
                    <div className="basket__item-details">
                      <h3 className="basket__item-title">{item.title}</h3>
                      {item.variant && (
                        <p className="basket__item-variant">{item.variant}</p>
                      )}
                      <div className="basket__item-price">
                        {(item.price * item.quantity).toFixed(2)}€
                      </div>
                    </div>
                    <div className="basket__item-controls">
                      <div className="basket__quantity">
                        <button
                          className="basket__quantity-btn"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          aria-label="Decrease quantity"
                        >
                          −
                        </button>
                        <span className="basket__quantity-value">{item.quantity}</span>
                        <button
                          className="basket__quantity-btn"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          aria-label="Increase quantity"
                        >
                          +
                        </button>
                      </div>
                      <button
                        className="basket__remove"
                        onClick={() => removeItem(item.id)}
                        aria-label="Remove item"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="basket__footer">
                <div className="basket__total">
                  <span className="basket__total-label">Total:</span>
                  <span className="basket__total-value">{getTotalPrice().toFixed(2)}€</span>
                </div>
                <div className="basket__actions">
                  <button
                    className="basket__clear"
                    onClick={clearBasket}
                    disabled={isProcessing}
                  >
                    Clear Basket
                  </button>
                  <button
                    className="basket__checkout"
                    onClick={handleCheckout}
                    disabled={true}
                  >
                    Proceed to Payment
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

