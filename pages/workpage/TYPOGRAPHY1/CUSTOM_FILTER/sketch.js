let faceMesh;
let video;
let faces = [];

let cols = 50;
let rows = 50;

function preload() {
  faceMesh = ml5.faceMesh({
    maxFaces: 1,
    flipped: true
  });
}

function gotFaces(results) {
  faces = results;
}

function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO, { flipped: true });
  video.size(cols, rows);
  video.hide();

  faceMesh.detectStart(video.elt, gotFaces);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(0,0,0);

  video.loadPixels();

  let cellW = width / cols;
  let cellH = height / rows;

  // -------- GRID (ALL RANDOM GREEN NUMBERS, SIZE BASED ON BRIGHTNESS) --------
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      let i = (x + y * cols) * 4;
      let r = video.pixels[i];
      let g = video.pixels[i + 1];
      let b = video.pixels[i + 2];

      let brightness = (r + g + b)/2 ;


      let num = floor(random(0, 10));
      let sizeRand = random (1,4);


      let size = map(brightness, 0, 255, sizeRand, cellW);

      textSize(size);
      fill(0, 255, 0);
      noStroke();
      text(num, x * cellW + cellW / 2, y * cellH + cellH / 2);
    }
  }
}