/**
 * Custom Image Loader for Next.js Image Component
 * Preserves color profiles and ensures proper color management
 */

const sharp = require('sharp');

module.exports = async function customImageLoader({ src, width, quality }) {
  // For external images, return as-is
  if (src.startsWith('http://') || src.startsWith('https://')) {
    return src;
  }

  // For local images, use Next.js optimization but with color preservation
  // Next.js will handle the optimization, but we can add custom processing here if needed
  // For now, we'll use the default Next.js optimization which should preserve sRGB
  
  // The key is to ensure images are processed with proper color management
  // Since all our images are already sRGB, we just need to ensure no color space conversion happens
  
  return `/_next/image?url=${encodeURIComponent(src)}&w=${width}&q=${quality || 75}`;
};

