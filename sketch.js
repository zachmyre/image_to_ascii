const density = 'Ñ@#W$9876543210?!abc;:+=-,._ ';

let img;

function preload(){
  img = loadImage('ascentx1.png');
}

function setup(){
  noCanvas();

  
  background(0);
  //image(img, 0, 0, width, height);
  
  let w = width / img.width;
  let h = height / img.height;
  img.loadPixels();
  //let d = pixelDensity();
  for(let z = 0; z < img.height; z++){
    let row = '';
    for(let i = 0; i < img.width; i++){
      const pixelIndex = (i + z * img.width) * 4;
      const red = img.pixels[pixelIndex + 0];
      const green = img.pixels[pixelIndex + 1];
      const blue = img.pixels[pixelIndex + 2];
      const avg = (red + green + blue) / 3;
      // console.log(img.pixels)

      // console.table({
      //   pixelIndex: pixelIndex,
      //   i: i,
      //   z: z,
      //   imgWidth: img.width,
      //   imgHeight: img.height,
      //   red: red,
      //   green: green,
      //   blue: blue,
      //   avg: avg
      // })

      //console.log(avg)
      noStroke();
      fill(avg);
      
      const len = density.length;
      const charIndex = floor(map(avg, 0, 255, 0, len));
      const c = density.charAt(charIndex);
      if(c == ''){
        row += '&nbsp;';
      }else {
        row += c;
      }
       
    }
    createDiv(row);
  }
}