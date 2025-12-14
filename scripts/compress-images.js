const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Files to compress (only PNGs > 5MB)
const filesToCompress = [
  // 14-24MB files → target 3-5MB (compression level 7, quality ~80%)
  { file: 'public/Lab1-image-performance-yoga.png', targetSize: 4, compression: 7 },
  { file: 'public/Lab1-image-testkit-woman.png', targetSize: 4, compression: 7 },
  { file: 'public/Lab1-image-expert-fabian_plachel.png', targetSize: 4, compression: 7 },
  { file: 'public/Lab1-image-team.png', targetSize: 4, compression: 7 },
  { file: 'public/Lab1-image-health-mom.png', targetSize: 4, compression: 7 },
  { file: 'public/Lab1-image-expert-team.png', targetSize: 3.5, compression: 7 },
  { file: 'public/Lab1-image-health-longevity_female.png', targetSize: 3.5, compression: 7 },
  { file: 'public/Lab1-image-backrgound-plant2.png', targetSize: 4, compression: 7 },
  { file: 'public/Lab1-image-backrgound-plant1.png', targetSize: 4, compression: 7 },
  
  // 10-14MB files → target 2-3MB
  { file: 'public/Lab1-image-user-woman.png', targetSize: 2.5, compression: 7 },
  
  // 5-10MB files → target 1-2MB (compression level 6-7)
  { file: 'public/Lab1-image-general-people.png', targetSize: 1.5, compression: 6 },
  { file: 'public/Lab1-image-hero-eyes_extended.png', targetSize: 1.5, compression: 6 },
  { file: 'public/Lab1-image-product-essential_selection.png', targetSize: 1.5, compression: 6 },
  { file: 'public/Lab1-image-hero-eyes.png', targetSize: 1.2, compression: 6 },
  { file: 'public/Lab1-image-women-smile.png', targetSize: 1.2, compression: 6 },
];

async function compressImage(filePath, targetSizeMB, compressionLevel) {
  const fullPath = path.join(process.cwd(), filePath);
  
  if (!fs.existsSync(fullPath)) {
    console.log(`⚠️  File not found: ${filePath}`);
    return;
  }

  const stats = fs.statSync(fullPath);
  const originalSizeMB = (stats.size / 1024 / 1024).toFixed(2);
  
  console.log(`\n📦 Compressing: ${path.basename(filePath)}`);
  console.log(`   Original size: ${originalSizeMB}MB`);
  console.log(`   Target size: ${targetSizeMB}MB`);
  console.log(`   Compression level: ${compressionLevel}`);

  try {
    // Get image metadata
    const metadata = await sharp(fullPath).metadata();
    console.log(`   Dimensions: ${metadata.width}x${metadata.height}`);

    // Create backup
    const backupPath = fullPath + '.backup';
    fs.copyFileSync(fullPath, backupPath);
    console.log(`   ✓ Backup created: ${path.basename(backupPath)}`);

    // Compress with PNG compression
    // Sharp uses compression level 0-9, where 9 is maximum compression
    // We'll use adaptive quality to hit target size
    let quality = 100;
    let currentSizeMB = originalSizeMB;
    let attempts = 0;
    const maxAttempts = 10;

    while (currentSizeMB > targetSizeMB && attempts < maxAttempts) {
      attempts++;
      quality = Math.max(50, quality - 5); // Reduce quality by 5% each attempt, min 50%

      const buffer = await sharp(fullPath)
        .keepMetadata() // Preserve color profiles and metadata
        .toColorspace('srgb') // Explicitly set sRGB color space
        .png({
          compressionLevel: compressionLevel,
          quality: quality,
          effort: 7, // Higher effort = better compression but slower
          palette: false, // Don't use palette mode (better color accuracy)
        })
        .toBuffer();

      currentSizeMB = (buffer.length / 1024 / 1024).toFixed(2);
      
      if (currentSizeMB <= targetSizeMB || attempts >= maxAttempts) {
        // Write compressed image
        fs.writeFileSync(fullPath, buffer);
        const finalSizeMB = (fs.statSync(fullPath).size / 1024 / 1024).toFixed(2);
        const reduction = ((1 - finalSizeMB / originalSizeMB) * 100).toFixed(1);
        
        console.log(`   ✓ Compressed: ${finalSizeMB}MB (${reduction}% reduction)`);
        console.log(`   ✓ Quality used: ${quality}%`);
        break;
      }
    }

    if (currentSizeMB > targetSizeMB) {
      console.log(`   ⚠️  Could not reach target size, but compressed to ${currentSizeMB}MB`);
    }

  } catch (error) {
    console.error(`   ❌ Error compressing ${filePath}:`, error.message);
    // Restore backup on error
    if (fs.existsSync(backupPath)) {
      fs.copyFileSync(backupPath, fullPath);
      console.log(`   ✓ Restored from backup`);
    }
  }
}

async function main() {
  console.log('🚀 Starting PNG compression...\n');
  console.log(`📋 Files to compress: ${filesToCompress.length}\n`);

  for (const { file, targetSize, compression } of filesToCompress) {
    await compressImage(file, targetSize, compression);
  }

  console.log('\n✅ Compression complete!');
  console.log('\n📝 Next steps:');
  console.log('   1. Review compressed images');
  console.log('   2. If satisfied, delete .backup files: find public -name "*.backup" -delete');
  console.log('   3. Commit and push changes');
}

main().catch(console.error);

