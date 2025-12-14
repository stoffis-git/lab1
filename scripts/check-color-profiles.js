const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imagesToCheck = [
  'public/Lab1-image-hero-eyes.png',
  'public/Lab1-image-expert-team.png',
  'public/Lab1-image-team.png',
  'public/Lab1-image-testkit-woman.png',
  'public/Lab1-image-performance-yoga.png',
  'public/Lab1-image-health-mom.png',
  'public/Lab1-image-backrgound-plant1.png',
  'public/Lab1-image-backrgound-plant2.png',
];

async function checkColorProfile(imagePath) {
  const fullPath = path.join(process.cwd(), imagePath);
  
  if (!fs.existsSync(fullPath)) {
    console.log(`⚠️  File not found: ${imagePath}`);
    return null;
  }

  try {
    const metadata = await sharp(fullPath).metadata();
    
    return {
      file: path.basename(imagePath),
      space: metadata.space || 'unknown',
      hasProfile: metadata.hasProfile || false,
      profile: metadata.icc ? `ICC profile present (${metadata.icc.length} bytes)` : 'No ICC profile',
      channels: metadata.channels,
      depth: metadata.depth,
      format: metadata.format,
      width: metadata.width,
      height: metadata.height,
    };
  } catch (error) {
    return {
      file: path.basename(imagePath),
      error: error.message,
    };
  }
}

async function main() {
  console.log('🔍 Checking color profiles of source images...\n');

  const results = [];
  for (const imagePath of imagesToCheck) {
    const result = await checkColorProfile(imagePath);
    if (result) {
      results.push(result);
    }
  }

  console.log('📊 Color Profile Analysis:\n');
  console.log('─'.repeat(80));
  
  results.forEach(result => {
    if (result.error) {
      console.log(`\n❌ ${result.file}`);
      console.log(`   Error: ${result.error}`);
    } else {
      console.log(`\n📸 ${result.file}`);
      console.log(`   Color Space: ${result.space}`);
      console.log(`   Has Profile: ${result.hasProfile ? '✅ Yes' : '❌ No'}`);
      console.log(`   Profile Info: ${result.profile}`);
      console.log(`   Channels: ${result.channels}`);
      console.log(`   Bit Depth: ${result.depth}`);
      console.log(`   Dimensions: ${result.width}x${result.height}`);
    }
  });

  console.log('\n' + '─'.repeat(80));
  
  // Summary
  const withProfiles = results.filter(r => !r.error && r.hasProfile).length;
  const withoutProfiles = results.filter(r => !r.error && !r.hasProfile).length;
  const colorSpaces = [...new Set(results.filter(r => !r.error).map(r => r.space))];
  
  console.log('\n📈 Summary:');
  console.log(`   Images with ICC profiles: ${withProfiles}`);
  console.log(`   Images without ICC profiles: ${withoutProfiles}`);
  console.log(`   Color spaces found: ${colorSpaces.join(', ')}`);
  
  if (colorSpaces.some(s => s !== 'srgb')) {
    console.log('\n⚠️  WARNING: Non-sRGB color spaces detected!');
    console.log('   Next.js Image optimization will convert these to sRGB,');
    console.log('   which may cause color desaturation.');
  }
}

main().catch(console.error);

