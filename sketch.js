
let sourceImg = null;
let maskImg = null;

let sourceFile = "input_1.jpg";
let maskFile = "mask_1.png";
let outputFile = "output_1.png";

let colors = [];

function preload() {
  sourceImg = loadImage(sourceFile);
  maskImg = loadImage(maskFile);
}

function setup() {
  let main_canvas = createCanvas(1920, 1080);
  main_canvas.parent('canvasContainer');

  imageMode(CENTER);
  noStroke();
  background(255,255,255)
  
  
  maskImg.loadPixels();
  colorMode(RGB);
  maskImg.updatePixels();
 
  

                                               //// Adjust pixel colors
  for (let r = 0; r <= 255; r += 64) {
    for (let g = 0; g <= 255; g += 64) {
      for (let b = 0; b <= 255; b += 64) {
        colors.push([r, g, b]);
      }
    }
  }

  sourceImg.loadPixels();


  for (let x = 0; x < sourceImg.width; x++) {

    for (let y = 0; y < sourceImg.height; y++) {

      let index = (x + y * sourceImg.width) * 4;
      let r = sourceImg.pixels[index + 0];
      let g = sourceImg.pixels[index + 1];
      let b = sourceImg.pixels[index + 2];

      let closestColor = [Number.MAX_VALUE, []];

      for (let color of colors) {

        let diff = dist(r, g, b, color[0], color[1], color[2]);

        if (diff < closestColor[0]) {
          closestColor[0] = diff;
          closestColor[1] = color;
        }
      }

      sourceImg.pixels[index + 0] = closestColor[1][0];
      sourceImg.pixels[index + 1] = closestColor[1][1];
      sourceImg.pixels[index + 2] = closestColor[1][2];
    }
  }
  sourceImg.updatePixels();
}

let X_STOP = 1920;
let Y_STOP = 1080;
let OFFSET = 20; 

let renderCounter = 0;


function draw() {
                                    ////Warping filter
  angleMode(DEGREES);
  let num_lines_to_draw = 40;

  for (let j = renderCounter; j < renderCounter + num_lines_to_draw && j < Y_STOP; j++) {
    for (let i = 0; i < X_STOP; i++) {
      colorMode(RGB);
      let mask = maskImg.get(i, j);
      let pix;
      
      if (mask[1] < 128) {
        pix = sourceImg.get(i, j);
      } else {
        let wave = sin(j * 40);     //// wave thickness
        let slip = map(wave, -1, 1, -OFFSET, OFFSET);
        pix = sourceImg.get((i + slip + X_STOP) % X_STOP, j); 
      }

      set(i, j, color(pix));
    }
  }

  renderCounter += num_lines_to_draw;
  updatePixels();

  if (renderCounter > Y_STOP) {
    console.log("Done!");
    noLoop();
  //  saveCanvas(outputFile);
  }
}

function keyTyped() {
  if (key == '!') {
    saveCanvas('myCanvas', 'png');
  }
}
