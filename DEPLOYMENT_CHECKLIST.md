# Next.js Image Migration - Deployment & Testing Checklist

## Pre-Deployment Summary

### Files Modified (16 files)
- ✅ `next.config.js` - Image optimization configuration
- ✅ `components/SplitSection.tsx` + `.css` - Migrated to Next.js Image
- ✅ `components/HeroSplit.tsx` + `.css` - Migrated with priority support
- ✅ `components/PathSelector.tsx` + `.css` - Migrated with custom transforms
- ✅ `components/AnnasStory.tsx` + `.css` - Migrated with sticky positioning
- ✅ `components/ProductCarousel.tsx` + `.css` - Migrated with priority on first image
- ✅ `app/about/page.tsx` + `.css` - Hero and team banner migrated
- ✅ `app/get-started/page.tsx` + `.css` - Product card images migrated
- ✅ `app/page.tsx` - Homepage hero priority enabled

### Expected Improvements
- **Image Payload:** ~220MB → ~25-35MB (85-90% reduction)
- **Format:** PNG/JPG → WebP/AVIF (automatic)
- **Responsive:** Single large image → Multiple optimized sizes
- **Performance:** Lighthouse 30-50 → 80-95 (target)

---

## Deployment Steps

### 1. Review Changes
```bash
git status
git diff
```

### 2. Commit Changes
```bash
git add -A
git commit -m "feat: Migrate all images to Next.js Image component

- Add image optimization config to next.config.js
- Migrate HeroSplit, PathSelector, AnnasStory, ProductCarousel, SplitSection
- Add priority loading for homepage and about page heroes
- Preserve all custom transforms, positioning, and effects
- Update CSS for Next.js Image wrapper compatibility

Expected improvements:
- 85-90% reduction in image payload (220MB → 25-35MB)
- Automatic WebP/AVIF format generation
- Responsive image serving
- Improved Lighthouse performance scores"
```

### 3. Push to GitHub
```bash
git push origin main
```

### 4. Vercel Deployment
- Vercel will automatically detect the push and start deployment
- Build process will:
  - Run `next build`
  - Generate optimized images (WebP/AVIF)
  - Create responsive image variants
  - Deploy to production

**Note:** First deployment may take longer due to image optimization processing.

---

## Post-Deployment Testing Checklist

### 🏠 Homepage Testing

#### Hero Section
- [ ] **Load Speed:** Hero image loads quickly (within 1-2 seconds on fast connection)
- [ ] **Visual Quality:** Image is sharp and high quality
- [ ] **Zoom Effect:** `transform: scale(1.15)` zoom effect is preserved
- [ ] **Responsive:** Image displays correctly on desktop, tablet, and mobile
- [ ] **Priority Loading:** Image loads with priority (check Network tab - should be early in load order)
- [ ] **Format:** Image is served as WebP or AVIF (check Network tab → Response Headers → Content-Type)
- [ ] **No Layout Shift:** Page doesn't jump when image loads (CLS check)

#### Other Homepage Elements
- [ ] All other images load correctly
- [ ] No broken image placeholders
- [ ] Page scrolls smoothly

---

### 📄 About Page Testing

#### Hero Image
- [ ] **Priority Loading:** Hero image loads immediately (no delay)
- [ ] **Quality:** Image is sharp and clear
- [ ] **Positioning:** Image covers full viewport correctly
- [ ] **Overlay:** Dark overlay displays correctly over image
- [ ] **Headline:** Text is readable over image
- [ ] **Format:** Served as WebP/AVIF

#### Team Banner
- [ ] **Load Time:** Image loads within acceptable time
- [ ] **Positioning:** Image covers full section correctly
- [ ] **Content Overlay:** Headline displays correctly over image
- [ ] **Responsive:** Works on all screen sizes
- [ ] **Format:** Served as WebP/AVIF

---

### 🛍️ Get Started Page Testing

#### Essential Product Card
- [ ] **Image Display:** Product image displays correctly
- [ ] **Aspect Ratio:** Maintains 4:3 aspect ratio
- [ ] **Quality:** Image is clear and not pixelated
- [ ] **Hover Effect:** Card hover animation works
- [ ] **Format:** Served as WebP/AVIF

#### Core Product Card
- [ ] **Image Display:** Product image displays correctly
- [ ] **Aspect Ratio:** Maintains 4:3 aspect ratio
- [ ] **Quality:** Image is clear and not pixelated
- [ ] **Dark Theme:** Image works with dark card background
- [ ] **Format:** Served as WebP/AVIF

---

### 🎯 PathSelector Component Testing

**Test on:** `/how-it-works` page (or any page using PathSelector)

#### Slideshow Functionality
- [ ] **Auto-Rotation:** Images rotate every 4 seconds automatically
- [ ] **Manual Selection:** Clicking persona tiles switches images immediately
- [ ] **Smooth Transitions:** Opacity transitions are smooth (600ms)
- [ ] **No Flickering:** No visual glitches during transitions

#### Performance Runner Image (Health → Performance → First Image)
- [ ] **Zoom Effect:** `transform: scale(2.5)` is applied correctly
- [ ] **Crop Position:** `object-position: 200px -50px` crops correctly
- [ ] **Transform Origin:** `transform-origin: top right` positions zoom correctly
- [ ] **Aspect Ratio:** Maintains 16:9 container aspect ratio
- [ ] **Quality:** Image remains sharp despite zoom

#### Performance Yoga Image (Health → Performance → Second Image)
- [ ] **Zoom Effect:** `transform: scale(1.2)` is applied correctly
- [ ] **Transform Origin:** `transform-origin: center` positions zoom correctly
- [ ] **Aspect Ratio:** Maintains 16:9 container aspect ratio
- [ ] **Quality:** Image remains sharp

#### All Persona Images
- [ ] **Health Images:** Both health persona images display correctly
- [ ] **Longevity Images:** Both longevity persona images display correctly
- [ ] **General Image:** Essential path general image displays correctly
- [ ] **No Layout Shifts:** Container doesn't resize during slideshow
- [ ] **Format:** All images served as WebP/AVIF

---

### 👤 AnnasStory Component Testing

**Test on:** Homepage (scroll to Anna's Story section)

#### Sticky Positioning
- [ ] **Sticky Behavior:** Image sticks to viewport while scrolling content
- [ ] **Sticky Position:** Image sticks at `top: calc(50vh - 300px)`
- [ ] **Scroll Interaction:** Image stays in place while timeline content scrolls
- [ ] **Mobile Behavior:** On mobile, image is not sticky (position: relative)

#### Image Cropping
- [ ] **Custom Position:** `object-position: calc(50% - 50px) center` crops correctly
- [ ] **Width Extension:** `width: calc(100% + 50px)` extends beyond container
- [ ] **Visual Quality:** Image remains sharp
- [ ] **No Overflow Issues:** Extended width doesn't break layout

#### Responsive Behavior
- [ ] **Desktop:** Sticky positioning works (600px height)
- [ ] **Tablet:** Relative positioning works (500px height)
- [ ] **Mobile:** Relative positioning works (400px height)
- [ ] **Format:** Served as WebP/AVIF

---

### 🖼️ ProductCarousel Component Testing

**Test on:** `/products/core` and `/products/essential` pages

#### Main Product Image
- [ ] **Initial Load:** First image loads with priority
- [ ] **Display:** Main image displays correctly in 1:1 aspect ratio
- [ ] **Quality:** Image is high quality (quality={90} for first image)
- [ ] **Format:** Served as WebP/AVIF

#### Thumbnails
- [ ] **Display:** All thumbnails display correctly (80x80px)
- [ ] **Active State:** Active thumbnail has border highlight
- [ ] **Hover State:** Thumbnails show hover effect
- [ ] **Quality:** Thumbnails are clear (quality={75})

#### Image Switching
- [ ] **Click Thumbnail:** Clicking thumbnail switches main image smoothly
- [ ] **No Flicker:** Transition is smooth without flickering
- [ ] **State Update:** Selected thumbnail updates correctly
- [ ] **Multiple Images:** All carousel images load and display correctly

#### Core Variant
- [ ] **Styling:** Core variant styling works with images
- [ ] **Border Colors:** Border colors adapt correctly
- [ ] **Background:** Semi-transparent background works

---

## Performance Testing

### Lighthouse Audit

Run Lighthouse audit on homepage:

1. Open Chrome DevTools (F12)
2. Go to "Lighthouse" tab
3. Select "Performance" category
4. Select "Desktop" or "Mobile"
5. Click "Analyze page load"

**Target Scores:**
- **Performance:** 80-95 (was 30-50)
- **LCP (Largest Contentful Paint):** < 2.5s
- **CLS (Cumulative Layout Shift):** < 0.1
- **FID (First Input Delay):** < 100ms

**Record Results:**
- [ ] Performance Score: _____
- [ ] LCP: _____
- [ ] CLS: _____
- [ ] FID: _____

---

### Network Tab Analysis

1. Open Chrome DevTools (F12)
2. Go to "Network" tab
3. Filter by "Img"
4. Reload page
5. Check total image payload

**Record Results:**
- [ ] Total Image Payload: _____ MB (target: 25-35MB, was ~220MB)
- [ ] Number of Image Requests: _____
- [ ] Average Image Size: _____ KB

**Check Image Formats:**
- [ ] WebP images: _____ files
- [ ] AVIF images: _____ files
- [ ] PNG/JPG fallbacks: _____ files (should be minimal)

**Check Image Sizes:**
- [ ] Largest image: _____ KB
- [ ] Smallest image: _____ KB
- [ ] Average image: _____ KB

---

### Mobile Performance Testing

**Test on:** Mobile device or Chrome DevTools mobile emulation

- [ ] **Load Time:** Page loads in < 5 seconds on 3G
- [ ] **Image Quality:** Images are clear on mobile screens
- [ ] **Responsive Images:** Correct image sizes served for mobile
- [ ] **Touch Interactions:** All image interactions work (carousel, etc.)
- [ ] **Data Usage:** Total page size is reasonable for mobile

---

## Visual Regression Testing

### Desktop (1920x1080)
- [ ] Homepage hero image matches design
- [ ] About page hero matches design
- [ ] All product images match design
- [ ] PathSelector images match design
- [ ] AnnasStory image matches design
- [ ] No unexpected cropping or positioning

### Tablet (768x1024)
- [ ] All images scale correctly
- [ ] Aspect ratios maintained
- [ ] No overflow issues
- [ ] Touch interactions work

### Mobile (375x667)
- [ ] All images scale correctly
- [ ] Aspect ratios maintained
- [ ] No horizontal scrolling
- [ ] Images load quickly

---

## Browser Compatibility

Test on:
- [ ] **Chrome** (latest)
- [ ] **Safari** (latest)
- [ ] **Firefox** (latest)
- [ ] **Edge** (latest)
- [ ] **Mobile Safari** (iOS)
- [ ] **Chrome Mobile** (Android)

**Check:**
- [ ] WebP support (all modern browsers)
- [ ] AVIF support (Chrome, Firefox, Safari 16+)
- [ ] Fallback to PNG/JPG if needed

---

## Known Issues & Notes

### CSS Wrapper Spans
Next.js Image component wraps images in `<span>` elements. We've added CSS to handle these:
- `.hero-split__image > span`
- `.about-hero-new__image > span`
- `.about-team-banner__image > span`
- `.path-guide__persona-image-wrapper > span`
- `.annas-story__image > span`

If you see any layout issues, check these wrapper spans.

### Transform Wrappers
PathSelector uses wrapper divs for transforms (not on Image directly):
- Performance runner: wrapper has `transform: scale(2.5)`
- Performance yoga: wrapper has `transform: scale(1.2)`

This preserves the zoom effects while allowing Next.js Image optimization.

### Priority Images
Priority is set on:
- Homepage hero (via `isPriority` prop)
- About page hero (`priority={true}`)
- First ProductCarousel image (`priority={selectedIndex === 0}`)

All other images lazy load automatically.

---

## Rollback Plan

If critical issues are found:

1. **Revert Git Commit:**
   ```bash
   git revert HEAD
   git push origin main
   ```

2. **Vercel will automatically redeploy** with previous version

3. **Monitor:** Check that previous version is live

---

## Success Criteria

✅ **Migration is successful if:**
- All images display correctly
- No visual regressions
- Lighthouse Performance score > 80
- Total image payload < 50MB
- All custom effects preserved (transforms, sticky, etc.)
- No layout shifts (CLS < 0.1)
- Images served as WebP/AVIF

---

## Post-Deployment Report Template

After testing, fill out:

### Performance Metrics
- Lighthouse Performance Score: _____
- Total Image Payload: _____ MB
- Average Image Size: _____ KB
- LCP: _____ seconds

### Visual Quality
- All images display correctly: [ ] Yes [ ] No
- Custom effects preserved: [ ] Yes [ ] No
- No layout shifts: [ ] Yes [ ] No

### Issues Found
- Issue 1: _____
- Issue 2: _____
- Issue 3: _____

### Overall Status
- [ ] ✅ Migration Successful - All tests pass
- [ ] ⚠️ Minor Issues - Needs fixes
- [ ] ❌ Critical Issues - Needs rollback

---

**Last Updated:** After Phase 2 completion
**Next Review:** After Vercel deployment

