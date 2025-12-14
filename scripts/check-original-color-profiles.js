const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

/**
 * Deep Color Profile Investigation
 * 
 * This script checks original source files for color profiles and ICC data
 * that might have been stripped during compression or Next.js optimization.
 */

const keyImages = [
  'public/Lab1-image-hero-eyes.png',
  'public/Lab1-image-expert-team.png',
  'public/Lab1-image-team.png',
  'public/Lab1-image-testkit-woman.png',
];

// Check both current and backup files
const filesToCheck = [];

keyImages.forEach(img => {
  // Current file
  filesToCheck.push({ path: img, label: 'Current' });
  
  // Backup file (original before compression)
  const backupPath = img + '.backup';
  if (fs.existsSync(backupPath)) {
    filesToCheck.push({ path: backupPath, label: 'Original Backup' });
  }
  
  // Color backup (from fix-color-profiles script)
  const colorBackupPath = img + '.color-backup';
  if (fs.existsSync(colorBackupPath)) {
    filesToCheck.push({ path: colorBackupPath, label: 'Color Fix Backup' });
  }
});

async function deepColorCheck(filePath, label) {
  const fullPath = path.join(process.cwd(), filePath);
  
  if (!fs.existsSync(fullPath)) {
    return null;
  }

  try {
    const metadata = await sharp(fullPath).metadata();
    const stats = fs.statSync(fullPath);
    
    // Try to extract ICC profile data
    let iccData = null;
    try {
      const buffer = await sharp(fullPath).toBuffer();
      // Sharp doesn't expose raw ICC, but we can check metadata
      iccData = metadata.icc ? {
        length: metadata.icc.length,
        name: metadata.iccName || 'unnamed',
      } : null;
    } catch (e) {
      // Ignore
    }

    return {
      file: path.basename(filePath),
      label: label,
      size: (stats.size / 1024 / 1024).toFixed(2) + 'MB',
      colorSpace: metadata.space || 'unknown',
      channels: metadata.channels,
      depth: metadata.depth,
      hasProfile: metadata.hasProfile || false,
      iccProfile: iccData,
      format: metadata.format,
      width: metadata.width,
      height: metadata.height,
      // Additional metadata
      hasAlpha: metadata.hasAlpha || false,
      orientation: metadata.orientation,
    };
  } catch (error) {
    return {
      file: path.basename(filePath),
      label: label,
      error: error.message,
    };
  }
}

async function samplePixelColors(filePath) {
  const fullPath = path.join(process.cwd(), filePath);
  
  if (!fs.existsSync(fullPath)) {
    return null;
  }

  try {
    // Sample a few pixels from different areas
    // Get center pixel and a few others
    const metadata = await sharp(fullPath).metadata();
    const centerX = Math.floor(metadata.width / 2);
    const centerY = Math.floor(metadata.height / 2);
    
    // Extract a 1x1 pixel region from center
    const { data, info } = await sharp(fullPath)
      .extract({ left: centerX, top: centerY, width: 1, height: 1 })
      .raw()
      .toBuffer({ resolveWithObject: true });
    
    // Get RGB values
    const channels = info.channels;
    const r = data[0];
    const g = data[1];
    const b = data[2];
    const a = channels === 4 ? data[3] : 255;
    
    return {
      position: `(${centerX}, ${centerY})`,
      rgb: `rgb(${r}, ${g}, ${b})`,
      rgba: `rgba(${r}, ${g}, ${b}, ${a})`,
      values: { r, g, b, a },
    };
  } catch (error) {
    return { error: error.message };
  }
}

async function main() {
  console.log('🔍 Deep Color Profile Investigation\n');
  console.log('='.repeat(80));
  console.log('Checking original source files for color profiles and ICC data...\n');

  for (const { path: filePath, label } of filesToCheck) {
    console.log(`\n📸 ${label}: ${path.basename(filePath)}`);
    console.log('─'.repeat(80));
    
    const result = await deepColorCheck(filePath, label);
    
    if (result && result.error) {
      console.log(`   ❌ Error: ${result.error}`);
      continue;
    }
    
    if (result) {
      console.log(`   Size: ${result.size}`);
      console.log(`   Color Space: ${result.colorSpace}`);
      console.log(`   Channels: ${result.channels}`);
      console.log(`   Bit Depth: ${result.depth}`);
      console.log(`   Has ICC Profile: ${result.hasProfile ? '✅ YES' : '❌ NO'}`);
      if (result.iccProfile) {
        console.log(`   ICC Profile: ${result.iccProfile.length} bytes`);
        console.log(`   ICC Name: ${result.iccProfile.name}`);
      } else {
        console.log(`   ICC Profile: None`);
      }
      console.log(`   Format: ${result.format}`);
      console.log(`   Dimensions: ${result.width}x${result.height}`);
      console.log(`   Has Alpha: ${result.hasAlpha ? 'Yes' : 'No'}`);
      
      // Sample pixel colors
      console.log(`\n   🎨 Pixel Color Sample (center):`);
      const pixelSample = await samplePixelColors(filePath);
      if (pixelSample && !pixelSample.error) {
        console.log(`   Position: ${pixelSample.position}`);
        console.log(`   RGB: ${pixelSample.rgb}`);
        console.log(`   Values: R=${pixelSample.values.r}, G=${pixelSample.values.g}, B=${pixelSample.values.b}`);
      } else if (pixelSample && pixelSample.error) {
        console.log(`   ❌ Could not sample: ${pixelSample.error}`);
      }
    }
  }

  console.log('\n' + '='.repeat(80));
  console.log('\n📊 Analysis:');
  
  // Compare current vs backup
  const currentFiles = filesToCheck.filter(f => f.label === 'Current');
  const backupFiles = filesToCheck.filter(f => f.label === 'Original Backup');
  
  if (backupFiles.length > 0) {
    console.log('\n🔍 Comparing Current vs Original:');
    console.log('   If original backups have ICC profiles but current files don\'t,');
    console.log('   that indicates profiles were stripped during compression.');
  }
  
  console.log('\n💡 Next Steps:');
  console.log('   1. If original files have ICC profiles → Need to preserve them');
  console.log('   2. If RGB values differ → Color space conversion occurred');
  console.log('   3. If RGB values same but look different → Browser color management issue');
}

main().catch(console.error);

