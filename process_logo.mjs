import Jimp from 'jimp';

async function processImage(filename) {
  try {
    console.log(`Processing ${filename}...`);
    const image = await Jimp.read(`public/${filename}`);
    let minX = image.bitmap.width, minY = image.bitmap.height, maxX = 0, maxY = 0;

    image.scan(0, 0, image.bitmap.width, image.bitmap.height, function(x, y, idx) {
      let r = this.bitmap.data[idx + 0];
      let g = this.bitmap.data[idx + 1];
      let b = this.bitmap.data[idx + 2];
      
      // Calculate alpha based on the brightest channel to preserve glowing edges
      let alpha = Math.max(r, g, b);
      
      if (alpha > 0) {
        // Un-premultiply the RGB values so the glow remains colorful but becomes transparent
        this.bitmap.data[idx + 0] = Math.min(255, Math.round((r * 255) / alpha));
        this.bitmap.data[idx + 1] = Math.min(255, Math.round((g * 255) / alpha));
        this.bitmap.data[idx + 2] = Math.min(255, Math.round((b * 255) / alpha));
        this.bitmap.data[idx + 3] = alpha;
        
        // Track bounds for cropping (ignore very faint pixels for bounds)
        if (alpha > 15) {
          if (x < minX) minX = x;
          if (x > maxX) maxX = x;
          if (y < minY) minY = y;
          if (y > maxY) maxY = y;
        }
      } else {
        this.bitmap.data[idx + 3] = 0;
      }
    });

    // Crop the image to the bounding box of non-transparent pixels
    if (maxX >= minX && Math.abs(maxX - minX) > 0) {
      // Add a small 2px padding so clipping doesn't look harsh
      const pad = 4;
      minX = Math.max(0, minX - pad);
      minY = Math.max(0, minY - pad);
      maxX = Math.min(image.bitmap.width - 1, maxX + pad);
      maxY = Math.min(image.bitmap.height - 1, maxY + pad);
      
      const width = maxX - minX + 1;
      const height = maxY - minY + 1;
      image.crop(minX, minY, width, height);
    }

    const outName = filename.replace('.png', '-transparent.png');
    await image.writeAsync(`public/${outName}`);
    console.log(`Saved transparent, cropped image to ${outName}`);
  } catch(e) {
    console.error(`Failed to process ${filename}:`, e);
  }
}

async function main() {
  await processImage('Daigent-03.png');
  await processImage('Daigent-01.png');
}

main();
