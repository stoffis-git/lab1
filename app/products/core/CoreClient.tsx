'use client';

import { useState } from 'react';
import Button from '@/components/Button';

type CorePersona = 'health' | 'performance' | 'longevity';

const personas = {
  health: {
    title: 'Health',
    description: 'Optimized for balance, wellbeing, and general health markers',
  },
  performance: {
    title: 'Performance',
    description: 'Optimized for energy, power, recovery, and peak output',
  },
  longevity: {
    title: 'Longevity',
    description: 'Optimized for cellular health, aging markers, and long-term vitality',
  },
};

export default function CoreClient() {
  const [selectedPersona, setSelectedPersona] = useState<CorePersona | null>(null);

  return (
    <div className="core-version-picker">
      <h3 className="core-version-picker__title">Choose your persona</h3>
      <p className="core-version-picker__subtitle">Select the formula optimized for your goals</p>
      <div className="core-version-picker__grid">
        {(Object.keys(personas) as CorePersona[]).map((key) => {
          const persona = personas[key];
          const isSelected = selectedPersona === key;
          return (
            <button
              key={key}
              className={`core-version-picker__option ${isSelected ? 'core-version-picker__option--selected' : ''}`}
              onClick={() => setSelectedPersona(key)}
            >
              <h4 className="core-version-picker__option-title">{persona.title}</h4>
              <p className="core-version-picker__option-description">{persona.description}</p>
            </button>
          );
        })}
      </div>
      {selectedPersona && (
        <div className="core-version-picker__cta">
          <Button
            variant="primary"
            href={`/get-started?path=precision&persona=${selectedPersona}`}
            className="core-version-picker__button"
          >
            Select {personas[selectedPersona].title} →
          </Button>
        </div>
      )}
    </div>
  );
}

