new p5(function(p) {
  let cols; 
  let rows;
  let csize = 10;
  let rsize = 10;
  let img;
  let bright = []; 
  let redI; 
  let redJ;
  let redLocked = false;

  p.preload = function() {
    img = p.loadImage("images/BINGO!.png");
  };

  p.setup = function() {
    p.createCanvas(800, 200).parent('sketch-container-2');
    p.noStroke();
    cols = p.width / csize;
    rows = p.height / rsize;     

    redI = p.floor(p.random(cols));
    redJ = p.floor(p.random(rows));

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

        if (i == redI && j == redJ) {
          if (bright[i][j] > 8) {
            redLocked = true;
          }

          if (redLocked) {
            p.fill(255, 0, 0);
          } else {
            p.fill(bright[i][j]);
          }
        } else {
          p.fill(bright[i][j]);
        }

        p.circle(x, y, csize);
      }
    }
  };
});