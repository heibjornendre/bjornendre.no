// modified p5.js example
// https://p5js.org/examples/interaction-wavemaker.html

// TODO: optimize for mobile

let cnvParent = document.getElementById('dotcanvas');
let cnvWidth = cnvParent.offsetWidth;
let cnvHeight = cnvParent.offsetHeight;

let t = 0; // time variable
let ti = 0.0002; // time increment
let s = 3; // size
let xs = 30;
let ys = 30;
let magic = 8;
let backgroundColor = 'rgb(14, 14, 14)';
let backgroundColorAlpha = 'rgba(14, 14, 14, 0.20)';
let particleColor = 'rgb(80, 80, 80)';

let paused = false;

function setup() {
    let cnv = createCanvas(cnvWidth, cnvHeight);
    cnv.parent('dotcanvas');

    noStroke();
    fill(particleColor);
    background(backgroundColor);
}

function draw() {
    background(backgroundColorAlpha);

    // make a x and y grid of ellipses
    for (let x = 0; x <= width; x = x + xs) {
        for (let y = 0; y <= height; y = y + ys) {
            // starting point of each circle depends on mouse position
            let xAngle = map(mouseX, 0, width, -magic * PI, magic * PI, true);
            let yAngle = map(mouseY, 0, height, -magic * PI, magic * PI, true);
            // and also varies based on the particle's location
            let angle = xAngle * (x / width) + yAngle * (y / height);

            // each particle moves in a circle
            let myX = x + xs * cos(20 * PI * t + angle);
            let myY = y + ys * sin(2 * PI * t + angle);

            ellipse(myX, myY, s); // draw particle
        }
    }

    t = t + ti; // update time
}

function windowResized() {
    let cnvParent = document.getElementById('dotcanvas');
    resizeCanvas(cnvParent.offsetWidth, cnvParent.offsetHeight);
    background(backgroundColor);
}

function keyPressed() {
    if (keyCode === 32) {
      if (paused) {
          loop();
      } else {
          noLoop();
      }
      paused = !paused;
      return false; // prevent default
    }
  }