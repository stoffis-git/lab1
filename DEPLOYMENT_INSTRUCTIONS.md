# Deployment Instructions

## Quick Start

All changes are staged and ready to commit. Follow these steps:

### 1. Review Changes
```bash
git status
git diff --staged
```

### 2. Commit Changes
```bash
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

### 4. Vercel Auto-Deployment
- Vercel will automatically detect the push
- Deployment will start within seconds
- Build time: ~5-10 minutes (first build with image optimization may take longer)
- Monitor progress at: https://vercel.com/dashboard

### 5. Verify Deployment
- Check deployment logs for any errors
- Wait for "Ready" status
- Visit your production URL
- Run through testing checklist

---

## What Happens During Build

1. **Next.js Build Process:**
   - Runs `next build`
   - Compiles TypeScript/React
   - Generates static pages

2. **Image Optimization:**
   - Processes all images in `/public` folder
   - Generates WebP versions
   - Generates AVIF versions (where supported)
   - Creates multiple sizes for responsive images
   - Stores optimized images in `.next/cache/images`

3. **Deployment:**
   - Uploads optimized images to Vercel CDN
   - Deploys application
   - Updates production URL

---

## Monitoring Deployment

### Vercel Dashboard
1. Go to https://vercel.com/dashboard
2. Select your project
3. View "Deployments" tab
4. Check build logs for:
   - ✅ Build successful
   - ✅ Image optimization completed
   - ⚠️ Any warnings (usually safe to ignore)
   - ❌ Any errors (needs attention)

### Build Logs to Watch For
```
✓ Optimizing images
✓ Generating static pages
✓ Collecting page data
✓ Finalizing page optimization
```

---

## Troubleshooting

### Build Fails
- Check build logs in Vercel dashboard
- Verify `next.config.js` syntax is correct
- Ensure all image paths are valid
- Check for TypeScript errors

### Images Not Optimizing
- Verify `next.config.js` has image config
- Check that images are in `/public` folder
- Ensure image paths start with `/` (not relative)
- Check Vercel build logs for image optimization messages

### Images Not Loading
- Check Network tab in browser DevTools
- Verify image paths are correct
- Check for CORS issues
- Verify Vercel deployment is complete

### Performance Not Improved
- Wait for full image optimization (first build takes longer)
- Clear browser cache
- Check Network tab - verify WebP/AVIF formats
- Run Lighthouse audit after full page load

---

## Post-Deployment Checklist

After deployment is live:

1. ✅ Visit production URL
2. ✅ Check homepage loads correctly
3. ✅ Verify images are WebP/AVIF (Network tab)
4. ✅ Run Lighthouse audit
5. ✅ Test on mobile device
6. ✅ Complete full testing checklist (see DEPLOYMENT_CHECKLIST.md)

---

## Need Help?

If you encounter issues:
1. Check Vercel build logs
2. Review browser console for errors
3. Check Network tab for failed requests
4. Compare with local build: `npm run build`

---

**Ready to deploy?** Run the commit and push commands above!

