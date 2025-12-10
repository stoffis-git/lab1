# SUBPAGE: SCIENCE
## Lab1 Website - The Biology Behind Personalization

**Page Purpose:** Translate complex science into human understanding. Build credibility without overwhelming. Show the "why" behind precision nutrition.

**Emotional Goal:** Curiosity → Understanding → Trust in the methodology

**Page URL:** `/science`

**Navigation Label:** Science

---

## 📐 PAGE STRUCTURE

```
01. Hero - "Your cells don't guess. Neither should your supplements."
02. The Problem - Why generic nutrition fails
03. The Three Layers - DNA, Blood, You
04. Layer 1: Genetic Variants (Visual)
05. Layer 2: Biomarkers (Visual)
06. Layer 3: You (The Human Element)
07. How We Formulate
08. The Ingredients (Quality matters)
09. What We Don't Do
10. FAQ (Science-specific)
11. Footer
```

**Estimated Scroll Depth:** 5,500-6,500px
**Average Time on Page:** 5-7 minutes
**Key Goal:** Understanding without overwhelm

---

## 🎯 SECTION 01: HERO

### Component
Magazine Section Header (DISTINCTIVE from homepage)

### Visual Differentiation from Homepage
**Homepage Hero:** 100vh full-screen, split images, centered text overlay, cinematic
**Subpage Hero:** 60vh compact, solid background, left-aligned, editorial chapter marker

### Layout
```
╔════════════════════════════════════════════════════════════════╗
║                                                                ║
║  [80px vertical space]                                         ║
║                                                                ║
║  03                                  THE SCIENCE               ║
║  [160px mono]                        [14px sans, top-right]   ║
║                                                                ║
║  [40px gap]                                                    ║
║                                                                ║
║  Your cells don't guess.                                       ║
║  Neither should your supplements.                              ║
║  [96px Serif, olive, LEFT-aligned, max-width 700px]           ║
║                                                                ║
║  [32px gap]                                                    ║
║                                                                ║
║  │  Every cell in your body operates on precision.            ║
║  │  Enzymes bind to specific receptors.                       ║
║  │  Nutrients follow genetic instructions.                    ║
║  │  Nothing is random.                                         ║
║  [20px Sans, olive 70%, LEFT-aligned, 4px vertical rule]      ║
║                                                                ║
║  [24px gap]                                                    ║
║                                                                ║
║  │  So why would your nutrition be?                           ║
║  [20px Sans, italic, olive, LEFT-aligned, same vertical rule] ║
║                                                                ║
║  [80px vertical space]                                         ║
║                                                                ║
╚════════════════════════════════════════════════════════════════╝

Background: #F8F6F0 (Soft Cream) - solid, no images
Height: 60vh (significantly shorter than homepage's 100vh)
Text: LEFT-aligned (different from homepage's centered)
Page Number: Large "03" (editorial chapter marker)
```

### Content
```html
<!-- Breadcrumb navigation (subpages only) -->
<nav class="breadcrumb">
  <a href="/">Home</a> / <span>Science</span>
</nav>

<section class="subpage-hero">
  <div class="subpage-hero__container">
    <!-- Page number (left) and label (right) -->
    <div class="subpage-hero__header">
      <span class="subpage-hero__number">03</span>
      <span class="subpage-hero__label">The Science</span>
    </div>
    
    <!-- Headline (left-aligned, half-width) -->
    <h1 class="subpage-hero__headline">
      Your cells don't guess.<br>
      Neither should your supplements.
    </h1>
    
    <!-- Body text with vertical rule -->
    <div class="subpage-hero__body">
      <p>
        Every cell in your body operates on precision.<br>
        Enzymes bind to specific receptors.<br>
        Nutrients follow genetic instructions.<br>
        Nothing is random.
      </p>
      
      <p class="subpage-hero__question">
        So why would your nutrition be?
      </p>
    </div>
  </div>
</section>
```

### CSS Specifications
```css
/* Uses same base styles as How It Works (see SUBPAGE_HOW_IT_WORKS.md) */
/* Additional styling for question callout: */

.subpage-hero__question {
  margin-top: 24px;
  font-style: italic;
  color: var(--color-olive);
  opacity: 1;
}
```

---

## 🎯 SECTION 02: THE PROBLEM

### Component
Text Section (Centered Column) with stat callouts

### Content
```html
<section class="text-section">
  <div class="text-section__container" style="max-width: 700px;">
    <h2 class="text-section__headline">
      Why generic nutrition fails
    </h2>
    
    <p>Most supplements are designed for "average."</p>
    
    <p>The problem?<br>
    You are not average.</p>
    
    <div class="stat-callout">
      <div class="stat-callout__number">40%</div>
      <p class="stat-callout__text">
        of people carry genetic variants that change how they process basic nutrients
      </p>
    </div>
    
    <p>The MTHFR variant means your cells can't convert folic acid.<br>
    But your multivitamin doesn't know that.</p>
    
    <p>The VDR variant means you need 2-3x more vitamin D.<br>
    But your multivitamin gives you the same dose as everyone else.</p>
    
    <div class="stat-callout">
      <div class="stat-callout__number">70%</div>
      <p class="stat-callout__text">
        of women are functionally iron deficient, but standard ranges call them "normal"
      </p>
    </div>
    
    <p>Ferritin at 20 ng/mL is technically "within range."<br>
    It's also why you're exhausted by 2pm.</p>
    
    <p class="emphasis">Generic supplements guess.<br>
    Your cells need certainty.</p>
  </div>
</section>
```

### Styling - Stat Callouts
```css
.stat-callout {
  margin: 48px 0;
  padding: 32px;
  background: var(--color-white);
  border-left: 4px solid var(--color-olive);
}

.stat-callout__number {
  font-family: var(--font-mono);
  font-size: 64px;
  font-weight: 600;
  color: var(--color-olive);
  line-height: 1;
  margin-bottom: 16px;
}

.stat-callout__text {
  font-family: var(--font-sans);
  font-size: 20px;
  line-height: 1.6;
  color: rgba(51, 54, 17, 0.8);
}
```

---

## 🎯 SECTION 03: THE THREE LAYERS

### Component
Text Section with visual hierarchy

### Content
```html
<section class="layers-intro">
  <div class="layers-intro__container">
    <h2 class="layers-intro__headline">
      Three layers of precision
    </h2>
    
    <p class="layers-intro__subtext">
      Lab1 combines three types of data to understand you completely.
    </p>
    
    <div class="layers-grid">
      <div class="layer-card">
        <span class="layer-card__number">01</span>
        <h3 class="layer-card__title">Your DNA</h3>
        <p class="layer-card__description">
          The instruction manual.<br>
          Measured once. Never changes.
        </p>
      </div>
      
      <div class="layer-card">
        <span class="layer-card__number">02</span>
        <h3 class="layer-card__title">Your Biomarkers</h3>
        <p class="layer-card__description">
          The real-time dashboard.<br>
          Measured quarterly. Always evolving.
        </p>
      </div>
      
      <div class="layer-card">
        <span class="layer-card__number">03</span>
        <h3 class="layer-card__title">You</h3>
        <p class="layer-card__description">
          The human context.<br>
          How you feel. What you need. Where you are.
        </p>
      </div>
    </div>
  </div>
</section>
```

### Styling - Layer Cards
```css
.layers-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-top: 80px;
}

.layer-card {
  padding: 48px 32px;
  background: var(--color-white);
  border: 1px solid rgba(51, 54, 17, 0.15);
  text-align: center;
  transition: all 300ms ease-out;
}

.layer-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(51, 54, 17, 0.1);
}

.layer-card__number {
  font-family: var(--font-mono);
  font-size: 48px;
  color: rgba(51, 54, 17, 0.2);
  display: block;
  margin-bottom: 16px;
}

.layer-card__title {
  font-family: var(--font-serif);
  font-size: 32px;
  color: var(--color-olive);
  margin-bottom: 16px;
}

.layer-card__description {
  font-family: var(--font-sans);
  font-size: 16px;
  line-height: 1.7;
  color: rgba(51, 54, 17, 0.7);
}

/* Mobile: Stack to single column */
@media (max-width: 767px) {
  .layers-grid {
    grid-template-columns: 1fr;
  }
}
```

---

## 🎯 SECTION 04: LAYER 1 - GENETIC VARIANTS

### Component
Split Section with visual diagram

### Layout
```
╔══════════════════════════════╦════════════════════════════════════╗
║  LEFT (50%)                  ║  RIGHT (50%)                       ║
║  Background: #FFFFFF         ║  Background: #F8F6F0               ║
╠══════════════════════════════╬════════════════════════════════════╣
║                              ║                                    ║
║  LAYER 1: DNA                ║  [Visual: DNA Helix]               ║
║  [48px Serif]                ║                                    ║
║                              ║  Key Variants We Test:             ║
║  Your genetic code           ║                                    ║
║  determines how your body    ║  • MTHFR (Folate processing)      ║
║  processes nutrients.        ║  • VDR (Vitamin D receptor)        ║
║                              ║  • COMT (Stress response)          ║
║  [Content...]                ║  • FUT2 (B12 absorption)           ║
║                              ║  • SOD2 (Antioxidant defense)      ║
║                              ║  • 25+ others                      ║
║                              ║                                    ║
╚══════════════════════════════╩════════════════════════════════════╝
```

### Content - Left Side
```html
<div class="layer-detail__content">
  <h2 class="layer-detail__title">LAYER 1: DNA</h2>
  
  <p>Your genetic code determines how your body processes nutrients.</p>
  
  <p>We test 30 genetic markers that affect:</p>
  
  <ul class="science-list">
    <li><strong>Nutrient metabolism:</strong> How you convert vitamins into active forms</li>
    <li><strong>Absorption efficiency:</strong> How well you uptake minerals</li>
    <li><strong>Cellular protection:</strong> How you handle oxidative stress</li>
    <li><strong>Inflammation response:</strong> How your immune system reacts</li>
  </ul>
  
  <div class="example-box">
    <h4>Example: The MTHFR Variant</h4>
    <p>If you have two copies of the C677T variant:</p>
    <ul>
      <li>Your body converts only 30% of folic acid to active folate</li>
      <li>You need methylfolate (the active form) instead</li>
      <li>70% of supplements give you the wrong form</li>
    </ul>
    <p class="emphasis">We test. We know. We give you methylfolate.</p>
  </div>
  
  <p>Genetics don't change.<br>
  We test once. Inform your formula forever.</p>
</div>
```

### Content - Right Side (Visual Markers)
```html
<div class="variant-markers">
  <h3 class="variant-markers__title">30 Genetic Markers We Test</h3>
  
  <div class="marker-grid">
    <div class="marker-item">
      <h4>MTHFR</h4>
      <p>Folate metabolism</p>
    </div>
    
    <div class="marker-item">
      <h4>VDR</h4>
      <p>Vitamin D receptor</p>
    </div>
    
    <div class="marker-item">
      <h4>COMT</h4>
      <p>Neurotransmitter breakdown</p>
    </div>
    
    <div class="marker-item">
      <h4>FUT2</h4>
      <p>B12 absorption</p>
    </div>
    
    <div class="marker-item">
      <h4>SOD2</h4>
      <p>Antioxidant defense</p>
    </div>
    
    <div class="marker-item">
      <h4>APOE</h4>
      <p>Fat metabolism</p>
    </div>
    
    <div class="marker-item">
      <h4>CYP1A2</h4>
      <p>Caffeine metabolism</p>
    </div>
    
    <div class="marker-item">
      <h4>BCMO1</h4>
      <p>Beta-carotene conversion</p>
    </div>
    
    <div class="marker-item marker-item--more">
      <h4>+22 more</h4>
      <p>Complete genetic profile</p>
    </div>
  </div>
</div>
```

---

## 🎯 SECTION 05: LAYER 2 - BIOMARKERS

### Component
Split Section (reversed) with data visualization

### Layout
```
╔════════════════════════════════════╦══════════════════════════════╗
║  LEFT (50%)                        ║  RIGHT (50%)                 ║
║  Background: #F8F6F0               ║  Background: #FFFFFF         ║
╠════════════════════════════════════╬══════════════════════════════╣
║                                    ║                              ║
║  [Visual: Biomarker Chart]         ║  LAYER 2: BIOMARKERS         ║
║                                    ║  [48px Serif]                ║
║  45 Blood Biomarkers:              ║                              ║
║                                    ║  Your blood reveals what's   ║
║  ENERGY MARKERS                    ║  happening right now.        ║
║  • Ferritin: 18 → 68 ng/mL        ║                              ║
║  • Vitamin B12                     ║  [Content...]                ║
║  • Vitamin D                       ║                              ║
║  • Magnesium                       ║                              ║
║                                    ║                              ║
║  INFLAMMATION                      ║                              ║
║  • hsCRP                           ║                              ║
║  • Homocysteine                    ║                              ║
║                                    ║                              ║
╚════════════════════════════════════╩══════════════════════════════╝
```

### Content - Right Side
```html
<div class="layer-detail__content">
  <h2 class="layer-detail__title">LAYER 2: BIOMARKERS</h2>
  
  <p>Your blood reveals what's happening right now.</p>
  
  <p>We test 45 biomarkers across five categories:</p>
  
  <div class="biomarker-category">
    <h4>Energy & Metabolism</h4>
    <ul>
      <li>Ferritin (iron storage)</li>
      <li>Vitamin B12, B6, Folate</li>
      <li>Vitamin D</li>
      <li>Magnesium</li>
      <li>Thyroid panel (TSH, T3, T4)</li>
    </ul>
  </div>
  
  <div class="biomarker-category">
    <h4>Inflammation & Immunity</h4>
    <ul>
      <li>hsCRP (high-sensitivity C-reactive protein)</li>
      <li>Homocysteine</li>
      <li>White blood cell count</li>
    </ul>
  </div>
  
  <div class="biomarker-category">
    <h4>Metabolic Health</h4>
    <ul>
      <li>Fasting glucose</li>
      <li>HbA1c (average blood sugar)</li>
      <li>Insulin</li>
      <li>Lipid panel (cholesterol, triglycerides)</li>
    </ul>
  </div>
  
  <div class="biomarker-category">
    <h4>Hormones</h4>
    <ul>
      <li>Cortisol (stress hormone)</li>
      <li>DHEA (vitality marker)</li>
      <li>Sex hormones (testosterone, estradiol)</li>
    </ul>
  </div>
  
  <div class="biomarker-category">
    <h4>Cellular Health</h4>
    <ul>
      <li>Omega-3 index</li>
      <li>CoQ10</li>
      <li>Glutathione (master antioxidant)</li>
    </ul>
  </div>
  
  <p class="emphasis">We retest every 3 months.<br>
  Track what's improving. Address what's emerging.</p>
</div>
```

### Content - Left Side (Data Visualization)
```html
<div class="biomarker-visual">
  <h3 class="biomarker-visual__title">Real Data from Real People</h3>
  
  <div class="biomarker-chart">
    <div class="chart-item">
      <div class="chart-item__label">Ferritin</div>
      <div class="chart-item__bar">
        <div class="chart-item__before" style="width: 30%;">18</div>
        <div class="chart-item__after" style="width: 90%;">68</div>
      </div>
      <div class="chart-item__unit">ng/mL</div>
    </div>
    
    <div class="chart-item">
      <div class="chart-item__label">Vitamin D</div>
      <div class="chart-item__bar">
        <div class="chart-item__before" style="width: 40%;">24</div>
        <div class="chart-item__after" style="width: 75%;">52</div>
      </div>
      <div class="chart-item__unit">ng/mL</div>
    </div>
    
    <div class="chart-item">
      <div class="chart-item__label">hsCRP</div>
      <div class="chart-item__bar chart-item__bar--reverse">
        <div class="chart-item__before" style="width: 80%;">4.2</div>
        <div class="chart-item__after" style="width: 25%;">0.8</div>
      </div>
      <div class="chart-item__unit">mg/L (lower is better)</div>
    </div>
  </div>
  
  <p class="biomarker-visual__caption">
    Average improvements after 6 months on Precision Path
  </p>
</div>
```

---

## 🎯 SECTION 06: LAYER 3 - YOU

### Component
Text Section (Centered)

### Content
```html
<section class="text-section text-section--dark">
  <div class="text-section__container" style="max-width: 700px;">
    <h2 class="text-section__headline">LAYER 3: YOU</h2>
    
    <p>Data is not enough.</p>
    
    <p>You might have perfect ferritin levels<br>
    but you're still exhausted at 2pm.</p>
    
    <p>Why?</p>
    
    <p>Maybe you're sleeping 5 hours a night.<br>
    Maybe you just started a high-stress job.<br>
    Maybe you're training for a marathon.</p>
    
    <p class="emphasis">Context changes everything.</p>
    
    <p>This is why every Lab1 member has access to our care team.</p>
    
    <p>Real humans who ask:<br>
    How are you sleeping?<br>
    What changed this month?<br>
    How do you actually feel?</p>
    
    <p>We combine:<br>
    Your genetics (the manual)<br>
    Your biomarkers (the dashboard)<br>
    Your life (the reality)</p>
    
    <p>And we formulate for all three.</p>
  </div>
</section>
```

### Styling
- Background: `#2A2A2A` (Charcoal - dark section)
- Text: `#FFFFFF` (White)
- Creates visual break and emphasis

---

## 🎯 SECTION 07: HOW WE FORMULATE

### Component
Process Timeline (Vertical)

### Content
```html
<section class="formulation-process">
  <h2 class="formulation-process__header">
    From data to formula
  </h2>
  
  <div class="process-timeline">
    <div class="process-step">
      <span class="process-step__number">01</span>
      <div class="process-step__content">
        <h3>Analyze Genetics</h3>
        <p>Identify which nutrients you can't convert efficiently.<br>
        Determine active forms needed (methylfolate vs folic acid).</p>
      </div>
    </div>
    
    <div class="process-step">
      <span class="process-step__number">02</span>
      <div class="process-step__content">
        <h3>Review Biomarkers</h3>
        <p>Map current deficiencies (ferritin, vitamin D, B12).<br>
        Identify inflammation markers requiring support.</p>
      </div>
    </div>
    
    <div class="process-step">
      <span class="process-step__number">03</span>
      <div class="process-step__content">
        <h3>Consider Context</h3>
        <p>Factor in sleep quality, stress levels, activity.<br>
        Adjust for life stage (pregnancy, menopause, training).</p>
      </div>
    </div>
    
    <div class="process-step">
      <span class="process-step__number">04</span>
      <div class="process-step__content">
        <h3>Optimize Dosing</h3>
        <p>Calculate therapeutic doses (not RDA minimums).<br>
        Ensure proper ratios (calcium:magnesium, zinc:copper).</p>
      </div>
    </div>
    
    <div class="process-step">
      <span class="process-step__number">05</span>
      <div class="process-step__content">
        <h3>Quality Control</h3>
        <p>Third-party testing for purity and potency.<br>
        Verified to match your specific formula.</p>
      </div>
    </div>
    
    <div class="process-step">
      <span class="process-step__number">06</span>
      <div class="process-step__content">
        <h3>Retest & Evolve</h3>
        <p>Every 3 months: What improved? What changed?<br>
        Formula adapts. You optimize.</p>
      </div>
    </div>
  </div>
</section>
```

---

## 🎯 SECTION 08: THE INGREDIENTS

### Component
Two-Column Grid

### Content
```html
<section class="ingredients-section">
  <h2 class="ingredients-section__header">
    Quality matters
  </h2>
  
  <div class="ingredients-grid">
    <div class="ingredient-principle">
      <h3>Active Forms Only</h3>
      <p>Methylfolate instead of folic acid.<br>
      Methylcobalamin instead of cyanocobalamin.<br>
      Your body doesn't have to convert them.</p>
    </div>
    
    <div class="ingredient-principle">
      <h3>Bioavailable Minerals</h3>
      <p>Magnesium glycinate (not oxide).<br>
      Zinc picolinate (not sulfate).<br>
      Forms your body actually absorbs.</p>
    </div>
    
    <div class="ingredient-principle">
      <h3>Therapeutic Doses</h3>
      <p>Not RDA minimums (designed to prevent deficiency).<br>
      Therapeutic levels (designed to optimize function).</p>
    </div>
    
    <div class="ingredient-principle">
      <h3>Third-Party Tested</h3>
      <p>Every batch tested for:<br>
      Heavy metals, microbes, potency, purity.<br>
      Certificates available on request.</p>
    </div>
    
    <div class="ingredient-principle">
      <h3>No Fillers</h3>
      <p>No magnesium stearate.<br>
      No titanium dioxide.<br>
      No unnecessary binders.</p>
    </div>
    
    <div class="ingredient-principle">
      <h3>Proper Ratios</h3>
      <p>Calcium:Magnesium at 2:1.<br>
      Zinc:Copper balanced.<br>
      Vitamin K2 with vitamin D.<br>
      Synergy matters.</p>
    </div>
  </div>
  
  <p class="ingredients-section__footer">
    If we wouldn't take it ourselves,<br>
    we won't put it in your formula.
  </p>
</section>
```

---

## 🎯 SECTION 09: WHAT WE DON'T DO

### Component
Text Section (Centered) - Important clarity

### Content
```html
<section class="text-section">
  <div class="text-section__container" style="max-width: 700px;">
    <h2 class="text-section__headline">
      What we don't do
    </h2>
    
    <p>Honesty requires stating limitations.</p>
    
    <div class="limitation-item">
      <h4>We don't diagnose disease</h4>
      <p>We're not doctors. We identify deficiencies and optimize.<br>
      If we see concerning biomarkers, we refer you to your physician.</p>
    </div>
    
    <div class="limitation-item">
      <h4>We don't replace medical treatment</h4>
      <p>Supplements support health. They don't cure illness.<br>
      Continue your medications. Work with your doctors.</p>
    </div>
    
    <div class="limitation-item">
      <h4>We don't promise miracles</h4>
      <p>You won't feel optimal in a week.<br>
      Cellular repair takes 9-12 months.<br>
      We're patient. Your body will be too.</p>
    </div>
    
    <div class="limitation-item">
      <h4>We don't sell your data</h4>
      <p>Your genetic information is yours.<br>
      We don't share it. We don't sell it.<br>
      We use it only to formulate for you.</p>
    </div>
    
    <p class="emphasis">We're here to optimize, not oversell.<br>
    Trust requires truth.</p>
  </div>
</section>
```

---

## 🎯 SECTION 10: FAQ (SCIENCE-SPECIFIC)

### Component
FAQ Accordion

### Content
```html
<section class="faq-section">
  <h2 class="faq-section__header">Common Questions</h2>
  
  <div class="faq-list">
    <div class="faq-item">
      <button class="faq-item__question">
        "Is genetic testing safe? What about privacy?"
      </button>
      <div class="faq-item__answer">
        <p>Your DNA data is encrypted and stored separately from your identity.</p>
        
        <p>We don't sell it. We don't share it with third parties.<br>
        We use it only to formulate your supplements.</p>
        
        <p>You can download your data anytime.<br>
        You can request deletion anytime.</p>
      </div>
    </div>
    
    <div class="faq-item">
      <button class="faq-item__question">
        "How accurate is the testing?"
      </button>
      <div class="faq-item__answer">
        <p>DNA testing: 99.9% accuracy (PCR-based, same tech as 23andMe)</p>
        
        <p>Blood testing: Clinical-grade labs (CLIA-certified)<br>
        Same labs your doctor uses.</p>
      </div>
    </div>
    
    <div class="faq-item">
      <button class="faq-item__question">
        "Why retest every 3 months?"
      </button>
      <div class="faq-item__answer">
        <p>Your genetics don't change. Your biomarkers do.</p>
        
        <p>Ferritin corrects in 8-12 weeks.<br>
        Inflammation drops in 6-10 weeks.<br>
        Vitamin D climbs in 4-8 weeks.</p>
        
        <p>Quarterly testing lets us see what's working<br>
        and adjust what isn't.</p>
      </div>
    </div>
    
    <div class="faq-item">
      <button class="faq-item__question">
        "What if my results are 'normal'?"
      </button>
      <div class="faq-item__answer">
        <p>"Normal" and "optimal" are different.</p>
        
        <p>Ferritin at 20 ng/mL is "normal."<br>
        Optimal is 50-100 ng/mL.</p>
        
        <p>We optimize for how you want to feel,<br>
        not just "within range."</p>
      </div>
    </div>
    
    <div class="faq-item">
      <button class="faq-item__question">
        "Can I see my raw data?"
      </button>
      <div class="faq-item__answer">
        <p>Yes. Always.</p>
        
        <p>You get:<br>
        - Full genetic report (PDF)<br>
        - All biomarker results<br>
        - Historical trends over time<br>
        - Plain-English explanations</p>
        
        <p>Your data is yours. We're just the translators.</p>
      </div>
    </div>
    
    <div class="faq-item">
      <button class="faq-item__question">
        "What makes Lab1 different from 23andMe + supplements?"
      </button>
      <div class="faq-item__answer">
        <p>23andMe shows you have variants.<br>
        Lab1 formulates based on them.</p>
        
        <p>Plus, we test blood biomarkers quarterly.<br>
        Genetics are static. Your biology isn't.</p>
        
        <p>We combine both to create evolving formulas.</p>
      </div>
    </div>
    
    <div class="faq-item">
      <button class="faq-item__question">
        "Is this FDA approved?"
      </button>
      <div class="faq-item__answer">
        <p>Supplements don't require FDA approval.<br>
        (Neither does your multivitamin.)</p>
        
        <p>Our testing labs are CLIA-certified.<br>
        Our manufacturing is GMP-compliant.<br>
        Our ingredients are third-party tested.</p>
        
        <p>We follow the same standards as pharmaceutical manufacturing.</p>
      </div>
    </div>
  </div>
</section>
```

---

## 🎯 SECTION 11: FOOTER

Use standard footer component from homepage.

---

## 🎨 COLOR TREATMENT

**Section Backgrounds:**
- Hero: `#F8F6F0` (Cream)
- The Problem: `#FFFFFF` (White)
- Three Layers: `#F8F6F0` (Cream)
- Layer 1 (DNA): `#FFFFFF` + `#F8F6F0` (split)
- Layer 2 (Biomarkers): `#F8F6F0` + `#FFFFFF` (split, reversed)
- Layer 3 (You): `#2A2A2A` (Charcoal - dark emphasis!)
- Formulation Process: `#FFFFFF` (White)
- Ingredients: `#F8F6F0` (Cream)
- What We Don't Do: `#FFFFFF` (White)
- FAQ: `#F8F6F0` (Cream)
- Footer: `#333611` (Olive)

**Rhythm:** Cream → White → Cream → White/Cream → Cream/White → DARK → White → Cream → White → Cream → Dark

---

## 📱 MOBILE ADAPTATIONS

**Layer Deep Dives:**
- Stack vertically (not side-by-side)
- Content first, then visual markers

**Three Layers Grid:**
- Stack cards vertically

**Biomarker Charts:**
- Simplify to 2-3 key markers
- Larger touch targets

**Ingredients Grid:**
- Single column
- Keep all 6 principles

---

## ✅ BUILD CHECKLIST

- [ ] Hero (80vh, scientific statement)
- [ ] The Problem (stat callouts, emphasis on variants)
- [ ] Three Layers intro (grid of 3 cards)
- [ ] Layer 1: DNA (split section, variant markers)
- [ ] Layer 2: Biomarkers (split section reversed, data viz)
- [ ] Layer 3: You (dark section, human element)
- [ ] Formulation Process (vertical timeline, 6 steps)
- [ ] Ingredients (2-column grid, 6 principles)
- [ ] What We Don't Do (honesty section)
- [ ] FAQ (science-specific questions)
- [ ] Footer (standard)
- [ ] Mobile: all sections stack properly

---

## 🎯 SUCCESS METRICS

**User understands:**
- ✅ Why personalization matters (genetics + biomarkers)
- ✅ What we test (30 genes, 45 biomarkers)
- ✅ How we formulate (3 layers of data)
- ✅ Why quality matters (active forms, therapeutic doses)

**User feels:**
- ✅ Informed (not overwhelmed)
- ✅ Confident (credible science)
- ✅ Respected (honest about limitations)
- ✅ Curious (wants to see their own data)

**Conversion Goal:**
- 40% navigate to "How It Works" after reading
- 30% start Essential or Precision Path
- 30% save page to review later

---

*Document Version: 1.0*
*Subpage: Science*
*URL: /science*
*Build Time Estimate: 20-25 hours*
