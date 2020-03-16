let pop = 100;
let size = 15;
let rX = [];
let rY = [];
let rW = [];
let rH = [];
// let sFill = [];
let r = [];
let g = [];
let b = [];


function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < pop; i++) {
    rX[i] = random(width);
    rY[i] = random(height);
    rW[i] = random(10, size);
    rH[i] = random(10, size);
    // sFill[i] = random(50,200);
    r[i] = random (50,200);
    g[i] = r[i];
    b[i] = r[i];
    
  }
  
}

function draw() {
  // put drawing code here  
  background(255);
  noStroke();
  ellipseMode(CORNERS);

  for (let i = 0; i < rX.length; i++){
    // fill(sFill[i]);
    fill(r[i], g[i], b[i]);
    
    ellipse(rX[i], rY[i], rX[i]+rW[i], rY[i]+rH[i]);

    if(rX[i] < width){
      rX[i] += 0.3;
    }
    else{
      rX[i] = 0;
    }
    
    if (rY[i] < height){
      rY[i] += random(0,3);
      rH[i] += 10;
    }
    else{
      rY[i] = random(0,50);
      rH[i] = size;
    }
    
    // if (rX.length > 300){
    //   rX.remove(pop, 10);
    //   rY.remove(pop, 10);
    //   rW.remove(pop, 10);
    //   rH.remove(pop, 10);
    //   r.remove(pop, 10);
    //   g.remove(pop, 10);
    //   b.remove(pop, 10);
    // }
  }
}

function mouseDragged() {
    mouseClicked();
}

function mouseClicked() {
  append(rX, mouseX);
  append(rY, mouseY);

  append(rW, 20);
  append(rH, 20);

  append(r, random(100, 20));
  append(g, random(200, 255));
  append(b, random(200, 255));
}
