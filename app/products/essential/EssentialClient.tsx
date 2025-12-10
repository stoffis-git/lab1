'use client';

import { useState } from 'react';
import Button from '@/components/Button';

type EssentialDemographic = 'women-25-40' | 'men-30-45' | 'women-40-55' | 'men-45-60' | 'post-menopause';

const demographics = {
  'women-25-40': {
    title: 'Women 25-40',
    description: 'Optimized for energy, iron, B12, magnesium',
  },
  'men-30-45': {
    title: 'Men 30-45',
    description: 'Optimized for vitamin D, zinc, omega-3',
  },
  'women-40-55': {
    title: 'Women 40-55',
    description: 'Optimized for hormonal balance, energy, cellular health',
  },
  'men-45-60': {
    title: 'Men 45-60',
    description: 'Optimized for vitality, metabolic health, recovery',
  },
  'post-menopause': {
    title: 'Post-Menopause',
    description: 'Optimized for bone health, calcium, vitamin K2, collagen',
  },
};

export default function EssentialClient() {
  const [selectedDemographic, setSelectedDemographic] = useState<EssentialDemographic | null>(null);

  return (
    <div className="essential-version-picker">
      <h3 className="essential-version-picker__title">Choose your version</h3>
      <p className="essential-version-picker__subtitle">Select the formula optimized for your demographic</p>
      <div className="essential-version-picker__grid">
        {(Object.keys(demographics) as EssentialDemographic[]).map((key) => {
          const demographic = demographics[key];
          const isSelected = selectedDemographic === key;
          return (
            <button
              key={key}
              className={`essential-version-picker__option ${isSelected ? 'essential-version-picker__option--selected' : ''}`}
              onClick={() => setSelectedDemographic(key)}
            >
              <h4 className="essential-version-picker__option-title">{demographic.title}</h4>
              <p className="essential-version-picker__option-description">{demographic.description}</p>
            </button>
          );
        })}
      </div>
      {selectedDemographic && (
        <div className="essential-version-picker__cta">
          <Button
            variant="primary"
            href={`/get-started?path=essential&demographic=${selectedDemographic}`}
            className="essential-version-picker__button"
          >
            Select {demographics[selectedDemographic].title} →
          </Button>
        </div>
      )}
    </div>
  );
}



