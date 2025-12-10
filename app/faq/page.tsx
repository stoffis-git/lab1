import FAQClient from './FAQClient';
import Footer from '@/components/Footer';
import './page.css';

export default function FAQ() {
  const topics = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      items: [
            {
              question: "I've tried supplements before. They didn't work.",
              answer: (
                <>
                  <p>
                    Most supplements are designed for average.<br />
                    You are not average.
                  </p>
                  <p>
                    Your genetics, your deficiencies, your life—<br />
                    none of it is average.
                  </p>
                  <p>Lab1 doesn't guess. We measure.</p>
                </>
              ),
            },
            {
              question: "What if I don't want testing?",
              answer: (
                <>
                  <p>Then start with Essential.</p>
                  <p>
                    No tests, no wait, just premium formulas<br />
                    for your stage of life.
                  </p>
                  <p>
                    When you're curious about precision,<br />
                    we'll be here.
                  </p>
                </>
              ),
            },
            {
              question: "How long until I feel different?",
              answer: (
                <>
                  <p>
                    Most people notice shifts in 4-6 weeks.<br />
                    Energy stabilizes. Fog lifts. Sleep deepens.
                  </p>
                  <p>But optimization is a 9-month journey.</p>
                  <p>
                    We're not selling you a quick fix.<br />
                    We're offering you a return to yourself.
                  </p>
                </>
              ),
            },
            {
              question: "Is this another subscription trap?",
              answer: (
                <>
                  <p>No. This is a partnership.</p>
                  <p>
                    You can pause, skip, or stop anytime.<br />
                    We're here when you need us,<br />
                    not holding you hostage.
                  </p>
                </>
              ),
            },
      ],
    },
    {
      id: 'choosing-path',
      title: 'Choosing Your Path',
      items: [
            {
              question: "How do I know which path is right for me?",
              answer: (
                <>
                  <p>
                    Ask yourself: Am I ready to wait 2-3 weeks for testing?<br />
                    Do I want to track my biomarkers quarterly?
                  </p>
                  <p>
                    If yes → Precision gives you certainty.<br />
                    If no → Essential gives you momentum.
                  </p>
                  <p>
                    Both paths make you feel better.<br />
                    Precision just shows you why.
                  </p>
                </>
              ),
            },
            {
              question: "Can I switch between paths?",
              answer: (
                <>
                  <p>Anytime. Both directions.</p>
                  <p>
                    Email us. We'll handle the transition.<br />
                    No penalties. No hassle.
                  </p>
                </>
              ),
            },
            {
              question: "What if Essential Path works great for me?",
              answer: (
                <>
                  <p>Then stay.</p>
                  <p>
                    70-75% optimization is not settling.<br />
                    If you feel good, you feel good.
                  </p>
                  <p>Precision is for curiosity, not necessity.</p>
                </>
              ),
            },
            {
              question: "How often do I retest on Precision Path?",
              answer: (
                <>
                  <p>
                    Blood: Every 3 months (included in subscription).<br />
                    DNA: Once (genetic markers don't change).
                  </p>
                  <p>
                    Quarterly retesting lets us see:<br />
                    What improved? What emerged? How to adjust.
                  </p>
                </>
              ),
            },
      ],
    },
    {
      id: 'testing-science',
      title: 'Testing & Science',
      items: [
            {
              question: "Is the testing invasive?",
              answer: (
                <>
                  <p>
                    DNA: Saliva sample at home.<br />
                    Blood: Lab draw or at-home finger prick.
                  </p>
                  <p>
                    Most people choose at-home for convenience.<br />
                    Takes 10 minutes. Ships back in prepaid box.
                  </p>
                </>
              ),
            },
            {
              question: "How accurate is the testing?",
              answer: (
                <>
                  <p>DNA testing: 99.9% accuracy (PCR-based, same tech as 23andMe)</p>
                  <p>
                    Blood testing: Clinical-grade labs (CLIA-certified)<br />
                    Same labs your doctor uses.
                  </p>
                </>
              ),
            },
            {
              question: "Why retest every 3 months?",
              answer: (
                <>
                  <p>Your genetics don't change. Your biomarkers do.</p>
                  <p>
                    Ferritin corrects in 8-12 weeks.<br />
                    Inflammation drops in 6-10 weeks.<br />
                    Vitamin D climbs in 4-8 weeks.
                  </p>
                  <p>
                    Quarterly testing lets us see what's working<br />
                    and adjust what isn't.
                  </p>
                </>
              ),
            },
            {
              question: "What if my results are 'normal'?",
              answer: (
                <>
                  <p>"Normal" and "optimal" are different.</p>
                  <p>
                    Ferritin at 20 ng/mL is "normal."<br />
                    Optimal is 50-100 ng/mL.
                  </p>
                  <p>
                    We optimize for how you want to feel,<br />
                    not just "within range."
                  </p>
                </>
              ),
            },
            {
              question: "What makes Lab1 different from 23andMe + supplements?",
              answer: (
                <>
                  <p>
                    23andMe shows you have variants.<br />
                    Lab1 formulates based on them.
                  </p>
                  <p>
                    Plus, we test blood biomarkers quarterly.<br />
                    Genetics are static. Your biology isn't.
                  </p>
                  <p>We combine both to create evolving formulas.</p>
                </>
              ),
            },
            {
              question: "Is this FDA approved?",
              answer: (
                <>
                  <p>
                    Supplements don't require FDA approval.<br />
                    (Neither does your multivitamin.)
                  </p>
                  <p>
                    Our testing labs are CLIA-certified.<br />
                    Our manufacturing is GMP-compliant.<br />
                    Our ingredients are third-party tested.
                  </p>
                  <p>We follow the same standards as pharmaceutical manufacturing.</p>
                </>
              ),
            },
      ],
    },
  ];

  return (
    <main>
      {/* Section 01: Custom Hero with Grid */}
      <FAQClient topics={topics} />

      {/* Section 05: Footer */}
      <Footer
        logo="Lab1"
        tagline="Personalized nutrition for the body you have, not the one you're supposed to want."
        columns={[
          {
            title: 'Explore',
            links: [
              { label: 'Essential', href: '/get-started?path=essential' },
              { label: 'Core', href: '/get-started?path=precision' },
              { label: 'How it works', href: '/how-it-works' },
            ],
          },
          {
            title: 'Learn',
            links: [
              { label: 'About Lab1', href: '/about' },
              { label: 'Science', href: '/science' },
              { label: 'FAQ', href: '/faq' },
            ],
          },
          {
            title: 'Connect',
            links: [
              { label: 'Contact', href: '/contact' },
            ],
          },
        ]}
        copyright="© 2025 Lab1. All rights reserved."
        legalLinks={[
          { label: 'Privacy Policy', href: '/privacy' },
          { label: 'Terms of Service', href: '/terms' },
        ]}
      />
    </main>
  );
}
