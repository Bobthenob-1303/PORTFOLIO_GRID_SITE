new p5(function(p) {
  let cols; 
  let rows;
  let csize;
  let rsize;
  let img;
  let bright = []; 

  p.preload = function() {
    img = p.loadImage("images/BINGO!.png");
  };

  p.setup = function() {
    p.createCanvas(800, 200).parent('sketch-container-1');
    p.noStroke();
    csize = 10;
    rsize = 10;
    cols = p.width / csize;
    rows = p.height / rsize;     

    for (let i = 0; i < cols; i++) {
      bright[i] = [];
      for (let j = 0; j < rows; j++) {
        bright[i][j] = 0;
      }
    }
  };

  p.draw = function() {
    p.background(0);

    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        let x = i * csize;
        let y = j * rsize;

        let d = p.dist(p.mouseX, p.mouseY, x, y);

        if (d < 100) {
          let c = img.get(x, y);
          bright[i][j] = p.brightness(c);
        }

        if (bright[i][j] > 0) {
          bright[i][j] -= 10;
        }

        p.fill(bright[i][j]);
        p.circle(x, y, csize);
      }
    }
  };
});