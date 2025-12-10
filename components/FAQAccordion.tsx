'use client';

import { useState, ReactNode } from 'react';
import './FAQAccordion.css';

interface FAQItem {
  question: string;
  answer: ReactNode;
}

interface FAQAccordionProps {
  items: FAQItem[];
  header?: string;
  className?: string;
}

export default function FAQAccordion({
  items,
  header,
  className = '',
}: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={`faq-section ${className}`}>
      {header && <h2 className="faq-section__header">{header}</h2>}
      <div className="faq-list">
        {items.map((item, index) => (
          <div
            key={index}
            className={`faq-item ${openIndex === index ? 'faq-item--open' : ''}`}
          >
            <button
              className="faq-item__question"
              onClick={() => toggleItem(index)}
              aria-expanded={openIndex === index}
            >
              {item.question}
            </button>
            <div className="faq-item__answer">
              {item.answer}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

