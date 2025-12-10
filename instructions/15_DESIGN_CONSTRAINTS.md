# 15. DESIGN CONSTRAINTS (SCOPE)
## The Guardrails - What AI Must NOT Do

**Purpose:** This document defines strict boundaries and forbidden patterns. These are non-negotiable rules that prevent the AI from deviating from Lab1's design vision. Think of this as the "scope" that keeps the AI focused and prevents generic AI aesthetics.

**Critical Note:** These constraints are MORE important than feature requests. If a user request conflicts with these constraints, follow the constraints.

---

## 🚫 FORBIDDEN VISUAL PATTERNS

### ❌ NO Border-Radius
```css
/* FORBIDDEN */
border-radius: 8px;
border-radius: 50%;
border-radius: 4px;

/* CORRECT */
border-radius: 0px; /* Sharp corners everywhere */
```

**Why:** Rounded corners feel generic and "startup-y". Lab1 is editorial and intentional. Sharp corners create sophistication.

**Exception:** NONE. Even circles for data visualization should be created with SVG, not CSS border-radius.

---

### ❌ NO Gradients
```css
/* FORBIDDEN */
background: linear-gradient(to bottom, #333611, #F8F6F0);
background: radial-gradient(circle, rgba(51,54,17,1) 0%, rgba(51,54,17,0) 100%);

/* CORRECT */
background: #F8F6F0; /* Solid colors only */
```

**Why:** Gradients add visual complexity that dilutes the clean, editorial aesthetic. Lab1 uses negative space and solid colors.

**Exception:** NONE. Not even for buttons, overlays, or hover states.

---

### ❌ NO Box-Shadows in Default State
```css
/* FORBIDDEN */
.card {
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

/* CORRECT */
.card {
  box-shadow: none; /* No shadow by default */
}

.card:hover {
  box-shadow: 0 12px 24px rgba(51, 54, 17, 0.1); /* Shadow ONLY on hover */
}
```

**Why:** Default shadows create visual noise. Shadows should appear only on interaction to indicate affordance.

**Exception:** Hover states and active states ONLY.

---

### ❌ NO Additional Colors
```css
/* FORBIDDEN - ONLY 4 COLORS ALLOWED */
--color-blue: #4A90E2;
--color-green: #7ED321;
--color-red: #D0021B;

/* CORRECT - THE ONLY 4 COLORS */
--color-olive: #333611;
--color-cream: #F8F6F0;
--color-white: #FFFFFF;
--color-charcoal: #2A2A2A;
```

**Why:** Lab1's 4-color palette is intentional and sufficient. Additional colors break the cohesive system.

**Exception:** NONE. Use opacity variants instead (e.g., `rgba(51, 54, 17, 0.6)` for lighter olive).

---

### ❌ NO Decorative Elements
```html
<!-- FORBIDDEN -->
<div class="decorative-line"></div>
<span class="accent-dot"></span>
<div class="background-shape"></div>
<img src="decorative-flourish.svg" />

<!-- CORRECT -->
<!-- Every element serves content, not decoration -->
```

**Why:** Lab1 is about negative space and content. Decorative elements are visual clutter.

**Exception:** NONE. If it doesn't serve the content, remove it.

---

### ❌ NO Icon Libraries
```html
<!-- FORBIDDEN -->
<i class="fa fa-chevron-right"></i>
<svg class="icon-check">...</svg>
<img src="icon-arrow.png" />

<!-- CORRECT -->
Use text arrows: → ↓ ←
Or minimal custom SVG if absolutely necessary
```

**Why:** Icon libraries feel generic. Lab1 uses text symbols and minimal visual language.

**Exception:** Social media icons in footer (if required), but keep minimal.

---

### ❌ NO Multiple Font Weights in Body Text
```css
/* FORBIDDEN */
p {
  font-weight: 700; /* Bold body text */
}

/* CORRECT */
p {
  font-weight: 400; /* Always regular weight */
}

strong {
  font-weight: 600; /* Semibold for emphasis only */
}
```

**Why:** Body text should be consistently readable. Weight changes are for headlines only.

**Exception:** `<strong>` tags for occasional emphasis.

---

## 🚫 FORBIDDEN TYPOGRAPHY PATTERNS

### ❌ NO Center-Aligned Body Text
```css
/* FORBIDDEN */
p {
  text-align: center;
}

/* CORRECT */
p {
  text-align: left; /* Always left-aligned */
}

/* EXCEPTION */
.hero-headline,
.section-header {
  text-align: center; /* Only headlines can be centered */
}
```

**Why:** Center-aligned paragraphs are hard to read. Left alignment creates a clear visual anchor.

**Exception:** Headlines, short taglines, and single-line statements only.

---

### ❌ NO Uppercase Body Text
```css
/* FORBIDDEN */
p {
  text-transform: uppercase;
}

/* CORRECT */
p {
  text-transform: none; /* Normal case */
}

/* EXCEPTION */
.label,
.nav-item,
.button {
  text-transform: uppercase; /* Only UI elements and labels */
}
```

**Why:** Uppercase body text is difficult to read and feels aggressive.

**Exception:** Labels, navigation, buttons, and small UI text only.

---

### ❌ NO Fonts Outside the System
```css
/* FORBIDDEN */
font-family: 'Roboto', sans-serif;
font-family: 'Open Sans', sans-serif;
font-family: 'Montserrat', sans-serif;

/* CORRECT - ONLY THESE 3 */
font-family: 'Cormorant Garamond', serif;
font-family: 'Darker Grotesque', sans-serif;
font-family: 'IBM Plex Mono', monospace;
```

**Why:** Lab1's typographic voice is defined by these three fonts. Additional fonts dilute the system.

**Exception:** NONE. System fallbacks are allowed but no new font families.

---

### ❌ NO Line Heights Below 1.5 for Body Text
```css
/* FORBIDDEN */
p {
  line-height: 1.2; /* Too tight */
}

/* CORRECT */
p {
  line-height: 1.5; /* Minimum for body text */
}

h1 {
  line-height: 1.1; /* Headlines can be tighter */
}
```

**Why:** Readability requires breathing room. 1.5 is the minimum for comfortable reading.

**Exception:** Headlines can use 1.0-1.25 line-height.

---

### ❌ NO Font Sizes Outside the Scale
```css
/* FORBIDDEN */
font-size: 19px; /* Not in the scale */
font-size: 27px; /* Not in the scale */
font-size: 63px; /* Not in the scale */

/* CORRECT - ONLY THESE SIZES */
/* 12px, 14px, 16px, 18px, 20px, 24px, 28px, 32px, 36px, 40px, 48px, 64px, 72px, 96px, 120px */
```

**Why:** Consistent typography scale creates visual harmony.

**Exception:** NONE. Use the defined scale.

---

## 🚫 FORBIDDEN LAYOUT PATTERNS

### ❌ NO Grid Gaps Below 16px
```css
/* FORBIDDEN */
.grid {
  gap: 8px; /* Too tight */
}

/* CORRECT */
.grid {
  gap: 24px; /* Standard */
}

.grid--compact {
  gap: 16px; /* Minimum allowed */
}
```

**Why:** Lab1 needs breathing room. Tight grids feel cramped.

**Exception:** Only for very specific dense information displays (not typical).

---

### ❌ NO Section Spacing Below 60px (Mobile) / 200px (Desktop)
```css
/* FORBIDDEN */
.section {
  padding: 40px 0; /* Too cramped */
}

/* CORRECT */
@media (min-width: 768px) {
  .section {
    padding: 200px 0; /* Desktop */
  }
}

@media (max-width: 767px) {
  .section {
    padding: 60px 0; /* Mobile minimum */
  }
}
```

**Why:** Generous whitespace is core to Lab1's editorial feel.

**Exception:** NONE. These are minimums.

---

### ❌ NO Content Width Above 1200px (Except Full-Bleed)
```css
/* FORBIDDEN */
.container {
  max-width: 1600px; /* Too wide */
}

/* CORRECT */
.container {
  max-width: 1200px; /* Standard */
}

.text-column {
  max-width: 600px; /* For readability */
}

.full-bleed {
  max-width: none; /* Only for hero, images */
}
```

**Why:** 1200px is optimal for readability and layout. Wider feels sprawling.

**Exception:** Full-bleed sections (hero, full-width images) only.

---

### ❌ NO More Than 3 Columns on Mobile
```css
/* FORBIDDEN */
@media (max-width: 767px) {
  .grid {
    grid-template-columns: repeat(2, 1fr); /* Mobile should be 1 column */
  }
}

/* CORRECT */
@media (max-width: 767px) {
  .grid {
    grid-template-columns: 1fr; /* Single column */
  }
}
```

**Why:** Mobile screens need single-column layouts for readability.

**Exception:** NONE. Stack everything on mobile.

---

## 🚫 FORBIDDEN INTERACTION PATTERNS

### ❌ NO Animation Duration Below 200ms or Above 1200ms
```css
/* FORBIDDEN */
transition: all 100ms ease; /* Too fast */
transition: all 2000ms ease; /* Too slow */

/* CORRECT */
transition: all 300ms ease-out; /* Standard */
transition: all 600ms ease-out; /* Slower elements */
```

**Why:** Too fast feels jarring. Too slow feels sluggish. 200-1200ms is the sweet spot.

**Exception:** NONE.

---

### ❌ NO Linear Easing
```css
/* FORBIDDEN */
transition: all 300ms linear; /* Robotic */

/* CORRECT */
transition: all 300ms ease-out; /* Natural deceleration */
transition: all 300ms cubic-bezier(0.4, 0.0, 0.2, 1); /* Material design standard */
```

**Why:** Linear easing feels mechanical. Natural easing feels human.

**Exception:** NONE. Always use ease-out or custom cubic-bezier.

---

### ❌ NO Hover States That Change Layout
```css
/* FORBIDDEN */
.card:hover {
  width: 110%; /* Layout shift */
  margin-top: -20px; /* Layout shift */
}

/* CORRECT */
.card:hover {
  transform: translateY(-4px); /* No layout shift */
  box-shadow: 0 12px 24px rgba(51, 54, 17, 0.1);
}
```

**Why:** Layout shifts are jarring. Use transform instead of position/margin changes.

**Exception:** NONE. Use `transform` for all hover movements.

---

### ❌ NO Parallax Beyond 5% Speed Difference
```css
/* FORBIDDEN */
parallax-speed: 0.3; /* 70% slower - too noticeable */

/* CORRECT */
parallax-speed: 0.95; /* 5% slower - subtle */
```

**Why:** Heavy parallax feels gimmicky. Subtle parallax adds depth without distraction.

**Exception:** NONE. Keep parallax minimal.

---

## 🚫 FORBIDDEN CONTENT PATTERNS

### ❌ NO Generic Corporate Language
```
/* FORBIDDEN */
"Revolutionizing the supplement industry"
"Best-in-class solutions"
"Cutting-edge technology"
"Industry-leading results"
"Award-winning formula"

/* CORRECT */
"Your cells are waiting."
"Fatigue isn't moral failure."
"We don't guess. We measure."
```

**Why:** Lab1's voice is human, direct, and honest. Corporate speak breaks trust.

**Exception:** NONE. Every word should feel human.

---

### ❌ NO Exclamation Marks in Body Text
```
/* FORBIDDEN */
"You'll feel amazing!"
"Try Lab1 today!"
"Transform your health!"

/* CORRECT */
"You'll feel better."
"Your cells are ready."
"This is what optimal feels like."
```

**Why:** Exclamation marks feel pushy. Lab1 is confident, not desperate.

**Exception:** Maybe one in the entire site, used very intentionally.

---

### ❌ NO Before/After Photos
```
/* FORBIDDEN */
[Before Photo] → [After Photo]

/* CORRECT */
Testimonial text + Data visualization
"Ferritin: 18 → 68 ng/mL"
```

**Why:** Before/after photos feel like diet ads. Lab1 shows biological data, not appearance.

**Exception:** NONE. Use data, not photos.

---

## 🚫 FORBIDDEN STRUCTURAL PATTERNS

### ❌ NO HTML Forms Without Styled States
```html
<!-- FORBIDDEN -->
<form>
  <input type="text" /> <!-- No custom styling -->
</form>

<!-- CORRECT -->
<form>
  <input type="text" class="form-input" /> <!-- Fully styled -->
</form>
```

```css
.form-input {
  /* All states must be defined: */
  /* default, focus, error, disabled */
}
```

**Why:** Unstyled forms break the design. Every state needs custom styling.

**Exception:** NONE. Style all form states.

---

### ❌ NO Carousels or Image Sliders
```html
<!-- FORBIDDEN -->
<div class="carousel">
  <div class="slide">...</div>
  <div class="slide">...</div>
</div>

<!-- CORRECT -->
Display all content stacked or in grid
Let user scroll naturally
```

**Why:** Carousels hide content and break scroll rhythm. Show everything.

**Exception:** NONE. No hidden content.

---

### ❌ NO Popups or Modals (Unless User-Initiated)
```javascript
// FORBIDDEN
setTimeout(() => {
  showPopup('Subscribe to our newsletter!');
}, 5000);

// CORRECT
// Only show modal if user clicks a button
button.addEventListener('click', () => {
  showModal('video-modal');
});
```

**Why:** Interruption breaks the contemplative experience. User controls all interactions.

**Exception:** User-initiated modals (video playback, image zoom) are allowed.

---

## 🚫 FORBIDDEN RESPONSIVE PATTERNS

### ❌ NO Horizontal Scrolling (Except Full-Width Images)
```css
/* FORBIDDEN */
.container {
  overflow-x: scroll;
}

/* CORRECT */
.container {
  overflow-x: hidden;
  /* Content reflows to fit */
}
```

**Why:** Horizontal scroll is disorienting. Content should stack vertically.

**Exception:** Full-width image galleries if absolutely necessary (but avoid).

---

### ❌ NO Fixed Breakpoints Based on Devices
```css
/* FORBIDDEN */
@media (max-width: 375px) { /* iPhone specific */ }
@media (max-width: 414px) { /* iPhone Plus specific */ }

/* CORRECT */
@media (max-width: 767px) { /* Mobile */ }
@media (min-width: 768px) and (max-width: 1023px) { /* Tablet */ }
@media (min-width: 1024px) { /* Desktop */ }
```

**Why:** Design for screen sizes, not devices. Content should adapt fluidly.

**Exception:** NONE. Use standard breakpoints only.

---

### ❌ NO Different Content on Mobile vs Desktop
```html
<!-- FORBIDDEN -->
<div class="desktop-only">Desktop content</div>
<div class="mobile-only">Different mobile content</div>

<!-- CORRECT -->
<div>Same content, different layout</div>
```

**Why:** Content parity ensures all users get the same message.

**Exception:** Navigation (hamburger vs horizontal menu) only.

---

## 🚫 FORBIDDEN PERFORMANCE PATTERNS

### ❌ NO Unoptimized Images
```html
<!-- FORBIDDEN -->
<img src="hero.jpg" /> <!-- 5MB, no optimization -->

<!-- CORRECT -->
<img 
  src="hero-1200w.webp" 
  srcset="hero-600w.webp 600w, hero-1200w.webp 1200w"
  alt="Descriptive text"
  loading="lazy"
/>
```

**Why:** Performance is part of the experience. Optimize all images.

**Exception:** NONE. All images must be optimized.

---

### ❌ NO CSS Animations on Position/Margin/Width/Height
```css
/* FORBIDDEN - CAUSES REFLOW */
.card:hover {
  margin-top: -4px;
  width: 102%;
}

/* CORRECT - GPU ACCELERATED */
.card:hover {
  transform: translateY(-4px) scale(1.02);
}
```

**Why:** Animating layout properties causes reflow. Use transform for performance.

**Exception:** NONE. Always use transform.

---

## ✅ REQUIRED PATTERNS (Must Have)

### ✅ MUST Use Semantic HTML
```html
<!-- REQUIRED -->
<header>
<nav>
<main>
<section>
<article>
<footer>
<h1>, <h2>, <h3> in proper hierarchy
```

**Why:** Accessibility and SEO require semantic structure.

---

### ✅ MUST Include Alt Text on All Images
```html
<!-- REQUIRED -->
<img src="hero.jpg" alt="Blurred figure in motion representing dynamic energy" />
```

**Why:** Accessibility is non-negotiable.

---

### ✅ MUST Use CSS Variables for All Colors/Spacing
```css
/* REQUIRED */
color: var(--color-olive);
padding: var(--space-6);

/* FORBIDDEN */
color: #333611;
padding: 48px;
```

**Why:** Consistency and maintainability.

---

### ✅ MUST Test at 320px, 768px, 1440px
```
Mobile: 320px-767px
Tablet: 768px-1023px  
Desktop: 1024px+
```

**Why:** These represent the realistic device spectrum.

---

### ✅ MUST Meet WCAG AA Contrast (4.5:1 Minimum)
```css
/* REQUIRED */
background: #F8F6F0;
color: #333611;
/* Contrast ratio: 9.2:1 ✓ */

/* FORBIDDEN */
background: #F8F6F0;
color: #D4D4B0; /* Low contrast */
```

**Why:** Readability and accessibility are not optional.

---

### ✅ MUST Respect prefers-reduced-motion
```css
/* REQUIRED */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

**Why:** Accessibility for users with motion sensitivity.

---

## 🎯 SCOPE SUMMARY: THE ESSENTIALS

### What Lab1 IS:
- ✅ Editorial minimalism
- ✅ Generous whitespace  
- ✅ 4-color palette only
- ✅ 3 fonts only
- ✅ Sharp corners everywhere
- ✅ Solid colors only (no gradients)
- ✅ Content-first (no decoration)
- ✅ Human voice (no corporate speak)
- ✅ Subtle animations (200-1200ms)
- ✅ Left-aligned body text
- ✅ Single column on mobile

### What Lab1 IS NOT:
- ❌ Rounded corners
- ❌ Colorful or playful
- ❌ Icon-heavy
- ❌ Gradient backgrounds
- ❌ Default shadows
- ❌ Decorative elements
- ❌ Corporate language
- ❌ Before/after photos
- ❌ Popups or interruptions
- ❌ Carousels or sliders

---

## 🔒 ENFORCEMENT HIERARCHY

**Level 1: Absolutely Non-Negotiable**
- 4-color palette only
- No border-radius
- No gradients
- Semantic HTML
- WCAG AA contrast
- Alt text on images

**Level 2: Strongly Enforced**
- Typography scale adherence
- Spacing system adherence
- No decorative elements
- Animation duration limits
- Transform over position

**Level 3: Guidelines (Flexible)**
- Exact line lengths
- Specific animation easings
- Hover state specifics

---

## ✅ PRE-BUILD CHECKLIST

Before starting development, verify:

**Design System:**
- [ ] 4 colors defined in CSS variables
- [ ] 3 fonts loaded correctly
- [ ] Spacing scale (8px grid) set up
- [ ] Typography scale defined
- [ ] No additional colors added
- [ ] No border-radius anywhere
- [ ] No gradient definitions

**Components:**
- [ ] All components use defined system
- [ ] No decorative elements
- [ ] All hover states use transform
- [ ] All animations 200-1200ms
- [ ] All shadows only on hover

**Content:**
- [ ] No corporate language
- [ ] No exclamation marks in body
- [ ] Human, direct voice throughout
- [ ] Data over photos

**Accessibility:**
- [ ] Semantic HTML structure
- [ ] Alt text on all images
- [ ] WCAG AA contrast verified
- [ ] Keyboard navigation works
- [ ] prefers-reduced-motion respected

**Performance:**
- [ ] Images optimized (WebP, srcset)
- [ ] Animations use transform only
- [ ] No layout-shifting hover states
- [ ] CSS variables used throughout

---

## 🚨 COMMON AI MISTAKES TO AVOID

### Mistake 1: Adding "Helpful" Features
```
AI might add:
- Newsletter popup
- Cookie banner with colors
- Social media share buttons everywhere
- "Scroll to top" button with icon

RESULT: Violates minimalism. Remove all.
```

### Mistake 2: "Improving" the Design
```
AI might add:
- Rounded corners "for modern look"
- Gradient buttons "for depth"
- More colors "for variety"
- Icons "for visual interest"

RESULT: Breaks the system. Revert all.
```

### Mistake 3: Generic Patterns
```
AI might use:
- Standard hero with centered text
- Typical three-column features grid
- Corporate language
- Before/after comparison

RESULT: Makes it look like every other site. Use Lab1 patterns.
```

### Mistake 4: Over-Animation
```
AI might add:
- Fade in every element
- Slide from left/right/top/bottom
- Rotate on scroll
- Parallax everything

RESULT: Feels gimmicky. Use subtle, intentional animation only.
```

---

## 📋 VALIDATION QUESTIONS

After building, ask:

1. **Could this be any other wellness/supplement brand?**
   - If yes: Not distinctive enough. Enforce Lab1 voice.

2. **Are there more than 4 colors?**
   - If yes: Remove extras. Use opacity variants.

3. **Are there any rounded corners?**
   - If yes: Remove all border-radius.

4. **Is the whitespace generous (200px between sections)?**
   - If no: Add more space.

5. **Does body text use left alignment?**
   - If no: Fix alignment.

6. **Are there any decorative elements?**
   - If yes: Remove them.

7. **Does it feel like reading a high-end magazine?**
   - If no: Add more breathing room, refine typography.

8. **Would someone say "I felt seen"?**
   - If no: The copy isn't personal enough.

---

## 🎯 FINAL SCOPE STATEMENT

**Lab1's design is intentional restraint.**

Every element serves the content.
Every color has meaning.
Every pixel of space is intentional.

The AI's job is NOT to:
- Make it "prettier"
- Add "modern" features
- "Improve" with best practices
- Make it look like other sites

The AI's job IS to:
- Follow the system exactly
- Respect the constraints absolutely
- Maintain Lab1's voice precisely
- Create the editorial magazine feel

**When in doubt: Less is more. Subtract, don't add.**

---

*Document Version: 1.0*
*Design Constraints for: Lab1 Website*
*Non-negotiable scope boundaries*
*To be used with all implementation documents*
