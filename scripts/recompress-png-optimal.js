const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

/**
 * Optimal PNG Re-compression
 * 
 * PNG doesn't use "quality" like JPEG. Instead, we use:
 * - Compression level (0-9, where 9 is maximum)
 * - Adaptive filtering
 * - Proper color management
 * 
 * This script compresses PNGs optimally while preserving RGB values.
 */

const filesToCompress = [
  { 
    backup: 'public/Lab1-image-hero-eyes.png.backup',
    output: 'public/Lab1-image-hero-eyes.png',
    targetSize: 2.0,  // Slightly higher target to preserve color
  },
  { 
    backup: 'public/Lab1-image-expert-team.png.backup',
    output: 'public/Lab1-image-expert-team.png',
    targetSize: 5.0,
  },
  { 
    backup: 'public/Lab1-image-team.png.backup',
    output: 'public/Lab1-image-team.png',
    targetSize: 6.0,
  },
  { 
    backup: 'public/Lab1-image-testkit-woman.png.backup',
    output: 'public/Lab1-image-testkit-woman.png',
    targetSize: 6.0,
  },
  { 
    backup: 'public/Lab1-image-performance-yoga.png.backup',
    output: 'public/Lab1-image-performance-yoga.png',
    targetSize: 5.0,
  },
  { 
    backup: 'public/Lab1-image-health-mom.png.backup',
    output: 'public/Lab1-image-health-mom.png',
    targetSize: 5.0,
  },
  { 
    backup: 'public/Lab1-image-backrgound-plant2.png.backup',
    output: 'public/Lab1-image-backrgound-plant2.png',
    targetSize: 5.0,
  },
  { 
    backup: 'public/Lab1-image-backrgound-plant1.png.backup',
    output: 'public/Lab1-image-backrgound-plant1.png',
    targetSize: 5.0,
  },
  { 
    backup: 'public/Lab1-image-expert-fabian_plachel.png.backup',
    output: 'public/Lab1-image-expert-fabian_plachel.png',
    targetSize: 5.0,
  },
  { 
    backup: 'public/Lab1-image-health-longevity_female.png.backup',
    output: 'public/Lab1-image-health-longevity_female.png',
    targetSize: 4.5,
  },
  { 
    backup: 'public/Lab1-image-user-woman.png.backup',
    output: 'public/Lab1-image-user-woman.png',
    targetSize: 3.5,
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
    targetSize: 1.8,
  },
];

async function compressPNGOptimal(backupPath, outputPath, targetSizeMB) {
  const backupFull = path.join(process.cwd(), backupPath);
  const outputFull = path.join(process.cwd(), outputPath);
  
  if (!fs.existsSync(backupFull)) {
    console.log(`⚠️  Backup not found: ${backupPath}`);
    return null;
  }

  const backupStats = fs.statSync(backupFull);
  const originalSizeMB = (backupStats.size / 1024 / 1024).toFixed(2);
  
  console.log(`\n🎨 Compressing: ${path.basename(outputPath)}`);
  console.log(`   Original: ${originalSizeMB}MB`);
  console.log(`   Target: ${targetSizeMB}MB`);

  try {
    const metadata = await sharp(backupFull).metadata();
    
    // Backup current file
    if (fs.existsSync(outputFull)) {
      const safetyBackup = outputFull + '.before-optimal';
      fs.copyFileSync(outputFull, safetyBackup);
    }

    // PNG compression strategy:
    // Use compression level 9 (maximum) with adaptive filtering
    // This preserves RGB values while achieving good compression
    let compressionLevel = 9;
    let currentSizeMB = originalSizeMB;
    let attempts = 0;
    const maxAttempts = 5;

    // Try different compression levels to hit target
    while (currentSizeMB > targetSizeMB && attempts < maxAttempts && compressionLevel >= 6) {
      attempts++;
      
      // For PNG, we can't use "quality" - we use compression level
      // But we can try different strategies
      const buffer = await sharp(backupFull)
        .keepMetadata()
        .toColorspace('srgb')
        .png({
          compressionLevel: compressionLevel,
          effort: 9, // Maximum effort for best compression
          palette: false, // Keep full color (better accuracy)
          adaptiveFiltering: true, // Better compression
        })
        .toBuffer();

      currentSizeMB = (buffer.length / 1024 / 1024).toFixed(2);
      
      if (currentSizeMB <= targetSizeMB) {
        fs.writeFileSync(outputFull, buffer);
        const finalSizeMB = (fs.statSync(outputFull).size / 1024 / 1024).toFixed(2);
        const reduction = ((1 - finalSizeMB / originalSizeMB) * 100).toFixed(1);
        
        console.log(`   ✓ Compressed: ${finalSizeMB}MB (${reduction}% reduction)`);
        console.log(`   ✓ Compression level: ${compressionLevel}`);
        console.log(`   ✓ RGB values preserved`);
        return { success: true, size: finalSizeMB, level: compressionLevel };
      }
      
      // If still too large, we can't compress more without losing quality
      // PNG is lossless, so we accept the size
      if (attempts >= maxAttempts) {
        fs.writeFileSync(outputFull, buffer);
        const finalSizeMB = (fs.statSync(outputFull).size / 1024 / 1024).toFixed(2);
        console.log(`   ⚠️  Best compression: ${finalSizeMB}MB (target: ${targetSizeMB}MB)`);
        console.log(`   ✓ Compression level: ${compressionLevel}`);
        console.log(`   ✓ RGB values preserved (lossless compression)`);
        return { success: true, size: finalSizeMB, level: compressionLevel };
      }
      
      compressionLevel = Math.max(6, compressionLevel - 1);
    }

  } catch (error) {
    console.error(`   ❌ Error: ${error.message}`);
    return { success: false, error: error.message };
  }
}

async function main() {
  console.log('🎨 Optimal PNG Compression (Preserving RGB Values)');
  console.log('='.repeat(80));
  console.log('\nUsing PNG compression level (not quality) to preserve color accuracy');
  console.log('while achieving reasonable file sizes.\n');

  const results = [];
  for (const { backup, output, targetSize } of filesToCompress) {
    const result = await compressPNGOptimal(backup, output, targetSize);
    if (result) {
      results.push({ file: path.basename(output), ...result });
    }
  }

  console.log('\n' + '='.repeat(80));
  console.log('\n✅ Compression complete!');
  console.log(`\n📊 Processed ${results.filter(r => r.success).length} files`);
  
  console.log('\n💡 Note: PNG is lossless compression');
  console.log('   RGB values will be preserved, but file sizes may be larger');
  console.log('   than lossy compression (JPEG/WebP). This is the trade-off for');
  console.log('   maintaining color accuracy.');
  
  console.log('\n📝 Next steps:');
  console.log('   1. Verify RGB values match original (run compare script)');
  console.log('   2. Check file sizes are acceptable');
  console.log('   3. Visually verify color saturation');
  console.log('   4. Commit if satisfied');
}

main().catch(console.error);

