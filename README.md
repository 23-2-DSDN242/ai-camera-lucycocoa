[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/ex6pWDJu)
[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=15040891&assignment_repo_type=AssignmentRepo)
## Creative Coding 2: Custom Pixel


# First experiment

I started experimenting with rabbit hole photos I took during last year's photography class on the theme of 'space.' Since I haven't decided on a specific theme yet, I used the Pointillism code provided in the coding examples to process the rabbit hole photos.

![coding](https://github.com/23-2-DSDN242/ai-camera-lucycocoa/assets/140350024/2c4a1b10-f7d4-426e-bcdd-b8a7153a801e)

However, the drawback of these photos was their lack of distinct features. This leads errors occurred in generating new masks from other images using AI, even though the shapes were simple, the AI failed to accurately create the masks.

# Second experiment

Instead of using the rabbit hole photos, I decided it would be better to use phtos with more distinct and characteristic objects. So, I began experimenting again with photos of dogs. Dog photos have clear shapes and features, which I believed would be more suitable for AI to generate masks accurately.

Next, I used the Pointillism code to process the images. I wanted the dog to have a distinct, contrasting feel against the background, so I increased the number of iterations in the loop, the loop was set to for(let i=0; i<4000; i++), but I changed it to for(let i=0; i<100000; i++). Also I used a code that rendered only the masked part(dog) in grayscale.


````
for(let i=0;i<100000;i++) {
  
    
    let x = floor(random(sourceImg.width));
    let y = floor(random(sourceImg.height));
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
    fill(pix);

    // Convert to grayscale


    if(mask[0] > 128) {
      let gray = (pix[0] + pix[1] + pix[2]) / 3;
      let grayPix = [gray, gray, gray];
      fill(grayPix);
      let pointSize = 20;
      rect(x, y, pointSize, pointSize);
    
    }
    else {
      
      let pointSize = 10;
      fill(sourceImg.get(x,y))
      rect(x, y, pointSize, pointSize);
      
    }
  }

  ````



  From left to right: when for(let i=0; i<4000; i++), when for(let i=0; i<100000; i++), and when the mask is in grayscale.


![readme](https://github.com/23-2-DSDN242/ai-camera-lucycocoa/assets/140350024/54cbf957-ce3c-40eb-8a7f-86dd5635abbe)





I was searching for an effect to give the image a drawing-like feel, as I originally planned. During my search, I came across a code on YouTube.

[Youtube link] (https://www.youtube.com/watch?v=ktkkjlluI_4)

This code on YouTube that described creating a custom image filter which blurs the image and then approximates each pixel to the nearest color.


```

  sourceImg.filter(BLUR, 4);
  
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

```

I also applied the wave effect code from the pixel examples introduced in [week 11] to the mask.

(https://github.com/23-2-DSDN242/mddn-242-data-mapping-dribnet/blob/8102140af8a1de2b7ac0ee6fc219f80a70329b7f/sketch.js)


![output_1 (11)](https://github.com/23-2-DSDN242/ai-camera-lucycocoa/assets/140350024/b48b595f-cd29-47b9-ae94-e4997e8f8bb3)


And by increasing the number of waves, I achieved a glitch-like effect.

````


function draw() {
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
        let wave = sin(j * 30);     ///////// number of waves

        let slip = map(wave, -1, 1, -OFFSET, OFFSET);
        pix = sourceImg.get((i + slip + X_STOP) % X_STOP, j); // Handle wrap around
      }

      set(i, j, color(pix));
    }
  }

  renderCounter += num_lines_to_draw;
  updatePixels();
}
````
![output_1 (12)](https://github.com/23-2-DSDN242/ai-camera-lucycocoa/assets/140350024/d607ef6f-f65b-4e06-9753-2bbd516bedb7)

```
let wave = sin(j * 60);
```
![output_1 (13)](https://github.com/23-2-DSDN242/ai-camera-lucycocoa/assets/140350024/a33ae38b-7c12-4f33-adf4-4f3ddf4896d1)

I attempted various iterations based on this codes.

![readme1](https://github.com/23-2-DSDN242/ai-camera-lucycocoa/assets/140350024/c4c536a4-1eca-4b72-8db9-4e853e4eed41)
![readme2](https://github.com/23-2-DSDN242/ai-camera-lucycocoa/assets/140350024/395dbbb7-34b2-4d06-906c-7586d5de8c9f)
![readme3](https://github.com/23-2-DSDN242/ai-camera-lucycocoa/assets/140350024/b2de0a11-d3c1-49b0-91cc-096e63534ac1)
