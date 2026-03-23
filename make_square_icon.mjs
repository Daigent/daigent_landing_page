import Jimp from 'jimp';

async function makeSquareIcon() {
  try {
    const image = await Jimp.read('public/Daigent-01-transparent.png');
    const size = Math.max(image.bitmap.width, image.bitmap.height);
    
    // Create a new transparent image of size x size
    const background = new Jimp(size, size, 0x00000000); // 0x00000000 is fully transparent
    
    // Calculate center coordinates
    const x = Math.floor((size - image.bitmap.width) / 2);
    const y = Math.floor((size - image.bitmap.height) / 2);
    
    // Composite the logo onto the square transparent background
    background.composite(image, x, y);
    
    await background.writeAsync('app/icon.png');
    console.log('Created perfectly square app/icon.png');
  } catch (error) {
    console.error('Error creating square icon:', error);
  }
}

makeSquareIcon();
