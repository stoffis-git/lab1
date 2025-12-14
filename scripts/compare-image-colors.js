const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

/**
 * Compare RGB values between original and optimized images
 * 
 * This helps determine if color space conversion occurred.
 */

async function sampleMultiplePixels(imagePath, numSamples = 5) {
  const fullPath = path.join(process.cwd(), imagePath);
  
  if (!fs.existsSync(fullPath)) {
    return null;
  }

  try {
    const metadata = await sharp(fullPath).metadata();
    const samples = [];
    
    // Sample from different areas: center, top-left, top-right, bottom-left, bottom-right
    const positions = [
      { x: Math.floor(metadata.width / 2), y: Math.floor(metadata.height / 2), label: 'Center' },
      { x: Math.floor(metadata.width * 0.1), y: Math.floor(metadata.height * 0.1), label: 'Top-Left' },
      { x: Math.floor(metadata.width * 0.9), y: Math.floor(metadata.height * 0.1), label: 'Top-Right' },
      { x: Math.floor(metadata.width * 0.1), y: Math.floor(metadata.height * 0.9), label: 'Bottom-Left' },
      { x: Math.floor(metadata.width * 0.9), y: Math.floor(metadata.height * 0.9), label: 'Bottom-Right' },
    ].slice(0, numSamples);
    
    for (const pos of positions) {
      try {
        const { data, info } = await sharp(fullPath)
          .extract({ left: pos.x, top: pos.y, width: 1, height: 1 })
          .raw()
          .toBuffer({ resolveWithObject: true });
        
        const r = data[0];
        const g = data[1];
        const b = data[2];
        
        samples.push({
          position: pos.label,
          coords: `(${pos.x}, ${pos.y})`,
          rgb: `rgb(${r}, ${g}, ${b})`,
          values: { r, g, b },
        });
      } catch (e) {
        // Skip if extraction fails
      }
    }
    
    return samples;
  } catch (error) {
    return { error: error.message };
  }
}

async function compareImages(originalPath, currentPath) {
  console.log(`\n🔍 Comparing Images:\n`);
  console.log(`   Original: ${path.basename(originalPath)}`);
  console.log(`   Current:  ${path.basename(currentPath)}`);
  console.log('─'.repeat(80));
  
  const originalSamples = await sampleMultiplePixels(originalPath, 5);
  const currentSamples = await sampleMultiplePixels(currentPath, 5);
  
  if (!originalSamples || originalSamples.error) {
    console.log(`   ❌ Could not sample original: ${originalSamples?.error || 'unknown error'}`);
    return;
  }
  
  if (!currentSamples || currentSamples.error) {
    console.log(`   ❌ Could not sample current: ${currentSamples?.error || 'unknown error'}`);
    return;
  }
  
  console.log(`\n📊 RGB Value Comparison:\n`);
  console.log('Position'.padEnd(15) + 'Original RGB'.padEnd(20) + 'Current RGB'.padEnd(20) + 'Match');
  console.log('─'.repeat(80));
  
  let matches = 0;
  let total = 0;
  
  for (let i = 0; i < Math.min(originalSamples.length, currentSamples.length); i++) {
    const orig = originalSamples[i];
    const curr = currentSamples[i];
    
    const origStr = orig.rgb;
    const currStr = curr.rgb;
    const match = orig.values.r === curr.values.r && 
                  orig.values.g === curr.values.g && 
                  orig.values.b === curr.values.b;
    
    if (match) matches++;
    total++;
    
    const matchSymbol = match ? '✅' : '❌';
    console.log(
      orig.position.padEnd(15) + 
      origStr.padEnd(20) + 
      currStr.padEnd(20) + 
      matchSymbol
    );
  }
  
  console.log('─'.repeat(80));
  console.log(`\n📈 Results: ${matches}/${total} pixels match exactly`);
  
  if (matches === total) {
    console.log(`\n✅ RGB values are IDENTICAL`);
    console.log(`   → If images look different, it's likely a color space/gamut issue`);
    console.log(`   → Original may have wider color gamut (Adobe RGB/P3) that was converted to sRGB`);
  } else {
    console.log(`\n⚠️  RGB values DIFFER`);
    console.log(`   → Color values changed during processing`);
    console.log(`   → Could be compression artifacts or color space conversion`);
  }
}

async function main() {
  const imagesToCompare = [
    {
      original: 'public/Lab1-image-hero-eyes.png.backup',
      current: 'public/Lab1-image-hero-eyes.png',
    },
    {
      original: 'public/Lab1-image-expert-team.png.backup',
      current: 'public/Lab1-image-expert-team.png',
    },
    {
      original: 'public/Lab1-image-team.png.backup',
      current: 'public/Lab1-image-team.png',
    },
  ];
  
  console.log('🎨 RGB Value Comparison Tool');
  console.log('='.repeat(80));
  console.log('\nComparing original backup files vs current compressed files...');
  console.log('This will reveal if color values changed during processing.\n');
  
  for (const { original, current } of imagesToCompare) {
    if (fs.existsSync(original) && fs.existsSync(current)) {
      await compareImages(original, current);
    } else {
      console.log(`\n⚠️  Skipping: ${path.basename(original)} (backup not found)`);
    }
  }
  
  console.log('\n' + '='.repeat(80));
  console.log('\n💡 Interpretation:');
  console.log('   - If RGB values match but images look different → Color gamut conversion');
  console.log('   - If RGB values differ → Compression/processing artifacts');
  console.log('   - If all match → Issue is elsewhere (browser rendering, display, etc.)');
}

main().catch(console.error);

