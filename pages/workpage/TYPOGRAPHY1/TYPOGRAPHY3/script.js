let font;
let points = [];
let msg = "ThreeD";
let size = 170;
let r = 5; 
let angle = 0; 
let t = 0;

function preload() {
font = loadFont("gameplay.ttf");
}

function setup() {
  createCanvas(800, 400);
  points = font.textToPoints(msg, 0, 0, size, {
    sampleFactor: 0.5,
    simplifyThreshold: 0.0
  });
  angleMode(DEGREES);
}

function draw() {
  let increment = 2 * cos(t);
  t++;
  angle += increment;
  background(0, 0, 0);
  
  
  let x = r * sin(angle);
  let y = r * cos(angle);
  translate(50, 275);

  noStroke();
  fill(255);
  for (let i = 0; i < points.length; i++) {
    circle(points[i].x + x, points[i].y + y, 6);
  }

//the threed thing
  fill(255);
  textSize(size);
  textFont(font);
  text(msg, 0, 0);

  
}