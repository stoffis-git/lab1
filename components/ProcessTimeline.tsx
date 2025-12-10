import { ReactNode } from 'react';
import './ProcessTimeline.css';

interface TimelineStep {
  number: string;
  title: string;
  description: ReactNode;
}

interface ProcessTimelineProps {
  steps: TimelineStep[];
  className?: string;
}

export default function ProcessTimeline({
  steps,
  className = '',
}: ProcessTimelineProps) {
  return (
    <section className={`process-timeline ${className}`}>
      <div className="process-timeline__container">
        {steps.map((step, index) => (
          <div key={index} className="process-timeline__step">
            <div className="process-timeline__number">{step.number}</div>
            <div className="process-timeline__content">
              <h3 className="process-timeline__title">{step.title}</h3>
              <div className="process-timeline__description">{step.description}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

