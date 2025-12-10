'use client';

import { useState, ReactNode, useRef } from 'react';
import './FAQClient.css';

interface FAQItem {
  question: string;
  answer: ReactNode;
}

interface FAQTopic {
  id: string;
  title: string;
  items: FAQItem[];
}

interface FAQClientProps {
  topics: FAQTopic[];
}

export default function FAQClient({ topics }: FAQClientProps) {
  const [activeTopic, setActiveTopic] = useState<string | null>(null);
  const [expandedQuestion, setExpandedQuestion] = useState<number | null>(null);
  const questionRefs = useRef<{ [key: number]: HTMLDivElement | null }>({});

  const handleTopicClick = (topicId: string) => {
    const wasActive = activeTopic === topicId;
    setActiveTopic(wasActive ? null : topicId);
    setExpandedQuestion(null);
    
    // Smooth scroll to questions section if activating a topic
    if (!wasActive && topicId) {
      // Use requestAnimationFrame for immediate response
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          const questionsSection = document.getElementById('faq-questions-section');
          if (questionsSection) {
            questionsSection.scrollIntoView({ 
              behavior: 'smooth', 
              block: 'start' 
            });
          }
        });
      });
    }
  };

  const handleQuestionClick = (questionIndex: number) => {
    if (expandedQuestion === questionIndex) {
      setExpandedQuestion(null);
    } else {
      const previousIndex = expandedQuestion;
      
      // Use requestAnimationFrame to batch both DOM changes in the same frame
      // This ensures both transitions start at exactly the same time
      requestAnimationFrame(() => {
        // Directly manipulate both DOM elements in the same frame
        // Both class changes happen synchronously before browser paints
        if (previousIndex !== null && questionRefs.current[previousIndex]) {
          questionRefs.current[previousIndex].classList.remove('faq-question-item--expanded');
        }
        if (questionRefs.current[questionIndex]) {
          questionRefs.current[questionIndex].classList.add('faq-question-item--expanded');
        }
      });
      
      // Update state to keep React in sync
      setExpandedQuestion(questionIndex);
    }
  };

  const activeTopicData = activeTopic ? topics.find((t) => t.id === activeTopic) : null;

  return (
    <>
      {/* Hero Section: FAQ Headline + Topic Grid */}
      <section className="faq-hero">
        <div className="faq-hero__container">
          {/* Left: FAQ Headline */}
          <div className="faq-hero__left">
            <h1 className="faq-hero__headline">FAQ</h1>
          </div>

          {/* Right: 2x2 Grid */}
          <div className="faq-hero__right">
            <div className="faq-hero__grid">
              {topics.map((topic, index) => (
                <button
                  key={topic.id}
                  className={`faq-hero__tile ${activeTopic === topic.id ? 'faq-hero__tile--active' : ''}`}
                  onClick={() => handleTopicClick(topic.id)}
                  aria-expanded={activeTopic === topic.id}
                >
                  <div className="faq-hero__tile-number">{String(index + 1).padStart(2, '0')}</div>
                  <div className="faq-hero__tile-title">{topic.title}</div>
                </button>
              ))}
              {/* 4th Static Tile */}
              <div className="faq-hero__tile faq-hero__tile--static">
                <div className="faq-hero__tile-static-text">CHOOSE TOPIC</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Questions Section */}
      {activeTopicData && (
        <section id="faq-questions-section" className="faq-questions-section">
          <div className="faq-questions-list">
            {activeTopicData.items.map((item, index) => {
              const isExpanded = expandedQuestion === index;
              return (
                <div
                  key={index}
                  ref={(el) => {
                    questionRefs.current[index] = el;
                  }}
                  className={`faq-question-item ${isExpanded ? 'faq-question-item--expanded' : ''}`}
                  onClick={() => handleQuestionClick(index)}
                >
                  <div className="faq-question-item__number">{String(index + 1).padStart(2, '0')}</div>
                  <div className="faq-question-item__content">
                    <h3 className="faq-question-item__title">{item.question}</h3>
                    <div className="faq-question-item__answer">{item.answer}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}
    </>
  );
}

