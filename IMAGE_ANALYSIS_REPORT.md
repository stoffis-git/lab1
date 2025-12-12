# Next.js Image Implementation Analysis Report

## 1. Current Image Usage Audit

### Image Files Inventory (Public Folder)

| File Path | Size | Format |
|-----------|------|--------|
| `public/Lab1-image-performance-yoga.png` | 18M | PNG |
| `public/Lab1-image-testkit-woman.png` | 24M | PNG |
| `public/Lab1-image-expert-fabian_plachel.png` | 23M | PNG |
| `public/Lab1-image-health-mom.png` | 23M | PNG |
| `public/Lab1-image-team.png` | 24M | PNG |
| `public/Lab1-image-user-woman.png` | 11M | PNG |
| `public/Lab1-image-backrgound-plant2.png` | 18M | PNG |
| `public/Lab1-image-backrgound-plant1.png` | 17M | PNG |
| `public/Lab1-image-hero-eyes_extended.png` | 7.8M | PNG |
| `public/Lab1-image-product-essential_selection.png` | 6.5M | PNG |
| `public/Lab1-image-general-people.png` | 7.3M | PNG |
| `public/Lab1-image-hero-eyes.png` | 5.8M | PNG |
| `public/Lab1-image-women-smile.png` | 5.1M | PNG |
| `public/Lab1-image-longevity-man02.png` | 5.0M | PNG |
| `public/Lab1-image-product-welcome-package.png` | 4.5M | PNG |
| `public/Lab1-image-media.jpg` | 463K | JPG |
| `public/Lab1-image-community.jpg` | 308K | JPG |
| `public/Lab1-iamge-product-testingkits.png` | 331K | PNG |
| `public/Lab1-image-testing.jpg` | 217K | JPG |
| `public/Lab1-image-practitioner.jpg` | 73K | JPG |
| `public/Lab1-image-product-core_clean.png` | 1.2M | PNG |
| `public/Lab1-image-product-core_personalized-levitating.png` | 1.3M | PNG |
| `public/Lab1-image-health-youngman.png` | 1.1M | PNG |
| `public/Lab1-image-product-essential_assembly.png` | 1.1M | PNG |
| `public/Lab1-image-performance-runner.png` | 2.4M | PNG |
| `public/Lab1-image-longevity-man.png` | 901K | PNG |
| `public/Lab1-image-expert-team.png` | 14M | PNG |
| `public/Lab1-image-health-longevity_female.png` | 14M | PNG |
| `public/Gemini_Generated_Image_7zx6vv7zx6vv7zx6.png` | 1.0M | PNG |
| `public/Gemini_Generated_Image_w8sit9w8sit9w8si.png` | 1.1M | PNG |
| `public/Gemini_Generated_Image_enp85jenp85jenp8.png` | 995K | PNG |

**Total Image Assets: 30 files**
**Total Size: ~220MB** (extremely large - critical optimization needed)

---

## 2. Image Usage by Component/Page

### 2.1 HeroSplit Component
**File:** `components/HeroSplit.tsx`

**Images Used:**
- `/Lab1-image-hero-eyes.png` (5.8M)
- `/Lab1-image-hero-eyes_extended.png` (7.8M) - used on science page
- `/Lab1-image-testkit-woman.png` (24M) - used on how-it-works page
- `/Lab1-image-backrgound-plant1.png` (17M) - used on science page

**Current Implementation:**
```tsx
<div className="hero-split__image hero-split__image--full hero-split__image--desktop">
  <img src={image} alt={imageAlt} />
</div>
<div className="hero-split__image hero-split__image--full hero-split__image--mobile">
  <img src={image} alt={imageAlt} />
</div>
```

**CSS Classes Applied:**
- `.hero-split__image` - `position: relative; width: 100%; height: 100%; overflow: hidden;`
- `.hero-split__image img` - `width: 100%; height: 100%; object-fit: cover; object-position: center; transform: scale(1.15);`

**Parent Container:**
- `.hero-split__images` - `position: absolute; inset: 0; width: 100%; height: 100%; z-index: 1;`

**Width/Height Attributes:** None (handled via CSS)

**Responsive Behavior:**
- Desktop: `.hero-split__image--desktop` displayed
- Mobile: `.hero-split__image--mobile` displayed (same image, different container)
- Image uses `transform: scale(1.15)` for zoom effect

---

### 2.2 PathSelector Component
**File:** `components/PathSelector.tsx`

**Images Used:**
- `/Lab1-image-health-mom.png` (23M)
- `/Lab1-image-health-youngman.png` (1.1M)
- `/Lab1-image-performance-runner.png` (2.4M)
- `/Lab1-image-performance-yoga.png` (18M)
- `/Lab1-image-longevity-man.png` (901K)
- `/Lab1-image-health-longevity_female.png` (14M)
- `/Lab1-image-general-people.png` (7.3M)

**Current Implementation:**
```tsx
<img 
  src={image} 
  alt={`${corePersonas[activePersona].alt} - Image ${index + 1}`}
  className={`path-guide__persona-image ${activePersona === 'performance' && index === 0 ? 'path-guide__persona-image--performance-runner' : ''} ${activePersona === 'performance' && index === 1 ? 'path-guide__persona-image--performance-yoga' : ''}`}
/>
```

**CSS Classes Applied:**
- `.path-guide__persona-image` - `width: 100%; height: 100%; object-fit: cover; display: block;`
- `.path-guide__persona-image--performance-runner` - `object-position: 200px -50px; transform: scale(2.5); transform-origin: top right;`
- `.path-guide__persona-image--performance-yoga` - `transform: scale(1.2); transform-origin: center;`

**Parent Container:**
- `.path-guide__persona-image-container` - `width: 100%; aspect-ratio: 16 / 9; overflow: hidden; background: var(--color-cream); position: relative;`
- `.path-guide__persona-slideshow` - `position: relative; width: 100%; height: 100%;`
- `.path-guide__persona-slide` - `position: absolute; inset: 0; opacity: 0; transition: opacity 600ms ease-in-out;`

**Width/Height Attributes:** None

**Special Features:**
- Slideshow with auto-rotation every 4 seconds
- Custom transforms for performance images (zoom and crop effects)
- Aspect ratio: 16:9

---

### 2.3 ProductCarousel Component
**File:** `components/ProductCarousel.tsx`

**Images Used:**
- `/Lab1-image-product-core_personalized-levitating.png` (1.3M)
- `/Lab1-image-product-welcome-package.png` (4.5M)
- `/Lab1-iamge-product-testingkits.png` (331K)
- `/Lab1-image-product-essential_selection.png` (6.5M)

**Current Implementation:**
```tsx
<div className="product-carousel__main">
  <img
    src={images[selectedIndex]}
    alt={alt}
    className="product-carousel__main-image"
  />
</div>
{images.map((image, index) => (
  <button className="product-carousel__thumbnail">
    <img
      src={image}
      alt={`${alt} - view ${index + 1}`}
      className="product-carousel__thumbnail-image"
    />
  </button>
))}
```

**CSS Classes Applied:**
- `.product-carousel__main-image` - `width: 100%; height: 100%; object-fit: cover; display: block;`
- `.product-carousel__thumbnail-image` - `width: 100%; height: 100%; object-fit: cover; display: block;`

**Parent Container:**
- `.product-carousel__main` - `width: 100%; aspect-ratio: 1 / 1; overflow: hidden; background: var(--color-white); border: 1px solid rgba(51, 54, 17, 0.1);`
- `.product-carousel__thumbnail` - `width: 80px; height: 80px; padding: 0; border: 2px solid transparent;`

**Width/Height Attributes:** None

**Aspect Ratio:** 1:1 for main image, 80x80px for thumbnails

---

### 2.4 AnnasStory Component
**File:** `components/AnnasStory.tsx`

**Images Used:**
- `/Lab1-image-women-smile.png` (5.1M)

**Current Implementation:**
```tsx
<div className="annas-story__image">
  <img src="/Lab1-image-women-smile.png" alt="Anna, satisfied Lab1 customer" />
</div>
```

**CSS Classes Applied:**
- `.annas-story__image img` - `width: calc(100% + 50px); height: 100%; object-fit: cover; object-position: calc(50% - 50px) center; display: block;`

**Parent Container:**
- `.annas-story__image-wrapper` - `position: relative; margin-left: -35px;`
- `.annas-story__image` - `position: sticky; top: calc(50vh - 300px); width: 100%; height: 600px; overflow: hidden;`

**Width/Height Attributes:** None

**Special Features:**
- Sticky positioning on scroll
- Custom object-position for cropping
- Width extended beyond container (`calc(100% + 50px)`)

---

### 2.5 SplitSection Component
**File:** `components/SplitSection.tsx`

**Images Used:** Dynamic (passed as prop)

**Current Implementation:**
```tsx
<div className="split-section__image">
  <img src={image} alt={imageAlt} />
</div>
```

**CSS Classes Applied:**
- `.split-section__image img` - `width: 100%; height: 100%; object-fit: cover;`

**Parent Container:**
- `.split-section__image` - `width: 100%; height: 600px; overflow: hidden;`

**Width/Height Attributes:** None

**Responsive Behavior:**
- Desktop: 600px height
- Tablet: 500px height
- Mobile: 300px height, moves to top of grid

---

### 2.6 About Page
**File:** `app/about/page.tsx`

**Images Used:**
- `/Lab1-image-expert-team.png` (14M) - Hero section
- `/Lab1-image-team.png` (24M) - Team banner section
- `/Lab1-image-backrgound-plant1.png` (17M) - Background image in CSS

**Current Implementation:**

**Hero Image:**
```tsx
<div className="about-hero-new__image">
  <img src="/Lab1-image-expert-team.png" alt="Lab1 expert team" />
</div>
```

**CSS:** `.about-hero-new__image img` - `width: 100%; height: 100%; object-fit: cover; object-position: center;`

**Team Banner:**
```tsx
<div className="about-team-banner__image">
  <img src="/Lab1-image-team.png" alt="Lab1 team working together" />
</div>
```

**CSS:** `.about-team-banner__image img` - `width: 100%; height: 100%; object-fit: cover; object-position: center;`

**Background Image (CSS):**
```css
.about-expertise {
  background-image: url('/Lab1-image-backrgound-plant1.png');
  background-size: cover;
  background-position: center;
}
```

**Parent Containers:**
- `.about-hero-new` - `position: relative; width: 100%; height: 90vh; min-height: 600px; overflow: hidden;`
- `.about-team-banner` - `position: relative; width: 100%; height: 90vh; min-height: 620px; overflow: hidden;`

---

### 2.7 Get Started Page
**File:** `app/get-started/page.tsx`

**Images Used:**
- `/Lab1-image-product-essential_assembly.png` (1.1M)
- `/Lab1-image-product-core_clean.png` (1.2M)

**Current Implementation:**
```tsx
<div className="product-card__image-container">
  <img src="/Lab1-image-product-essential_assembly.png" alt="Essential line preview" className="product-card__image" />
</div>
```

**CSS Classes Applied:**
- `.product-card__image` - `width: 100%; height: 100%; object-fit: cover; display: block;`

**Parent Container:**
- `.product-card__image-container` - `width: 100%; aspect-ratio: 4 / 3; overflow: hidden; background: var(--color-cream);`

**Aspect Ratio:** 4:3

---

### 2.8 Science Page
**File:** `app/science/page.tsx`

**Images Used:**
- `/Lab1-image-backrgound-plant1.png` (17M) - Hero and background
- `/Lab1-image-expert-fabian_plachel.png` (23M)
- `/Lab1-image-backrgound-plant2.png` (18M)
- `/Lab1-image-user-woman.png` (11M)

**Current Implementation:**

**Expert Image:**
```tsx
<div className="science-expert__image">
  <img src="/Lab1-image-expert-fabian_plachel.png" alt="Dr. Fabian Plachel portrait" />
</div>
```

**Layer Detail Images:**
```tsx
<div className="layer-detail__image">
  <img src="/Lab1-image-backrgound-plant1.png" alt="DNA - Genetic code visualization" />
</div>
<div className="layer-detail__image layer-detail__image--right">
  <img src="/Lab1-image-backrgound-plant2.png" alt="Biomarkers - Real-time health data" />
</div>
<div className="layer-you__image">
  <img src="/Lab1-image-user-woman.png" alt="Real person, real context" />
</div>
```

**Background Image (CSS):**
```css
.about-expertise {
  background-image: url('/Lab1-image-backrgound-plant1.png');
}
```

---

### 2.9 FAQ Page
**File:** `app/faq/FAQClient.css`

**Background Image:**
```css
.faq-hero:before {
  background-image: url('/Lab1-image-backrgound-plant2.png');
  background-size: cover;
  background-position: 50%;
  background-repeat: no-repeat;
  transform: scaleX(-1);
}
```

---

## 3. Next.js Image Component Status

### Current Status: ❌ NOT USING next/image

**Search Results:**
- No imports of `next/image` found in the codebase
- All images use standard HTML `<img>` tags
- Images are referenced from `/public` folder using absolute paths starting with `/`

### next.config.js
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig
```

**Current Configuration:**
- No image optimization settings
- No image domains configured
- No image formats specified
- No image sizes configuration

### Image Location
- **All images are in `/public` folder**
- Images are referenced using absolute paths: `/Lab1-image-*.png`
- No images are imported as modules

---

## 4. Layout & Styling Analysis

### 4.1 Positioning Methods

| Component | Positioning Method | Details |
|-----------|-------------------|---------|
| HeroSplit | Absolute | Parent container uses `position: absolute; inset: 0` |
| PathSelector | Relative | Container uses `position: relative`, images in absolute slideshow |
| ProductCarousel | Relative | Standard flow with aspect-ratio container |
| AnnasStory | Sticky | Image uses `position: sticky; top: calc(50vh - 300px)` |
| SplitSection | Grid | Parent uses CSS Grid `grid-template-columns: 1fr 1fr` |
| About Hero | Absolute | Full viewport height with absolute positioning |
| Product Cards | Flex | Flexbox layout with aspect-ratio containers |

### 4.2 Responsive Behavior

**HeroSplit:**
- Desktop: Full image displayed
- Mobile: Same image, different container class
- Uses media queries: `@media (max-width: 767px)`

**PathSelector:**
- Images maintain 16:9 aspect ratio
- Container responsive via grid system
- No specific mobile image variants

**ProductCarousel:**
- Main image: 1:1 aspect ratio (responsive)
- Thumbnails: 80x80px desktop, 60x60px mobile
- Media query: `@media (max-width: 767px)`

**AnnasStory:**
- Desktop: Sticky positioning, 600px height
- Tablet: Relative positioning, 500px height
- Mobile: Relative positioning, 400px height

**SplitSection:**
- Desktop: 600px height, side-by-side grid
- Tablet: 500px height
- Mobile: 300px height, stacked layout

### 4.3 Object-fit & Object-position

| Component | object-fit | object-position | Transform |
|-----------|------------|-----------------|------------|
| HeroSplit | cover | center | scale(1.15) |
| PathSelector | cover | center (default) | scale(2.5) for runner, scale(1.2) for yoga |
| ProductCarousel | cover | center | none |
| AnnasStory | cover | calc(50% - 50px) center | none |
| SplitSection | cover | center | none |
| About Hero | cover | center | none |
| Product Cards | cover | center | none |

### 4.4 Aspect Ratio Handling

- **HeroSplit:** Full viewport height (90vh)
- **PathSelector:** 16:9 aspect ratio
- **ProductCarousel:** 1:1 aspect ratio
- **Product Cards:** 4:3 aspect ratio
- **SplitSection:** Fixed height (600px desktop)

### 4.5 Cropping & Zoom Effects

1. **HeroSplit:** `transform: scale(1.15)` - 15% zoom
2. **PathSelector Performance Runner:** `transform: scale(2.5)` with `object-position: 200px -50px` - extreme zoom and crop
3. **PathSelector Performance Yoga:** `transform: scale(1.2)` - 20% zoom
4. **AnnasStory:** Width extended beyond container (`calc(100% + 50px)`) with custom object-position

---

## 5. Proposed Migration Plan

### 5.1 HeroSplit Component

**BEFORE:**
```tsx
<div className="hero-split__image hero-split__image--full hero-split__image--desktop">
  <img src={image} alt={imageAlt} />
</div>
<div className="hero-split__image hero-split__image--full hero-split__image--mobile">
  <img src={image} alt={imageAlt} />
</div>
```

**AFTER:**
```tsx
<div className="hero-split__image hero-split__image--full hero-split__image--desktop">
  <Image
    src={image}
    alt={imageAlt}
    fill
    priority
    quality={85}
    sizes="100vw"
    className="hero-split__image-content"
    style={{ objectFit: 'cover', objectPosition: 'center', transform: 'scale(1.15)' }}
  />
</div>
<div className="hero-split__image hero-split__image--full hero-split__image--mobile">
  <Image
    src={image}
    alt={imageAlt}
    fill
    priority
    quality={85}
    sizes="100vw"
    className="hero-split__image-content"
    style={{ objectFit: 'cover', objectPosition: 'center', transform: 'scale(1.15)' }}
  />
</div>
```

**Required CSS Changes:**
```css
.hero-split__image-content {
  width: 100%;
  height: 100%;
}
```

**Potential Issues:**
- `transform: scale(1.15)` may cause overflow - ensure parent has `overflow: hidden`
- Need to add `position: relative` to parent container for `fill` prop

---

### 5.2 PathSelector Component

**BEFORE:**
```tsx
<img 
  src={image} 
  alt={`${corePersonas[activePersona].alt} - Image ${index + 1}`}
  className={`path-guide__persona-image ${activePersona === 'performance' && index === 0 ? 'path-guide__persona-image--performance-runner' : ''} ${activePersona === 'performance' && index === 1 ? 'path-guide__persona-image--performance-yoga' : ''}`}
/>
```

**AFTER:**
```tsx
<Image
  src={image}
  alt={`${corePersonas[activePersona].alt} - Image ${index + 1}`}
  fill
  quality={80}
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  className={`path-guide__persona-image ${activePersona === 'performance' && index === 0 ? 'path-guide__persona-image--performance-runner' : ''} ${activePersona === 'performance' && index === 1 ? 'path-guide__persona-image--performance-yoga' : ''}`}
  style={{ objectFit: 'cover' }}
/>
```

**Required CSS Changes:**
```css
.path-guide__persona-image-container {
  position: relative; /* Required for fill prop */
}
```

**Potential Issues:**
- Custom transforms (scale(2.5), scale(1.2)) need to be preserved
- Object-position adjustments may need inline styles
- Slideshow opacity transitions should work the same

---

### 5.3 ProductCarousel Component

**BEFORE:**
```tsx
<img
  src={images[selectedIndex]}
  alt={alt}
  className="product-carousel__main-image"
/>
```

**AFTER:**
```tsx
<Image
  src={images[selectedIndex]}
  alt={alt}
  fill
  quality={90}
  sizes="(max-width: 768px) 100vw, 50vw"
  className="product-carousel__main-image"
  style={{ objectFit: 'cover' }}
/>
```

**Thumbnails:**
```tsx
<Image
  src={image}
  alt={`${alt} - view ${index + 1}`}
  width={80}
  height={80}
  quality={75}
  className="product-carousel__thumbnail-image"
  style={{ objectFit: 'cover' }}
/>
```

**Required CSS Changes:**
```css
.product-carousel__main {
  position: relative; /* Required for fill prop */
}
```

**Potential Issues:**
- Thumbnails can use fixed width/height instead of fill
- Main image aspect ratio maintained via container

---

### 5.4 AnnasStory Component

**BEFORE:**
```tsx
<img src="/Lab1-image-women-smile.png" alt="Anna, satisfied Lab1 customer" />
```

**AFTER:**
```tsx
<Image
  src="/Lab1-image-women-smile.png"
  alt="Anna, satisfied Lab1 customer"
  fill
  quality={85}
  sizes="(max-width: 1024px) 100vw, 50vw"
  style={{ 
    objectFit: 'cover',
    objectPosition: 'calc(50% - 50px) center',
    width: 'calc(100% + 50px)'
  }}
/>
```

**Required CSS Changes:**
```css
.annas-story__image {
  position: relative; /* Required for fill prop */
}
```

**Potential Issues:**
- Custom width extension (`calc(100% + 50px)`) may need container adjustment
- Object-position with calc() should work but test thoroughly

---

### 5.5 SplitSection Component

**BEFORE:**
```tsx
<img src={image} alt={imageAlt} />
```

**AFTER:**
```tsx
<Image
  src={image}
  alt={imageAlt}
  fill
  quality={85}
  sizes="(max-width: 768px) 100vw, 50vw"
  style={{ objectFit: 'cover' }}
/>
```

**Required CSS Changes:**
```css
.split-section__image {
  position: relative; /* Required for fill prop */
}
```

---

### 5.6 About Page

**Hero Image:**
```tsx
<Image
  src="/Lab1-image-expert-team.png"
  alt="Lab1 expert team"
  fill
  priority
  quality={85}
  sizes="100vw"
  style={{ objectFit: 'cover', objectPosition: 'center' }}
/>
```

**Team Banner:**
```tsx
<Image
  src="/Lab1-image-team.png"
  alt="Lab1 team working together"
  fill
  quality={85}
  sizes="100vw"
  style={{ objectFit: 'cover', objectPosition: 'center' }}
/>
```

**Background Images:**
- CSS background images should remain as-is OR convert to Next.js Image with overlay
- Option: Use Image component with absolute positioning and z-index

---

### 5.7 Get Started Page

**BEFORE:**
```tsx
<img src="/Lab1-image-product-essential_assembly.png" alt="Essential line preview" className="product-card__image" />
```

**AFTER:**
```tsx
<Image
  src="/Lab1-image-product-essential_assembly.png"
  alt="Essential line preview"
  fill
  quality={85}
  sizes="(max-width: 1024px) 100vw, 50vw"
  className="product-card__image"
  style={{ objectFit: 'cover' }}
/>
```

**Required CSS Changes:**
```css
.product-card__image-container {
  position: relative; /* Required for fill prop */
}
```

---

### 5.8 Science Page

**Expert Image:**
```tsx
<Image
  src="/Lab1-image-expert-fabian_plachel.png"
  alt="Dr. Fabian Plachel portrait"
  width={600}
  height={800}
  quality={90}
  style={{ objectFit: 'cover' }}
/>
```

**Layer Detail Images:**
```tsx
<Image
  src="/Lab1-image-backrgound-plant1.png"
  alt="DNA - Genetic code visualization"
  fill
  quality={80}
  sizes="(max-width: 768px) 100vw, 50vw"
  style={{ objectFit: 'cover' }}
/>
```

---

## 6. Optimization Strategy

### 6.1 Recommended Quality Settings

| Image Type | Quality | Rationale |
|------------|---------|-----------|
| Hero Images | 85-90 | High visibility, first impression |
| Product Images | 85-90 | E-commerce quality, detail important |
| Persona/Portrait Images | 80-85 | Good balance of quality and size |
| Background Images | 75-80 | Lower priority, decorative |
| Thumbnails | 70-75 | Small size, lower quality acceptable |
| Expert Photos | 90 | Professional portraits, high detail |

### 6.2 Build-time vs Runtime Optimization

**Build-time (Recommended):**
- Next.js Image Optimization runs at build time
- Generates multiple sizes automatically
- Creates WebP/AVIF versions
- No runtime processing needed

**Configuration:**
```javascript
// next.config.js
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
}
```

### 6.3 Estimated File Size Reductions

**Current State:**
- Total: ~220MB
- Average per image: ~7.3MB

**After Next.js Image Optimization:**

| Image Size (Current) | Estimated Reduction | Optimized Size |
|----------------------|---------------------|----------------|
| 24M PNG | 85-90% | 2.4-3.6M (WebP/AVIF) |
| 18M PNG | 85-90% | 1.8-2.7M (WebP/AVIF) |
| 14M PNG | 85-90% | 1.4-2.1M (WebP/AVIF) |
| 7-8M PNG | 80-85% | 1.0-1.6M (WebP/AVIF) |
| 1-2M PNG | 75-80% | 200-500K (WebP/AVIF) |
| 300-500K JPG | 60-70% | 90-200K (WebP/AVIF) |

**Projected Total:**
- **Optimized Total: ~25-35MB** (down from 220MB)
- **Reduction: ~85-90%**
- **Page Load Improvement: 5-10x faster**

### 6.4 Responsive Image Sizes

**Recommended sizes prop values:**

- **Hero Images:** `sizes="100vw"` (full viewport width)
- **Product Carousels:** `sizes="(max-width: 768px) 100vw, 50vw"`
- **Split Sections:** `sizes="(max-width: 768px) 100vw, 50vw"`
- **Product Cards:** `sizes="(max-width: 1024px) 100vw, 50vw"`
- **Persona Images:** `sizes="(max-width: 1200px) 50vw, 33vw"`

### 6.5 Priority Loading

**Images that should use `priority` prop:**
1. Hero images (above the fold)
2. First product image in carousel
3. About page hero image
4. Home page hero image

**Images that can lazy load:**
- All other images below the fold
- Thumbnails
- Background images
- Images in modals/expanded views

---

## 7. Migration Checklist

### Phase 1: Setup
- [ ] Update `next.config.js` with image optimization settings
- [ ] Install/verify Next.js Image component availability
- [ ] Test build process with image optimization

### Phase 2: Core Components
- [ ] Migrate HeroSplit component
- [ ] Migrate ProductCarousel component
- [ ] Migrate SplitSection component
- [ ] Test responsive behavior

### Phase 3: Page Components
- [ ] Migrate About page images
- [ ] Migrate Science page images
- [ ] Migrate Get Started page images
- [ ] Migrate PathSelector component

### Phase 4: Special Cases
- [ ] Handle AnnasStory sticky image
- [ ] Handle PathSelector slideshow
- [ ] Handle custom transforms and object-position
- [ ] Convert CSS background images (if needed)

### Phase 5: Testing
- [ ] Test all pages on desktop
- [ ] Test all pages on tablet
- [ ] Test all pages on mobile
- [ ] Verify image loading performance
- [ ] Check Lighthouse scores
- [ ] Verify no layout shifts (CLS)

### Phase 6: Optimization
- [ ] Add priority to above-fold images
- [ ] Fine-tune quality settings per image type
- [ ] Verify WebP/AVIF generation
- [ ] Monitor bundle size impact

---

## 8. Critical Issues to Address

1. **File Sizes:** 220MB total is extremely large - immediate optimization needed
2. **No Lazy Loading:** All images load immediately
3. **No Responsive Images:** Same large image served to all devices
4. **No Modern Formats:** Only PNG/JPG, no WebP/AVIF
5. **Layout Shifts:** No width/height attributes may cause CLS
6. **Background Images:** CSS background images can't use Next.js optimization
7. **Custom Transforms:** Need to preserve zoom/crop effects during migration

---

## 9. Expected Performance Improvements

**Before:**
- Total image payload: ~220MB
- Initial page load: 5-10 seconds (on fast connection)
- Mobile load: 15-30 seconds
- Lighthouse Performance: 30-50

**After:**
- Total image payload: ~25-35MB
- Initial page load: 1-2 seconds
- Mobile load: 3-5 seconds
- Lighthouse Performance: 80-95

**Additional Benefits:**
- Automatic lazy loading
- Responsive image serving
- Modern format support (WebP/AVIF)
- Reduced bandwidth costs
- Better SEO (Core Web Vitals)
- Improved user experience

---

## End of Report

