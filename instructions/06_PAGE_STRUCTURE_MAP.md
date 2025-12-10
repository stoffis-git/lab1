# 06. PAGE STRUCTURE MAP
## Lab1 Website Architecture - Component Assembly Guide

**Purpose:** This document maps every section of the Lab1 website to the components from our library, showing exactly how to assemble the complete user experience.

**Reading This Document:** 
- Section name (e.g., "01. HERO") matches Lab1's narrative arc
- Component name references the Component Library (05_COMPONENT_LIBRARY.md)
- Content includes exact copy from the design brief
- Assembly notes explain how to adapt components for Lab1's needs

---

## 🎯 COMPLETE PAGE STRUCTURE OVERVIEW

```
LAB1 HOMEPAGE FLOW:

├── 01. HERO - "We Design the Biology of You"
├── 02. THE TRUTH - Centered text revelation
├── 03. THE MIRROR - Three-column dark section
├── 04. THE REVEAL - Biology explanation
├── 05. THE TWO PATHS - Side-by-side comparison
├── 06. THE PROCESS - 5-step timeline
├── 07. THE PROOF - Testimonial with data viz
├── 08. THE INVITATION - Call to action
├── 09. THE QUIET - FAQ section
└── 10. THE CLOSE - Footer

Total scroll depth: ~8,000-10,000px (desktop)
Average time on page: 5-7 minutes
```

---

## 📍 SECTION 01: HERO - "ARRIVAL"

### Component Used
**Hero Split Section** (Component #01 from library)

### Layout Specifications
- Height: `100vh` (full screen)
- Split: 50/50 with diagonal divider (~5-7° angle)
- Text overlay: Left-aligned, 10% from left edge
- Background: `#F8F6F0`

### Content Mapping

**Images:**
- Left: Blurred figure in motion (abstract, human, relatable)
- Right: Macro photography of living texture (cells, skin, organic matter)
- Both images should be warm-toned, high contrast, artistic

**Headline Text:**
```html
<h1 class="hero-split__headline">
  <span class="hero-split__headline-line">WE DESIGN</span>
  <span class="hero-split__headline-line">THE BIOLOGY</span>
  <span class="hero-split__headline-line">OF YOU.</span>
</h1>
```

**Subtext:**
```html
<p class="hero-split__subtext">
  What if fatigue isn't normal?<br>
  What if you've been living on borrowed energy?<br>
  What if your cells have been trying to tell you something?
</p>
```

**CTA Button:**
```html
<a href="#start" class="hero-split__cta">
  Listen to your body →
</a>
```

**Scroll Indicator:**
```html
<div class="hero-split__scroll-indicator">
  Scroll to understand ↓
</div>
```

### Color Treatment
- Text: `#333611` (Deep Olive)
- Button: Outline `#333611`, fill on hover
- Scroll indicator: `#333611` at 60% opacity with pulse animation

### Animation Sequence
```
0.0s: Page loads, background fades from white to cream
0.3s: Images fade in (opacity 0 → 1, blur 10px → 0px)
0.5s: "WE DESIGN" slides up + fades in
0.65s: "THE BIOLOGY" slides up + fades in
0.8s: "OF YOU." slides up + fades in
1.2s: Subtext fades in
1.8s: CTA button slides up with bounce
2.2s: Scroll indicator pulses
```

### Assembly Notes
- Use Hero Split component directly
- Ensure diagonal divider is subtle (10% opacity maximum)
- Text must have enough contrast against images (consider subtle gradient overlay if needed)
- Mobile: Stack to single image with text overlay

---

## 📍 SECTION 02: THE TRUTH - "WHAT'S ACTUALLY HAPPENING"

### Component Used
**Text Section (Centered Column)** (Component #07 from library)

### Layout Specifications
- Padding: `200px` top/bottom (desktop)
- Max-width: `600px` centered
- Background: `#FFFFFF` (Pure White)
- Breathing room: Generous whitespace

### Content Mapping

**Body Text:**
```html
<section class="text-section">
  <div class="text-section__container">
    <p>You've been told it's stress.<br>
    Or age. Or just how life is.</p>
    
    <p>But here's what they don't tell you:</p>
    
    <p class="text-section__pullquote">
      Your body is speaking in a language<br>
      you haven't learned to hear.
    </p>
    
    <p>Every cell in your body is either<br>
    optimized or compromised.</p>
    
    <p>There is no in-between.</p>
    
    <p>Most people live in the gray zone—<br>
    not sick enough to be diagnosed,<br>
    not well enough to feel alive.</p>
    
    <p class="text-section__stat">70% of women are iron deficient.</p>
    <p class="text-section__stat">40% carry genetic variants that change how they process basic nutrients.</p>
    
    <p>Your multivitamin doesn't know this.</p>
    
    <p>Your body does.</p>
  </div>
</section>
```

### Typography Treatment
- Body text: Darker Grotesque, 18px, `#333611`
- Pullquote: Cormorant Garamond, 36px, `#333611`, italic
- Statistics: IBM Plex Mono, 18px, `#333611`, medium weight
- Line height: 1.7 (generous, readable)

### Special Styling
```css
.text-section__pullquote {
  font-family: var(--font-serif);
  font-size: 36px;
  font-style: italic;
  line-height: 1.5;
  margin: 48px 0;
  padding-left: 32px;
  border-left: 3px solid var(--color-olive);
}

.text-section__stat {
  font-family: var(--font-mono);
  font-weight: var(--weight-medium);
  font-size: 18px;
}
```

### Assembly Notes
- Use Text Section component
- Add pullquote styling for the "Your body is speaking..." line
- Statistics should use mono font for validation/proof feel
- Maintain generous paragraph spacing (24px between paragraphs)
- Mobile: Reduce padding to 80px top/bottom

---

## 📍 SECTION 03: THE MIRROR - "SHOW THEM THEMSELVES"

### Component Used
**Three-Column Grid** (Component #09 from library)

### Layout Specifications
- Full-width section
- Background: `#2A2A2A` (Charcoal - dark mode)
- Padding: `150px 60px` (desktop)
- Three equal columns with subtle dividers

### Content Mapping

**Column 1:**
```html
<div class="three-column-grid__column">
  <p class="three-column-grid__quote">
    "I wake up tired.<br>
    Coffee doesn't work anymore.<br>
    I thought this was just being 35."
  </p>
  <p class="three-column-grid__answer">
    FATIGUE ISN'T MORAL FAILURE.<br>
    It's ferritin at 18 ng/mL.
  </p>
</div>
```

**Column 2:**
```html
<div class="three-column-grid__column">
  <p class="three-column-grid__quote">
    "I forget words mid-sentence.<br>
    I lose focus by 2pm.<br>
    Everyone says it's stress."
  </p>
  <p class="three-column-grid__answer">
    BRAIN FOG ISN'T WEAKNESS.<br>
    It's your cells starving for what they need.
  </p>
</div>
```

**Column 3:**
```html
<div class="three-column-grid__column">
  <p class="three-column-grid__quote">
    "I do everything right—<br>
    eat well, exercise, sleep.<br>
    But I still don't feel... good."
  </p>
  <p class="three-column-grid__answer">
    WELLNESS ISN'T ENOUGH.<br>
    Optimization requires precision.
  </p>
</div>
```

### Color Treatment
- Background: `#2A2A2A`
- Quote text: `#F8F6F0` at 80% opacity, italic
- Answer text: `#FFFFFF` bold, 100% opacity
- Column dividers: `#333611` at 20% opacity (vertical lines)

### Typography Treatment
- Quotes: Darker Grotesque, 18px, italic, light weight
- Answers: Darker Grotesque, 18px, semibold, uppercase

### Assembly Notes
- Use Three-Column Grid component exactly as specified
- Ensure quotes feel personal (italic, slightly dimmed)
- Answers should feel definitive (bold, white, uppercase)
- Mobile: Stack columns vertically, change dividers to horizontal
- This section creates the "mirror" moment - emotional recognition

---

## 📍 SECTION 04: THE REVEAL - "HOW BIOLOGY ACTUALLY WORKS"

### Component Used
**Text Section (Centered Column)** (Component #07 from library)

### Layout Specifications
- Padding: `200px` top/bottom (desktop)
- Max-width: `700px` centered (slightly wider than Section 02)
- Background: `#F8F6F0` (Soft Cream)

### Content Mapping

```html
<section class="text-section" style="background: var(--color-cream);">
  <div class="text-section__container" style="max-width: 700px;">
    <p>Your DNA is not destiny.<br>
    It's an instruction manual.</p>
    
    <p>But most people are reading it in the wrong language.</p>
    
    <blockquote class="pullquote-large">
      "40% of people have genetic variants.<br>
      Their cells cannot convert standard nutrients.<br>
      Every generic supplement they take<br>
      is like putting diesel in a gasoline engine."
    </blockquote>
    
    <p>Your blood is not static.<br>
    It's a real-time dashboard.</p>
    
    <p>What was true three months ago<br>
    might not be true today.</p>
    
    <p>Your iron corrects.<br>
    Your inflammation drops.<br>
    Your needs change.</p>
    
    <p><strong>This is why precision requires evolution.</strong></p>
    
    <p>We don't give you one formula<br>
    and call it personalized.</p>
    
    <p>We give you a system<br>
    that adapts as you do.</p>
  </div>
</section>
```

### Special Styling for Large Pullquote
```css
.pullquote-large {
  font-family: var(--font-serif);
  font-size: 48px;
  line-height: 1.4;
  color: var(--color-olive);
  margin: 64px 0;
  padding-left: 48px;
  border-left: 4px solid var(--color-olive);
  font-style: italic;
}
```

### Assembly Notes
- Use Text Section component
- Background is cream, not white (different from Section 02)
- Large pullquote should dominate visually (48px serif)
- Emphasize key words like "cannot" and "evolution" with bold
- Mobile: Reduce pullquote to 32px

---

## 📍 SECTION 05: THE TWO PATHS - "CHOICE WITHOUT PRESSURE"

### Component Used
**Two-Path Comparison** (Component #15 from library - Lab1 specific)

### Layout Specifications
- Full-width section
- Split: 40% left (Essential) / 60% right (Precision)
- Different background colors for each side
- Equal visual weight despite size difference

### Content Mapping

**Left Side - Essential Path:**
```html
<div class="two-path__card" style="background: var(--color-cream);">
  <h3 class="two-path__card-title">THE ESSENTIAL PATH</h3>
  
  <p class="two-path__card-subtitle">For those who want to begin today.</p>
  
  <p class="two-path__card-description">
    No testing. No waiting.<br>
    Just premium nutrition for your stage of life.
  </p>
  
  <p>This is the path of trust—<br>
  choosing what's right for most people like you,<br>
  formulated with care for common needs.</p>
  
  <p>You'll feel better.<br>
  70-75% of the way to optimal.</p>
  
  <p>And when you're ready for more,<br>
  we'll be here.</p>
  
  <a href="#essential" class="btn btn--secondary">Begin here →</a>
</div>
```

**Right Side - Precision Path:**
```html
<div class="two-path__card two-path__card--dark" style="background: var(--color-olive);">
  <h3 class="two-path__card-title" style="color: var(--color-white);">
    THE PRECISION PATH
  </h3>
  
  <p class="two-path__card-subtitle" style="color: var(--color-white);">
    For those who want to know.
  </p>
  
  <p class="two-path__card-description" style="color: rgba(255,255,255,0.9);">
    DNA testing reveals your genetic truth.<br>
    Blood testing tracks your transformation.<br>
    Your formula evolves every 3 months.
  </p>
  
  <p style="color: rgba(255,255,255,0.9);">
    This is the path of certainty—<br>
    not guessing what might work,<br>
    but knowing what will.
  </p>
  
  <p style="color: rgba(255,255,255,0.9);">
    You'll feel optimal.<br>
    85%+ of what your biology is capable of.
  </p>
  
  <p style="color: var(--color-white);"><strong>This is the deep work.</strong></p>
  
  <a href="#precision" class="btn btn--primary-inverted">
    Discover your biology →
  </a>
</div>
```

### Color Treatment
- Left background: `#F8F6F0` (Soft Cream)
- Left text: `#333611` (Deep Olive)
- Left button: Outline `#333611`, fill on hover
- Right background: `#333611` (Deep Olive)
- Right text: `#FFFFFF` (Pure White)
- Right button: Outline `#FFFFFF`, fill on hover (inverted)

### Button Hover States
```css
/* Left button */
.btn--secondary {
  border: 2px solid var(--color-olive);
  color: var(--color-olive);
  background: transparent;
}

.btn--secondary:hover {
  background: var(--color-olive);
  color: var(--color-white);
}

/* Right button */
.btn--primary-inverted {
  border: 2px solid var(--color-white);
  color: var(--color-white);
  background: transparent;
}

.btn--primary-inverted:hover {
  background: var(--color-white);
  color: var(--color-olive);
}
```

### Assembly Notes
- Use Two-Path component with modifications
- Ensure 40/60 split is visually balanced
- Both sides should feel equally valuable (no hierarchy)
- Dark side (Precision) should feel premium, not aggressive
- Mobile: Stack vertically, Essential on top

---

## 📍 SECTION 06: THE PROCESS - "WITHOUT THE JARGON"

### Component Used
**Process Timeline (Vertical)** (Component #06 from library)

### Layout Specifications
- Vertical timeline with minimal design
- Numbers positioned far left
- Content flows right
- Thin vertical line connects steps
- White background
- Padding: `200px` top/bottom

### Content Mapping

**Step 01 - LISTEN:**
```html
<div class="timeline-step">
  <div class="timeline-step__number">01</div>
  <div class="timeline-step__content">
    <h3 class="timeline-step__title">LISTEN</h3>
    <p class="timeline-step__description">
      We start with a conversation.<br><br>
      Not a quiz. Not an algorithm.<br>
      A human asking: How do you feel?<br>
      Where does your body struggle?<br>
      What do you want to reclaim?
    </p>
  </div>
</div>
```

**Step 02 - MEASURE:**
```html
<div class="timeline-step">
  <div class="timeline-step__number">02</div>
  <div class="timeline-step__content">
    <h3 class="timeline-step__title">MEASURE</h3>
    <p class="timeline-step__description">
      Your DNA is read once.<br>
      <span class="timeline-step__detail">(~30 markers that change how you process nutrients)</span><br><br>
      Your blood is tested quarterly.<br>
      <span class="timeline-step__detail">(~45 biomarkers that show what's happening now)</span><br><br>
      Together, they tell us what your cells<br>
      have been trying to say.
    </p>
  </div>
</div>
```

**Step 03 - FORMULATE:**
```html
<div class="timeline-step">
  <div class="timeline-step__number">03</div>
  <div class="timeline-step__content">
    <h3 class="timeline-step__title">FORMULATE</h3>
    <p class="timeline-step__description">
      You receive a formula.<br>
      Not forever. For now.<br><br>
      Targeting what's most urgent today—<br>
      iron, or inflammation, or methylation.<br><br>
      Your body is dynamic.<br>
      Your formula should be too.
    </p>
  </div>
</div>
```

**Step 04 - EVOLVE:**
```html
<div class="timeline-step">
  <div class="timeline-step__number">04</div>
  <div class="timeline-step__content">
    <h3 class="timeline-step__title">EVOLVE</h3>
    <p class="timeline-step__description">
      Every 3 months, we retest.<br><br>
      What improved? What emerged?<br>
      Your formula rotates to match<br>
      where your biology is now.<br><br>
      This is not a product.<br>
      <strong>This is a partnership.</strong>
    </p>
  </div>
</div>
```

**Step 05 - MAINTAIN:**
```html
<div class="timeline-step">
  <div class="timeline-step__number">05</div>
  <div class="timeline-step__content">
    <h3 class="timeline-step__title">MAINTAIN</h3>
    <p class="timeline-step__description">
      Eventually, you arrive.<br><br>
      All markers optimized.<br>
      Energy restored. Clarity returned.<br><br>
      You transition to maintenance—<br>
      a formula that honors your genetic needs,<br>
      lifelong.<br><br>
      <strong>This is what optimal feels like.</strong>
    </p>
  </div>
</div>
```

### Typography & Styling
```css
.timeline-step__number {
  font-family: var(--font-serif);
  font-size: 72px;
  color: rgba(51, 54, 17, 0.2);
  font-weight: 300;
}

.timeline-step__title {
  font-family: var(--font-sans);
  font-size: 36px;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-olive);
  margin-bottom: 24px;
}

.timeline-step__description {
  font-family: var(--font-sans);
  font-size: 18px;
  line-height: 1.7;
  color: var(--color-olive);
}

.timeline-step__detail {
  font-family: var(--font-mono);
  font-size: 14px;
  color: rgba(51, 54, 17, 0.6);
}

/* Vertical connecting line */
.timeline-step::before {
  content: '';
  position: absolute;
  left: 36px; /* Center of number */
  top: 0;
  bottom: 0;
  width: 2px;
  background: rgba(51, 54, 17, 0.3);
}

.timeline-step:last-child::before {
  display: none; /* No line after last step */
}
```

### Assembly Notes
- Modify Timeline component to remove images (text-only)
- Numbers should be large and subtle (20% opacity)
- Vertical line should be thin and subtle (30% opacity)
- Keep generous spacing between steps (80px minimum)
- Mobile: Reduce number size to 48px, stack content closer

---

## 📍 SECTION 07: THE PROOF - "WITHOUT CLINICAL JARGON"

### Component Used
**Split Section (Image + Text)** (Component #08 from library) + Custom visualization

### Layout Specifications
- Split: 50/50
- Left: Testimonial text
- Right: Data visualization
- Background: `#F8F6F0` (Soft Cream)
- Padding: `150px` top/bottom

### Content Mapping

**Left Side - Anna's Story:**
```html
<div class="split-section__content">
  <h2 class="split-section__title">ANNA'S STORY</h2>
  
  <blockquote class="split-section__quote">
    "I thought being tired was just<br>
    being a busy person in my 30s."
  </blockquote>
  
  <div class="split-section__timeline">
    <div class="timeline-moment">
      <strong>Month 0:</strong><br>
      Waking up felt like dragging myself through mud. Brain fog by noon.
    </div>
    
    <div class="timeline-moment">
      <strong>Month 3:</strong><br>
      I noticed I wasn't reaching for coffee at 10am anymore.
    </div>
    
    <div class="timeline-moment">
      <strong>Month 6:</strong><br>
      I worked a full day and still wanted to see friends at night.
    </div>
    
    <div class="timeline-moment">
      <strong>Month 9:</strong><br>
      I forgot what tired felt like.
    </div>
  </div>
  
  <blockquote class="split-section__quote-large">
    "Lab1 didn't give me energy.<br>
    They gave me back my life."
  </blockquote>
  
  <p class="split-section__attribution">— Anna, 34</p>
</div>
```

**Right Side - Visualization:**
```html
<div class="biomarker-visualization">
  <div class="circle-growth">
    <div class="circle circle--month-0">
      <span class="circle__label">Month 0</span>
    </div>
    <div class="circle circle--month-3">
      <span class="circle__label">Month 3</span>
    </div>
    <div class="circle circle--month-6">
      <span class="circle__label">Month 6</span>
    </div>
    <div class="circle circle--month-9">
      <span class="circle__label">Month 9</span>
    </div>
  </div>
  
  <p class="biomarker-stat">
    Ferritin: <span class="stat-change">18 → 68 ng/mL</span>
  </p>
</div>
```

### Visualization Styling
```css
.biomarker-visualization {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px;
}

.circle-growth {
  display: flex;
  align-items: flex-end;
  gap: 24px;
  margin-bottom: 48px;
}

.circle {
  border: 2px solid var(--color-olive);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.circle--month-0 {
  width: 60px;
  height: 60px;
  background: rgba(51, 54, 17, 0.1);
}

.circle--month-3 {
  width: 100px;
  height: 100px;
  background: rgba(51, 54, 17, 0.3);
}

.circle--month-6 {
  width: 140px;
  height: 140px;
  background: rgba(51, 54, 17, 0.6);
}

.circle--month-9 {
  width: 180px;
  height: 180px;
  background: rgba(51, 54, 17, 1);
}

.circle__label {
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--color-olive);
  position: absolute;
  bottom: -24px;
}

.biomarker-stat {
  font-family: var(--font-mono);
  font-size: 16px;
  color: var(--color-olive);
}

.stat-change {
  font-weight: 600;
}
```

### Assembly Notes
- Use Split Section component as base
- Replace right image with custom SVG/CSS visualization
- Circles should animate on scroll (grow from 0 to full size)
- Timeline moments should have separators between them
- Mobile: Stack vertically, visualization on top

---

## 📍 SECTION 08: THE INVITATION - "SOFT, NEVER PUSHY"

### Component Used
**Text Section (Centered Column)** (Component #07 from library)

### Layout Specifications
- Full-screen height or near full-screen
- Centered vertically and horizontally
- Background: `#FFFFFF` (Pure White)
- Minimal, spacious
- Top divider line: `#333611` at 10% opacity

### Content Mapping

```html
<section class="invitation-section">
  <div class="invitation-section__divider"></div>
  
  <div class="invitation-section__content">
    <p class="invitation-section__prelude">So here's the question:</p>
    
    <h2 class="invitation-section__question">
      What would you do<br>
      with 25% more energy?
    </h2>
    
    <div class="invitation-section__prompts">
      <p>What would you create?</p>
      <p>Who would you become?</p>
      <p>What would you stop tolerating?</p>
    </div>
    
    <div class="invitation-section__spacer"></div>
    
    <p class="invitation-section__closing">
      Your cells are ready.<br>
      The question is:<br>
      <strong>Are you?</strong>
    </p>
    
    <div class="invitation-section__ctas">
      <a href="#essential" class="btn btn--secondary btn--large">
        Start Essential →
      </a>
      <a href="#precision" class="btn btn--secondary btn--large">
        Explore Precision →
      </a>
    </div>
  </div>
</section>
```

### Special Styling
```css
.invitation-section {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 200px 40px;
  background: var(--color-white);
  position: relative;
}

.invitation-section__divider {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: rgba(51, 54, 17, 0.1);
}

.invitation-section__content {
  max-width: 800px;
  text-align: center;
}

.invitation-section__prelude {
  font-family: var(--font-sans);
  font-size: 18px;
  color: rgba(51, 54, 17, 0.7);
  margin-bottom: 32px;
}

.invitation-section__question {
  font-family: var(--font-serif);
  font-size: 64px;
  line-height: 1.3;
  color: var(--color-olive);
  margin-bottom: 48px;
}

.invitation-section__prompts {
  font-family: var(--font-sans);
  font-size: 24px;
  line-height: 1.8;
  color: var(--color-olive);
  margin-bottom: 80px;
}

.invitation-section__spacer {
  height: 120px; /* Intentional empty space */
}

.invitation-section__closing {
  font-family: var(--font-serif);
  font-size: 32px;
  line-height: 1.6;
  color: var(--color-olive);
  margin-bottom: 64px;
}

.invitation-section__ctas {
  display: flex;
  gap: 24px;
  justify-content: center;
}

/* Mobile */
@media (max-width: 767px) {
  .invitation-section__question {
    font-size: 40px;
  }
  
  .invitation-section__prompts {
    font-size: 20px;
  }
  
  .invitation-section__closing {
    font-size: 28px;
  }
  
  .invitation-section__ctas {
    flex-direction: column;
    width: 100%;
  }
}
```

### Assembly Notes
- This section should feel spacious and contemplative
- Large intentional empty space between prompts and closing
- Buttons should have equal visual weight
- Mobile: Stack buttons vertically, full width

---

## 📍 SECTION 09: THE QUIET - "EDUCATION WITHOUT LECTURE"

### Component Used
**FAQ Accordion** (New component needed - adapt from Card)

### Layout Specifications
- Single column, centered
- Max-width: `800px`
- Background: `#F8F6F0` (Soft Cream)
- Padding: `200px 60px` (desktop)

### Content Mapping

```html
<section class="faq-section">
  <h2 class="faq-section__header">Common Questions</h2>
  
  <div class="faq-list">
    <!-- FAQ Item 1 -->
    <div class="faq-item">
      <button class="faq-item__question">
        "I've tried supplements before. They didn't work."
      </button>
      <div class="faq-item__answer">
        <p>Most supplements are designed for average.<br>
        You are not average.</p>
        
        <p>Your genetics, your deficiencies, your life—<br>
        none of it is average.</p>
        
        <p>Lab1 doesn't guess. We measure.</p>
      </div>
    </div>
    
    <!-- FAQ Item 2 -->
    <div class="faq-item">
      <button class="faq-item__question">
        "Is this another subscription trap?"
      </button>
      <div class="faq-item__answer">
        <p>No. This is a partnership.</p>
        
        <p>You can pause, skip, or stop anytime.<br>
        We're here when you need us,<br>
        not holding you hostage.</p>
      </div>
    </div>
    
    <!-- FAQ Item 3 -->
    <div class="faq-item">
      <button class="faq-item__question">
        "What if I don't want testing?"
      </button>
      <div class="faq-item__answer">
        <p>Then start with Essential.</p>
        
        <p>No tests, no wait, just premium formulas<br>
        for your stage of life.</p>
        
        <p>When you're curious about precision,<br>
        we'll be here.</p>
      </div>
    </div>
    
    <!-- FAQ Item 4 -->
    <div class="faq-item">
      <button class="faq-item__question">
        "How long until I feel different?"
      </button>
      <div class="faq-item__answer">
        <p>Most people notice shifts in 4-6 weeks.<br>
        Energy stabilizes. Fog lifts. Sleep deepens.</p>
        
        <p>But optimization is a 9-month journey.</p>
        
        <p>We're not selling you a quick fix.<br>
        We're offering you a return to yourself.</p>
      </div>
    </div>
  </div>
</section>
```

### FAQ Component Styling
```css
.faq-section {
  padding: 200px 60px;
  background: var(--color-cream);
}

.faq-section__header {
  font-family: var(--font-serif);
  font-size: 48px;
  color: var(--color-olive);
  text-align: center;
  margin-bottom: 80px;
}

.faq-list {
  max-width: 800px;
  margin: 0 auto;
}

.faq-item {
  border-top: 1px solid rgba(51, 54, 17, 0.15);
  padding: 40px 0;
}

.faq-item:last-child {
  border-bottom: 1px solid rgba(51, 54, 17, 0.15);
}

.faq-item__question {
  width: 100%;
  text-align: left;
  background: none;
  border: none;
  font-family: var(--font-sans);
  font-size: 20px;
  font-weight: 500;
  color: var(--color-olive);
  cursor: pointer;
  padding: 0;
  padding-left: 32px;
  position: relative;
  transition: color 200ms ease;
}

.faq-item__question::before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 3px;
  height: 0;
  background: var(--color-olive);
  transition: height 200ms ease;
}

.faq-item__question:hover {
  color: var(--color-olive);
}

.faq-item__question:hover::before {
  height: 100%;
}

.faq-item__answer {
  font-family: var(--font-sans);
  font-size: 18px;
  line-height: 1.7;
  color: rgba(51, 54, 17, 0.8);
  padding-left: 32px;
  margin-top: 24px;
  max-height: 0;
  overflow: hidden;
  transition: max-height 400ms ease, margin-top 400ms ease;
}

.faq-item--open .faq-item__answer {
  max-height: 500px;
  margin-top: 24px;
}

.faq-item__answer p {
  margin-bottom: 16px;
}

.faq-item__answer p:last-child {
  margin-bottom: 0;
}

/* Mobile */
@media (max-width: 767px) {
  .faq-section {
    padding: 80px 24px;
  }
  
  .faq-section__header {
    font-size: 36px;
    margin-bottom: 48px;
  }
  
  .faq-item__question {
    font-size: 18px;
  }
  
  .faq-item__answer {
    font-size: 16px;
  }
}
```

### Assembly Notes
- Questions should be styled as the user's voice (quotes, personal)
- Answers should be honest and direct (no corporate speak)
- Accordion should expand/collapse smoothly
- Hover state: Subtle left border appears
- Mobile: Reduce font sizes, maintain readability

---

## 📍 SECTION 10: THE CLOSE - "FOOTER AS FAREWELL"

### Component Used
**Footer (Multi-Column)** (Component #12 from library)

### Layout Specifications
- Background: `#333611` (Deep Olive - inverted from typical footer)
- Text: `#F8F6F0` (Soft Cream)
- Padding: `100px 60px 40px` (desktop)
- Multi-column layout

### Content Mapping

```html
<footer class="footer" style="background: var(--color-olive);">
  <div class="footer__intro">
    <div class="footer__logo">LAB1</div>
    <p class="footer__tagline">
      We design the biology of you.<br><br>
      Not who you should be.<br>
      Not who wellness culture says you should become.<br><br>
      You. Optimized. Fully yourself.
    </p>
  </div>
  
  <div class="footer__columns">
    <div class="footer__column">
      <h4 class="footer__title">EXPLORE</h4>
      <ul class="footer__links">
        <li><a href="#essential">Essential Line</a></li>
        <li><a href="#precision">Precision Line</a></li>
        <li><a href="#gift">Gift Lab1</a></li>
      </ul>
    </div>
    
    <div class="footer__column">
      <h4 class="footer__title">LEARN</h4>
      <ul class="footer__links">
        <li><a href="#story">Our Story</a></li>
        <li><a href="#science">The Science</a></li>
        <li><a href="#faq">FAQ</a></li>
      </ul>
    </div>
    
    <div class="footer__column">
      <h4 class="footer__title">CONNECT</h4>
      <ul class="footer__links">
        <li><a href="mailto:hello@lab1.com">hello@lab1.com</a></li>
        <li><a href="#instagram">Instagram</a></li>
      </ul>
    </div>
  </div>
  
  <div class="footer__bottom">
    <p class="footer__copyright">
      © 2024 Lab1. Made with care for your cells.
    </p>
  </div>
</footer>
```

### Special Footer Styling
```css
.footer {
  background: var(--color-olive);
  color: var(--color-cream);
}

.footer__intro {
  text-align: center;
  max-width: 700px;
  margin: 0 auto 80px;
}

.footer__logo {
  font-family: var(--font-sans);
  font-size: 32px;
  font-weight: 600;
  letter-spacing: 0.15em;
  color: var(--color-white);
  margin-bottom: 32px;
}

.footer__tagline {
  font-family: var(--font-serif);
  font-size: 20px;
  line-height: 1.8;
  color: var(--color-cream);
}

.footer__columns {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 60px;
  max-width: 900px;
  margin: 0 auto 60px;
  padding-bottom: 60px;
  border-bottom: 1px solid rgba(248, 246, 240, 0.2);
}

.footer__title {
  font-family: var(--font-sans);
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-white);
  margin-bottom: 24px;
  text-align: center;
}

.footer__links {
  list-style: none;
  padding: 0;
  text-align: center;
}

.footer__links li {
  margin-bottom: 16px;
}

.footer__links a {
  font-family: var(--font-sans);
  font-size: 16px;
  color: rgba(248, 246, 240, 0.8);
  text-decoration: none;
  transition: color 200ms ease;
}

.footer__links a:hover {
  color: var(--color-white);
}

.footer__bottom {
  text-align: center;
}

.footer__copyright {
  font-family: var(--font-sans);
  font-size: 12px;
  color: rgba(248, 246, 240, 0.6);
}

/* Mobile */
@media (max-width: 767px) {
  .footer__columns {
    grid-template-columns: 1fr;
    gap: 40px;
  }
}
```

### Assembly Notes
- Footer uses Deep Olive background (inverted from typical)
- Tagline should be prominent and poetic
- Keep columns minimal and centered
- Links should be simple (no social media icons, just text)
- Copyright message reinforces brand voice ("Made with care for your cells")

---

## ✅ COMPLETE ASSEMBLY CHECKLIST

### Pre-Build Verification
- [ ] All components from library are available
- [ ] All content has been finalized and copy-edited
- [ ] All images have been sourced and optimized
- [ ] Color system CSS variables are set up
- [ ] Typography system CSS variables are set up
- [ ] Spacing system CSS variables are set up

### Build Order
1. [ ] Set up Navigation (Component #11)
2. [ ] Build Hero (Section 01)
3. [ ] Build The Truth (Section 02)
4. [ ] Build The Mirror (Section 03)
5. [ ] Build The Reveal (Section 04)
6. [ ] Build Two Paths (Section 05)
7. [ ] Build Process (Section 06)
8. [ ] Build The Proof (Section 07)
9. [ ] Build Invitation (Section 08)
10. [ ] Build FAQ (Section 09)
11. [ ] Build Footer (Section 10)

### Post-Build Testing
- [ ] Scroll through entire page at normal speed
- [ ] Check emotional pacing (does it feel like a story?)
- [ ] Verify all animations trigger correctly
- [ ] Test all CTAs and links
- [ ] Mobile: Test all sections on 375px width
- [ ] Tablet: Test all sections on 768px width
- [ ] Desktop: Test all sections on 1440px width

---

## 📊 PAGE STATISTICS

**Total Sections:** 10
**Estimated Scroll Depth:** 8,000-10,000px (desktop)
**Average Section Height:** 800-1,000px
**Components Used:** 8 different component types
**Custom Components:** 3 (Timeline, FAQ, Invitation)
**Background Colors Used:** 4 (White, Cream, Charcoal, Deep Olive)
**Typography Hierarchy:** 7 levels
**Total CTAs:** 5 major (Listen, Begin, Discover, Start, Explore)

---

**Next Document:** `07_CONTENT_WIREFRAMES.md` - Text-based wireframes showing exact content layout for each section.

---

*Document Version: 1.0*
*Page Structure for: Lab1 Homepage*
*Total Build Time Estimate: 40-60 hours*
*Component Library Required: 05_COMPONENT_LIBRARY.md*
