# 05. COMPONENT LIBRARY
## Reusable UI Components for Lab1 Website

**Purpose:** This document provides complete specifications for every reusable component extracted from the OURA reference design and adapted for Lab1. Each component includes HTML structure, CSS styling, responsive behavior, and usage guidelines.

**Component Philosophy:** Components are building blocks. They should be flexible, reusable, and maintain visual consistency while adapting to different contexts.

---

## 📦 COMPONENT INDEX

### Core Components (from OURA)
1. Hero Split Section
2. Stat Card
3. Stat Grid
4. Service Card
5. Service Masonry Grid
6. Process Timeline Step
7. Process Timeline (Vertical)
8. Portfolio Item
9. Portfolio Grid
10. Three-Column Grid
11. Split Section (Image + Text)
12. Text Section (Centered Column)
13. Navigation (Fixed Header)
14. Footer (Multi-Column)
15. Button (Multiple Variants)
16. Card (Generic Container)

### Lab1-Specific Components
17. Biomarker Progress Bar
18. Two-Path Comparison
19. Testimonial Card
20. FAQ Accordion Item

---

## 🎯 COMPONENT 01: HERO SPLIT SECTION

### Description
Full-viewport split-screen hero with overlaid text. Creates immediate visual impact on page load.

### HTML Structure
```html
<section class="hero-split">
  <div class="hero-split__images">
    <div class="hero-split__image hero-split__image--left">
      <img src="/hero-left.jpg" alt="Description" />
    </div>
    <div class="hero-split__image hero-split__image--right">
      <img src="/hero-right.jpg" alt="Description" />
    </div>
    <div class="hero-split__divider"></div>
  </div>
  
  <div class="hero-split__content">
    <h1 class="hero-split__headline">
      <span class="hero-split__headline-line">WE DESIGN</span>
      <span class="hero-split__headline-line">THE BIOLOGY</span>
      <span class="hero-split__headline-line">OF YOU.</span>
    </h1>
    <p class="hero-split__subtext">
      What if fatigue isn't normal?<br>
      What if you've been living on borrowed energy?
    </p>
    <a href="#start" class="hero-split__cta">
      Listen to your body →
    </a>
  </div>
  
  <div class="hero-split__scroll-indicator">
    Scroll to understand ↓
  </div>
</section>
```

### CSS Styling
```css
/* ========================================
   HERO SPLIT SECTION
   ======================================== */

.hero-split {
  position: relative;
  width: 100%;
  height: 100vh;
  background: var(--color-cream);
  overflow: hidden;
}

/* Images Container */
.hero-split__images {
  position: absolute;
  inset: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.hero-split__image {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.hero-split__image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

/* Diagonal Divider */
.hero-split__divider {
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 2px;
  background: rgba(51, 54, 17, 0.1);
  transform: translateX(-50%) rotate(5deg);
  transform-origin: center;
}

/* Content Overlay */
.hero-split__content {
  position: absolute;
  left: 10%;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  max-width: 800px;
}

.hero-split__headline {
  font-family: var(--font-serif);
  font-size: var(--text-hero);
  font-weight: var(--weight-light);
  line-height: var(--leading-tight);
  letter-spacing: var(--tracking-tight);
  color: var(--color-olive);
  margin-bottom: 40px;
}

.hero-split__headline-line {
  display: block;
  opacity: 0;
  transform: translateY(40px);
  animation: fadeInUp 600ms ease-out forwards;
}

.hero-split__headline-line:nth-child(1) {
  animation-delay: 500ms;
}

.hero-split__headline-line:nth-child(2) {
  animation-delay: 650ms;
}

.hero-split__headline-line:nth-child(3) {
  animation-delay: 800ms;
}

.hero-split__subtext {
  font-family: var(--font-sans);
  font-size: var(--text-body-large);
  line-height: var(--leading-relaxed);
  color: var(--color-olive);
  opacity: 0.7;
  margin-bottom: 48px;
  max-width: 500px;
  opacity: 0;
  animation: fadeInUp 600ms ease-out forwards 1200ms;
}

.hero-split__cta {
  display: inline-block;
  padding: 16px 40px;
  border: 2px solid var(--color-olive);
  font-family: var(--font-sans);
  font-size: var(--text-button);
  font-weight: var(--weight-medium);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  color: var(--color-olive);
  transition: all 300ms ease-out;
  opacity: 0;
  animation: fadeInUp 600ms ease-out forwards 1800ms;
}

.hero-split__cta:hover {
  background: var(--color-olive);
  color: var(--color-white);
}

/* Scroll Indicator */
.hero-split__scroll-indicator {
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  font-family: var(--font-sans);
  font-size: var(--text-tiny);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  color: var(--color-olive);
  opacity: 0.6;
  animation: pulse 2s ease-in-out infinite;
  opacity: 0;
  animation: fadeIn 600ms ease-out forwards 2500ms, pulse 2s ease-in-out infinite 3s;
}

/* Animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 0.6; }
}

@keyframes pulse {
  0%, 100% { transform: translateX(-50%) translateY(0); }
  50% { transform: translateX(-50%) translateY(8px); }
}

/* Responsive: Tablet */
@media (max-width: 1023px) {
  .hero-split__content {
    left: 5%;
    max-width: 600px;
  }
  
  .hero-split__headline {
    font-size: 80px;
  }
}

/* Responsive: Mobile */
@media (max-width: 767px) {
  .hero-split__images {
    grid-template-columns: 1fr;
  }
  
  .hero-split__image--right {
    display: none;
  }
  
  .hero-split__divider {
    display: none;
  }
  
  .hero-split__content {
    left: 24px;
    right: 24px;
    top: 50%;
    max-width: none;
  }
  
  .hero-split__headline {
    font-size: 48px;
    margin-bottom: 32px;
  }
  
  .hero-split__subtext {
    font-size: 18px;
    margin-bottom: 32px;
  }
  
  .hero-split__cta {
    width: 100%;
    text-align: center;
  }
}
```

### Usage Notes
- Use once per page (typically homepage)
- Images should be high-quality, ~2000px wide minimum
- Left/right images should have complementary subjects
- Text should be concise (3-4 lines max for headline)
- Ensure text has enough contrast against images (consider overlay if needed)

---

## 🎯 COMPONENT 02: STAT CARD

### Description
Displays a single statistic with large number and descriptive label. Used in grids for metrics/achievements.

### HTML Structure
```html
<div class="stat-card">
  <div class="stat-card__number">62</div>
  <div class="stat-card__label">Satisfied Clients</div>
</div>
```

### CSS Styling
```css
/* ========================================
   STAT CARD
   ======================================== */

.stat-card {
  padding: 48px;
  background: var(--color-white);
  border: 1px solid rgba(51, 54, 17, 0.2);
  transition: all 300ms cubic-bezier(0.4, 0.0, 0.2, 1);
}

.stat-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(51, 54, 17, 0.1);
}

.stat-card__number {
  font-family: var(--font-mono);
  font-size: var(--text-stat-large);
  font-weight: var(--weight-regular);
  line-height: var(--leading-none);
  color: var(--color-olive);
  margin-bottom: 16px;
}

.stat-card__label {
  font-family: var(--font-sans);
  font-size: var(--text-caption);
  font-weight: var(--weight-regular);
  line-height: var(--leading-normal);
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: rgba(51, 54, 17, 0.6);
}

/* Variant: Dark */
.stat-card--dark {
  background: var(--color-charcoal);
}

.stat-card--dark .stat-card__number {
  color: var(--color-white);
}

.stat-card--dark .stat-card__label {
  color: rgba(255, 255, 255, 0.6);
}

/* Responsive: Mobile */
@media (max-width: 767px) {
  .stat-card {
    padding: 32px;
  }
  
  .stat-card__number {
    font-size: 48px;
  }
}
```

### Usage Notes
- Use in groups (grid of 2-4 cards)
- Numbers should be simple (single or double digit best)
- Labels should be concise (2-4 words)
- Consider dark variant for visual contrast in grid

---

## 🎯 COMPONENT 03: STAT GRID

### Description
Grid container for multiple stat cards with flexible sizing.

### HTML Structure
```html
<div class="stat-grid">
  <div class="stat-card">
    <div class="stat-card__number">4</div>
    <div class="stat-card__label">Years Experience</div>
  </div>
  
  <div class="stat-card stat-card--wide">
    <div class="stat-card__number">20</div>
    <div class="stat-card__label">Projects Completed</div>
  </div>
  
  <div class="stat-card stat-card--tall stat-card--dark">
    <div class="stat-card__number">62</div>
    <div class="stat-card__label">Satisfied Clients</div>
  </div>
  
  <div class="stat-card">
    <div class="stat-card__number">100%</div>
    <div class="stat-card__label">Success Rate</div>
  </div>
</div>
```

### CSS Styling
```css
/* ========================================
   STAT GRID
   ======================================== */

.stat-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  grid-auto-rows: 200px;
}

/* Grid Variations */
.stat-card--wide {
  grid-column: span 2;
}

.stat-card--tall {
  grid-row: span 2;
}

.stat-card--large {
  grid-column: span 2;
  grid-row: span 2;
}

/* Responsive: Tablet */
@media (max-width: 1023px) {
  .stat-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
}

/* Responsive: Mobile */
@media (max-width: 767px) {
  .stat-grid {
    grid-template-columns: 1fr;
    gap: 16px;
    grid-auto-rows: auto;
  }
  
  .stat-card--wide,
  .stat-card--tall,
  .stat-card--large {
    grid-column: span 1;
    grid-row: span 1;
  }
}
```

---

## 🎯 COMPONENT 04: SERVICE CARD

### Description
Card displaying a service with image, title, and description. Used in masonry grid layouts.

### HTML Structure
```html
<article class="service-card">
  <div class="service-card__image">
    <img src="/service-image.jpg" alt="Interior Design Consulting" />
  </div>
  <div class="service-card__content">
    <h3 class="service-card__title">Interior Design Consulting</h3>
    <p class="service-card__description">
      Professional consultation for residential and commercial spaces.
    </p>
  </div>
</article>
```

### CSS Styling
```css
/* ========================================
   SERVICE CARD
   ======================================== */

.service-card {
  background: var(--color-cream);
  border: 1px solid rgba(51, 54, 17, 0.1);
  overflow: hidden;
  cursor: pointer;
  transition: all 300ms ease-out;
}

.service-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 16px 32px rgba(51, 54, 17, 0.12);
}

.service-card__image {
  width: 100%;
  height: 300px;
  overflow: hidden;
}

.service-card__image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 500ms ease-out;
}

.service-card:hover .service-card__image img {
  transform: scale(1.05);
}

.service-card__content {
  padding: 32px;
}

.service-card__title {
  font-family: var(--font-sans);
  font-size: var(--text-h3);
  font-weight: var(--weight-medium);
  line-height: var(--leading-snug);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  color: var(--color-olive);
  margin-bottom: 16px;
}

.service-card__description {
  font-family: var(--font-sans);
  font-size: var(--text-body-small);
  line-height: var(--leading-normal);
  color: rgba(51, 54, 17, 0.7);
}

/* Responsive: Mobile */
@media (max-width: 767px) {
  .service-card__image {
    height: 250px;
  }
  
  .service-card__content {
    padding: 24px;
  }
  
  .service-card__title {
    font-size: 24px;
  }
}
```

---

## 🎯 COMPONENT 05: SERVICE MASONRY GRID

### Description
Flexible masonry-style grid for service cards with varying heights.

### HTML Structure
```html
<section class="services-section">
  <h2 class="services-section__header">SERVICES</h2>
  
  <div class="service-masonry">
    <!-- Service cards go here -->
  </div>
</section>
```

### CSS Styling
```css
/* ========================================
   SERVICE MASONRY GRID
   ======================================== */

.services-section {
  padding: 200px 0;
}

.services-section__header {
  font-family: var(--font-serif);
  font-size: var(--text-h1);
  font-weight: var(--weight-regular);
  line-height: var(--leading-snug);
  color: var(--color-olive);
  margin-bottom: 80px;
  text-align: left;
}

.service-masonry {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  max-width: 1200px;
  margin: 0 auto;
}

/* Masonry variations for visual interest */
.service-card:nth-child(3n+1) .service-card__image {
  height: 400px; /* Tall */
}

.service-card:nth-child(3n+2) .service-card__image {
  height: 250px; /* Short */
}

.service-card:nth-child(3n+3) .service-card__image {
  height: 300px; /* Medium */
}

/* Responsive: Tablet */
@media (max-width: 1023px) {
  .services-section {
    padding: 120px 32px;
  }
  
  .services-section__header {
    margin-bottom: 60px;
  }
  
  .service-masonry {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
}

/* Responsive: Mobile */
@media (max-width: 767px) {
  .services-section {
    padding: 80px 24px;
  }
  
  .services-section__header {
    font-size: 40px;
    margin-bottom: 40px;
  }
  
  .service-masonry {
    grid-template-columns: 1fr;
    gap: 16px;
  }
  
  /* Reset masonry heights on mobile */
  .service-card:nth-child(n) .service-card__image {
    height: 250px;
  }
}
```

---

## 🎯 COMPONENT 06: PROCESS TIMELINE STEP

### Description
Single step in a vertical timeline showing process with image and text.

### HTML Structure
```html
<div class="timeline-step">
  <div class="timeline-step__number">01</div>
  <div class="timeline-step__image">
    <img src="/step-image.jpg" alt="We Listen" />
  </div>
  <div class="timeline-step__content">
    <h3 class="timeline-step__title">WE LISTEN</h3>
    <p class="timeline-step__description">
      We begin by understanding your needs, lifestyle, and biological goals.
    </p>
  </div>
</div>
```

### CSS Styling
```css
/* ========================================
   TIMELINE STEP
   ======================================== */

.timeline-step {
  display: grid;
  grid-template-columns: 80px 300px 1fr;
  gap: 40px;
  align-items: start;
  padding: 60px 0;
  border-top: 1px solid rgba(51, 54, 17, 0.15);
}

.timeline-step:first-child {
  border-top: none;
}

.timeline-step__number {
  font-family: var(--font-mono);
  font-size: var(--text-body-small);
  font-weight: var(--weight-regular);
  color: rgba(51, 54, 17, 0.6);
  padding-top: 8px;
}

.timeline-step__image {
  width: 300px;
  height: 300px;
  overflow: hidden;
}

.timeline-step__image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 500ms ease-out;
}

.timeline-step:hover .timeline-step__image img {
  transform: scale(1.05);
}

.timeline-step__content {
  padding-top: 8px;
}

.timeline-step__title {
  font-family: var(--font-sans);
  font-size: var(--text-h3);
  font-weight: var(--weight-medium);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  color: var(--color-olive);
  margin-bottom: 16px;
}

.timeline-step__description {
  font-family: var(--font-sans);
  font-size: var(--text-body);
  line-height: var(--leading-normal);
  color: rgba(51, 54, 17, 0.7);
  max-width: 500px;
}

/* Variant: Dark Background */
.timeline-step--dark {
  background: var(--color-charcoal);
  padding: 60px 40px;
  margin: 0 -40px;
}

.timeline-step--dark .timeline-step__number,
.timeline-step--dark .timeline-step__title,
.timeline-step--dark .timeline-step__description {
  color: rgba(255, 255, 255, 0.9);
}

/* Responsive: Tablet */
@media (max-width: 1023px) {
  .timeline-step {
    grid-template-columns: 60px 250px 1fr;
    gap: 32px;
    padding: 48px 0;
  }
  
  .timeline-step__image {
    width: 250px;
    height: 250px;
  }
}

/* Responsive: Mobile */
@media (max-width: 767px) {
  .timeline-step {
    grid-template-columns: 1fr;
    gap: 24px;
    padding: 40px 0;
  }
  
  .timeline-step__number {
    order: 1;
  }
  
  .timeline-step__image {
    order: 2;
    width: 100%;
    height: 250px;
  }
  
  .timeline-step__content {
    order: 3;
  }
  
  .timeline-step__title {
    font-size: 28px;
  }
}
```

---

## 🎯 COMPONENT 07: TEXT SECTION (CENTERED COLUMN)

### Description
Centered text column with generous whitespace. Used for narrative/explanatory content.

### HTML Structure
```html
<section class="text-section">
  <div class="text-section__container">
    <h2 class="text-section__headline">
      Your body is speaking in a language you haven't learned to hear
    </h2>
    
    <div class="text-section__body">
      <p>Every cell in your body is either optimized or compromised.</p>
      <p>There is no in-between.</p>
      <p>Most people live in the gray zone—not sick enough to be diagnosed, not well enough to feel alive.</p>
      <p class="text-section__stat">70% of women are iron deficient.</p>
    </div>
  </div>
</section>
```

### CSS Styling
```css
/* ========================================
   TEXT SECTION (CENTERED COLUMN)
   ======================================== */

.text-section {
  padding: 200px 40px;
  background: var(--color-white);
}

.text-section__container {
  max-width: 600px;
  margin: 0 auto;
}

.text-section__headline {
  font-family: var(--font-serif);
  font-size: var(--text-h2);
  font-weight: var(--weight-regular);
  line-height: var(--leading-relaxed);
  color: var(--color-olive);
  margin-bottom: 48px;
  text-align: center;
}

.text-section__body {
  font-family: var(--font-sans);
  font-size: var(--text-body);
  line-height: var(--leading-normal);
  color: var(--color-olive);
}

.text-section__body p {
  margin-bottom: 24px;
}

.text-section__body p:last-child {
  margin-bottom: 0;
}

.text-section__stat {
  font-family: var(--font-mono);
  font-weight: var(--weight-medium);
  margin-top: 48px;
}

/* Responsive: Mobile */
@media (max-width: 767px) {
  .text-section {
    padding: 80px 24px;
  }
  
  .text-section__headline {
    font-size: 32px;
    margin-bottom: 32px;
  }
  
  .text-section__body {
    font-size: 16px;
  }
}
```

---

## 🎯 COMPONENT 08: SPLIT SECTION (IMAGE + TEXT)

### Description
Asymmetric section with image on one side, text on the other. Can alternate left/right.

### HTML Structure
```html
<section class="split-section">
  <div class="split-section__image">
    <img src="/feature-image.jpg" alt="Feature description" />
  </div>
  
  <div class="split-section__content">
    <h2 class="split-section__title">The Precision Path</h2>
    <p class="split-section__description">
      DNA testing reveals your genetic truth. Blood testing tracks your transformation.
      Your formula evolves every 3 months.
    </p>
    <a href="#" class="split-section__link">Discover your biology →</a>
  </div>
</section>
```

### CSS Styling
```css
/* ========================================
   SPLIT SECTION (IMAGE + TEXT)
   ======================================== */

.split-section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 120px 40px;
}

.split-section__image {
  width: 100%;
  height: 600px;
  overflow: hidden;
}

.split-section__image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.split-section__content {
  padding: 40px;
}

.split-section__title {
  font-family: var(--font-serif);
  font-size: var(--text-h2);
  font-weight: var(--weight-regular);
  line-height: var(--leading-snug);
  color: var(--color-olive);
  margin-bottom: 24px;
}

.split-section__description {
  font-family: var(--font-sans);
  font-size: var(--text-body);
  line-height: var(--leading-normal);
  color: rgba(51, 54, 17, 0.7);
  margin-bottom: 32px;
}

.split-section__link {
  display: inline-block;
  font-family: var(--font-sans);
  font-size: var(--text-body-small);
  font-weight: var(--weight-medium);
  letter-spacing: var(--tracking-wide);
  color: var(--color-olive);
  text-decoration: none;
  position: relative;
}

.split-section__link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--color-olive);
  transition: width 300ms ease-out;
}

.split-section__link:hover::after {
  width: 100%;
}

/* Variant: Reverse layout (text left, image right) */
.split-section--reverse {
  grid-template-columns: 1fr 1fr;
}

.split-section--reverse .split-section__image {
  order: 2;
}

.split-section--reverse .split-section__content {
  order: 1;
}

/* Variant: 40/60 split */
.split-section--40-60 {
  grid-template-columns: 2fr 3fr;
}

/* Responsive: Tablet */
@media (max-width: 1023px) {
  .split-section {
    gap: 48px;
    padding: 80px 32px;
  }
  
  .split-section__image {
    height: 500px;
  }
}

/* Responsive: Mobile */
@media (max-width: 767px) {
  .split-section {
    grid-template-columns: 1fr;
    gap: 32px;
    padding: 60px 24px;
  }
  
  .split-section__image {
    height: 300px;
  }
  
  .split-section__content {
    padding: 0;
  }
  
  .split-section__title {
    font-size: 32px;
  }
  
  .split-section--reverse .split-section__image {
    order: 1;
  }
  
  .split-section--reverse .split-section__content {
    order: 2;
  }
}
```

---

## 🎯 COMPONENT 09: THREE-COLUMN GRID

### Description
Grid layout for displaying three equal-width content columns. Used for "The Mirror" section.

### HTML Structure
```html
<section class="three-column-grid">
  <div class="three-column-grid__column">
    <p class="three-column-grid__quote">
      "I wake up tired. Coffee doesn't work anymore. I thought this was just being 35."
    </p>
    <p class="three-column-grid__answer">
      FATIGUE ISN'T MORAL FAILURE.<br>
      It's ferritin at 18 ng/mL.
    </p>
  </div>
  
  <div class="three-column-grid__column">
    <p class="three-column-grid__quote">
      "I forget words mid-sentence. I lose focus by 2pm. Everyone says it's stress."
    </p>
    <p class="three-column-grid__answer">
      BRAIN FOG ISN'T WEAKNESS.<br>
      It's your cells starving for what they need.
    </p>
  </div>
  
  <div class="three-column-grid__column">
    <p class="three-column-grid__quote">
      "I do everything right—eat well, exercise, sleep. But I still don't feel... good."
    </p>
    <p class="three-column-grid__answer">
      WELLNESS ISN'T ENOUGH.<br>
      Optimization requires precision.
    </p>
  </div>
</section>
```

### CSS Styling
```css
/* ========================================
   THREE-COLUMN GRID
   ======================================== */

.three-column-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 48px;
  padding: 150px 60px;
  background: var(--color-charcoal);
  max-width: 1200px;
  margin: 0 auto;
}

.three-column-grid__column {
  padding: 40px;
  border-left: 1px solid rgba(255, 255, 255, 0.2);
}

.three-column-grid__column:first-child {
  border-left: none;
}

.three-column-grid__quote {
  font-family: var(--font-sans);
  font-size: var(--text-body);
  line-height: var(--leading-relaxed);
  color: rgba(255, 255, 255, 0.8);
  font-style: italic;
  margin-bottom: 32px;
}

.three-column-grid__answer {
  font-family: var(--font-sans);
  font-size: var(--text-body);
  font-weight: var(--weight-semibold);
  line-height: var(--leading-relaxed);
  color: var(--color-white);
}

/* Responsive: Tablet */
@media (max-width: 1023px) {
  .three-column-grid {
    grid-template-columns: 1fr;
    gap: 40px;
    padding: 100px 40px;
  }
  
  .three-column-grid__column {
    border-left: none;
    border-top: 1px solid rgba(255, 255, 255, 0.2);
    padding: 40px 0;
  }
  
  .three-column-grid__column:first-child {
    border-top: none;
  }
}

/* Responsive: Mobile */
@media (max-width: 767px) {
  .three-column-grid {
    padding: 60px 24px;
    gap: 32px;
  }
  
  .three-column-grid__column {
    padding: 32px 0;
  }
  
  .three-column-grid__quote,
  .three-column-grid__answer {
    font-size: 16px;
  }
}
```

---

## 🎯 COMPONENT 10: BUTTON

### Description
Reusable button component with multiple style variants.

### HTML Structure
```html
<!-- Primary Button -->
<button class="btn btn--primary">Get Started</button>

<!-- Secondary Button (Outline) -->
<button class="btn btn--secondary">Learn More</button>

<!-- Ghost Button -->
<button class="btn btn--ghost">Explore</button>

<!-- Large Button -->
<button class="btn btn--primary btn--large">Start Essential</button>

<!-- Full Width Button (Mobile) -->
<button class="btn btn--primary btn--full-width">Continue</button>
```

### CSS Styling
```css
/* ========================================
   BUTTON COMPONENT
   ======================================== */

.btn {
  display: inline-block;
  padding: 16px 40px;
  font-family: var(--font-sans);
  font-size: var(--text-button);
  font-weight: var(--weight-medium);
  line-height: 1.2;
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  text-align: center;
  text-decoration: none;
  border: 2px solid transparent;
  cursor: pointer;
  transition: all 300ms cubic-bezier(0.4, 0.0, 0.2, 1);
  white-space: nowrap;
}

/* Primary (Filled) */
.btn--primary {
  background: var(--color-olive);
  border-color: var(--color-olive);
  color: var(--color-white);
}

.btn--primary:hover {
  background: transparent;
  color: var(--color-olive);
}

/* Secondary (Outline) */
.btn--secondary {
  background: transparent;
  border-color: var(--color-olive);
  color: var(--color-olive);
}

.btn--secondary:hover {
  background: var(--color-olive);
  color: var(--color-white);
}

/* Ghost (No border, underline on hover) */
.btn--ghost {
  background: transparent;
  border: none;
  color: var(--color-olive);
  padding: 8px 0;
  position: relative;
}

.btn--ghost::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--color-olive);
  transition: width 300ms ease-out;
}

.btn--ghost:hover::after {
  width: 100%;
}

/* Size Variants */
.btn--large {
  padding: 20px 56px;
  font-size: 18px;
}

.btn--small {
  padding: 12px 24px;
  font-size: 14px;
}

/* Full Width */
.btn--full-width {
  width: 100%;
  display: block;
}

/* Disabled State */
.btn:disabled {
  opacity: 0.4;
  cursor: not-allowed;
  pointer-events: none;
}

/* Click Animation */
.btn:active {
  transform: scale(0.98);
}

/* Responsive: Mobile */
@media (max-width: 767px) {
  .btn {
    padding: 16px 32px;
  }
  
  .btn--large {
    padding: 18px 40px;
  }
}
```

---

## 🎯 COMPONENT 11: NAVIGATION (FIXED HEADER)

### Description
Fixed header with logo, navigation menu, and CTA button.

### HTML Structure
```html
<header class="header">
  <div class="header__container">
    <a href="/" class="header__logo">LAB1</a>
    
    <nav class="header__nav">
      <a href="#about" class="header__nav-link">About</a>
      <a href="#science" class="header__nav-link">Science</a>
      <a href="#paths" class="header__nav-link">Paths</a>
      <a href="#faq" class="header__nav-link">FAQ</a>
    </nav>
    
    <a href="#start" class="btn btn--secondary btn--small">Get Started</a>
    
    <button class="header__mobile-toggle" aria-label="Toggle menu">
      <span></span>
      <span></span>
      <span></span>
    </button>
  </div>
</header>
```

### CSS Styling
```css
/* ========================================
   NAVIGATION (FIXED HEADER)
   ======================================== */

.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: var(--color-cream);
  border-bottom: 1px solid rgba(51, 54, 17, 0.1);
  transition: all 300ms ease-out;
}

.header--scrolled {
  background: rgba(248, 246, 240, 0.95);
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 12px rgba(51, 54, 17, 0.05);
}

.header__container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1400px;
  margin: 0 auto;
  padding: 24px 60px;
  transition: padding 300ms ease-out;
}

.header--scrolled .header__container {
  padding: 16px 60px;
}

.header__logo {
  font-family: var(--font-sans);
  font-size: 20px;
  font-weight: var(--weight-semibold);
  letter-spacing: var(--tracking-wider);
  color: var(--color-olive);
  text-decoration: none;
}

.header__nav {
  display: flex;
  gap: 48px;
  margin: 0 auto;
}

.header__nav-link {
  font-family: var(--font-sans);
  font-size: var(--text-nav);
  font-weight: var(--weight-regular);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  color: var(--color-olive);
  text-decoration: none;
  position: relative;
  transition: opacity 200ms ease;
}

.header__nav-link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--color-olive);
  transition: width 300ms ease-out;
}

.header__nav-link:hover::after {
  width: 100%;
}

.header__mobile-toggle {
  display: none;
  flex-direction: column;
  gap: 6px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
}

.header__mobile-toggle span {
  width: 24px;
  height: 2px;
  background: var(--color-olive);
  transition: all 300ms ease;
}

/* Responsive: Tablet */
@media (max-width: 1023px) {
  .header__container {
    padding: 20px 32px;
  }
  
  .header__nav {
    gap: 32px;
  }
}

/* Responsive: Mobile */
@media (max-width: 767px) {
  .header__container {
    padding: 16px 24px;
  }
  
  .header__nav,
  .btn {
    display: none;
  }
  
  .header__mobile-toggle {
    display: flex;
  }
  
  /* Mobile Menu (when open) */
  .header__nav--open {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 60px;
    left: 0;
    right: 0;
    background: var(--color-cream);
    padding: 40px 24px;
    gap: 24px;
    box-shadow: 0 8px 24px rgba(51, 54, 17, 0.1);
  }
  
  .header__nav-link {
    font-size: 24px;
  }
}
```

---

## 🎯 COMPONENT 12: FOOTER

### Description
Multi-column footer with links, copyright, and social media.

### HTML Structure
```html
<footer class="footer">
  <div class="footer__container">
    <div class="footer__column footer__column--about">
      <div class="footer__logo">LAB1</div>
      <p class="footer__description">
        Personalized nutrition for the body you have, not the one you're supposed to want.
      </p>
    </div>
    
    <div class="footer__column">
      <h4 class="footer__title">Company</h4>
      <ul class="footer__links">
        <li><a href="#about">About</a></li>
        <li><a href="#science">Science</a></li>
        <li><a href="#team">Team</a></li>
        <li><a href="#careers">Careers</a></li>
      </ul>
    </div>
    
    <div class="footer__column">
      <h4 class="footer__title">Products</h4>
      <ul class="footer__links">
        <li><a href="#essential">Essential Path</a></li>
        <li><a href="#precision">Precision Path</a></li>
        <li><a href="#testing">Testing</a></li>
        <li><a href="#pricing">Pricing</a></li>
      </ul>
    </div>
    
    <div class="footer__column">
      <h4 class="footer__title">Support</h4>
      <ul class="footer__links">
        <li><a href="#faq">FAQ</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#shipping">Shipping</a></li>
        <li><a href="#returns">Returns</a></li>
      </ul>
    </div>
  </div>
  
  <div class="footer__bottom">
    <p class="footer__copyright">© 2024 Lab1. All rights reserved.</p>
    <div class="footer__legal">
      <a href="#privacy">Privacy Policy</a>
      <a href="#terms">Terms of Service</a>
    </div>
  </div>
</footer>
```

### CSS Styling
```css
/* ========================================
   FOOTER
   ======================================== */

.footer {
  background: var(--color-charcoal);
  color: rgba(255, 255, 255, 0.8);
  padding: 100px 0 40px;
}

.footer__container {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 60px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 60px 60px;
}

.footer__column--about {
  max-width: 350px;
}

.footer__logo {
  font-family: var(--font-sans);
  font-size: 24px;
  font-weight: var(--weight-semibold);
  letter-spacing: var(--tracking-wider);
  color: var(--color-white);
  margin-bottom: 24px;
}

.footer__description {
  font-family: var(--font-sans);
  font-size: var(--text-body-small);
  line-height: var(--leading-relaxed);
  color: rgba(255, 255, 255, 0.7);
}

.footer__title {
  font-family: var(--font-sans);
  font-size: var(--text-body-small);
  font-weight: var(--weight-semibold);
  letter-spacing: var(--tracking-wider);
  text-transform: uppercase;
  color: var(--color-white);
  margin-bottom: 24px;
}

.footer__links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer__links li {
  margin-bottom: 16px;
}

.footer__links a {
  font-family: var(--font-sans);
  font-size: var(--text-body-small);
  line-height: var(--leading-relaxed);
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  transition: color 200ms ease;
}

.footer__links a:hover {
  color: var(--color-white);
}

.footer__bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px 60px 0;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
}

.footer__copyright {
  font-family: var(--font-sans);
  font-size: var(--text-tiny);
  color: rgba(255, 255, 255, 0.6);
}

.footer__legal {
  display: flex;
  gap: 32px;
}

.footer__legal a {
  font-family: var(--font-sans);
  font-size: var(--text-tiny);
  color: rgba(255, 255, 255, 0.6);
  text-decoration: none;
  transition: color 200ms ease;
}

.footer__legal a:hover {
  color: var(--color-white);
}

/* Responsive: Tablet */
@media (max-width: 1023px) {
  .footer {
    padding: 80px 0 32px;
  }
  
  .footer__container {
    grid-template-columns: 1fr 1fr;
    gap: 48px;
    padding: 0 32px 48px;
  }
  
  .footer__column--about {
    grid-column: 1 / -1;
  }
  
  .footer__bottom {
    padding: 20px 32px 0;
  }
}

/* Responsive: Mobile */
@media (max-width: 767px) {
  .footer {
    padding: 60px 0 24px;
  }
  
  .footer__container {
    grid-template-columns: 1fr;
    gap: 40px;
    padding: 0 24px 40px;
  }
  
  .footer__bottom {
    flex-direction: column;
    gap: 16px;
    text-align: center;
    padding: 16px 24px 0;
  }
  
  .footer__legal {
    flex-direction: column;
    gap: 12px;
  }
}
```

---

## 🎯 COMPONENT 13: CARD (GENERIC CONTAINER)

### Description
Generic container card for content with consistent styling.

### HTML Structure
```html
<div class="card">
  <div class="card__header">
    <h3 class="card__title">Card Title</h3>
  </div>
  <div class="card__body">
    <p>Card content goes here.</p>
  </div>
  <div class="card__footer">
    <a href="#" class="card__link">Learn more →</a>
  </div>
</div>
```

### CSS Styling
```css
/* ========================================
   CARD (GENERIC CONTAINER)
   ======================================== */

.card {
  background: var(--color-white);
  border: 1px solid rgba(51, 54, 17, 0.15);
  padding: 40px;
  transition: all 300ms ease-out;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(51, 54, 17, 0.1);
}

.card__header {
  margin-bottom: 24px;
}

.card__title {
  font-family: var(--font-sans);
  font-size: var(--text-h4);
  font-weight: var(--weight-medium);
  color: var(--color-olive);
}

.card__body {
  font-family: var(--font-sans);
  font-size: var(--text-body-small);
  line-height: var(--leading-normal);
  color: rgba(51, 54, 17, 0.7);
  margin-bottom: 24px;
}

.card__footer {
  margin-top: auto;
}

.card__link {
  font-family: var(--font-sans);
  font-size: var(--text-body-small);
  font-weight: var(--weight-medium);
  color: var(--color-olive);
  text-decoration: none;
  position: relative;
}

.card__link::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--color-olive);
  transition: width 300ms ease-out;
}

.card__link:hover::after {
  width: 100%;
}

/* Variants */
.card--dark {
  background: var(--color-charcoal);
  border-color: rgba(255, 255, 255, 0.15);
}

.card--dark .card__title {
  color: var(--color-white);
}

.card--dark .card__body {
  color: rgba(255, 255, 255, 0.7);
}

.card--dark .card__link {
  color: var(--color-white);
}

.card--dark .card__link::after {
  background: var(--color-white);
}

/* Responsive: Mobile */
@media (max-width: 767px) {
  .card {
    padding: 32px 24px;
  }
}
```

---

## 🎯 LAB1-SPECIFIC COMPONENT 14: BIOMARKER PROGRESS BAR

### Description
Visual representation of biomarker improvement over time.

### HTML Structure
```html
<div class="biomarker-progress">
  <div class="biomarker-progress__header">
    <span class="biomarker-progress__name">Ferritin</span>
    <span class="biomarker-progress__unit">ng/mL</span>
  </div>
  
  <div class="biomarker-progress__bar">
    <div class="biomarker-progress__track">
      <div class="biomarker-progress__fill" data-progress="75"></div>
    </div>
    <div class="biomarker-progress__markers">
      <span class="biomarker-progress__marker biomarker-progress__marker--start">18</span>
      <span class="biomarker-progress__marker biomarker-progress__marker--end">68</span>
    </div>
  </div>
  
  <div class="biomarker-progress__change">
    <span class="biomarker-progress__arrow">↑</span>
    <span class="biomarker-progress__percentage">+278%</span>
  </div>
</div>
```

### CSS Styling
```css
/* ========================================
   BIOMARKER PROGRESS BAR
   ======================================== */

.biomarker-progress {
  padding: 32px;
  background: var(--color-white);
  border: 1px solid rgba(51, 54, 17, 0.15);
}

.biomarker-progress__header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 16px;
}

.biomarker-progress__name {
  font-family: var(--font-sans);
  font-size: var(--text-h4);
  font-weight: var(--weight-medium);
  color: var(--color-olive);
}

.biomarker-progress__unit {
  font-family: var(--font-mono);
  font-size: var(--text-caption);
  color: rgba(51, 54, 17, 0.6);
}

.biomarker-progress__bar {
  margin-bottom: 16px;
}

.biomarker-progress__track {
  width: 100%;
  height: 8px;
  background: rgba(51, 54, 17, 0.1);
  position: relative;
  overflow: hidden;
}

.biomarker-progress__fill {
  height: 100%;
  background: var(--color-olive);
  width: 0;
  transition: width 1000ms cubic-bezier(0.4, 0.0, 0.2, 1);
}

.biomarker-progress__fill[data-progress="75"] {
  width: 75%;
}

.biomarker-progress__markers {
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
}

.biomarker-progress__marker {
  font-family: var(--font-mono);
  font-size: var(--text-body-small);
  color: rgba(51, 54, 17, 0.7);
}

.biomarker-progress__marker--end {
  font-weight: var(--weight-semibold);
  color: var(--color-olive);
}

.biomarker-progress__change {
  display: flex;
  align-items: center;
  gap: 8px;
  padding-top: 16px;
  border-top: 1px solid rgba(51, 54, 17, 0.1);
}

.biomarker-progress__arrow {
  font-size: 24px;
  color: var(--color-olive);
}

.biomarker-progress__percentage {
  font-family: var(--font-mono);
  font-size: var(--text-body);
  font-weight: var(--weight-semibold);
  color: var(--color-olive);
}
```

---

## 🎯 LAB1-SPECIFIC COMPONENT 15: TWO-PATH COMPARISON

### Description
Side-by-side comparison of Essential Path vs Precision Path.

### HTML Structure
```html
<section class="two-path">
  <div class="two-path__intro">
    <h2 class="two-path__title">Choose Your Path</h2>
    <p class="two-path__description">Both paths respect your journey. Neither judges where you start.</p>
  </div>
  
  <div class="two-path__grid">
    <div class="two-path__card">
      <h3 class="two-path__card-title">The Essential Path</h3>
      <p class="two-path__card-description">
        For those who want to begin today. Premium nutrition for your stage of life.
      </p>
      <ul class="two-path__features">
        <li>High-quality supplements</li>
        <li>No testing required</li>
        <li>Immediate start</li>
        <li>70-75% optimization</li>
      </ul>
      <a href="#essential" class="btn btn--secondary">Begin Here</a>
    </div>
    
    <div class="two-path__card two-path__card--featured">
      <span class="two-path__badge">Most Popular</span>
      <h3 class="two-path__card-title">The Precision Path</h3>
      <p class="two-path__card-description">
        For those who want to know. DNA and blood testing with evolving formulas.
      </p>
      <ul class="two-path__features">
        <li>DNA testing included</li>
        <li>Quarterly blood testing</li>
        <li>Evolving formula</li>
        <li>85%+ optimization</li>
      </ul>
      <a href="#precision" class="btn btn--primary">Discover Your Biology</a>
    </div>
  </div>
</section>
```

### CSS Styling
```css
/* ========================================
   TWO-PATH COMPARISON
   ======================================== */

.two-path {
  padding: 200px 60px;
  max-width: 1200px;
  margin: 0 auto;
}

.two-path__intro {
  text-align: center;
  margin-bottom: 80px;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

.two-path__title {
  font-family: var(--font-serif);
  font-size: var(--text-h1);
  font-weight: var(--weight-regular);
  color: var(--color-olive);
  margin-bottom: 24px;
}

.two-path__description {
  font-family: var(--font-sans);
  font-size: var(--text-body-large);
  line-height: var(--leading-relaxed);
  color: rgba(51, 54, 17, 0.7);
}

.two-path__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 48px;
}

.two-path__card {
  padding: 48px;
  background: var(--color-white);
  border: 1px solid rgba(51, 54, 17, 0.15);
  position: relative;
}

.two-path__card--featured {
  border: 2px solid var(--color-olive);
  transform: scale(1.02);
}

.two-path__badge {
  position: absolute;
  top: -12px;
  left: 48px;
  padding: 8px 16px;
  background: var(--color-olive);
  color: var(--color-white);
  font-family: var(--font-sans);
  font-size: var(--text-tiny);
  font-weight: var(--weight-medium);
  letter-spacing: var(--tracking-wider);
  text-transform: uppercase;
}

.two-path__card-title {
  font-family: var(--font-serif);
  font-size: var(--text-h2);
  font-weight: var(--weight-regular);
  color: var(--color-olive);
  margin-bottom: 16px;
}

.two-path__card-description {
  font-family: var(--font-sans);
  font-size: var(--text-body);
  line-height: var(--leading-normal);
  color: rgba(51, 54, 17, 0.7);
  margin-bottom: 32px;
}

.two-path__features {
  list-style: none;
  padding: 0;
  margin: 0 0 40px 0;
}

.two-path__features li {
  font-family: var(--font-sans);
  font-size: var(--text-body-small);
  line-height: var(--leading-relaxed);
  color: var(--color-olive);
  padding-left: 24px;
  position: relative;
  margin-bottom: 12px;
}

.two-path__features li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--color-olive);
}

.two-path__card .btn {
  width: 100%;
}

/* Responsive: Tablet */
@media (max-width: 1023px) {
  .two-path {
    padding: 120px 32px;
  }
  
  .two-path__intro {
    margin-bottom: 60px;
  }
  
  .two-path__grid {
    gap: 32px;
  }
}

/* Responsive: Mobile */
@media (max-width: 767px) {
  .two-path {
    padding: 80px 24px;
  }
  
  .two-path__title {
    font-size: 40px;
  }
  
  .two-path__intro {
    margin-bottom: 40px;
  }
  
  .two-path__grid {
    grid-template-columns: 1fr;
    gap: 24px;
  }
  
  .two-path__card {
    padding: 32px 24px;
  }
  
  .two-path__card--featured {
    transform: none;
  }
  
  .two-path__card-title {
    font-size: 32px;
  }
}
```

---

## ✅ COMPONENT USAGE GUIDELINES

### When to Use Each Component

**Hero Split**: First impression, homepage only
**Stat Cards**: Showcase metrics, achievements, proof points
**Service Cards**: Display offerings, features, capabilities
**Timeline Steps**: Explain sequential processes
**Text Section**: Deep explanations, storytelling moments
**Split Section**: Feature highlights, product explanations
**Three-Column Grid**: Testimonials, comparisons, mirroring
**Two-Path**: Choice moments, pricing tiers, comparisons

### Component Combinations

**Landing Page Pattern**:
1. Hero Split
2. Text Section (intro)
3. Stat Grid
4. Service Masonry
5. Two-Path Comparison
6. Timeline (Process)
7. Footer

**Feature Page Pattern**:
1. Split Section (image + intro)
2. Three-Column Grid (benefits)
3. Text Section (deep dive)
4. Card Grid (features)
5. Footer

---

**Next Document:** `04_COLOR_APPLICATION.md` - Complete color usage map

---

*Document Version: 1.0*
*Component Library for: Lab1 Website*
*Based on: OURA & CO. editorial aesthetic*
*Total Components: 20 (16 from OURA, 4 Lab1-specific)*
