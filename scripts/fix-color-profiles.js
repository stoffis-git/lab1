const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

/**
 * Fix Color Profile Issues
 * 
 * This script ensures all PNG images have proper sRGB color profiles
 * and are optimized for web display with color management preserved.
 */

const imagesToFix = [
  'public/Lab1-image-hero-eyes.png',
  'public/Lab1-image-expert-team.png',
  'public/Lab1-image-team.png',
  'public/Lab1-image-testkit-woman.png',
  'public/Lab1-image-performance-yoga.png',
  'public/Lab1-image-health-mom.png',
  'public/Lab1-image-backrgound-plant1.png',
  'public/Lab1-image-backrgound-plant2.png',
  'public/Lab1-image-expert-fabian_plachel.png',
  'public/Lab1-image-health-longevity_female.png',
  'public/Lab1-image-user-woman.png',
  'public/Lab1-image-general-people.png',
  'public/Lab1-image-hero-eyes_extended.png',
  'public/Lab1-image-product-essential_selection.png',
  'public/Lab1-image-women-smile.png',
];

async function fixColorProfile(imagePath) {
  const fullPath = path.join(process.cwd(), imagePath);
  
  if (!fs.existsSync(fullPath)) {
    console.log(`⚠️  File not found: ${imagePath}`);
    return null;
  }

  try {
    // Get current metadata
    const metadata = await sharp(fullPath).metadata();
    const originalSize = fs.statSync(fullPath).size;
    
    console.log(`\n📸 Processing: ${path.basename(imagePath)}`);
    console.log(`   Current: ${metadata.space || 'unknown'} color space`);
    console.log(`   Size: ${(originalSize / 1024 / 1024).toFixed(2)}MB`);

    // Create backup
    const backupPath = fullPath + '.color-backup';
    fs.copyFileSync(fullPath, backupPath);
    console.log(`   ✓ Backup created`);

    // Process image with proper color management
    // Key settings:
    // - keepMetadata: true (preserves any existing color info)
    // - toColorspace: 'srgb' (ensures sRGB output)
    // - removeAlpha: false (preserves transparency if present)
    // - png: { compressionLevel: 6, quality: 100 } (maintains quality)
    
    const buffer = await sharp(fullPath)
      .keepMetadata() // Preserve any existing metadata
      .toColorspace('srgb') // Ensure sRGB output (explicit)
      .png({
        compressionLevel: 6,
        quality: 100, // Maximum quality for color preservation
        effort: 7,
        palette: false, // Don't use palette mode (better color accuracy)
      })
      .toBuffer();

    // Write processed image
    fs.writeFileSync(fullPath, buffer);
    
    const newSize = fs.statSync(fullPath).size;
    const newMetadata = await sharp(fullPath).metadata();
    
    console.log(`   ✓ Processed: ${(newSize / 1024 / 1024).toFixed(2)}MB`);
    console.log(`   ✓ Color space: ${newMetadata.space || 'srgb'}`);
    console.log(`   ✓ Dimensions: ${newMetadata.width}x${newMetadata.height}`);
    
    return {
      file: path.basename(imagePath),
      originalSize: originalSize,
      newSize: newSize,
      colorSpace: newMetadata.space,
    };

  } catch (error) {
    console.error(`   ❌ Error: ${error.message}`);
    // Restore backup on error
    const backupPath = fullPath + '.color-backup';
    if (fs.existsSync(backupPath)) {
      fs.copyFileSync(backupPath, fullPath);
      console.log(`   ✓ Restored from backup`);
    }
    return null;
  }
}

async function main() {
  console.log('🎨 Fixing color profiles for optimal web display...\n');
  console.log(`📋 Files to process: ${imagesToFix.length}\n`);

  const results = [];
  for (const imagePath of imagesToFix) {
    const result = await fixColorProfile(imagePath);
    if (result) {
      results.push(result);
    }
  }

  console.log('\n' + '─'.repeat(80));
  console.log('\n✅ Color profile fix complete!');
  console.log(`\n📊 Processed ${results.length} images`);
  console.log('\n📝 Next steps:');
  console.log('   1. Review images for color accuracy');
  console.log('   2. If satisfied, delete .color-backup files');
  console.log('   3. Commit and push changes');
}

main().catch(console.error);

