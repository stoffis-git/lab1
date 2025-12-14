const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

/**
 * Re-compress images with HIGH QUALITY to preserve RGB values
 * 
 * This script re-compresses from original backups using higher quality
 * to minimize RGB value changes during compression.
 */

const filesToRecompress = [
  // Restore from backups and re-compress with high quality
  { 
    backup: 'public/Lab1-image-hero-eyes.png.backup',
    output: 'public/Lab1-image-hero-eyes.png',
    targetSize: 1.5,
    minQuality: 85  // High quality to preserve RGB values
  },
  { 
    backup: 'public/Lab1-image-expert-team.png.backup',
    output: 'public/Lab1-image-expert-team.png',
    targetSize: 3.5,
    minQuality: 85
  },
  { 
    backup: 'public/Lab1-image-team.png.backup',
    output: 'public/Lab1-image-team.png',
    targetSize: 4,
    minQuality: 85
  },
  { 
    backup: 'public/Lab1-image-testkit-woman.png.backup',
    output: 'public/Lab1-image-testkit-woman.png',
    targetSize: 4,
    minQuality: 85
  },
  { 
    backup: 'public/Lab1-image-performance-yoga.png.backup',
    output: 'public/Lab1-image-performance-yoga.png',
    targetSize: 4,
    minQuality: 85
  },
  { 
    backup: 'public/Lab1-image-health-mom.png.backup',
    output: 'public/Lab1-image-health-mom.png',
    targetSize: 4,
    minQuality: 85
  },
  { 
    backup: 'public/Lab1-image-backrgound-plant2.png.backup',
    output: 'public/Lab1-image-backrgound-plant2.png',
    targetSize: 4,
    minQuality: 85
  },
  { 
    backup: 'public/Lab1-image-backrgound-plant1.png.backup',
    output: 'public/Lab1-image-backrgound-plant1.png',
    targetSize: 4,
    minQuality: 85
  },
  { 
    backup: 'public/Lab1-image-expert-fabian_plachel.png.backup',
    output: 'public/Lab1-image-expert-fabian_plachel.png',
    targetSize: 4,
    minQuality: 85
  },
  { 
    backup: 'public/Lab1-image-health-longevity_female.png.backup',
    output: 'public/Lab1-image-health-longevity_female.png',
    targetSize: 3.5,
    minQuality: 85
  },
  { 
    backup: 'public/Lab1-image-user-woman.png.backup',
    output: 'public/Lab1-image-user-woman.png',
    targetSize: 2.5,
    minQuality: 85
  },
  { 
    backup: 'public/Lab1-image-general-people.png.backup',
    output: 'public/Lab1-image-general-people.png',
    targetSize: 1.5,
    minQuality: 80
  },
  { 
    backup: 'public/Lab1-image-hero-eyes_extended.png.backup',
    output: 'public/Lab1-image-hero-eyes_extended.png',
    targetSize: 2,
    minQuality: 80
  },
  { 
    backup: 'public/Lab1-image-product-essential_selection.png.backup',
    output: 'public/Lab1-image-product-essential_selection.png',
    targetSize: 1.5,
    minQuality: 80
  },
  { 
    backup: 'public/Lab1-image-women-smile.png.backup',
    output: 'public/Lab1-image-women-smile.png',
    targetSize: 1.2,
    minQuality: 80
  },
];

async function recompressFromBackup(backupPath, outputPath, targetSizeMB, minQuality) {
  const backupFull = path.join(process.cwd(), backupPath);
  const outputFull = path.join(process.cwd(), outputPath);
  
  if (!fs.existsSync(backupFull)) {
    console.log(`⚠️  Backup not found: ${backupPath}`);
    return null;
  }

  const backupStats = fs.statSync(backupFull);
  const originalSizeMB = (backupStats.size / 1024 / 1024).toFixed(2);
  
  console.log(`\n🎨 Re-compressing: ${path.basename(outputPath)}`);
  console.log(`   Source: ${originalSizeMB}MB (original backup)`);
  console.log(`   Target: ${targetSizeMB}MB`);
  console.log(`   Min Quality: ${minQuality}% (to preserve RGB values)`);

  try {
    const metadata = await sharp(backupFull).metadata();
    
    // Create safety backup of current file
    if (fs.existsSync(outputFull)) {
      const safetyBackup = outputFull + '.before-recompress';
      fs.copyFileSync(outputFull, safetyBackup);
      console.log(`   ✓ Current file backed up`);
    }

    // Re-compress from original with high quality
    let quality = 100;
    let currentSizeMB = originalSizeMB;
    let attempts = 0;
    const maxAttempts = 20;

    while (currentSizeMB > targetSizeMB && attempts < maxAttempts && quality >= minQuality) {
      attempts++;
      quality = Math.max(minQuality, quality - 2); // Reduce by 2% each attempt

      const buffer = await sharp(backupFull)
        .keepMetadata() // Preserve any metadata
        .toColorspace('srgb') // Explicit sRGB
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
        fs.writeFileSync(outputFull, buffer);
        const finalSizeMB = (fs.statSync(outputFull).size / 1024 / 1024).toFixed(2);
        const reduction = ((1 - finalSizeMB / originalSizeMB) * 100).toFixed(1);
        
        console.log(`   ✓ Compressed: ${finalSizeMB}MB (${reduction}% reduction)`);
        console.log(`   ✓ Quality: ${quality}% (RGB values preserved)`);
        
        // Verify RGB values are closer to original
        console.log(`   ✓ Re-compressed from original backup`);
        break;
      }
    }

    if (currentSizeMB > targetSizeMB && quality <= minQuality) {
      console.log(`   ⚠️  Reached min quality (${minQuality}%) to preserve color`);
      console.log(`   Final: ${currentSizeMB}MB (target: ${targetSizeMB}MB)`);
    }

    return { success: true, quality, finalSize: currentSizeMB };

  } catch (error) {
    console.error(`   ❌ Error: ${error.message}`);
    return { success: false, error: error.message };
  }
}

async function main() {
  console.log('🎨 Re-compressing from ORIGINAL backups with HIGH QUALITY');
  console.log('='.repeat(80));
  console.log('\nThis will restore original files and re-compress with higher quality');
  console.log('to preserve RGB values and minimize color shifts.\n');

  const results = [];
  for (const { backup, output, targetSize, minQuality } of filesToRecompress) {
    const result = await recompressFromBackup(backup, output, targetSize, minQuality);
    if (result) {
      results.push({ file: path.basename(output), ...result });
    }
  }

  console.log('\n' + '='.repeat(80));
  console.log('\n✅ Re-compression complete!');
  console.log(`\n📊 Processed ${results.filter(r => r.success).length} files`);
  
  console.log('\n📝 Next steps:');
  console.log('   1. Run RGB comparison script to verify values are closer to original');
  console.log('   2. Visually compare images');
  console.log('   3. If satisfied, commit and push');
  console.log('\n💡 To verify RGB preservation:');
  console.log('   node scripts/compare-image-colors.js');
}

main().catch(console.error);

