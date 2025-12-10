# SUBPAGE: ABOUT
## Lab1 Website - Origin Story & Values

**Page Purpose:** Humanize the brand. Reveal the "why" behind Lab1. Build trust through vulnerability and mission clarity.

**Emotional Goal:** Curiosity → Connection → Trust in the people

**Page URL:** `/about`

**Navigation Label:** About

---

## 📐 PAGE STRUCTURE

```
01. Hero - "We started Lab1 because we were tired too."
02. The Origin Story
03. The Founding Insight
04. What We Believe (Values)
05. Who This Is For
06. Who This Isn't For (Honesty)
07. The Team (Optional - if you have team members)
08. What Success Looks Like
09. FAQ (About-specific)
10. Footer
```

**Estimated Scroll Depth:** 5,000-6,000px
**Average Time on Page:** 4-5 minutes
**Key Goal:** Connection and trust through authenticity

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
║  04                                  ABOUT                     ║
║  [160px mono]                        [14px sans, top-right]   ║
║                                                                ║
║  [40px gap]                                                    ║
║                                                                ║
║  We started Lab1 because                                       ║
║  we were tired too.                                            ║
║  [96px Serif, olive, LEFT-aligned, max-width 650px]           ║
║                                                                ║
║  [32px gap]                                                    ║
║                                                                ║
║  │  Not sleepy. Not lazy.                                     ║
║  │  Tired in a way coffee couldn't fix.                       ║
║  │  Tired in a way rest didn't cure.                          ║
║  [20px Sans, olive 70%, LEFT-aligned, 4px vertical rule]      ║
║                                                                ║
║  [24px gap]                                                    ║
║                                                                ║
║  │  We were living at 60%.                                    ║
║  │  And everyone kept saying that was normal.                 ║
║  [20px Sans, italic, olive, LEFT-aligned, same vertical rule] ║
║                                                                ║
║  [80px vertical space]                                         ║
║                                                                ║
╚════════════════════════════════════════════════════════════════╝

Background: #F8F6F0 (Soft Cream) - solid, no images
Height: 60vh (significantly shorter than homepage's 100vh)
Text: LEFT-aligned (different from homepage's centered)
Page Number: Large "04" (editorial chapter marker)
```

### Content
```html
<!-- Breadcrumb navigation (subpages only) -->
<nav class="breadcrumb">
  <a href="/">Home</a> / <span>About</span>
</nav>

<section class="subpage-hero">
  <div class="subpage-hero__container">
    <!-- Page number (left) and label (right) -->
    <div class="subpage-hero__header">
      <span class="subpage-hero__number">04</span>
      <span class="subpage-hero__label">About</span>
    </div>
    
    <!-- Headline (left-aligned, half-width) -->
    <h1 class="subpage-hero__headline">
      We started Lab1 because<br>
      we were tired too.
    </h1>
    
    <!-- Body text with vertical rule -->
    <div class="subpage-hero__body">
      <p>
        Not sleepy. Not lazy.<br>
        Tired in a way coffee couldn't fix.<br>
        Tired in a way rest didn't cure.
      </p>
      
      <p class="subpage-hero__question">
        We were living at 60%.<br>
        And everyone kept saying that was normal.
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

## 🎯 SECTION 02: THE ORIGIN STORY

### Component
Text Section (Centered Column) - Narrative style

### Content
```html
<section class="text-section">
  <div class="text-section__container" style="max-width: 700px;">
    <h2 class="text-section__headline">
      How this started
    </h2>
    
    <p>It began with a simple question:</p>
    
    <p class="emphasis">"Why do I feel this way?"</p>
    
    <p>Not sick enough for a diagnosis.<br>
    Not well enough to feel alive.</p>
    
    <p>Doctors ran tests. Everything came back "normal."<br>
    Ferritin at 22 ng/mL. Vitamin D at 28 ng/mL.<br>
    Technically within range. Functionally deficient.</p>
    
    <p>So we kept searching.</p>
    
    <p>We found research showing that "normal" ranges<br>
    are based on sick populations, not optimal ones.</p>
    
    <p>We found studies on genetic variants—<br>
    40% of people can't convert folic acid,<br>
    but generic supplements don't account for this.</p>
    
    <p>We found that precision nutrition existed<br>
    for athletes and biohackers,<br>
    but not for regular people who were just tired.</p>
    
    <p class="emphasis">So we built it.</p>
    
    <p>Lab1 is what we needed when we were exhausted<br>
    and no one was listening.</p>
    
    <p>This is the supplement company we wished existed.</p>
  </div>
</section>
```

### Styling
- Background: `#FFFFFF` (Pure White)
- Emphasis paragraphs: Medium weight, slightly larger
- First-person voice intentional (builds connection)

---

## 🎯 SECTION 03: THE FOUNDING INSIGHT

### Component
Large Pullquote Section

### Content
```html
<section class="insight-section">
  <div class="insight-section__container">
    <blockquote class="insight-quote">
      "The body doesn't lie.<br>
      It speaks in symptoms.<br>
      We just needed to learn its language."
    </blockquote>
    
    <p class="insight-attribution">
      — The realization that changed everything
    </p>
  </div>
</section>
```

### Styling
```css
.insight-section {
  padding: 200px 60px;
  background: var(--color-cream);
  text-align: center;
}

.insight-quote {
  font-family: var(--font-serif);
  font-size: 48px;
  line-height: 1.4;
  color: var(--color-olive);
  max-width: 800px;
  margin: 0 auto 32px;
  font-style: italic;
}

.insight-attribution {
  font-family: var(--font-sans);
  font-size: 16px;
  color: rgba(51, 54, 17, 0.6);
}

/* Mobile */
@media (max-width: 767px) {
  .insight-quote {
    font-size: 32px;
  }
}
```

---

## 🎯 SECTION 04: WHAT WE BELIEVE (VALUES)

### Component
Grid of Value Cards

### Content
```html
<section class="values-section">
  <h2 class="values-section__header">
    What we believe
  </h2>
  
  <div class="values-grid">
    <div class="value-card">
      <h3 class="value-card__title">Biology over marketing</h3>
      <p class="value-card__description">
        We don't make claims we can't measure.<br>
        We don't promise miracles.<br>
        We show you the data. You decide.
      </p>
    </div>
    
    <div class="value-card">
      <h3 class="value-card__title">Precision over guesswork</h3>
      <p class="value-card__description">
        Your genetics determine your needs.<br>
        Your biomarkers show what's working.<br>
        Generic supplements can't account for this.
      </p>
    </div>
    
    <div class="value-card">
      <h3 class="value-card__title">Partnership over product</h3>
      <p class="value-card__description">
        This isn't a one-time purchase.<br>
        This is a relationship with your biology.<br>
        We're here for the long game.
      </p>
    </div>
    
    <div class="value-card">
      <h3 class="value-card__title">Honesty over hype</h3>
      <p class="value-card__description">
        Supplements aren't magic.<br>
        Optimization takes 9-12 months.<br>
        We'll tell you what we can't fix.
      </p>
    </div>
    
    <div class="value-card">
      <h3 class="value-card__title">Quality over cost-cutting</h3>
      <p class="value-card__description">
        Active forms. Therapeutic doses.<br>
        Third-party testing. No fillers.<br>
        We don't compromise on ingredients.
      </p>
    </div>
    
    <div class="value-card">
      <h3 class="value-card__title">You over averages</h3>
      <p class="value-card__description">
        "Normal" doesn't mean optimal.<br>
        "Within range" doesn't mean thriving.<br>
        We optimize for YOU.
      </p>
    </div>
  </div>
</section>
```

### Styling - Value Cards
```css
.values-section {
  padding: 200px 60px;
  background: var(--color-white);
}

.values-section__header {
  font-family: var(--font-serif);
  font-size: 64px;
  text-align: center;
  color: var(--color-olive);
  margin-bottom: 80px;
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  max-width: 1200px;
  margin: 0 auto;
}

.value-card {
  padding: 40px;
  background: var(--color-cream);
  border: 1px solid rgba(51, 54, 17, 0.1);
  transition: all 300ms ease-out;
}

.value-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(51, 54, 17, 0.08);
}

.value-card__title {
  font-family: var(--font-sans);
  font-size: 24px;
  font-weight: 600;
  color: var(--color-olive);
  margin-bottom: 16px;
}

.value-card__description {
  font-family: var(--font-sans);
  font-size: 16px;
  line-height: 1.7;
  color: rgba(51, 54, 17, 0.7);
}

/* Mobile: Stack to single column */
@media (max-width: 1023px) {
  .values-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 767px) {
  .values-grid {
    grid-template-columns: 1fr;
  }
}
```

---

## 🎯 SECTION 05: WHO THIS IS FOR

### Component
Two-Column Layout

### Layout
```
╔══════════════════════════════╦════════════════════════════════════╗
║  LEFT (50%)                  ║  RIGHT (50%)                       ║
║  Background: #F8F6F0         ║  Background: #FFFFFF               ║
╠══════════════════════════════╬════════════════════════════════════╣
║                              ║                                    ║
║  WHO THIS IS FOR             ║  Lab1 is designed for people who:  ║
║  [48px Serif]                ║                                    ║
║                              ║  • Wake up tired despite sleeping  ║
║  This is for you if          ║  • Can't focus by 2pm              ║
║  you've been living at 60%   ║  • Get "normal" test results but   ║
║  and everyone keeps saying   ║    don't feel normal               ║
║  that's normal.              ║  • Want data, not guesses          ║
║                              ║  • Are tired of generic solutions  ║
║                              ║  • Actually want to feel better    ║
║                              ║                                    ║
╚══════════════════════════════╩════════════════════════════════════╝
```

### Content - Left Side
```html
<div class="for-you__content">
  <h2 class="for-you__title">WHO THIS IS FOR</h2>
  
  <p class="for-you__intro">
    This is for you if you've been living at 60%<br>
    and everyone keeps saying that's normal.
  </p>
  
  <p>You're not sick enough for a diagnosis.<br>
  You're not well enough to feel alive.</p>
  
  <p>You've tried:<br>
  More sleep (didn't help)<br>
  More exercise (made you more tired)<br>
  Generic multivitamins (no difference)<br>
  Elimination diets (temporary relief at best)</p>
  
  <p class="emphasis">You know something's wrong.<br>
  You just don't have the data to prove it.</p>
  
  <p>That's who we built this for.</p>
</div>
```

### Content - Right Side
```html
<div class="for-you__list">
  <h3 class="for-you__subtitle">Lab1 is designed for people who:</h3>
  
  <ul class="checklist">
    <li>Wake up tired despite 7-8 hours of sleep</li>
    <li>Can't focus by 2pm, need constant caffeine</li>
    <li>Get "normal" test results but don't feel normal</li>
    <li>Have brain fog that won't clear</li>
    <li>Recover slowly from illness or stress</li>
    <li>Feel like they're running on fumes</li>
    <li>Want data, not guesses</li>
    <li>Are tired of one-size-fits-all solutions</li>
    <li>Actually want to optimize, not just survive</li>
    <li>Are willing to invest in precision</li>
  </ul>
  
  <p class="for-you__footer">
    If you're reading this and thinking "that's me,"<br>
    we built Lab1 for you.
  </p>
</div>
```

### Styling - Checklist
```css
.checklist {
  list-style: none;
  padding: 0;
}

.checklist li {
  font-family: var(--font-sans);
  font-size: 18px;
  line-height: 1.7;
  color: var(--color-olive);
  padding-left: 32px;
  position: relative;
  margin-bottom: 16px;
}

.checklist li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--color-olive);
  font-weight: 600;
}
```

---

## 🎯 SECTION 06: WHO THIS ISN'T FOR (HONESTY)

### Component
Text Section (Centered) - Dark Background

### Content
```html
<section class="text-section text-section--dark">
  <div class="text-section__container" style="max-width: 700px;">
    <h2 class="text-section__headline">
      Who this isn't for
    </h2>
    
    <p>Honesty requires clarity about limitations.</p>
    
    <p><strong>Lab1 isn't for you if:</strong></p>
    
    <ul class="simple-list">
      <li>You want overnight results (optimization takes 9-12 months)</li>
      <li>You're looking for a magic pill (supplements support, they don't cure)</li>
      <li>You don't want to track progress (Precision Path requires retesting)</li>
      <li>You have an active eating disorder (please work with specialists first)</li>
      <li>You're pregnant or breastfeeding without doctor approval</li>
      <li>You want something cheap (quality ingredients cost more)</li>
    </ul>
    
    <p class="emphasis">We're not for everyone.<br>
    And that's okay.</p>
    
    <p>If you're looking for quick fixes or miracle claims,<br>
    there are hundreds of supplement companies that will promise you that.</p>
    
    <p>We're not one of them.</p>
    
    <p>We're here for the people who want precision,<br>
    who value data,<br>
    who are willing to invest time and money<br>
    in actually feeling better.</p>
  </div>
</section>
```

### Styling
- Background: `#2A2A2A` (Charcoal - dark section)
- Text: `#FFFFFF` (White)
- Creates contrast and emphasis on honesty

---

## 🎯 SECTION 07: THE TEAM (OPTIONAL)

### Component
Team Grid (if you have team members to show)

### Content
```html
<section class="team-section">
  <h2 class="team-section__header">
    Who we are
  </h2>
  
  <div class="team-grid">
    <div class="team-member">
      <div class="team-member__image">
        <!-- Image placeholder or actual photo -->
        <div class="team-member__placeholder"></div>
      </div>
      <h3 class="team-member__name">Your Name</h3>
      <p class="team-member__title">Founder & CEO</p>
      <p class="team-member__bio">
        Former chronically fatigued person who learned to speak the language of cells.
      </p>
    </div>
    
    <!-- Add more team members as needed -->
  </div>
  
  <p class="team-section__footer">
    Plus advisors in genetics, nutrition, and functional medicine.<br>
    We're small. We're focused. We care.
  </p>
</section>
```

### Alternative (if no team photos)
```html
<section class="text-section">
  <div class="text-section__container" style="max-width: 700px;">
    <h2 class="text-section__headline">
      Who we are
    </h2>
    
    <p>We're a small team of scientists, nutritionists, and formerly exhausted people.</p>
    
    <p>Some of us have PhDs in genetics.<br>
    Some of us have certifications in functional nutrition.<br>
    All of us have lived experience with fatigue that doctors dismissed.</p>
    
    <p>We're advised by:</p>
    <ul>
      <li>Geneticists who understand nutrigenomic variants</li>
      <li>Functional medicine doctors who look beyond "normal" ranges</li>
      <li>Nutritionists who know the difference between RDA and optimal</li>
    </ul>
    
    <p>We're not trying to disrupt an industry.<br>
    We're trying to help people feel better.</p>
  </div>
</section>
```

---

## 🎯 SECTION 08: WHAT SUCCESS LOOKS LIKE

### Component
Text Section with Success Stories (Anonymous)

### Content
```html
<section class="success-section">
  <h2 class="success-section__header">
    What success looks like for us
  </h2>
  
  <div class="success-grid">
    <div class="success-quote">
      <p class="success-quote__text">
        "I woke up on a Tuesday and realized I hadn't needed coffee.<br>
        I'd forgotten what that felt like."
      </p>
      <p class="success-quote__attribution">— Lab1 member, 3 months in</p>
    </div>
    
    <div class="success-quote">
      <p class="success-quote__text">
        "My ferritin went from 18 to 72.<br>
        I didn't know numbers could make me cry."
      </p>
      <p class="success-quote__attribution">— Lab1 member, 6 months in</p>
    </div>
    
    <div class="success-quote">
      <p class="success-quote__text">
        "For the first time in years, I worked a full day and still wanted to see friends at night."
      </p>
      <p class="success-quote__attribution">— Lab1 member, 9 months in</p>
    </div>
    
    <div class="success-quote">
      <p class="success-quote__text">
        "I stopped accepting 'tired' as my baseline.<br>
        Lab1 showed me what I was actually capable of."
      </p>
      <p class="success-quote__attribution">— Lab1 member, 12 months in</p>
    </div>
  </div>
  
  <div class="success-section__footer">
    <p>Success isn't a transformation photo.</p>
    <p class="emphasis">It's remembering what energy feels like.</p>
  </div>
</section>
```

### Styling - Success Quotes
```css
.success-section {
  padding: 200px 60px;
  background: var(--color-cream);
}

.success-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
  max-width: 1000px;
  margin: 0 auto 80px;
}

.success-quote {
  padding: 40px;
  background: var(--color-white);
  border-left: 3px solid var(--color-olive);
}

.success-quote__text {
  font-family: var(--font-sans);
  font-size: 18px;
  line-height: 1.7;
  color: var(--color-olive);
  margin-bottom: 16px;
  font-style: italic;
}

.success-quote__attribution {
  font-family: var(--font-mono);
  font-size: 14px;
  color: rgba(51, 54, 17, 0.6);
}

/* Mobile: Stack to single column */
@media (max-width: 767px) {
  .success-grid {
    grid-template-columns: 1fr;
  }
}
```

---

## 🎯 SECTION 09: FAQ (ABOUT-SPECIFIC)

### Component
FAQ Accordion

### Content
```html
<section class="faq-section">
  <h2 class="faq-section__header">Common Questions</h2>
  
  <div class="faq-list">
    <div class="faq-item">
      <button class="faq-item__question">
        "Why should I trust you?"
      </button>
      <div class="faq-item__answer">
        <p>You shouldn't. Not immediately.</p>
        
        <p>Trust is earned through:<br>
        - Transparent science (we show our methodology)<br>
        - Honest limitations (we tell you what we can't do)<br>
        - Real results (we track biomarkers, not feelings)<br>
        - No-pressure approach (cancel anytime)</p>
        
        <p>Start small. See if it works. Trust follows results.</p>
      </div>
    </div>
    
    <div class="faq-item">
      <button class="faq-item__question">
        "Are you a startup that's going to disappear?"
      </button>
      <div class="faq-item__answer">
        <p>Fair concern. Here's what we can say:</p>
        
        <p>We're building this to last, not to exit.<br>
        Our model is sustainable (recurring revenue from people who feel better).<br>
        We're not venture-funded with pressure to grow at all costs.</p>
        
        <p>We're here for your 9-12 month optimization journey.<br>
        And the years after that.</p>
      </div>
    </div>
    
    <div class="faq-item">
      <button class="faq-item__question">
        "Why are you called Lab1?"
      </button>
      <div class="faq-item__answer">
        <p>Two reasons:</p>
        
        <p>1. Lab = We're science-first, data-driven<br>
        2. 1 = You're not average. You're an n of 1.</p>
        
        <p>Every person is their own experiment.<br>
        We're the lab helping you understand yours.</p>
      </div>
    </div>
    
    <div class="faq-item">
      <button class="faq-item__question">
        "What's your business model?"
      </button>
      <div class="faq-item__answer">
        <p>Simple: Monthly subscriptions.</p>
        
        <p>Essential Path: $89/month<br>
        Precision Path: $199/month (testing included)</p>
        
        <p>No hidden fees. No upsells.<br>
        We make money when you feel better and keep subscribing.</p>
        
        <p>Our incentive is your results.</p>
      </div>
    </div>
    
    <div class="faq-item">
      <button class="faq-item__question">
        "Can I talk to a real human?"
      </button>
      <div class="faq-item__answer">
        <p>Yes. Always.</p>
        
        <p>Email: hello@lab1.com<br>
        Response time: Within 24 hours (usually faster)</p>
        
        <p>Every member has access to our care team.<br>
        Real people. Not chatbots.</p>
      </div>
    </div>
    
    <div class="faq-item">
      <button class="faq-item__question">
        "What happens to Lab1 members' data long-term?"
      </button>
      <div class="faq-item__answer">
        <p>Your data is yours. Forever.</p>
        
        <p>We store it encrypted and separately from your identity.<br>
        We never sell it. We never share it.<br>
        We use it only to formulate your supplements.</p>
        
        <p>You can download your complete data anytime.<br>
        You can request deletion anytime.</p>
      </div>
    </div>
  </div>
</section>
```

---

## 🎯 SECTION 10: FOOTER

Use standard footer component from homepage.

Add one modification:
```html
<div class="footer__intro">
  <div class="footer__logo">LAB1</div>
  <p class="footer__tagline">
    For the body you have.<br>
    Not the one you're supposed to want.<br><br>
    Built by people who were tired of being tired.
  </p>
</div>
```

---

## 🎨 COLOR TREATMENT

**Section Backgrounds:**
- Hero: `#F8F6F0` (Cream)
- Origin Story: `#FFFFFF` (White)
- Founding Insight: `#F8F6F0` (Cream) - Pullquote emphasis
- What We Believe: `#FFFFFF` (White)
- Who This Is For: `#F8F6F0` + `#FFFFFF` (split)
- Who This Isn't For: `#2A2A2A` (Charcoal - dark honesty!)
- The Team: `#FFFFFF` (White)
- What Success Looks Like: `#F8F6F0` (Cream)
- FAQ: `#FFFFFF` (White)
- Footer: `#333611` (Olive)

**Rhythm:** Cream → White → Cream → White → Cream/White → DARK → White → Cream → White → Dark

---

## 📱 MOBILE ADAPTATIONS

**Values Grid:**
- 3 columns → 2 columns → 1 column

**Who This Is For:**
- Stack vertically (left content on top, right list below)

**Success Quotes:**
- 2 columns → 1 column

**Team Grid:**
- 3-4 columns → 2 columns → 1 column

---

## ✅ BUILD CHECKLIST

- [ ] Hero (personal, vulnerable opening)
- [ ] Origin Story (first-person narrative)
- [ ] Founding Insight (large pullquote)
- [ ] Values (6-card grid)
- [ ] Who This Is For (split section, checklist)
- [ ] Who This Isn't For (dark section, honesty)
- [ ] Team section (optional, can be text-only)
- [ ] Success Stories (anonymous quotes)
- [ ] FAQ (about-specific questions)
- [ ] Footer (modified tagline)
- [ ] Mobile: all sections stack properly

---

## 🎯 SUCCESS METRICS

**User understands:**
- ✅ Why Lab1 exists (founders were tired too)
- ✅ What Lab1 values (biology over marketing, honesty over hype)
- ✅ Who it's for (people living at 60% told it's normal)
- ✅ Who it's not for (people wanting quick fixes)

**User feels:**
- ✅ Seen ("That's my story too")
- ✅ Connected (human founders, real experiences)
- ✅ Trusted (honesty about limitations)
- ✅ Understood (knows if this is for them or not)

**Conversion Goal:**
- 50% navigate to "How It Works" or homepage CTA
- 30% read Science page for more validation
- 20% bookmark to decide later

---

## 💡 VOICE & TONE NOTES

**This page is different:**
- More personal (first-person "we")
- More vulnerable (we were tired too)
- More honest (who this isn't for)
- More human (real stories, not stats)

**Key phrases to include:**
- "We built Lab1 because we needed it"
- "We were living at 60%"
- "Everyone kept saying that was normal"
- "We learned to speak the language of cells"
- "This is for people who are tired of being tired"

**Avoid:**
- Corporate speak
- Third-person distance
- Perfection narratives
- Founder hero stories

**Embrace:**
- Vulnerability
- Shared experience
- Honest limitations
- Human connection

---

*Document Version: 1.0*
*Subpage: About*
*URL: /about*
*Build Time Estimate: 15-20 hours*
