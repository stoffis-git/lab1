'use client';

import { useState } from 'react';
import './IngredientsSection.css';

const variants = [
  {
    id: 'women-25-40',
    name: 'Women 25-40',
    ingredients: [
      'Iron (Ferrous Bisglycinate) - 18mg',
      'Vitamin B12 (Methylcobalamin) - 100mcg',
      'Magnesium (Magnesium Glycinate) - 400mg',
      'Vitamin B6 (Pyridoxal-5-Phosphate) - 10mg',
      'Folate (5-MTHF) - 400mcg',
      'Vitamin C (Ascorbic Acid) - 500mg',
      'Zinc (Zinc Picolinate) - 15mg',
    ],
  },
  {
    id: 'men-30-45',
    name: 'Men 30-45',
    ingredients: [
      'Vitamin D3 (Cholecalciferol) - 2000 IU',
      'Zinc (Zinc Picolinate) - 20mg',
      'Omega-3 (EPA/DHA) - 1000mg',
      'Magnesium (Magnesium Glycinate) - 350mg',
      'Vitamin B12 (Methylcobalamin) - 50mcg',
      'CoQ10 - 100mg',
      'Lycopene - 10mg',
    ],
  },
  {
    id: 'women-40-55',
    name: 'Women 40-55',
    ingredients: [
      'Magnesium (Magnesium Glycinate) - 450mg',
      'Vitamin B Complex (B1, B2, B3, B5, B6, B7, B9, B12)',
      'Iron (Ferrous Bisglycinate) - 15mg',
      'Vitamin D3 - 1500 IU',
      'Vitex Agnus-Castus - 200mg',
      'Black Cohosh - 80mg',
      'Evening Primrose Oil - 500mg',
    ],
  },
  {
    id: 'men-45-60',
    name: 'Men 45-60',
    ingredients: [
      'Vitamin D3 - 3000 IU',
      'Zinc (Zinc Picolinate) - 25mg',
      'Omega-3 (EPA/DHA) - 1200mg',
      'CoQ10 - 200mg',
      'Lycopene - 15mg',
      'Saw Palmetto - 320mg',
      'Magnesium (Magnesium Glycinate) - 400mg',
    ],
  },
  {
    id: 'post-menopause',
    name: 'Post-Menopause',
    ingredients: [
      'Calcium (Calcium Citrate) - 1000mg',
      'Vitamin K2 (MK-7) - 100mcg',
      'Vitamin D3 - 2000 IU',
      'Magnesium (Magnesium Glycinate) - 500mg',
      'Collagen Peptides - 10g',
      'Boron - 3mg',
      'Isoflavones - 50mg',
    ],
  },
  {
    id: 'vegetarian-vegan',
    name: 'Vegetarian / Vegan',
    ingredients: [
      'Vitamin B12 (Methylcobalamin) - 250mcg',
      'Iron (Ferrous Bisglycinate) - 20mg',
      'Omega-3 DHA (Algae-based) - 500mg',
      'Vitamin D2 (Ergocalciferol) - 2000 IU',
      'Zinc (Zinc Picolinate) - 18mg',
      'Iodine (Kelp) - 150mcg',
      'Calcium (Algae-based) - 600mg',
    ],
  },
];

export default function IngredientsSection() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="ingredients-section">
      <div className="ingredients-section__container">
        <h2 className="ingredients-section__title">Ingredients & Usage</h2>
        <div className="ingredients-section__tabs">
          {variants.map((variant, index) => (
            <button
              key={variant.id}
              className={`ingredients-section__tab ${activeTab === index ? 'ingredients-section__tab--active' : ''}`}
              onClick={() => setActiveTab(index)}
            >
              {variant.name}
            </button>
          ))}
        </div>
        <div className="ingredients-section__content">
          <div className="ingredients-section__panel">
            <h3 className="ingredients-section__panel-title">{variants[activeTab].name} Formula</h3>
            <div className="ingredients-section__ingredients">
              <h4 className="ingredients-section__ingredients-title">Active Ingredients</h4>
              <ul className="ingredients-section__ingredients-list">
                {variants[activeTab].ingredients.map((ingredient, idx) => (
                  <li key={idx} className="ingredients-section__ingredient">
                    {ingredient}
                  </li>
                ))}
              </ul>
            </div>
            <div className="ingredients-section__usage">
              <h4 className="ingredients-section__usage-title">How to use</h4>
              <p className="ingredients-section__usage-text">
                Mix one serving (one scoop) with 250ml of water or your preferred beverage. 
                Stir until fully dissolved. Consume once daily, preferably in the morning with or without food.
              </p>
              <p className="ingredients-section__usage-note">
                Store in a cool, dry place. Best consumed within 3 months after opening.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

