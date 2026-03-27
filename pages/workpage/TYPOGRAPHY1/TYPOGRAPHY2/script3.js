let myFont;
let points = [];
let r = 15; 
let angle = 0;
let rsizex = 0.1;
let rsizey = 0.1;

let msg = "RIPPLE";
let msg2 =" ripple"
let fontSize = 200;

function preload() {
  myFont = loadFont("font.otf");
}

function setup() {
  createCanvas(800, 400);
  angleMode(DEGREES);
  let bounds = myFont.textBounds(msg, 0, 0, fontSize);
  let x = width/2 - bounds.w/2;
  let y = height/2 + bounds.h/2;

  points = myFont.textToPoints(msg, x, y, fontSize, {
    sampleFactor: 0.1,
    simplifyThreshold: 0
  });
}

function draw() {

  noStroke();
  background(72, 179, 194);

  for (let i = 0; i < points.length; i++) {

    let opval = 255;

    if (mouseIsPressed) {
      opval = 100;  
    }

    fill(255, opval);

    let px = points[i].x + r*sin(angle + i*25);
    let py = points[i].y;

    ellipse(px, py, 20 + rsizex, 20 + rsizey);
  }

  angle += 5;
}