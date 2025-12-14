const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

/**
 * Re-compress images with color preservation
 * 
 * This script re-compresses images while maintaining color saturation
 * by using higher quality thresholds and proper color management.
 */

const filesToRecompress = [
  // Large images - use higher quality to preserve color
  { file: 'public/Lab1-image-performance-yoga.png', targetSize: 4, minQuality: 75 },
  { file: 'public/Lab1-image-testkit-woman.png', targetSize: 4, minQuality: 75 },
  { file: 'public/Lab1-image-expert-fabian_plachel.png', targetSize: 4, minQuality: 75 },
  { file: 'public/Lab1-image-team.png', targetSize: 4, minQuality: 75 },
  { file: 'public/Lab1-image-health-mom.png', targetSize: 4, minQuality: 75 },
  { file: 'public/Lab1-image-expert-team.png', targetSize: 3.5, minQuality: 75 },
  { file: 'public/Lab1-image-health-longevity_female.png', targetSize: 3.5, minQuality: 75 },
  { file: 'public/Lab1-image-backrgound-plant2.png', targetSize: 4, minQuality: 75 },
  { file: 'public/Lab1-image-backrgound-plant1.png', targetSize: 4, minQuality: 75 },
  { file: 'public/Lab1-image-user-woman.png', targetSize: 2.5, minQuality: 75 },
  
  // Medium images - balance quality and size
  { file: 'public/Lab1-image-general-people.png', targetSize: 1.5, minQuality: 70 },
  { file: 'public/Lab1-image-hero-eyes_extended.png', targetSize: 1.5, minQuality: 70 },
  { file: 'public/Lab1-image-product-essential_selection.png', targetSize: 1.5, minQuality: 70 },
  { file: 'public/Lab1-image-hero-eyes.png', targetSize: 1.2, minQuality: 70 },
  { file: 'public/Lab1-image-women-smile.png', targetSize: 1.2, minQuality: 70 },
];

async function recompressWithColorPreservation(filePath, targetSizeMB, minQuality) {
  const fullPath = path.join(process.cwd(), filePath);
  
  if (!fs.existsSync(fullPath)) {
    console.log(`⚠️  File not found: ${filePath}`);
    return;
  }

  const stats = fs.statSync(fullPath);
  const originalSizeMB = (stats.size / 1024 / 1024).toFixed(2);
  
  console.log(`\n🎨 Re-compressing: ${path.basename(filePath)}`);
  console.log(`   Original size: ${originalSizeMB}MB`);
  console.log(`   Target size: ${targetSizeMB}MB`);
  console.log(`   Min quality: ${minQuality}% (for color preservation)`);

  try {
    const metadata = await sharp(fullPath).metadata();
    
    // Create backup
    const backupPath = fullPath + '.recompress-backup';
    fs.copyFileSync(fullPath, backupPath);
    console.log(`   ✓ Backup created`);

    // Re-compress with color preservation
    // Use higher minimum quality to preserve color saturation
    let quality = 100;
    let currentSizeMB = originalSizeMB;
    let attempts = 0;
    const maxAttempts = 15;

    while (currentSizeMB > targetSizeMB && attempts < maxAttempts && quality >= minQuality) {
      attempts++;
      quality = Math.max(minQuality, quality - 3); // Reduce quality by 3% each attempt, but don't go below minQuality

      const buffer = await sharp(fullPath)
        .keepMetadata() // Preserve color profiles and metadata
        .toColorspace('srgb') // Explicitly ensure sRGB
        .png({
          compressionLevel: 7,
          quality: quality,
          effort: 7,
          palette: false, // Better color accuracy
        })
        .toBuffer();

      currentSizeMB = (buffer.length / 1024 / 1024).toFixed(2);
      
      if (currentSizeMB <= targetSizeMB || quality <= minQuality) {
        // Write compressed image
        fs.writeFileSync(fullPath, buffer);
        const finalSizeMB = (fs.statSync(fullPath).size / 1024 / 1024).toFixed(2);
        const reduction = ((1 - finalSizeMB / originalSizeMB) * 100).toFixed(1);
        
        console.log(`   ✓ Compressed: ${finalSizeMB}MB (${reduction}% reduction)`);
        console.log(`   ✓ Quality used: ${quality}% (color preserved)`);
        break;
      }
    }

    if (currentSizeMB > targetSizeMB && quality <= minQuality) {
      console.log(`   ⚠️  Reached minimum quality (${minQuality}%) to preserve color`);
      console.log(`   Final size: ${currentSizeMB}MB (target: ${targetSizeMB}MB)`);
    }

  } catch (error) {
    console.error(`   ❌ Error: ${error.message}`);
    const backupPath = fullPath + '.recompress-backup';
    if (fs.existsSync(backupPath)) {
      fs.copyFileSync(backupPath, fullPath);
      console.log(`   ✓ Restored from backup`);
    }
  }
}

async function main() {
  console.log('🎨 Re-compressing images with color preservation...\n');
  console.log(`📋 Files to process: ${filesToRecompress.length}\n`);
  console.log('💡 Using higher quality thresholds to maintain color saturation\n');

  for (const { file, targetSize, minQuality } of filesToRecompress) {
    await recompressWithColorPreservation(file, targetSize, minQuality);
  }

  console.log('\n' + '─'.repeat(80));
  console.log('\n✅ Re-compression complete!');
  console.log('\n📝 Next steps:');
  console.log('   1. Review images for color accuracy');
  console.log('   2. If satisfied, delete backup files');
  console.log('   3. Consider increasing quality in Image components to 90-95 for hero images');
  console.log('   4. Commit and push changes');
}

main().catch(console.error);

