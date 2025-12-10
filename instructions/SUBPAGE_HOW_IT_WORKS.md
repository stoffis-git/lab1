# SUBPAGE: HOW IT WORKS
## Lab1 Website - Process & Paths Explanation

**Page Purpose:** Transform "paths" into a narrative journey. Explain the two approaches (Essential vs Precision) and the evolving partnership model without sales pressure.

**Emotional Goal:** Understanding → Trust → Choice readiness

**Page URL:** `/how-it-works`

**Navigation Label:** How It Works

---

## 📐 PAGE STRUCTURE

```
01. Hero - "Two ways forward. One destination: You, optimized."
02. The Choice - Why two paths exist
03. Essential Path Deep Dive
04. Precision Path Deep Dive  
05. Path Comparison Table
06. The Evolution Timeline (shared for both paths)
07. What Changes, What Doesn't
08. Transition Between Paths
09. FAQ (Path-specific)
10. Footer
```

**Estimated Scroll Depth:** 6,000-7,000px
**Average Time on Page:** 4-6 minutes
**Key Conversion Points:** 2 (after Essential section, after Precision section)

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
║  02                                  HOW IT WORKS              ║
║  [160px mono]                        [14px sans, top-right]   ║
║                                                                ║
║  [40px gap]                                                    ║
║                                                                ║
║  Two ways forward.                                             ║
║  One destination.                                              ║
║  [96px Serif, olive, LEFT-aligned, max-width 600px]           ║
║                                                                ║
║  [32px gap]                                                    ║
║                                                                ║
║  │  Your body has been speaking.                              ║
║  │  We help you listen, then respond.                         ║
║  │  How you choose to respond is yours to decide.             ║
║  [20px Sans, olive 70%, LEFT-aligned, 4px vertical rule]      ║
║                                                                ║
║  [80px vertical space]                                         ║
║                                                                ║
╚════════════════════════════════════════════════════════════════╝

Background: #F8F6F0 (Soft Cream) - solid, no images
Height: 60vh (significantly shorter than homepage's 100vh)
Text: LEFT-aligned (different from homepage's centered)
Page Number: Large "02" (editorial chapter marker)
```

### Content
```html
<!-- Breadcrumb navigation (subpages only) -->
<nav class="breadcrumb">
  <a href="/">Home</a> / <span>How It Works</span>
</nav>

<section class="subpage-hero">
  <div class="subpage-hero__container">
    <!-- Page number (left) and label (right) -->
    <div class="subpage-hero__header">
      <span class="subpage-hero__number">02</span>
      <span class="subpage-hero__label">How It Works</span>
    </div>
    
    <!-- Headline (left-aligned, half-width) -->
    <h1 class="subpage-hero__headline">
      Two ways forward.<br>
      One destination.
    </h1>
    
    <!-- Body text with vertical rule -->
    <div class="subpage-hero__body">
      <p>
        Your body has been speaking.<br>
        We help you listen, then respond.<br>
        How you choose to respond is yours to decide.
      </p>
    </div>
  </div>
</section>
```

### CSS Specifications
```css
/* Breadcrumb (subpages only) */
.breadcrumb {
  position: absolute;
  top: 120px; /* Below fixed nav */
  left: 60px;
  font-family: var(--font-sans);
  font-size: 14px;
  color: rgba(51, 54, 17, 0.6);
  z-index: 100;
}

.breadcrumb a {
  color: rgba(51, 54, 17, 0.6);
  text-decoration: none;
  transition: color 200ms ease;
}

.breadcrumb a:hover {
  color: var(--color-olive);
}

/* Subpage Hero */
.subpage-hero {
  min-height: 60vh;
  display: flex;
  align-items: center;
  background: var(--color-cream);
  padding: 120px 60px 80px; /* Extra top padding for breadcrumb */
}

.subpage-hero__container {
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
}

.subpage-hero__header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 40px;
}

.subpage-hero__number {
  font-family: var(--font-mono);
  font-size: 160px;
  font-weight: 400;
  line-height: 1;
  color: rgba(51, 54, 17, 0.15);
  letter-spacing: -0.02em;
}

.subpage-hero__label {
  font-family: var(--font-sans);
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-olive);
  padding-top: 20px;
}

.subpage-hero__headline {
  font-family: var(--font-serif);
  font-size: 96px;
  font-weight: 400;
  line-height: 1.1;
  letter-spacing: -0.01em;
  color: var(--color-olive);
  max-width: 600px;
  margin-bottom: 32px;
}

.subpage-hero__body {
  max-width: 500px;
  padding-left: 16px;
  border-left: 4px solid var(--color-olive);
  font-family: var(--font-sans);
  font-size: 20px;
  line-height: 1.7;
  color: rgba(51, 54, 17, 0.7);
}

/* Tablet */
@media (max-width: 1023px) {
  .subpage-hero {
    padding: 100px 40px 60px;
  }
  
  .subpage-hero__number {
    font-size: 120px;
  }
  
  .subpage-hero__headline {
    font-size: 72px;
  }
}

/* Mobile */
@media (max-width: 767px) {
  .breadcrumb {
    left: 24px;
    top: 100px;
  }
  
  .subpage-hero {
    min-height: auto;
    padding: 80px 24px 60px;
  }
  
  .subpage-hero__number {
    font-size: 80px;
  }
  
  .subpage-hero__headline {
    font-size: 48px;
    max-width: 100%;
  }
  
  .subpage-hero__body {
    font-size: 18px;
    max-width: 100%;
  }
}
```

---

## 🎯 SECTION 02: THE CHOICE

### Component
Text Section (Centered Column)

### Content
```html
<section class="text-section">
  <div class="text-section__container" style="max-width: 700px;">
    <h2 class="text-section__headline">
      Why two paths?
    </h2>
    
    <p>Not everyone starts from the same place.<br>
    Not everyone needs the same depth of information.</p>
    
    <p>Some people are ready to know everything—<br>
    their genetic variants, their real-time biomarkers,<br>
    the precise formulation their cells are asking for.</p>
    
    <p>Others want to begin today, without testing,<br>
    without waiting, without complexity.</p>
    
    <p class="emphasis">Both approaches are valid.<br>
    Both are respectful of where you are.<br>
    Both are designed to make you feel better.</p>
    
    <p>The Essential Path trusts patterns.<br>
    The Precision Path measures certainty.</p>
    
    <p>You choose.<br>
    And you can always change your mind.</p>
  </div>
</section>
```

### Styling Notes
- Background: `#FFFFFF` (Pure White - contrast from hero)
- Padding: `200px 60px` (desktop), `80px 24px` (mobile)
- Emphasis paragraph: Medium weight, slightly larger (20px)
- Line spacing: 1.7 for readability

---

## 🎯 SECTION 03: ESSENTIAL PATH DEEP DIVE

### Component
Split Section (40% text / 60% visual breakdown)

### Layout
```
╔══════════════════════════════╦════════════════════════════════════╗
║  LEFT (40%)                  ║  RIGHT (60%)                       ║
║  Background: #F8F6F0         ║  Background: #FFFFFF               ║
╠══════════════════════════════╬════════════════════════════════════╣
║                              ║                                    ║
║  THE ESSENTIAL PATH          ║  WHAT YOU GET                      ║
║  [48px Serif]                ║  [24px Sans, Uppercase]            ║
║                              ║                                    ║
║  For those who want          ║  ┌─────────────────────────────┐ ║
║  to begin today.             ║  │ Premium Formulas            │ ║
║                              ║  │ Age & stage optimized       │ ║
║  [Content...]                ║  └─────────────────────────────┘ ║
║                              ║                                    ║
║                              ║  ┌─────────────────────────────┐ ║
║                              ║  │ Immediate Start             │ ║
║                              ║  │ Ships within 48 hours       │ ║
║                              ║  └─────────────────────────────┘ ║
║                              ║                                    ║
║                              ║  ┌─────────────────────────────┐ ║
║                              ║  │ No Testing Required         │ ║
║                              ║  │ Skip the wait, start now    │ ║
║                              ║  └─────────────────────────────┘ ║
║                              ║                                    ║
║                              ║  ┌─────────────────────────────┐ ║
║                              ║  │ 70-75% Optimization         │ ║
║                              ║  │ Based on age, gender, goals │ ║
║                              ║  └─────────────────────────────┘ ║
║                              ║                                    ║
╚══════════════════════════════╩════════════════════════════════════╝
```

### Content - Left Side
```html
<div class="path-section__content">
  <h2 class="path-section__title">THE ESSENTIAL PATH</h2>
  
  <p class="path-section__subtitle">
    For those who want to begin today.
  </p>
  
  <p>No DNA testing. No blood work. No waiting weeks for results.</p>
  
  <p>You tell us:</p>
  <ul class="simple-list">
    <li>Your age</li>
    <li>Your gender</li>
    <li>Your goals (energy, clarity, sleep, immunity)</li>
    <li>Your current symptoms</li>
  </ul>
  
  <p>We formulate based on what works for most people like you.</p>
  
  <p class="callout">These aren't generic multivitamins.<br>
  These are targeted formulas informed by thousands of biomarker patterns.</p>
  
  <p>You'll receive a custom blend addressing your most common deficiencies:</p>
  <ul class="simple-list">
    <li>Women 25-40: Often iron, B12, magnesium</li>
    <li>Men 30-45: Often vitamin D, zinc, omega-3</li>
    <li>Post-menopause: Often calcium, vitamin K2, collagen support</li>
  </ul>
  
  <p><strong>You'll feel better.</strong><br>
  70-75% of the way to optimal.</p>
  
  <p>And when you're curious about the remaining 25%?<br>
  Precision will be waiting.</p>
  
  <a href="#essential-cta" class="btn btn--secondary">Begin Essential →</a>
</div>
```

### Content - Right Side (Feature Cards)
```html
<div class="feature-cards">
  <div class="feature-card">
    <h3 class="feature-card__title">Premium Formulas</h3>
    <p class="feature-card__description">
      Age & stage optimized based on biomarker patterns from thousands of tests
    </p>
  </div>
  
  <div class="feature-card">
    <h3 class="feature-card__title">Immediate Start</h3>
    <p class="feature-card__description">
      Ships within 48 hours. No waiting for test results.
    </p>
  </div>
  
  <div class="feature-card">
    <h3 class="feature-card__title">No Testing Required</h3>
    <p class="feature-card__description">
      Skip the complexity. Trust the patterns. Begin today.
    </p>
  </div>
  
  <div class="feature-card">
    <h3 class="feature-card__title">70-75% Optimization</h3>
    <p class="feature-card__description">
      Based on age, gender, lifestyle, and common deficiency patterns
    </p>
  </div>
  
  <div class="feature-card">
    <h3 class="feature-card__title">Flexible Subscription</h3>
    <p class="feature-card__description">
      Pause, skip, or cancel anytime. No contracts.
    </p>
  </div>
  
  <div class="feature-card">
    <h3 class="feature-card__title">Upgrade When Ready</h3>
    <p class="feature-card__description">
      Transition to Precision Path whenever you're curious about the data
    </p>
  </div>
</div>
```

### Styling - Feature Cards
```css
.feature-card {
  padding: 32px;
  background: var(--color-white);
  border: 1px solid rgba(51, 54, 17, 0.15);
  margin-bottom: 16px;
  transition: all 300ms ease-out;
}

.feature-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 16px rgba(51, 54, 17, 0.08);
}

.feature-card__title {
  font-family: var(--font-sans);
  font-size: 18px;
  font-weight: 600;
  color: var(--color-olive);
  margin-bottom: 8px;
}

.feature-card__description {
  font-family: var(--font-sans);
  font-size: 16px;
  line-height: 1.6;
  color: rgba(51, 54, 17, 0.7);
}
```

---

## 🎯 SECTION 04: PRECISION PATH DEEP DIVE

### Component
Split Section (60% visual breakdown / 40% text) - REVERSED layout

### Layout
```
╔════════════════════════════════════╦══════════════════════════════╗
║  LEFT (60%)                        ║  RIGHT (40%)                 ║
║  Background: #FFFFFF               ║  Background: #333611         ║
║                                    ║  Text: #FFFFFF               ║
╠════════════════════════════════════╬══════════════════════════════╣
║                                    ║                              ║
║  THE PRECISION TIMELINE            ║  THE PRECISION PATH          ║
║  [24px Sans, Uppercase]            ║  [48px Serif, White]         ║
║                                    ║                              ║
║  ┌──────────────────────────────┐ ║  For those who want to know. ║
║  │ MONTH 0: DISCOVER            │ ║                              ║
║  │ DNA + Blood Testing          │ ║  [Content...]                ║
║  │ 30 genetic markers           │ ║                              ║
║  │ 45 blood biomarkers          │ ║                              ║
║  └──────────────────────────────┘ ║                              ║
║                                    ║                              ║
║  ┌──────────────────────────────┐ ║                              ║
║  │ MONTH 0-1: FORMULATE         │ ║                              ║
║  │ Custom formula ships         │ ║                              ║
║  │ Targets YOUR deficiencies    │ ║                              ║
║  └──────────────────────────────┘ ║                              ║
║                                    ║                              ║
║  ┌──────────────────────────────┐ ║                              ║
║  │ MONTH 3: RETEST              │ ║                              ║
║  │ Blood work only              │ ║                              ║
║  │ See what changed             │ ║                              ║
║  └──────────────────────────────┘ ║                              ║
║                                    ║                              ║
║  ┌──────────────────────────────┐ ║                              ║
║  │ MONTH 3+: EVOLVE             │ ║                              ║
║  │ Formula adjusts to your body │ ║                              ║
║  │ Quarterly optimization       │ ║                              ║
║  └──────────────────────────────┘ ║                              ║
║                                    ║                              ║
╚════════════════════════════════════╩══════════════════════════════╝
```

### Content - Right Side (Dark)
```html
<div class="path-section__content path-section__content--dark">
  <h2 class="path-section__title">THE PRECISION PATH</h2>
  
  <p class="path-section__subtitle">
    For those who want to know.
  </p>
  
  <p>This is measurement, not guesswork.</p>
  
  <p>Your DNA is read once.<br>
  30 markers that determine how your body processes nutrients.</p>
  
  <p>Your blood is tested quarterly.<br>
  45 biomarkers that show what's happening right now.</p>
  
  <p class="callout">Together, they create a map of your biology.<br>
  Not who you should be. Who you actually are.</p>
  
  <p>We formulate for YOUR genetics:<br>
  The MTHFR variant that changes folate processing.<br>
  The VDR variant that affects vitamin D absorption.<br>
  The COMT variant that influences stress response.</p>
  
  <p>We track YOUR biomarkers:<br>
  Ferritin climbing from 18 to 68 ng/mL.<br>
  Inflammation markers dropping.<br>
  Energy returning, cell by cell.</p>
  
  <p><strong>You'll feel optimal.</strong><br>
  85%+ of what your biology is capable of.</p>
  
  <p>Every 3 months, we retest.<br>
  What improved? What emerged?<br>
  Your formula rotates to meet you where you are.</p>
  
  <p class="emphasis">This is not a product.<br>
  This is a partnership.</p>
  
  <a href="#precision-cta" class="btn btn--primary-inverted">Discover Your Biology →</a>
</div>
```

### Content - Left Side (Timeline Cards)
```html
<div class="timeline-cards">
  <div class="timeline-card">
    <span class="timeline-card__phase">MONTH 0: DISCOVER</span>
    <h3 class="timeline-card__title">DNA + Blood Testing</h3>
    <ul>
      <li>30 genetic markers (saliva test, at-home)</li>
      <li>45 blood biomarkers (lab draw or at-home)</li>
      <li>Results in 2-3 weeks</li>
    </ul>
  </div>
  
  <div class="timeline-card">
    <span class="timeline-card__phase">MONTH 0-1: FORMULATE</span>
    <h3 class="timeline-card__title">Your Custom Formula Ships</h3>
    <ul>
      <li>Targets YOUR specific deficiencies</li>
      <li>Respects YOUR genetic variants</li>
      <li>Addresses YOUR current state</li>
    </ul>
  </div>
  
  <div class="timeline-card">
    <span class="timeline-card__phase">MONTH 3: RETEST</span>
    <h3 class="timeline-card__title">Blood Work Retesting</h3>
    <ul>
      <li>No DNA needed (already have it)</li>
      <li>See what improved</li>
      <li>Track your trajectory</li>
    </ul>
  </div>
  
  <div class="timeline-card">
    <span class="timeline-card__phase">MONTH 3+: EVOLVE</span>
    <h3 class="timeline-card__title">Formula Adapts to You</h3>
    <ul>
      <li>Iron corrected? We reduce it</li>
      <li>Inflammation emerging? We address it</li>
      <li>Quarterly optimization forever</li>
    </ul>
  </div>
  
  <div class="timeline-card">
    <span class="timeline-card__phase">ONGOING: MAINTAIN</span>
    <h3 class="timeline-card__title">Lifelong Partnership</h3>
    <ul>
      <li>Annual retesting recommended</li>
      <li>Life changes (pregnancy, stress, illness)</li>
      <li>We adjust. You thrive.</li>
    </ul>
  </div>
</div>
```

---

## 🎯 SECTION 05: PATH COMPARISON TABLE

### Component
Custom comparison table (clean, minimal)

### Content
```html
<section class="comparison-section">
  <h2 class="comparison-section__header">Side by Side</h2>
  
  <div class="comparison-table">
    <div class="comparison-table__header">
      <div class="comparison-table__cell"></div>
      <div class="comparison-table__cell comparison-table__cell--essential">
        Essential Path
      </div>
      <div class="comparison-table__cell comparison-table__cell--precision">
        Precision Path
      </div>
    </div>
    
    <div class="comparison-table__row">
      <div class="comparison-table__cell comparison-table__label">Testing Required</div>
      <div class="comparison-table__cell">None</div>
      <div class="comparison-table__cell">DNA + Blood</div>
    </div>
    
    <div class="comparison-table__row">
      <div class="comparison-table__cell comparison-table__label">Time to Start</div>
      <div class="comparison-table__cell">48 hours</div>
      <div class="comparison-table__cell">2-3 weeks</div>
    </div>
    
    <div class="comparison-table__row">
      <div class="comparison-table__cell comparison-table__label">Formula Basis</div>
      <div class="comparison-table__cell">Age, gender, patterns</div>
      <div class="comparison-table__cell">YOUR genetics & biomarkers</div>
    </div>
    
    <div class="comparison-table__row">
      <div class="comparison-table__cell comparison-table__label">Optimization Level</div>
      <div class="comparison-table__cell">70-75%</div>
      <div class="comparison-table__cell">85%+</div>
    </div>
    
    <div class="comparison-table__row">
      <div class="comparison-table__cell comparison-table__label">Formula Evolution</div>
      <div class="comparison-table__cell">Stable (unless you request change)</div>
      <div class="comparison-table__cell">Quarterly adjustments</div>
    </div>
    
    <div class="comparison-table__row">
      <div class="comparison-table__cell comparison-table__label">Retesting</div>
      <div class="comparison-table__cell">Optional (upgrade to Precision)</div>
      <div class="comparison-table__cell">Every 3 months (included)</div>
    </div>
    
    <div class="comparison-table__row">
      <div class="comparison-table__cell comparison-table__label">Price</div>
      <div class="comparison-table__cell">$89/month</div>
      <div class="comparison-table__cell">$199/month (testing included)</div>
    </div>
    
    <div class="comparison-table__row">
      <div class="comparison-table__cell comparison-table__label">Best For</div>
      <div class="comparison-table__cell">Begin today, trust patterns</div>
      <div class="comparison-table__cell">Know your data, track changes</div>
    </div>
  </div>
  
  <p class="comparison-section__note">
    Both paths include premium ingredients, flexible subscriptions, and access to our care team.<br>
    Switch between paths anytime.
  </p>
</section>
```

### Styling - Comparison Table
```css
.comparison-table {
  max-width: 900px;
  margin: 0 auto;
  border: 1px solid rgba(51, 54, 17, 0.15);
}

.comparison-table__header {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  background: var(--color-olive);
  color: var(--color-white);
  padding: 24px;
}

.comparison-table__row {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  border-top: 1px solid rgba(51, 54, 17, 0.1);
  padding: 20px 24px;
}

.comparison-table__row:nth-child(even) {
  background: rgba(248, 246, 240, 0.5);
}

.comparison-table__label {
  font-weight: 600;
  color: var(--color-olive);
}

.comparison-table__cell {
  font-family: var(--font-sans);
  font-size: 16px;
  line-height: 1.5;
}
```

---

## 🎯 SECTION 06: WHAT CHANGES, WHAT DOESN'T

### Component
Two-Column Grid

### Content
```html
<section class="principles-section">
  <h2 class="principles-section__header">
    What changes. What doesn't.
  </h2>
  
  <div class="principles-grid">
    <div class="principles-column">
      <h3 class="principles-column__title">What Evolves</h3>
      
      <div class="principle-item">
        <h4>Your Formula</h4>
        <p>Precision Path: Adjusts every 3 months based on retesting.<br>
        Essential Path: Stable unless you request changes.</p>
      </div>
      
      <div class="principle-item">
        <h4>Your Biomarkers</h4>
        <p>Iron corrects. Inflammation drops. Energy returns.<br>
        We track it. You feel it.</p>
      </div>
      
      <div class="principle-item">
        <h4>Your Needs</h4>
        <p>Pregnancy. Stress. Illness. Life changes.<br>
        Your formula changes with you.</p>
      </div>
    </div>
    
    <div class="principles-column">
      <h3 class="principles-column__title">What Stays Constant</h3>
      
      <div class="principle-item">
        <h4>Our Commitment</h4>
        <p>We measure, we adjust, we care.<br>
        This partnership doesn't waver.</p>
      </div>
      
      <div class="principle-item">
        <h4>Your Choice</h4>
        <p>Pause, skip, cancel, switch paths.<br>
        You're never locked in.</p>
      </div>
      
      <div class="principle-item">
        <h4>The Quality</h4>
        <p>Premium ingredients. Third-party testing.<br>
        No fillers. No compromises.</p>
      </div>
    </div>
  </div>
</section>
```

---

## 🎯 SECTION 07: TRANSITION BETWEEN PATHS

### Component
Text Section with process flow

### Content
```html
<section class="text-section">
  <div class="text-section__container" style="max-width: 700px;">
    <h2 class="text-section__headline">
      Changing your mind is allowed
    </h2>
    
    <p>Start with Essential. Upgrade to Precision.<br>
    Or start with Precision. Scale back to Essential.</p>
    
    <p>Both directions are valid.</p>
    
    <div class="transition-flow">
      <div class="transition-step">
        <h4>Essential → Precision</h4>
        <p>We send DNA + blood tests.<br>
        2-3 weeks later, you're on Precision.<br>
        Your Essential subscription credits apply.</p>
      </div>
      
      <div class="transition-step">
        <h4>Precision → Essential</h4>
        <p>Keep your genetic data (it's yours).<br>
        Stop quarterly testing.<br>
        Switch to age/stage formula.</p>
      </div>
    </div>
    
    <p class="emphasis">No penalties. No judgment.<br>
    You know what you need better than we do.</p>
  </div>
</section>
```

---

## 🎯 SECTION 08: FAQ (PATH-SPECIFIC)

### Component
FAQ Accordion (same as homepage)

### Content
```html
<section class="faq-section">
  <h2 class="faq-section__header">Common Questions</h2>
  
  <div class="faq-list">
    <div class="faq-item">
      <button class="faq-item__question">
        "How do I know which path is right for me?"
      </button>
      <div class="faq-item__answer">
        <p>Ask yourself: Am I ready to wait 2-3 weeks for testing?<br>
        Do I want to track my biomarkers quarterly?</p>
        
        <p>If yes → Precision gives you certainty.<br>
        If no → Essential gives you momentum.</p>
        
        <p>Both paths make you feel better.<br>
        Precision just shows you why.</p>
      </div>
    </div>
    
    <div class="faq-item">
      <button class="faq-item__question">
        "Can I switch between paths?"
      </button>
      <div class="faq-item__answer">
        <p>Anytime. Both directions.</p>
        
        <p>Email us. We'll handle the transition.<br>
        No penalties. No hassle.</p>
      </div>
    </div>
    
    <div class="faq-item">
      <button class="faq-item__question">
        "What if Essential Path works great for me?"
      </button>
      <div class="faq-item__answer">
        <p>Then stay.</p>
        
        <p>70-75% optimization is not settling.<br>
        If you feel good, you feel good.</p>
        
        <p>Precision is for curiosity, not necessity.</p>
      </div>
    </div>
    
    <div class="faq-item">
      <button class="faq-item__question">
        "Is the testing invasive?"
      </button>
      <div class="faq-item__answer">
        <p>DNA: Saliva sample at home.<br>
        Blood: Lab draw or at-home finger prick.</p>
        
        <p>Most people choose at-home for convenience.<br>
        Takes 10 minutes. Ships back in prepaid box.</p>
      </div>
    </div>
    
    <div class="faq-item">
      <button class="faq-item__question">
        "What happens to my data?"
      </button>
      <div class="faq-item__answer">
        <p>It's yours. Forever.</p>
        
        <p>We don't sell it. We don't share it.<br>
        We use it only to formulate for you.</p>
        
        <p>Download it anytime. Delete it anytime.</p>
      </div>
    </div>
    
    <div class="faq-item">
      <button class="faq-item__question">
        "How long until I feel different on Essential Path?"
      </button>
      <div class="faq-item__answer">
        <p>Most people notice shifts in 4-6 weeks.<br>
        Energy stabilizes. Brain fog lifts.</p>
        
        <p>Without testing, you won't see the numbers change.<br>
        But you'll feel it.</p>
      </div>
    </div>
    
    <div class="faq-item">
      <button class="faq-item__question">
        "How often do I retest on Precision Path?"
      </button>
      <div class="faq-item__answer">
        <p>Blood: Every 3 months (included in subscription).<br>
        DNA: Once (genetic markers don't change).</p>
        
        <p>Quarterly retesting lets us see:<br>
        What improved? What emerged? How to adjust.</p>
      </div>
    </div>
  </div>
</section>
```

---

## 🎯 SECTION 09: FOOTER

Use standard footer component from homepage.

---

## 🎨 COLOR TREATMENT

**Section Backgrounds:**
- Hero: `#F8F6F0` (Cream)
- The Choice: `#FFFFFF` (White)
- Essential Deep Dive: `#F8F6F0` (Cream) + `#FFFFFF` (White)
- Precision Deep Dive: `#FFFFFF` (White) + `#333611` (Olive - dark section!)
- Comparison Table: `#FFFFFF` (White)
- What Changes: `#F8F6F0` (Cream)
- Transition: `#FFFFFF` (White)
- FAQ: `#F8F6F0` (Cream)
- Footer: `#333611` (Olive)

**Rhythm:** Cream → White → Cream/White → White/Dark → White → Cream → White → Cream → Dark

---

## 📱 MOBILE ADAPTATIONS

**Essential/Precision Deep Dive:**
- Stack vertically (not side-by-side)
- Feature cards remain full-width
- Essential section appears first, then Precision

**Comparison Table:**
- Reduce to 2 columns (rotate labels vertical or stack)
- Or convert to accordion format

**What Changes Section:**
- Stack "What Evolves" on top, "What Stays Constant" below

---

## ✅ BUILD CHECKLIST

- [ ] Hero section (80vh, centered text, simple)
- [ ] The Choice section (centered column, emphasis on choice)
- [ ] Essential Path deep dive (40/60 split, feature cards)
- [ ] Precision Path deep dive (60/40 split, dark background, timeline)
- [ ] Comparison table (grid, clean, scannable)
- [ ] What Changes section (two columns)
- [ ] Transition section (both directions valid)
- [ ] FAQ accordion (path-specific questions)
- [ ] Footer (standard)
- [ ] Mobile: all sections stack vertically
- [ ] CTAs after each path explanation

---

## 🎯 SUCCESS METRICS

**User understands:**
- ✅ Two paths exist for valid reasons
- ✅ Both paths are designed to help
- ✅ Choice is theirs, no pressure
- ✅ Switching is allowed

**User feels:**
- ✅ Respected (both paths are valid)
- ✅ Informed (clear differences explained)
- ✅ Empowered (can choose based on readiness)
- ✅ Safe (can change mind anytime)

**Conversion Goal:**
- 60% choose a path after reading
- 20% bookmark to decide later
- 20% navigate to Science or About for more info

---

*Document Version: 1.0*
*Subpage: How It Works*
*URL: /how-it-works*
*Build Time Estimate: 20-25 hours*
