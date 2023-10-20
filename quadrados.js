function setup() {
  //setting up background
  createCanvas(windowWidth, windowHeight);
  background(30, 30, 36);
  //raisin black
  //organizing variables
  sqrX = 0;
  sqrY = 0;
  sqrR = 0;
  sqrG = 0;
  sqrB = 255;
  sqrSize = 0;
  colorSelection = 0;
}


function draw() {
  //randomly choosing colors
  colorSelection = floor(random(1, 5));
  console.log(colorSelection);
  //randomizing position
  sqrX = random(0, windowWidth);
  sqrY = random(0, windowHeight);
  //randomizing size
  sqrSize = random(50, 100);
  
  //selecting colors
  if(colorSelection == 1){
    //coral pink
    sqrR = 251;
    sqrG = 159;
    sqrB = 137;
  }
  
  if(colorSelection == 2){
    //khaki
    sqrR = 196;
    sqrG = 175;
    sqrB = 154;
  }
  
  if(colorSelection == 3){
    //cambridge blue
    sqrR = 129;
    sqrG = 174;
    sqrB = 157;
  }
  
  if(colorSelection == 4){
    //jungle green
    sqrR = 33;
    sqrG = 161;
    sqrB = 121;
  }
  
  fill(sqrR, sqrG, sqrB);
  square(sqrX, sqrY, sqrSize);
}
