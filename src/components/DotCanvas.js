import Sketch from 'react-p5'

const DotCanvas = () => {
    let cnvParent = document.getElementById('canvasWrapper');
    const cnvWidth = cnvParent.offsetWidth;
    const cnvHeight = cnvParent.offsetHeight;

    let time = 0; // time variable
    const timeIncrement = 0.0002; // time increment
    const s = 3; // size
    const xs = 60;
    const ys = 60;
    const magic = 2.5;
    const backgroundColor = 'rgb(14, 14, 14)';
    const backgroundColorAlpha = 'rgba(14, 14, 14, 0.20)';
    const particleColor = 'rgb(80, 80, 80)';

    let paused = false;

    const setup = (p5, canvasParentRef) => {
        p5.createCanvas(cnvWidth,cnvHeight).parent(canvasParentRef);

        p5.noStroke();
        p5.fill(particleColor);
        p5.background(backgroundColor);
    }
    
    const draw = (p5) => {
        p5.background(backgroundColorAlpha);

        // make a x and y grid of ellipses
        for (let x = 0; x <= p5.width; x = x + xs) {
            for (let y = 0; y <= p5.height; y = y + ys) {
                // starting point of each circle depends on mouse position
                let xAngle = p5.map(p5.mouseX, 0, p5.width, -magic * p5.PI, magic * p5.PI, true);
                let yAngle = p5.map(p5.mouseY, 0, p5.height, -magic * p5.PI, magic * p5.PI, true);
                // and also varies based on the particle's location
                let angle = xAngle * (x / p5.width) + yAngle * (y / p5.height);

                // each particle moves in a circle
                let myX = x + xs * p5.cos(20 * p5.PI * time + angle);
                let myY = y + ys * p5.sin(2 * p5.PI * time + angle);

                // draw particle
                p5.ellipse(myX, myY, s); 
            }
        }

        p5.noLoop();

        // update time
        time = time + timeIncrement; 
    }

    const keyPressed = (event) => {
        // TODO: fix this...
        // spacebar
        if (event.keyCode === 32) {
            if (paused) {
                // loop();
                console.log("loop()");
            } else {
                // noLoop();
                console.log("noLoop()");
            }
            paused = !paused;
            return false; // prevent default
          }
    }

    // TODO: windowResized
    const windowResized = () => {
        console.log("window resized");
        // let cnvParent = document.getElementById('canvasWrapper');
        // resizeCanvas(cnvParent.offsetWidth, cnvParent.offsetHeight);
        // p5.background(backgroundColor);
    }

    return <Sketch setup={setup} draw={draw} keyPressed={keyPressed} windowResized={windowResized}/>
}

export default DotCanvas
