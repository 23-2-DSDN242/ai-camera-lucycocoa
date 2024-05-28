// let sourceImg=null;
// let maskImg=null;
// let renderCounter=0;

// // change these three lines as appropiate
// let sourceFile = "input_3.jpg";
// let maskFile   = "mask_3.png";
// let outputFile = "output_1.png";

// function preload() {
//   sourceImg = loadImage(sourceFile);
//   maskImg = loadImage(maskFile);
// }

// function setup () {
//   let main_canvas = createCanvas(1920, 1080);
//   main_canvas.parent('canvasContainer');

//   imageMode(CENTER);
//   noStroke();
//   background(255, 0, 0);
//   sourceImg.loadPixels();
//   maskImg.loadPixels();

  

  

//   // sourceImg.filter(BLUR, 8)
//   // for(var r = 0; r <= 256; r += 64) {
//   //   for(var g = 0; g <= 256; g += 64) {
//   //     for(var b = 0; g <= 256; g += 64){
//   //       colors.push([r,g,b])
//   //     }
//   //   }
//   // }

//   // Img.loadPixels()
//   // for(var x = 0; x < sourceImg.width; x++) {
//   //   for(var y =0; y < sourceImg.height; y++){

//   //     var index = ( x+ y * maskImg.width)* 4
//   //     var r =  maskImg.pixels[index +0]
//   //     var g =  maskImg.pixels[index +1]
//   //     var b =  maskImg.pixels[index +2]

//   //     var closestColor = [3 * 255, []]
//   //     for (color of colors) {
//   //       var diff = abs(color[0]-r +abs(color[1]-g +abs(color[2]-b)))
//   //       if (diff < closestColor[0]){
//   //         closestColor[0]= diff
//   //         closestColor[1]= color
//   //       }
//   //     }
//   //     maskImg.pixels[index +0] = closestColor[1][0]
//   //     maskImg.pixels[index +1] = closestColor[1][1]
//   //     maskImg.pixels[index +2] = closestColor[1][2]
//   //    }
//   // }
// }

// function draw () {
//   for(let i=0;i<4000;i++) {
//     let x = floor(random(sourceImg.width));
//     let y = floor(random(sourceImg.height));
//     let pix = sourceImg.get(x, y);
//     let mask = maskImg.get(x, y);
//     fill(pix);
//     if(mask[0] > 128) {
//       let pointSize = 10;
//       ellipse(x, y, pointSize, pointSize);
//     }
//     else {
//       let pointSize = 20;
//       rect(x, y, pointSize, pointSize);    
//     }




    
//   }



  
//   renderCounter = renderCounter + 1;
//   if(renderCounter > 10) {
//     console.log("Done!")
//     noLoop();
//     // uncomment this to save the result
//     // saveArtworkImage(outputFile);
//   }
// }

// function keyTyped() {
//   if (key == '!') {
//     saveBlocksImages();
//   }
// }



///위엥거!!








let sourceImg=null;
let maskImg=null;

// change these three lines as appropiate
let sourceFile = "input_11.jpg";
let maskFile   = "mask_11.png";
let outputFile = "output_1.png";

let colors =[];

function preload() {
  sourceImg = loadImage(sourceFile);
  maskImg = loadImage(maskFile);
}

function setup () {
  let main_canvas = createCanvas(1920, 1080);
  main_canvas.parent('canvasContainer');

  imageMode(CENTER);
  noStroke();
  background(0, 0, 128);
  // sourceImg.loadPixels();
  maskImg.loadPixels();
  sourceImg.loadPixels();
  colorMode(RGB);


}


//   sourceImg.filter(BLUR, 8);
 

 
//  for(let r = 0; r <= 256; r += 64) {
//     for(let g = 0; g <= 256; g += 64) {
//       for(let b = 0; b <= 256; b += 64) {
//         colors.push([r,g,b])
//       }
//     }
//   }

//   sourceImg.loadPixels()
//   for(let x = 0; x < sourceImg.width; x++) {
//     for(let y =0; y < sourceImg.height; y++){

//       let index = ( x+ y * sourceImg.width)* 4
//       let r =  sourceImg.pixels[index +0]
//       let g =  sourceImg.pixels[index +1]
//       let b =  sourceImg.pixels[index +2]

//       let closestColor = [3 * 255, []]
//       for (color of colors) {
//         let diff = abs(color[0]-r) +abs(color[1]-g) +abs(color[2]-b)
//         if (diff < closestColor[0]){
//           closestColor[0]= diff
//           closestColor[1]= color
//         }
//       }
//       sourceImg.pixels[index +0] = closestColor[1][0]
//       sourceImg.pixels[index +1] = closestColor[1][1]
//       sourceImg.pixels[index +2] = closestColor[1][2]
//      }
//   }
//   sourceImg.updatePixels();


// let X_STOP = 640;
// let Y_STOP = 480;
let X_STOP = 1920;
let Y_STOP = 1080;
let OFFSET = 20;// change this to 200 for more noticeable effect

let renderCounter=0;


function draw () {
  
//   // angleMode(DEGREES);
//   // let num_lines_to_draw = 40;
//   // // get one scanline
//   // for(let j=renderCounter; j<renderCounter+num_lines_to_draw && j<Y_STOP; j++) {
//   //   for(let i=0; i<X_STOP; i++) {
//   //     colorMode(RGB);
//   //     let mask = maskImg.get(i, j);
//   //     if (mask[1] < 128) {
//   //       pix = sourceImg.get(i, j);
//   //     }
//   //     else {
//   //       let wave = sin(j*3);/////// *8
//   //       let slip = map(wave, -1, 1, -OFFSET, OFFSET);
//   //       pix = sourceImg.get(i+slip, j);

//   //       // let brt = map(wave, -1, 1, 0, 255);
//   //       // for(let c=0; c<3; c++) {
//   //       //   pix[c] = brt;
//   //       // }
//   //     }

//   //     set(i, j, pix);
//   //   }
//   // }
 
  // for(let i=0;i<100000;i++) {
  
    
  //   let x = floor(random(sourceImg.width));
  //   let y = floor(random(sourceImg.height));
  //   let pix = sourceImg.get(x, y);
  //   let mask = maskImg.get(x, y);
  //   fill(pix);
  //   if(mask[0] > 128) {
  //     let pointSize = 10;
  //     fill(sourceImg.get(x,y))
  //     rect(x, y, pointSize, pointSize);
  //   }
  //   else {
  //     // Convert to grayscale
  //     let gray = (pix[0] + pix[1] + pix[2]) / 3;
  //     let grayPix = [gray, gray, gray];
  //     fill(grayPix);
  //     let pointSize = 20;
  //     rect(x, y, pointSize, pointSize);
  //   }
  // }
  

//   // renderCounter = renderCounter + num_lines_to_draw;
//   // updatePixels();

//   // print(renderCounter);
//   if(renderCounter > Y_STOP) {
//     console.log("Done!")
//     noLoop();
//     // uncomment this to save the result
//     // saveArtworkImage(outputFile);
//   }
// }

// function keyTyped() {
//   if (key == '!') {
//     saveBlocksImages();
//   }
// }





// //make mask image into grayscale

angleMode(DEGREES);
let num_lines_to_draw = 40;
// Get one scanline
for (let j = renderCounter; j < renderCounter + num_lines_to_draw && j < Y_STOP; j++) {
  for (let i = 0; i < X_STOP; i++) {
    colorMode(RGB);
    let mask = maskImg.get(i, j);
    let pix = sourceImg.get(i, j);

    if (mask[1] < 128) {
      // Convert to grayscale
      let wave = sin(j * 50);
      let slip = map(wave, -1, 1, -OFFSET, OFFSET);
      pix = sourceImg.get(i + slip, j);
      
    } else {
      let gray = (pix[0] + pix[1] + pix[2]) /3 ;
      pix = [gray, gray, gray];
    }

    set(i, j, color(pix));
  }
}
renderCounter += num_lines_to_draw;
updatePixels();

if (renderCounter > Y_STOP) {
  console.log("Done!");
  noLoop();
  // Uncomment this to save the result
  // saveArtworkImage(outputFile);
}
}

function keyTyped() {
if (key == '!') {
  saveCanvas('myCanvas', 'png');
}
}











// ///////////coloured blur
