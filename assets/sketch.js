// modified p5.js example
// https://p5js.org/examples/interaction-wavemaker.html

let t = 0; // time variable
let ti = 0.0002; // time increment
let s = 3; // size
let xs = 30;
let ys = 30;
let magic = 8;

function setup() {
    createCanvas(windowWidth, windowHeight);
    noStroke();
    fill(112, 54, 90);
    background('rgb(6, 17, 77)');
}

function draw() {
    background('rgba(3, 13, 75, 0.20)');

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
    resizeCanvas(windowWidth, windowHeight);
    background('rgb(6, 17, 77)');
}