const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

/**
 * Final Balanced Compression
 * 
 * Target: 2-4MB per file (down from 6-20MB)
 * Quality: 90 (preserve RGB values)
 * Compression: Maximum PNG compression (level 9, effort 10)
 * 
 * Goal: Balance color accuracy with processing speed
 */

const filesToCompress = [
  { 
    backup: 'public/Lab1-image-hero-eyes.png.backup',
    output: 'public/Lab1-image-hero-eyes.png',
    targetSize: 2.0,
  },
  { 
    backup: 'public/Lab1-image-expert-team.png.backup',
    output: 'public/Lab1-image-expert-team.png',
    targetSize: 3.5,
  },
  { 
    backup: 'public/Lab1-image-team.png.backup',
    output: 'public/Lab1-image-team.png',
    targetSize: 4.0,
  },
  { 
    backup: 'public/Lab1-image-testkit-woman.png.backup',
    output: 'public/Lab1-image-testkit-woman.png',
    targetSize: 4.0,
  },
  { 
    backup: 'public/Lab1-image-performance-yoga.png.backup',
    output: 'public/Lab1-image-performance-yoga.png',
    targetSize: 3.5,
  },
  { 
    backup: 'public/Lab1-image-health-mom.png.backup',
    output: 'public/Lab1-image-health-mom.png',
    targetSize: 3.5,
  },
  { 
    backup: 'public/Lab1-image-backrgound-plant2.png.backup',
    output: 'public/Lab1-image-backrgound-plant2.png',
    targetSize: 3.5,
  },
  { 
    backup: 'public/Lab1-image-backrgound-plant1.png.backup',
    output: 'public/Lab1-image-backrgound-plant1.png',
    targetSize: 3.5,
  },
  { 
    backup: 'public/Lab1-image-expert-fabian_plachel.png.backup',
    output: 'public/Lab1-image-expert-fabian_plachel.png',
    targetSize: 3.5,
  },
  { 
    backup: 'public/Lab1-image-health-longevity_female.png.backup',
    output: 'public/Lab1-image-health-longevity_female.png',
    targetSize: 3.0,
  },
  { 
    backup: 'public/Lab1-image-user-woman.png.backup',
    output: 'public/Lab1-image-user-woman.png',
    targetSize: 2.5,
  },
  { 
    backup: 'public/Lab1-image-general-people.png.backup',
    output: 'public/Lab1-image-general-people.png',
    targetSize: 2.0,
  },
  { 
    backup: 'public/Lab1-image-hero-eyes_extended.png.backup',
    output: 'public/Lab1-image-hero-eyes_extended.png',
    targetSize: 2.5,
  },
  { 
    backup: 'public/Lab1-image-product-essential_selection.png.backup',
    output: 'public/Lab1-image-product-essential_selection.png',
    targetSize: 2.0,
  },
  { 
    backup: 'public/Lab1-image-women-smile.png.backup',
    output: 'public/Lab1-image-women-smile.png',
    targetSize: 2.0,
  },
];

async function finalCompression(backupPath, outputPath, targetSizeMB) {
  const backupFull = path.join(process.cwd(), backupPath);
  const outputFull = path.join(process.cwd(), outputPath);
  
  if (!fs.existsSync(backupFull)) {
    console.log(`⚠️  Backup not found: ${backupPath}`);
    return null;
  }

  const backupStats = fs.statSync(backupFull);
  const originalSizeMB = (backupStats.size / 1024 / 1024).toFixed(2);
  
  console.log(`\n🎨 Final Compression: ${path.basename(outputPath)}`);
  console.log(`   Original: ${originalSizeMB}MB`);
  console.log(`   Target: ${targetSizeMB}MB`);
  console.log(`   Settings: quality=90, compressionLevel=9, effort=10`);

  try {
    const metadata = await sharp(backupFull).metadata();
    
    // Backup current file
    if (fs.existsSync(outputFull)) {
      const safetyBackup = outputFull + '.before-final';
      fs.copyFileSync(outputFull, safetyBackup);
    }

    // Use maximum PNG compression with quality 90
    // Sharp's PNG quality parameter affects quantization, not compression
    // We'll use compressionLevel 9 (maximum) with effort 10
    let compressionLevel = 9;
    let currentSizeMB = originalSizeMB;
    let attempts = 0;
    const maxAttempts = 3;

    // Try maximum compression first
    while (currentSizeMB > targetSizeMB && attempts < maxAttempts) {
      attempts++;
      
      const buffer = await sharp(backupFull)
        .keepMetadata() // Preserve metadata
        .toColorspace('srgb') // Explicit sRGB
        .png({
          quality: 90, // High quality to preserve RGB values
          compressionLevel: compressionLevel, // Maximum compression (9)
          effort: 10, // Maximum effort for size reduction
          palette: false, // Keep full color (better accuracy)
          adaptiveFiltering: true, // Better compression
        })
        .toBuffer();

      currentSizeMB = (buffer.length / 1024 / 1024).toFixed(2);
      
      // If we're close to target or can't compress more, accept it
      if (currentSizeMB <= targetSizeMB || attempts >= maxAttempts) {
        fs.writeFileSync(outputFull, buffer);
        const finalSizeMB = (fs.statSync(outputFull).size / 1024 / 1024).toFixed(2);
        const reduction = ((1 - finalSizeMB / originalSizeMB) * 100).toFixed(1);
        
        console.log(`   ✓ Compressed: ${finalSizeMB}MB (${reduction}% reduction)`);
        console.log(`   ✓ Compression level: ${compressionLevel}`);
        console.log(`   ✓ Quality: 90 (RGB values preserved)`);
        
        return { 
          success: true, 
          originalSize: originalSizeMB,
          finalSize: finalSizeMB,
          reduction: reduction,
          level: compressionLevel 
        };
      }
      
      // Try slightly lower compression level if still too large
      if (compressionLevel > 7) {
        compressionLevel = Math.max(7, compressionLevel - 1);
      }
    }

  } catch (error) {
    console.error(`   ❌ Error: ${error.message}`);
    return { success: false, error: error.message };
  }
}

async function main() {
  console.log('🎨 Final Balanced Compression');
  console.log('='.repeat(80));
  console.log('\nTarget: 2-4MB per file (down from 6-20MB)');
  console.log('Quality: 90 (preserve RGB values)');
  console.log('Compression: Maximum PNG (level 9, effort 10)');
  console.log('\nGoal: Balance color accuracy with processing speed\n');

  const results = [];
  let totalOriginal = 0;
  let totalFinal = 0;

  for (const { backup, output, targetSize } of filesToCompress) {
    const result = await finalCompression(backup, output, targetSize);
    if (result && result.success) {
      results.push({ file: path.basename(output), ...result });
      totalOriginal += parseFloat(result.originalSize);
      totalFinal += parseFloat(result.finalSize);
    }
  }

  console.log('\n' + '='.repeat(80));
  console.log('\n✅ Final compression complete!');
  console.log(`\n📊 Summary:`);
  console.log(`   Files processed: ${results.length}`);
  console.log(`   Total original size: ${totalOriginal.toFixed(2)}MB`);
  console.log(`   Total final size: ${totalFinal.toFixed(2)}MB`);
  console.log(`   Total reduction: ${((1 - totalFinal / totalOriginal) * 100).toFixed(1)}%`);
  
  console.log('\n📝 Next steps:');
  console.log('   1. Verify RGB values still match originals');
  console.log('   2. Check file sizes are in 2-4MB range');
  console.log('   3. Commit and deploy');
  console.log('   4. Test first-load speed in Network tab');
  
  console.log('\n💡 To verify RGB preservation:');
  console.log('   node scripts/compare-image-colors.js');
}

main().catch(console.error);

