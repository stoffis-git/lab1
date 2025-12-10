# 01. LAYOUT MEASUREMENTS
## Extracted from OURA & CO. Reference Design

**Purpose:** This document provides exact measurements, spacing, and layout specifications extracted from the OURA reference design. Every value has been measured and documented for precise replication.

**Design Width Reference:**
- Desktop: ~1440px viewport
- Mobile: ~375px viewport

---

## 📐 HERO SECTION (Full-Screen Split)

### Desktop Layout (1440px+)

**Overall Container:**
- Height: `100vh` (full viewport height)
- Layout: Split-screen with diagonal division
- Background: Cream/beige tone (`#F8F6F0` equivalent)

**Split Division:**
- Left image: ~50% width
- Right image: ~50% width
- Diagonal divider: Subtle (~1-2px), very light, angled ~5-7° from vertical
- Divider color: Extremely subtle, almost imperceptible

**Hero Text Overlay:**
- Position: Absolute, left-aligned
- Left margin: ~10-12% from left edge (~140-170px at 1440px)
- Vertical: Centered (50% top, translateY -50%)
- Max-width: ~600-700px
- Z-index: Above images

**Typography Measurements:**
- Headline "WE DESIGN THE FEELING OF YOU":
  - Font size: ~80-90px (very large)
  - Line height: ~1.0-1.1 (tight)
  - Letter spacing: -0.02em (slightly tight)
  - Font weight: 300-400 (light to regular)
  - Color: White or very light (high contrast on dark image)
  - Line breaks: Manual (3 lines)
  
**Subtext:**
- Font size: ~14-16px
- Position: ~40-50px below headline
- Max-width: ~400-500px
- Line height: ~1.6-1.7
- Opacity: ~70-80%

**CTA Button:**
- Position: ~50-60px below subtext
- Padding: ~16px 40px
- Border: 2px solid (outline style)
- Font size: ~14px
- Letter spacing: ~0.05em (slight tracking)

**Scroll Indicator:**
- Position: Bottom center
- Distance from bottom: ~40-50px
- Font size: ~12px
- Animation: Subtle pulse or bounce

---

### Mobile Layout (<768px)

**Hero Adaptation:**
- Height: `100vh` maintained
- Images: Stack vertically OR single image with overlay
- No diagonal split (too complex for mobile)

**Hero Text:**
- Padding: 24px (left/right)
- Headline size: ~40-50px (50% of desktop)
- Centered or left-aligned
- Full width minus padding

**CTA Button:**
- Full width with side margins: 24px
- Padding: 16px (vertical)

---

## 📊 ABOUT/INTRO SECTION

### Desktop Layout

**Container:**
- Background: White (`#FFFFFF`)
- Padding top: ~150-200px
- Padding bottom: ~150-200px
- Max-width: ~1200px
- Centered: margin 0 auto

**Intro Block:**
- Width: ~50-60% of container (~600-720px)
- Positioned: Left side
- Text size: ~16-18px
- Line height: ~1.6-1.7
- Paragraph spacing: ~24px

**Logo/Title "OURA . CO.,":**
- Font size: ~48-56px
- Font weight: 300 (light)
- Letter spacing: Wide (~0.1-0.15em)
- Margin bottom: ~40-50px

### Mobile Layout

**Container:**
- Padding: 80-100px top/bottom
- Side padding: 24px

**Intro Block:**
- Full width
- Text size: 16px
- Line height: 1.6

---

## 📈 STATS/METRICS CARDS

### Desktop Layout

**Container:**
- Max-width: ~1200px
- Padding: ~100-150px top/bottom
- Background: Mixed (light cream sections)

**Card Grid:**
- Layout: Asymmetric grid (2x2 or custom)
- Gap: ~24-32px between cards
- Card sizes: Variable (some 1x1, some 1x2, some 2x1)

**Individual Card:**
- Background: White or dark brown
- Padding: ~40-60px
- Border: 1px solid (very light, ~10-20% opacity)
- Border-radius: 0px (sharp corners)

**Number Typography:**
- Font size: ~60-80px
- Font weight: 400-500
- Line height: 1.0
- Font: Likely serif or mono
- Color: Depends on background (dark on light, light on dark)

**Label Typography:**
- Font size: ~12-14px
- Font weight: 400
- Position: Below number
- Margin top: ~8-12px
- Letter spacing: ~0.05em
- Text transform: Uppercase OR normal case

**Dark Card Variant:**
- Background: Dark brown (~#3D2E2A or similar)
- Text color: Light cream
- Same spacing/sizing as light cards

### Mobile Layout

**Cards:**
- Stack vertically (1 column)
- Full width minus 24px padding each side
- Maintain vertical spacing: 16-24px between cards
- Padding reduced: 32-40px

---

## 🎨 SERVICES SECTION

### Desktop Layout

**Section Header:**
- Font size: ~64-80px
- Font weight: 300-400
- Letter spacing: 0 (normal)
- Margin bottom: ~80-100px
- Color: Dark (brown/black)

**Services Grid:**
- Layout: Masonry-style grid
- Columns: 3 (uneven heights)
- Gap: ~24px
- Card aspect ratios: Variable (portrait, landscape, square mix)

**Service Card:**
- Background: Light cream
- Border: 1px solid (subtle)
- Hover: Lift (~8px translateY) + shadow

**Card Image:**
- Height: ~60% of card
- Object-fit: Cover
- Grayscale filter: None OR 0-20%
- Hover: Slight scale (1.02-1.05) OR brightness increase

**Card Text Area:**
- Padding: ~32-40px
- Background: Maintains card background

**Service Title:**
- Font size: ~20-24px
- Font weight: 400-500
- Margin bottom: ~12-16px
- Text transform: Uppercase OR normal

**Service Description:**
- Font size: ~14-16px
- Line height: ~1.5-1.6
- Color: Dark with 70-80% opacity

### Mobile Layout

**Services Grid:**
- Columns: 1 (full width stack)
- Gap: 16-24px
- Side padding: 24px

**Card:**
- Full width
- Image height: 250-300px (fixed)
- Text padding: 24-32px

---

## ⏱️ PROCESS/TIMELINE SECTION

### Desktop Layout

**Section Header:**
- Same as Services header
- "PROCESS" title
- Margin bottom: ~80-100px

**Timeline Layout:**
- Layout: Horizontal row OR vertical list
- Each step: Number (01-05) + Image + Title + Description
- Spacing between steps: ~60-80px (vertical)

**Step Container:**
- Layout: Flexbox row
- Image: Left side (~30-40% width)
- Text: Right side (~60-70% width)
- Gap: ~40-50px
- Padding: ~40-60px vertical between steps
- Border top: 1px solid (subtle, every step after first)

**Step Number:**
- Font size: ~14-16px
- Font: Mono or sans-serif
- Color: 60-70% opacity
- Position: Above or beside title

**Step Image:**
- Width: ~200-300px
- Height: ~200-300px (square or slight rectangle)
- Object-fit: Cover
- Border-radius: 0px

**Step Title:**
- Font size: ~32-40px
- Font weight: 400-600
- Margin bottom: ~16-20px
- Text transform: Uppercase

**Step Description:**
- Font size: ~16-18px
- Line height: ~1.6-1.7
- Color: 70-80% opacity
- Max-width: ~500px

**Background Colors:**
- Alternating: Some steps on white, some on light cream, some on dark brown
- Dark steps: White text

### Mobile Layout

**Timeline:**
- Stack vertically
- Image above text
- Full width layout

**Step:**
- Padding: 40-60px vertical
- Side padding: 24px
- Image: Full width, height ~200px
- Text: Below image, full width

---

## 🖼️ PORTFOLIO/GALLERY SECTION

### Desktop Layout

**Section Header:**
- "PORTFOLIO" 
- Same styling as other section headers
- Margin bottom: ~80-100px

**Gallery Grid:**
- Columns: 3
- Gap: ~24-32px
- All items: Equal height within row, variable between rows

**Portfolio Item:**
- Aspect ratio: ~2:3 (portrait) or 1:1 (square)
- Hover: Subtle lift + shadow
- Transition: ~0.3s ease-out

**Item Image:**
- Object-fit: Cover
- Height: ~400-600px (variable)
- Width: 100% of column

**Item Caption:**
- Position: Below image
- Padding: ~24-32px
- Background: Light cream or white

**Project Title:**
- Font size: ~20-24px
- Font weight: 400-500
- Text transform: Uppercase
- Margin bottom: ~8-12px

**Project Details:**
- Font size: ~14px
- Line height: ~1.6
- Color: 60-70% opacity

**"Learn More" Link:**
- Font size: ~14px
- Text decoration: Underline OR arrow
- Color: Primary dark
- Hover: Underline animation (draw from left)

### Mobile Layout

**Gallery:**
- Columns: 1 (full width stack)
- Gap: 24px
- Side padding: 24px

**Portfolio Item:**
- Image height: ~400px (fixed)
- Caption padding: 24px

---

## 🧭 NAVIGATION (Fixed Header)

### Desktop Layout

**Header Container:**
- Position: Fixed top
- Width: 100%
- Height: ~80-100px
- Background: Cream/beige (same as body) OR white
- Border bottom: 1px solid (very subtle, 10% opacity)
- Z-index: 1000
- Backdrop blur: Optional (8-10px blur if translucent)

**Logo:**
- Position: Left side
- Margin left: ~40-60px
- Font size: ~16-20px
- Font weight: 400
- Letter spacing: ~0.1em

**Navigation Menu:**
- Position: Center OR right side
- Display: Horizontal row
- Gap: ~40-50px between items
- Font size: ~14-16px
- Font weight: 400
- Text transform: Uppercase

**Menu Item Hover:**
- Underline animation: Draw from center OR left
- Transition: ~0.3s ease-out
- Color: No change (or very subtle)

**CTA Button (in nav):**
- Position: Far right
- Margin right: ~40-60px
- Padding: ~12px 32px
- Border: 1px solid OR 2px solid
- Font size: ~14px
- Letter spacing: ~0.05em

**Scroll Behavior:**
- Initial state: Larger (100px height)
- Scrolled state: Smaller (60-70px height)
- Transition: ~0.3s ease-out
- Background: Becomes more opaque when scrolled

### Mobile Layout

**Header:**
- Height: ~60-70px
- Padding: 16-24px (sides)

**Logo:**
- Font size: 14-16px
- Center OR left aligned

**Hamburger Menu:**
- Position: Right side
- Size: ~24x24px
- Line thickness: 2px
- Spacing: 6px between lines
- Color: Dark

**Mobile Menu (Open):**
- Position: Fixed full screen OR slide from right
- Background: Solid (cream or white)
- Padding: 80px 40px (top includes header space)
- Menu items: Stack vertically
- Font size: 24-32px
- Spacing: 32-40px between items

---

## 🦶 FOOTER

### Desktop Layout

**Footer Container:**
- Background: Dark brown OR dark charcoal
- Color: Light cream/white text
- Padding: ~100-120px (top/bottom)
- Max-width: None (full width)

**Footer Grid:**
- Layout: 4-5 columns
- Gap: ~60-80px
- Max-width: ~1200px centered
- Alignment: Top

**Column 1 (Logo/About):**
- Width: ~25-30%
- Logo: Same as header but light color
- Description: ~14-16px, 70% opacity
- Margin bottom (description): ~24px

**Columns 2-4 (Links):**
- Width: ~15-20% each
- Column header: 
  - Font size: ~14-16px
  - Font weight: 500-600
  - Text transform: Uppercase
  - Letter spacing: ~0.05em
  - Margin bottom: ~20-24px

**Link Items:**
- Font size: ~14-16px
- Line height: ~2.0-2.2 (generous)
- Color: 70-80% opacity
- Hover: 100% opacity + underline
- Transition: ~0.2s ease

**Column 5 (Social/Newsletter):**
- Width: ~20-25%
- Social icons: 
  - Size: ~20-24px
  - Spacing: ~16px between
  - Hover: Scale 1.1 OR color change

**Footer Bottom:**
- Padding top: ~40-60px (from columns)
- Border top: 1px solid (20% white opacity)
- Padding top: ~20-24px (from border)
- Font size: ~12-14px
- Layout: Left (copyright) | Right (legal links)
- Color: 50-60% opacity

### Mobile Layout

**Footer:**
- Padding: 60-80px 24px

**Columns:**
- Stack vertically
- Width: 100%
- Spacing: 40-50px between sections

**Footer Bottom:**
- Stack vertically (copyright above legal)
- Text align: Center
- Spacing: 16px between

---

## 📏 UNIVERSAL SPACING SYSTEM

### Vertical Spacing (Between Major Sections)

**Desktop:**
- Extra large gap: 200-250px
- Large gap: 150-180px  
- Medium gap: 100-120px
- Small gap: 60-80px
- Tight: 40-50px

**Mobile:**
- Scale factor: ~60-70% of desktop
- Extra large: 120-150px
- Large: 90-100px
- Medium: 60-80px
- Small: 40-50px
- Tight: 24-32px

### Internal Spacing (Within Sections)

**Desktop:**
- Section padding: 100-150px (top/bottom)
- Card padding: 40-60px
- Text block padding: 32-48px
- Element gaps: 24-32px

**Mobile:**
- Section padding: 60-80px (top/bottom)
- Card padding: 24-32px
- Text block padding: 24px
- Element gaps: 16-24px

### Horizontal Spacing

**Desktop:**
- Content max-width: 1200-1400px
- Side margins (when not full-width): 60-80px
- Grid gaps: 24-32px
- Element spacing: 16-24px

**Mobile:**
- Content padding: 24px (left/right)
- Grid gaps: 16px
- Element spacing: 12-16px

---

## 🎯 GRID SYSTEM

### Desktop Grid

**12-Column Grid (Standard):**
- Total width: 1200px
- Column width: ~85px
- Gutter: 24px
- Outer margins: ~120px (at 1440px viewport)

**Common Layouts:**
- Full width: 12 columns
- Two-thirds: 8 columns
- Half: 6 columns
- Third: 4 columns
- Quarter: 3 columns

**Asymmetric Splits:**
- 40/60: 5 columns / 7 columns
- 30/70: 4 columns / 8 columns
- 25/75: 3 columns / 9 columns

### Mobile Grid

**Single Column:**
- Width: 100% minus 48px (24px padding each side)
- All elements stack vertically
- Maintain hierarchical spacing

---

## 📐 CONTAINER CONSTRAINTS

**Maximum Widths:**
- Page container: 1440px (viewport)
- Content container: 1200px
- Text column (reading): 600-700px
- Wide text column: 800-900px
- Form inputs: 400-500px

**Minimum Widths:**
- Mobile: 320px (design must work here)
- Comfortable mobile: 375px
- Tablet: 768px

---

## 🔲 ASPECT RATIOS

**Images:**
- Hero: 16:9 OR custom (full viewport)
- Portrait images: 2:3 OR 3:4
- Square images: 1:1
- Landscape images: 3:2 OR 16:9
- Wide images: 21:9

**Cards:**
- Standard card: Variable height (content-driven)
- Square card: 1:1
- Portrait card: 2:3
- Landscape card: 3:2

---

## 📱 RESPONSIVE BREAKPOINTS

**Exact Breakpoints:**
```css
/* Mobile */
@media (max-width: 767px) { }

/* Tablet */
@media (min-width: 768px) and (max-width: 1023px) { }

/* Small Desktop */
@media (min-width: 1024px) and (max-width: 1439px) { }

/* Desktop */
@media (min-width: 1440px) { }

/* Large Desktop */
@media (min-width: 1920px) { }
```

**Layout Changes:**
- < 768px: All grids become 1 column
- 768px - 1023px: 2 columns max
- 1024px - 1439px: 3 columns max
- 1440px+: Full 4-5 column layouts

---

## 💡 KEY MEASUREMENT PRINCIPLES

1. **Generous Whitespace**: 150-200px between major sections (desktop)
2. **Breathing Room**: 40-60px around text blocks
3. **Optical Alignment**: Elements align to grid, but text can break grid for better visual balance
4. **Asymmetry**: Intentional imbalance (40/60, 30/70) creates visual interest
5. **Consistent Gaps**: 24px is the standard gap for grids/cards
6. **Scalable Spacing**: Mobile is ~60-70% of desktop spacing
7. **Typography Space**: Large headlines get 1.0-1.1 line-height, body gets 1.6-1.7
8. **Hover Lift**: Standard is 4-8px translateY
9. **Sharp Corners**: 0px border-radius everywhere
10. **Subtle Borders**: 1px solid at 10-20% opacity

---

## 📊 VISUAL HIERARCHY SPACING

**Level 1 (Page to Page):**
- Separation: N/A (page transitions)

**Level 2 (Section to Section):**
- Separation: 150-250px (desktop), 80-120px (mobile)

**Level 3 (Subsection to Subsection):**
- Separation: 80-120px (desktop), 40-60px (mobile)

**Level 4 (Module to Module):**
- Separation: 40-60px (desktop), 24-40px (mobile)

**Level 5 (Element to Element):**
- Separation: 16-32px (desktop), 12-24px (mobile)

**Level 6 (Text Line to Text Line):**
- Separation: Based on line-height (1.5-1.7)

---

## 🎨 VISUAL WEIGHT DISTRIBUTION

Based on OURA reference analysis:

**60% Whitespace / Breathing Room**
- Large gaps between sections
- Margins around content
- Internal padding

**30% Content**
- Text, images, cards
- Actual information

**10% UI Elements**
- Buttons, borders, dividers
- Navigation elements

This ratio creates the "editorial magazine" feel - lots of space, selective content placement.

---

## ✅ MEASUREMENT CHECKLIST

When building, verify:
- [ ] Sections have 150-200px spacing (desktop)
- [ ] Content max-width is 1200px
- [ ] Text columns max 600-700px for readability
- [ ] Grid gaps are consistent (24px standard)
- [ ] Mobile uses 24px side padding
- [ ] Cards have 40-60px internal padding (desktop)
- [ ] No border-radius (0px everywhere)
- [ ] Subtle borders are 1px at 10-20% opacity
- [ ] Hover lifts are 4-8px
- [ ] Typography line-heights correct (1.1 for headlines, 1.6 for body)

---

**Next Document:** `02_TYPOGRAPHY_SYSTEM.md` - Detailed typography specifications including exact font sizes, weights, line-heights, and usage rules.

---

*Document Version: 1.0*
*Extracted from: OURA & CO. reference design*
*For: Lab1 Website Implementation*
