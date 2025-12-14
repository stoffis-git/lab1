const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

/**
 * Convert PNG to WebP with Quality 90
 * 
 * WebP supports lossy compression with quality control, allowing us to:
 * - Achieve 2-4MB target sizes
 * - Maintain quality 90 (preserves RGB values well)
 * - Faster processing than large PNGs
 * 
 * Next.js Image will serve WebP anyway, so this pre-converts source files.
 */

const filesToConvert = [
  { 
    backup: 'public/Lab1-image-hero-eyes.png.backup',
    output: 'public/Lab1-image-hero-eyes.webp',
    targetSize: 2.0,
  },
  { 
    backup: 'public/Lab1-image-expert-team.png.backup',
    output: 'public/Lab1-image-expert-team.webp',
    targetSize: 3.5,
  },
  { 
    backup: 'public/Lab1-image-team.png.backup',
    output: 'public/Lab1-image-team.webp',
    targetSize: 4.0,
  },
  { 
    backup: 'public/Lab1-image-testkit-woman.png.backup',
    output: 'public/Lab1-image-testkit-woman.webp',
    targetSize: 4.0,
  },
  { 
    backup: 'public/Lab1-image-performance-yoga.png.backup',
    output: 'public/Lab1-image-performance-yoga.webp',
    targetSize: 3.5,
  },
  { 
    backup: 'public/Lab1-image-health-mom.png.backup',
    output: 'public/Lab1-image-health-mom.webp',
    targetSize: 3.5,
  },
  { 
    backup: 'public/Lab1-image-backrgound-plant2.png.backup',
    output: 'public/Lab1-image-backrgound-plant2.webp',
    targetSize: 3.5,
  },
  { 
    backup: 'public/Lab1-image-backrgound-plant1.png.backup',
    output: 'public/Lab1-image-backrgound-plant1.webp',
    targetSize: 3.5,
  },
  { 
    backup: 'public/Lab1-image-expert-fabian_plachel.png.backup',
    output: 'public/Lab1-image-expert-fabian_plachel.webp',
    targetSize: 3.5,
  },
  { 
    backup: 'public/Lab1-image-health-longevity_female.png.backup',
    output: 'public/Lab1-image-health-longevity_female.webp',
    targetSize: 3.0,
  },
  { 
    backup: 'public/Lab1-image-user-woman.png.backup',
    output: 'public/Lab1-image-user-woman.webp',
    targetSize: 2.5,
  },
  { 
    backup: 'public/Lab1-image-general-people.png.backup',
    output: 'public/Lab1-image-general-people.webp',
    targetSize: 2.0,
  },
  { 
    backup: 'public/Lab1-image-hero-eyes_extended.png.backup',
    output: 'public/Lab1-image-hero-eyes_extended.webp',
    targetSize: 2.5,
  },
  { 
    backup: 'public/Lab1-image-product-essential_selection.png.backup',
    output: 'public/Lab1-image-product-essential_selection.webp',
    targetSize: 2.0,
  },
  { 
    backup: 'public/Lab1-image-women-smile.png.backup',
    output: 'public/Lab1-image-women-smile.webp',
    targetSize: 2.0,
  },
];

async function convertToWebP(backupPath, outputPath, targetSizeMB) {
  const backupFull = path.join(process.cwd(), backupPath);
  const outputFull = path.join(process.cwd(), outputPath);
  
  if (!fs.existsSync(backupFull)) {
    console.log(`⚠️  Backup not found: ${backupPath}`);
    return null;
  }

  const backupStats = fs.statSync(backupFull);
  const originalSizeMB = (backupStats.size / 1024 / 1024).toFixed(2);
  
  console.log(`\n🎨 Converting: ${path.basename(outputPath)}`);
  console.log(`   Original PNG: ${originalSizeMB}MB`);
  console.log(`   Target WebP: ${targetSizeMB}MB`);
  console.log(`   Quality: 90 (preserve RGB values)`);

  try {
    // Use adaptive quality to hit target size
    let quality = 90;
    let currentSizeMB = originalSizeMB;
    let attempts = 0;
    const maxAttempts = 15;

    while (currentSizeMB > targetSizeMB && attempts < maxAttempts && quality >= 85) {
      attempts++;
      quality = Math.max(85, quality - 1); // Reduce by 1% each attempt, min 85%

      const buffer = await sharp(backupFull)
        .keepMetadata()
        .toColorspace('srgb')
        .webp({
          quality: quality,
          effort: 6, // High effort for better compression
          lossless: false, // Use lossy compression for size reduction
        })
        .toBuffer();

      currentSizeMB = (buffer.length / 1024 / 1024).toFixed(2);
      
      if (currentSizeMB <= targetSizeMB || quality <= 85) {
        fs.writeFileSync(outputFull, buffer);
        const finalSizeMB = (fs.statSync(outputFull).size / 1024 / 1024).toFixed(2);
        const reduction = ((1 - finalSizeMB / originalSizeMB) * 100).toFixed(1);
        
        console.log(`   ✓ WebP: ${finalSizeMB}MB (${reduction}% reduction)`);
        console.log(`   ✓ Quality: ${quality}% (RGB values preserved)`);
        
        return { 
          success: true, 
          originalSize: originalSizeMB,
          finalSize: finalSizeMB,
          reduction: reduction,
          quality: quality 
        };
      }
    }

    // If we couldn't hit target, use best attempt
    if (attempts > 0) {
      const buffer = await sharp(backupFull)
        .keepMetadata()
        .toColorspace('srgb')
        .webp({
          quality: quality,
          effort: 6,
          lossless: false,
        })
        .toBuffer();
      
      fs.writeFileSync(outputFull, buffer);
      const finalSizeMB = (fs.statSync(outputFull).size / 1024 / 1024).toFixed(2);
      console.log(`   ⚠️  Best result: ${finalSizeMB}MB (target: ${targetSizeMB}MB)`);
      console.log(`   ✓ Quality: ${quality}%`);
      return { success: true, finalSize: finalSizeMB, quality };
    }

  } catch (error) {
    console.error(`   ❌ Error: ${error.message}`);
    return { success: false, error: error.message };
  }
}

async function main() {
  console.log('🎨 Convert PNG to WebP (Quality 90)');
  console.log('='.repeat(80));
  console.log('\nWebP supports lossy compression with quality control');
  console.log('This allows us to achieve 2-4MB targets while maintaining quality 90');
  console.log('Next.js Image will serve WebP anyway, so this pre-converts source files.\n');

  const results = [];
  let totalOriginal = 0;
  let totalFinal = 0;

  for (const { backup, output, targetSize } of filesToConvert) {
    const result = await convertToWebP(backup, output, targetSize);
    if (result && result.success) {
      results.push({ file: path.basename(output), ...result });
      totalOriginal += parseFloat(result.originalSize);
      totalFinal += parseFloat(result.finalSize);
    }
  }

  console.log('\n' + '='.repeat(80));
  console.log('\n✅ WebP conversion complete!');
  console.log(`\n📊 Summary:`);
  console.log(`   Files converted: ${results.length}`);
  console.log(`   Total original PNG: ${totalOriginal.toFixed(2)}MB`);
  console.log(`   Total WebP: ${totalFinal.toFixed(2)}MB`);
  console.log(`   Total reduction: ${((1 - totalFinal / totalOriginal) * 100).toFixed(1)}%`);
  
  console.log('\n📝 Next steps:');
  console.log('   1. Update Image component src paths to use .webp files');
  console.log('   2. Or keep .png and let Next.js convert (it will use WebP anyway)');
  console.log('   3. Commit and deploy');
  console.log('   4. Test first-load speed');
  
  console.log('\n💡 Note: Next.js Image automatically serves WebP/AVIF');
  console.log('   You can either:');
  console.log('   - Use .webp files directly (faster processing)');
  console.log('   - Keep .png and let Next.js convert (more flexible)');
}

main().catch(console.error);

