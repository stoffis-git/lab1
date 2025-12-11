import HeroSplit from '@/components/HeroSplit';
import TextSection from '@/components/TextSection';
import SplitSection from '@/components/SplitSection';
import ProcessTimeline from '@/components/ProcessTimeline';
import Footer from '@/components/Footer';
import './page.css';

export default function Science() {
  return (
    <main>
      {/* Section 01: Hero */}
      <HeroSplit
        headline={['Cells don\'t guess.', 'Neither should you.']}
        image="/Lab1-image-backrgound-plant1.png"
        imageAlt="Science and precision"
      />

      {/* Section 02: The Problem */}
      <TextSection background="white" maxWidth={1200}>
        <div className="problem-grid">
          <div className="problem-grid__col">
            <h2 className="text-section__headline">Why generic nutrition fails</h2>
            <p>Most supplements are built for “average.”</p>
            <p>You’re not.</p>
            <p>MTHFR? You may not convert folic acid. VDR? You may need 2–3x vitamin D.</p>
            <p>Ferritin at 20 ng/mL is “normal” on paper—and why you crash at 2pm.</p>
            <p className="text-section__emphasis">Generic guesses. Your cells need certainty.</p>
          </div>
          <div className="problem-grid__col">
            <div className="stat-callout">
              <div className="stat-callout__number">40%</div>
              <p className="stat-callout__text">
                of people carry genetic variants that change how they process basic nutrients
              </p>
            </div>
            <div className="stat-callout">
              <div className="stat-callout__number">70%</div>
              <p className="stat-callout__text">
                of women are functionally iron deficient, but standard ranges call them "normal"
              </p>
            </div>
          </div>
        </div>
      </TextSection>

      {/* Section 02a: Expert Focus (moved up) */}
      <section className="science-expert">
        <div className="science-expert__grid">
          <div className="science-expert__image">
            <img src="/Lab1-image-expert-fabian_plachel.png" alt="Dr. Fabian Plachel portrait" />
          </div>
          <div className="science-expert__content">
            <span className="science-expert__eyebrow">EXPERT OVERSIGHT</span>
            <h2 className="science-expert__headline">PD Dr. Fabian Plachel, PhD</h2>
            <p className="science-expert__subtext">
              Sportmedizin & Nutrition Lead — Eintracht Frankfurt e.V.
            </p>
            <p className="science-expert__paragraph">
              Fabian brings the rigor of top-flight football medicine to Lab1. As leitender Mannschaftsarzt in the Bundesliga with 50+ peer-reviewed publications, he built programs that lowered injury time, aligned biomarker testing with training loads, and made sleep, nutrition, and recovery non‑negotiable pillars. His “evidence first, personalization always” approach is exactly how we design and evolve every formula.
            </p>
            <p className="science-expert__paragraph">
              At Lab1, Fabian doesn’t just advise—he safeguards the medical integrity of what we ship. He reviews every marker we track, stress-tests our rotation cadence, and insists on transparent, clinically grounded dosing. The same standards he applied to elite squads now keep our products accountable to you.
            </p>
            <ul className="science-expert__list">
              <li>Bundesliga medical lead; Charité-trained sportmed specialist</li>
              <li>Healthlab founder: Spitzensport-Medizin für jedermann</li>
              <li>Biomarker-first: annual baselines, 90-day reviews, actionable insights</li>
              <li>Guarantees: formulas meet the bar he set for elite athletes</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 03: The Three Layers */}
      <section className="layers-headline-section">
        <h2 className="layers-headline">THREE LAYERS</h2>
      </section>
      <section className="layers-intro">
        <div className="layers-intro__container">
          <p className="layers-intro__subtext">
            Lab1 combines three types of data to understand you completely.
          </p>
          <div className="layers-grid">
            <a className="layer-card" href="#layer-dna">
              <span className="layer-card__number">01</span>
              <h3 className="layer-card__title">Your DNA</h3>
              <p className="layer-card__description">
                The instruction manual.<br />
                Measured once. Never changes.
              </p>
              <span className="layer-card__more">MORE</span>
            </a>
            <a className="layer-card" href="#layer-biomarkers">
              <span className="layer-card__number">02</span>
              <h3 className="layer-card__title">Your Biomarkers</h3>
              <p className="layer-card__description">
                The real-time dashboard.<br />
                Measured quarterly. Always evolving.
              </p>
              <span className="layer-card__more">MORE</span>
            </a>
            <a className="layer-card" href="#layer-science">
              <span className="layer-card__number">03</span>
              <h3 className="layer-card__title">Latest Science</h3>
              <p className="layer-card__description">
                Elite performance insights.<br />
                What works at the highest levels.
              </p>
              <span className="layer-card__more">MORE</span>
            </a>
          </div>
        </div>
      </section>

      {/* Section 04: Layer 1 - DNA */}
      <section className="layer-detail" id="layer-dna">
        <div className="layer-detail__grid">
          <div className="layer-detail__image">
            <img src="/Lab1-image-backrgound-plant1.png" alt="DNA - Genetic code visualization" />
          </div>
          <div className="layer-detail__content">
            <h2 className="layer-detail__title">LAYER 1: DNA</h2>
            <p>Your genetic code determines how your body processes nutrients.</p>
            <p>We test 30 genetic markers that affect:</p>
            <ul className="science-list">
              <li><strong>Nutrient metabolism:</strong> How you convert vitamins into active forms</li>
              <li><strong>Absorption efficiency:</strong> How well you uptake minerals</li>
              <li><strong>Cellular protection:</strong> How you handle oxidative stress</li>
              <li><strong>Inflammation response:</strong> How your immune system reacts</li>
            </ul>
            <div className="example-box">
              <h4>Example: The MTHFR Variant</h4>
              <p>If you have two copies of the C677T variant:</p>
              <ul>
                <li>Your body converts only 30% of folic acid to active folate</li>
                <li>You need methylfolate (the active form) instead</li>
                <li>70% of supplements give you the wrong form</li>
              </ul>
              <p className="example-box__emphasis">We test. We know. We give you methylfolate.</p>
            </div>
            <p>
              Genetics don't change.<br />
              We test once. Inform your formula forever.
            </p>
          </div>
          <div className="variant-markers">
            <h3 className="variant-markers__title">30 Genetic Markers We Test</h3>
            <div className="marker-grid">
              <div className="marker-item">
                <h4>MTHFR</h4>
                <p>Folate metabolism</p>
              </div>
              <div className="marker-item">
                <h4>VDR</h4>
                <p>Vitamin D receptor</p>
              </div>
              <div className="marker-item">
                <h4>COMT</h4>
                <p>Neurotransmitter breakdown</p>
              </div>
              <div className="marker-item">
                <h4>FUT2</h4>
                <p>B12 absorption</p>
              </div>
              <div className="marker-item">
                <h4>SOD2</h4>
                <p>Antioxidant defense</p>
              </div>
              <div className="marker-item">
                <h4>APOE</h4>
                <p>Fat metabolism</p>
              </div>
              <div className="marker-item">
                <h4>CYP1A2</h4>
                <p>Caffeine metabolism</p>
              </div>
              <div className="marker-item">
                <h4>BCMO1</h4>
                <p>Beta-carotene conversion</p>
              </div>
              <div className="marker-item marker-item--more">
                <h4>+22 more</h4>
                <p>Complete genetic profile</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 05: Layer 2 - Biomarkers */}
      <section className="layer-detail layer-detail--reversed" id="layer-biomarkers">
        <div className="layer-detail__grid layer-detail__grid--reversed">
          <div className="biomarker-visual">
            <h3 className="biomarker-visual__title">Real Data from Real People</h3>
            <div className="biomarker-chart">
              <div className="chart-item">
                <div className="chart-item__label">Ferritin</div>
                <div className="chart-item__bar">
                  <div className="chart-item__before" style={{ width: '30%' }}>18</div>
                  <div className="chart-item__after" style={{ width: '90%' }}>68</div>
                </div>
                <div className="chart-item__unit">ng/mL</div>
              </div>
              <div className="chart-item">
                <div className="chart-item__label">Vitamin D</div>
                <div className="chart-item__bar">
                  <div className="chart-item__before" style={{ width: '40%' }}>24</div>
                  <div className="chart-item__after" style={{ width: '75%' }}>52</div>
                </div>
                <div className="chart-item__unit">ng/mL</div>
              </div>
              <div className="chart-item">
                <div className="chart-item__label">hsCRP</div>
                <div className="chart-item__bar chart-item__bar--reverse">
                  <div className="chart-item__before" style={{ width: '80%' }}>4.2</div>
                  <div className="chart-item__after" style={{ width: '25%' }}>0.8</div>
                </div>
                <div className="chart-item__unit">mg/L (lower is better)</div>
              </div>
            </div>
            <p className="biomarker-visual__caption">
              Average improvements after 6 months on Precision Path
            </p>
          </div>
          <div className="layer-detail__content">
            <h2 className="layer-detail__title">LAYER 2: BIOMARKERS</h2>
            <p>Your blood reveals what's happening right now.</p>
            <p>We test 45 biomarkers across five categories:</p>
            <div className="biomarker-category">
              <h4>Energy & Metabolism</h4>
              <ul>
                <li>Ferritin (iron storage)</li>
                <li>Vitamin B12, B6, Folate</li>
                <li>Vitamin D</li>
                <li>Magnesium</li>
                <li>Thyroid panel (TSH, T3, T4)</li>
              </ul>
            </div>
            <div className="biomarker-category">
              <h4>Inflammation & Immunity</h4>
              <ul>
                <li>hsCRP (high-sensitivity C-reactive protein)</li>
                <li>Homocysteine</li>
                <li>White blood cell count</li>
              </ul>
            </div>
            <div className="biomarker-category">
              <h4>Metabolic Health</h4>
              <ul>
                <li>Fasting glucose</li>
                <li>HbA1c (average blood sugar)</li>
                <li>Insulin</li>
                <li>Lipid panel (cholesterol, triglycerides)</li>
              </ul>
            </div>
            <div className="biomarker-category">
              <h4>Hormones</h4>
              <ul>
                <li>Cortisol (stress hormone)</li>
                <li>DHEA (vitality marker)</li>
                <li>Sex hormones (testosterone, estradiol)</li>
              </ul>
            </div>
            <div className="biomarker-category">
              <h4>Cellular Health</h4>
              <ul>
                <li>Omega-3 index</li>
                <li>CoQ10</li>
                <li>Glutathione (master antioxidant)</li>
              </ul>
            </div>
            <p className="layer-detail__emphasis">
              We retest every 3 months.<br />
              Track what's improving. Address what's emerging.
            </p>
          </div>
          <div className="layer-detail__image layer-detail__image--right">
            <img src="/Lab1-image-backrgound-plant2.png" alt="Biomarkers - Real-time health data" />
          </div>
        </div>
      </section>

      {/* Section 06: Layer 3 - You */}
      <section className="layer-you" id="layer-science">
        <div className="layer-you__grid">
          <div className="layer-you__image">
            <img src="/Lab1-image-user-woman.png" alt="Real person, real context" />
          </div>
          <div className="layer-you__content">
            <h2 className="layer-you__title">LAYER 3: YOU</h2>
            <p className="layer-you__lead">Data is not enough.</p>
            <p>
              Perfect ferritin but still exhausted at 2pm? Maybe you're sleeping 5 hours. 
              Maybe you just started a high-stress job. Maybe you're training for a marathon.
            </p>
            <p className="layer-you__emphasis">Context changes everything.</p>
            <p>
              Every Lab1 member has access to our care team—real humans who ask: 
              How are you sleeping? What changed? How do you actually feel?
            </p>
            <div className="layer-you__summary">
              <div className="layer-you__summary-item">
                <span className="layer-you__summary-label">Genetics</span>
                <span className="layer-you__summary-value">The manual</span>
              </div>
              <div className="layer-you__summary-item">
                <span className="layer-you__summary-label">Biomarkers</span>
                <span className="layer-you__summary-value">The dashboard</span>
              </div>
              <div className="layer-you__summary-item">
                <span className="layer-you__summary-label">Your life</span>
                <span className="layer-you__summary-value">The reality</span>
              </div>
            </div>
            <p className="layer-you__closing">We formulate for all three.</p>
          </div>
        </div>
      </section>

      {/* Section 08: The Ingredients */}
      <section className="ingredients-section">
        <h2 className="ingredients-section__header">Quality matters</h2>
        <div className="ingredients-grid">
          <div className="ingredient-principle">
            <h3>Active Forms Only</h3>
            <p>
              Methylfolate instead of folic acid.<br />
              Methylcobalamin instead of cyanocobalamin.<br />
              Your body doesn't have to convert them.
            </p>
          </div>
          <div className="ingredient-principle">
            <h3>Bioavailable Minerals</h3>
            <p>
              Magnesium glycinate (not oxide).<br />
              Zinc picolinate (not sulfate).<br />
              Forms your body actually absorbs.
            </p>
          </div>
          <div className="ingredient-principle">
            <h3>Therapeutic Doses</h3>
            <p>
              Not RDA minimums (designed to prevent deficiency).<br />
              Therapeutic levels (designed to optimize function).
            </p>
          </div>
          <div className="ingredient-principle">
            <h3>Third-Party Tested</h3>
            <p>
              Every batch tested for:<br />
              Heavy metals, microbes, potency, purity.<br />
              Certificates available on request.
            </p>
          </div>
          <div className="ingredient-principle">
            <h3>No Fillers</h3>
            <p>
              No magnesium stearate.<br />
              No titanium dioxide.<br />
              No unnecessary binders.
            </p>
          </div>
          <div className="ingredient-principle">
            <h3>Proper Ratios</h3>
            <p>
              Calcium:Magnesium at 2:1.<br />
              Zinc:Copper balanced.<br />
              Vitamin K2 with vitamin D.<br />
              Synergy matters.
            </p>
          </div>
        </div>
        <p className="ingredients-section__footer">
          If we wouldn't take it ourselves,<br />
          we won't put it in your formula.
        </p>
      </section>


      {/* Section 11: Footer */}
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
              { label: 'Locations', href: '/locations' },
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

