# 00. MASTER PROMPT
## Complete Instructions for Building Lab1 Website

**Purpose:** This is the primary instruction document for building the Lab1 website. It references all other specification documents and provides a clear build strategy.

**For AI Website Builder:** Read this document first. It will direct you to other documents as needed.

---

## 🎯 PROJECT OVERVIEW

### What You're Building
A homepage for **Lab1**, a personalized supplement company that designs custom nutrition based on DNA and blood testing. This is not a typical e-commerce site—it's an editorial experience that makes people feel understood at a cellular level.

### Design Philosophy
**"Editorial minimalism with emotional resonance"**

- Think: High-end magazine (Kinfolk, Cereal), not startup landing page
- Voice: Human, direct, honest—never corporate
- Visual: 4 colors, 3 fonts, generous whitespace, sharp corners
- Goal: Make someone say "I felt seen" not "This looks cool"

---

## 📚 YOUR REFERENCE LIBRARY

You have **7 core specification documents**:

```
01_LAYOUT_MEASUREMENTS.md       → Exact spacing, measurements, grid system
02_TYPOGRAPHY_SYSTEM.md         → Font specifications, sizes, hierarchy
03_SPACING_RHYTHM.md            → Vertical/horizontal spacing rules
05_COMPONENT_LIBRARY.md         → 20 reusable components with code
06_PAGE_STRUCTURE_MAP.md        → How to assemble the full page
07_CONTENT_WIREFRAMES.md        → Visual layout reference
15_DESIGN_CONSTRAINTS.md        → What NOT to do (critical!)
```

### Reading Order (Recommended):
1. **Start here** (00_MASTER_PROMPT.md)
2. **Read next:** 15_DESIGN_CONSTRAINTS.md (the guardrails)
3. **Scan:** 01_LAYOUT_MEASUREMENTS.md (understand the visual system)
4. **Reference as needed:** All others during build

---

## 🎨 THE DESIGN SYSTEM (Quick Reference)

### Colors (ONLY 4 - No Exceptions)
```css
--color-olive: #333611;      /* Primary: text, buttons, dark sections */
--color-cream: #F8F6F0;      /* Background: main sections */
--color-white: #FFFFFF;      /* Accent: contrast, highlights */
--color-charcoal: #2A2A2A;   /* Depth: dark sections, footer */
```

**Use opacity for variations:** `rgba(51, 54, 17, 0.6)` for lighter olive.

### Fonts (ONLY 3 - No Exceptions)
```css
--font-serif: 'Cormorant Garamond', serif;     /* Headlines, pullquotes */
--font-sans: 'Darker Grotesque', sans-serif;   /* Body, UI */
--font-mono: 'IBM Plex Mono', monospace;       /* Data, statistics */
```

### Key Spacing Values
```css
--section-gap: 200px;     /* Between major sections (desktop) */
--subsection-gap: 120px;  /* Between subsections */
--element-gap: 24px;      /* Standard grid gap */
--container-max: 1200px;  /* Content max-width */
```

### Typography Scale (Key Sizes)
```
Hero: 120px → 48px (mobile)
H1: 72px → 40px (mobile)
H2: 48px → 32px (mobile)
Body: 18px → 16px (mobile)
```

---

## 🏗️ BUILD STRATEGY

### Phase 1: Foundation (Do This First)
```
1. Set up CSS variables
   - 4 colors
   - 3 fonts
   - Spacing scale (8px grid)
   - Typography scale
   
2. Load fonts
   - Cormorant Garamond (weights: 300, 400, 600)
   - Darker Grotesque (weights: 400, 500, 600)
   - IBM Plex Mono (weights: 400, 500)
   
3. Create base styles
   - CSS reset
   - Body defaults
   - Heading defaults
   
4. Set up responsive breakpoints
   - Mobile: < 768px
   - Tablet: 768px - 1023px
   - Desktop: 1024px+
```

**Reference:** 02_TYPOGRAPHY_SYSTEM.md, 03_SPACING_RHYTHM.md

---

### Phase 2: Build Components (In This Order)

```
Priority 1 (Build First):
1. Navigation (fixed header)
2. Hero Split Section
3. Text Section (centered column)
4. Button component

Priority 2 (Build Next):
5. Three-Column Grid
6. Two-Path Comparison
7. Split Section (image + text)
8. Footer

Priority 3 (Build Last):
9. Process Timeline
10. FAQ Accordion
11. Stat Cards (if time)
```

**Reference:** 05_COMPONENT_LIBRARY.md (has complete code for each)

---

### Phase 3: Assemble Page (Section by Section)

Build in this order (top to bottom of page):

```
01. Navigation                  [Component: Navigation]
02. Hero                        [Component: Hero Split]
03. The Truth                   [Component: Text Section]
04. The Mirror                  [Component: Three-Column Grid]
05. The Reveal                  [Component: Text Section]
06. Two Paths                   [Component: Two-Path Comparison]
07. The Process                 [Component: Process Timeline]
08. The Proof                   [Component: Split Section + custom viz]
09. The Invitation              [Component: Text Section (custom)]
10. The Quiet (FAQ)             [Component: FAQ Accordion]
11. Footer                      [Component: Footer]
```

**Reference:** 06_PAGE_STRUCTURE_MAP.md (has exact content for each section)

---

### Phase 4: Polish & Responsive

```
1. Add hover states (transform, not position)
2. Add scroll animations (subtle, 600ms duration)
3. Test mobile responsiveness
   - Stack all columns to single column
   - Reduce spacing by ~60%
   - Scale typography appropriately
4. Verify accessibility
   - Alt text on images
   - Semantic HTML
   - Keyboard navigation
```

**Reference:** 15_DESIGN_CONSTRAINTS.md (what NOT to do)

---

## 🚫 CRITICAL CONSTRAINTS (Non-Negotiable)

### The "Never Do This" List:

❌ **NO border-radius** (sharp corners everywhere)
❌ **NO gradients** (solid colors only)
❌ **NO extra colors** (only the 4 defined)
❌ **NO decorative elements** (every element serves content)
❌ **NO default shadows** (only on hover)
❌ **NO rounded corners** (not even subtly)
❌ **NO corporate language** ("revolutionizing", "best-in-class", etc.)
❌ **NO center-aligned body text** (left-align only)
❌ **NO uppercase body text** (only labels/buttons)
❌ **NO icon libraries** (use text arrows: → ↓)
❌ **NO carousels** (show all content)
❌ **NO popups** (unless user-initiated)
❌ **NO before/after photos** (use data instead)

### The "Always Do This" List:

✅ **ALWAYS use semantic HTML** (header, nav, main, section, footer)
✅ **ALWAYS include alt text** on images
✅ **ALWAYS use CSS variables** (never hardcode colors/spacing)
✅ **ALWAYS meet WCAG AA contrast** (4.5:1 minimum)
✅ **ALWAYS use transform** for hover effects (not position/margin)
✅ **ALWAYS test at 320px, 768px, 1440px**
✅ **ALWAYS left-align body text**
✅ **ALWAYS use generous whitespace** (200px between sections)

**Full details:** 15_DESIGN_CONSTRAINTS.md

---

## 📄 SECTION-BY-SECTION GUIDE

### Section 01: Hero
```
Component: Hero Split Section
Layout: 50/50 split with diagonal divider
Height: 100vh
Background: #F8F6F0

Content:
- Headline: "WE DESIGN / THE BIOLOGY / OF YOU."
  (120px Cormorant, 3 lines, staggered animation)
- Subtext: "What if fatigue isn't normal?..."
  (20px Darker Grotesque, 70% opacity)
- CTA: "Listen to your body →"
  (Outline button, fills on hover)
  
Animation:
0.5s: First line fades in
0.65s: Second line fades in
0.8s: Third line fades in
1.2s: Subtext fades in
1.8s: Button bounces in

Reference: 06_PAGE_STRUCTURE_MAP.md (Section 01)
Wireframe: 07_CONTENT_WIREFRAMES.md (Section 01)
```

### Section 02: The Truth
```
Component: Text Section (Centered Column)
Max-width: 600px centered
Background: #FFFFFF
Padding: 200px top/bottom (desktop), 80px (mobile)

Content:
- Body text (18px Darker Grotesque)
- Pullquote: "Your body is speaking..." (36px Cormorant, italic)
- Statistics: "70% of women..." (18px IBM Plex Mono)

Key styling:
- Pullquote has left border (4px solid #333611)
- Statistics use monospace for validation feel
- Generous paragraph spacing (24px)

Reference: 06_PAGE_STRUCTURE_MAP.md (Section 02)
Wireframe: 07_CONTENT_WIREFRAMES.md (Section 02)
```

### Section 03: The Mirror
```
Component: Three-Column Grid
Background: #2A2A2A (dark!)
Text: #FFFFFF (light!)
Padding: 150px 60px (desktop), 60px 24px (mobile)

Content:
- 3 equal columns with quotes + answers
- Quotes: italic, 80% opacity
- Answers: bold, uppercase, 100% opacity
- Column dividers: vertical lines, 20% opacity

Mobile: Stack to single column, horizontal dividers

Reference: 06_PAGE_STRUCTURE_MAP.md (Section 03)
Wireframe: 07_CONTENT_WIREFRAMES.md (Section 03)
```

### Section 04: The Reveal
```
Component: Text Section (Centered Column)
Max-width: 700px (wider than Section 02)
Background: #F8F6F0 (cream, not white)

Content:
- Body text
- Large pullquote: "40% of people..." (48px Cormorant, left border)
- Emphasis on key words: "cannot", "evolution"

Reference: 06_PAGE_STRUCTURE_MAP.md (Section 04)
```

### Section 05: Two Paths
```
Component: Two-Path Comparison
Split: 40% left / 60% right
Different backgrounds per side

Left (Essential):
- Background: #F8F6F0 (cream)
- Text: #333611 (olive)
- Button: Outline olive, fills on hover

Right (Precision):
- Background: #333611 (olive)
- Text: #FFFFFF (white)
- Button: Outline white, fills on hover

Mobile: Stack vertically (Essential on top)

Reference: 06_PAGE_STRUCTURE_MAP.md (Section 05)
Component: 05_COMPONENT_LIBRARY.md (Component #15)
```

### Section 06: The Process
```
Component: Process Timeline (Vertical)
5 steps: Listen → Measure → Formulate → Evolve → Maintain

Layout:
- Numbers (01-05) far left, large serif, 20% opacity
- Vertical line connects steps (2px, 30% opacity)
- Content flows right of numbers
- Separators between steps

No images needed (text-only timeline)

Reference: 06_PAGE_STRUCTURE_MAP.md (Section 06)
Wireframe: 07_CONTENT_WIREFRAMES.md (Section 06)
```

### Section 07: The Proof
```
Component: Split Section
Layout: 50/50

Left: Anna's testimonial (text)
Right: Circle visualization (data)

Visualization:
- 4 circles growing progressively
- Month 0: small, 20% opacity
- Month 9: large, 100% opacity
- Below: "Ferritin: 18 → 68 ng/mL" (mono font)

Reference: 06_PAGE_STRUCTURE_MAP.md (Section 07)
```

### Section 08: The Invitation
```
Component: Text Section (Custom)
Full-screen or near full-screen
Centered, minimal

Content:
- Question: "What would you do with 25% more energy?"
  (64px Cormorant)
- Prompts: "What would you create?..." (24px)
- Closing: "Your cells are ready..." (32px)
- Two buttons side-by-side (equal weight)

Large intentional empty space (120px gap)

Reference: 06_PAGE_STRUCTURE_MAP.md (Section 08)
```

### Section 09: FAQ
```
Component: FAQ Accordion
Max-width: 800px centered
Background: #F8F6F0

Questions:
- Styled as user's voice (quotes, personal)
- 20px Sans, medium weight

Answers:
- Direct, honest (no corporate speak)
- 18px Sans, 80% opacity
- Expands/collapses on click

Hover: Left border appears (3px solid #333611)

Reference: 06_PAGE_STRUCTURE_MAP.md (Section 09)
```

### Section 10: Footer
```
Component: Footer
Background: #333611 (olive - inverted!)
Text: #F8F6F0 (cream)

Layout:
- Logo + tagline centered (top)
- 3 columns: Explore, Learn, Connect
- Copyright centered (bottom)

Tagline: Cormorant serif, poetic
Links: Simple text, no icons

Reference: 06_PAGE_STRUCTURE_MAP.md (Section 10)
Component: 05_COMPONENT_LIBRARY.md (Component #12)
```

---

## 🎯 QUALITY CHECKLIST

Before considering the build complete, verify:

### Visual System
- [ ] Only 4 colors used throughout
- [ ] Only 3 fonts used throughout
- [ ] No border-radius anywhere (0px everywhere)
- [ ] No gradients used
- [ ] No decorative elements
- [ ] Sharp corners on all elements

### Spacing
- [ ] 200px between major sections (desktop)
- [ ] 60px minimum on mobile
- [ ] 24px standard grid gap
- [ ] 1200px max content width
- [ ] Generous whitespace throughout

### Typography
- [ ] Headlines: Cormorant Garamond
- [ ] Body text: Darker Grotesque, left-aligned
- [ ] Data/numbers: IBM Plex Mono
- [ ] Line height 1.5+ for body text
- [ ] No center-aligned paragraphs
- [ ] No uppercase body text

### Interactions
- [ ] Hover states use transform (not position)
- [ ] Animations 200-1200ms duration
- [ ] No linear easing (use ease-out)
- [ ] Shadows only on hover
- [ ] No layout-shifting hover states

### Accessibility
- [ ] Semantic HTML (header, nav, main, section, footer)
- [ ] Alt text on all images
- [ ] WCAG AA contrast (4.5:1 minimum)
- [ ] Keyboard navigation works
- [ ] prefers-reduced-motion respected

### Responsive
- [ ] Single column on mobile (< 768px)
- [ ] Content stacks vertically on mobile
- [ ] Typography scales appropriately
- [ ] Spacing scales to 60% on mobile
- [ ] Touch targets 48px minimum

### Content
- [ ] Human voice (no corporate speak)
- [ ] No exclamation marks in body
- [ ] Direct, honest language
- [ ] Data over photos
- [ ] Personal, relatable tone

---

## 🚀 IMPLEMENTATION APPROACH

### For First Build (70-80% Complete)

**FOCUS ON:**
1. Structure (semantic HTML)
2. Layout (spacing, grid, hierarchy)
3. Typography (sizes, families, weights)
4. Core components (hero, text sections, grids)
5. Responsive behavior (mobile stacking)

**CAN REFINE LATER:**
- Exact animation timing
- Hover state polish
- Color opacity fine-tuning
- Micro-interactions
- Custom visualizations

### Build Philosophy

**"Get the bones right first"**

The editorial feel comes from:
1. Generous whitespace (200px sections)
2. Restrained palette (4 colors)
3. Typography hierarchy (serif headlines, sans body)
4. Human voice (copy tone)
5. Sharp corners (no border-radius)

If these are right, the site will feel 80% complete.
Polish and animations can be refined through iteration.

---

## 🔧 TECHNICAL STACK

### Recommended
```
Framework: Next.js 14 (React)
Language: TypeScript
Styling: Tailwind CSS + Custom CSS Variables
Animations: Framer Motion (or CSS)
```

### Font Loading
```typescript
import { Cormorant_Garamond, IBM_Plex_Mono } from 'next/font/google';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '600'],
  display: 'swap',
});
```

### CSS Variables Setup
```css
:root {
  /* Colors */
  --color-olive: #333611;
  --color-cream: #F8F6F0;
  --color-white: #FFFFFF;
  --color-charcoal: #2A2A2A;
  
  /* Spacing */
  --space-3: 24px;
  --space-6: 48px;
  --space-10: 80px;
  --space-15: 120px;
  --space-25: 200px;
  
  /* Typography */
  --text-hero: 120px;
  --text-h1: 72px;
  --text-h2: 48px;
  --text-body: 18px;
}
```

---

## 📖 DOCUMENT CROSS-REFERENCE

### When You Need To Know...

**Exact measurements?**
→ 01_LAYOUT_MEASUREMENTS.md

**Font specifications?**
→ 02_TYPOGRAPHY_SYSTEM.md

**Spacing values?**
→ 03_SPACING_RHYTHM.md

**How to build a component?**
→ 05_COMPONENT_LIBRARY.md

**What content goes where?**
→ 06_PAGE_STRUCTURE_MAP.md

**What the layout looks like visually?**
→ 07_CONTENT_WIREFRAMES.md

**What NOT to do?**
→ 15_DESIGN_CONSTRAINTS.md

---

## 💡 KEY PRINCIPLES (Remember These)

1. **Whitespace is not empty—it's active design**
   - 200px between sections is intentional
   - Breathing room creates editorial feel

2. **Restraint creates sophistication**
   - 4 colors only
   - 3 fonts only
   - No decoration

3. **Content is king**
   - Every element serves the message
   - Remove anything that doesn't

4. **Human over corporate**
   - "Your cells are waiting" not "Revolutionizing wellness"
   - Direct and honest, never pushy

5. **Editorial over commercial**
   - Think magazine, not marketing site
   - Contemplative, not aggressive

6. **Sharp over soft**
   - No border-radius
   - Clean edges create intentionality

7. **Left over center**
   - Body text always left-aligned
   - Headlines can be centered

8. **Transform over position**
   - Use transform for animations
   - Avoid layout shift

9. **Subtle over flashy**
   - 600ms animations, not 200ms
   - 5% parallax, not 30%
   - Ease-out, not linear

10. **Data over photos**
    - "Ferritin: 18 → 68 ng/mL" not before/after pics
    - Numbers validate, photos sell

---

## 🎯 SUCCESS CRITERIA

**You've succeeded if:**

✅ Someone scrolls through and says "I felt seen"
✅ It feels like reading a high-end magazine
✅ The 4-color palette is strictly maintained
✅ There are zero rounded corners
✅ Whitespace feels generous, not cramped
✅ Body text is comfortably readable (left-aligned, 18px, 1.5 line-height)
✅ Mobile version maintains the same emotional quality
✅ No one says "This looks like every other startup site"

**You've failed if:**

❌ It has rounded corners anywhere
❌ It uses more than 4 colors
❌ It has decorative elements
❌ The voice feels corporate
❌ Sections feel cramped (< 200px spacing)
❌ Someone says "It looks generic"

---

## 🔄 ITERATION STRATEGY

### First Pass (Target: 70-80% complete)
Focus: Structure, spacing, typography, core components

### Second Pass (Target: 85-90% complete)
Refine: Animations, hover states, responsive polish

### Third Pass (Target: 95% complete)
Polish: Microinteractions, accessibility, performance

### Final Pass (Target: 100%)
Perfect: Edge cases, cross-browser, final QA

**Note:** You expect adjustments, so aim for 70-80% on first pass. Get the foundations right, iterate on polish.

---

## 🚨 WHEN IN DOUBT

**Ask yourself:**
1. Does this serve the content, or is it decoration?
2. Is this in the 4-color palette?
3. Does this follow the spacing system?
4. Would this appear in a high-end magazine?
5. Does this make the user feel understood?

**If unsure, default to:**
- Less over more
- Simple over complex
- Subtle over flashy
- Human over corporate
- Space over clutter

---

## 📞 FINAL INSTRUCTION

**Build Lab1's website using:**
- The design system (4 colors, 3 fonts, spacing scale)
- The component library (20 pre-built components)
- The page structure (10 sections, top to bottom)
- The constraints (what NOT to do)

**Remember:**
This is not a typical e-commerce site.
This is an editorial experience.
This is a mirror that helps people see their invisible struggles.

**Make them feel seen.**

---

*Master Prompt Version: 1.0*
*For: Lab1 Website Build*
*References: 7 specification documents*
*Target Completion: 70-80% first pass, iterate to 100%*
