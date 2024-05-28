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

  ![readme](https://github.com/23-2-DSDN242/mddn-242-data-mapping-dribnet/assets/140350024/ca9563f5-3275-4128-b4c3-2e776e2d339d)




