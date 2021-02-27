// https://github.com/Gherciu/react-p5
// https://dev.to/vvo/how-to-solve-window-is-not-defined-errors-in-react-and-next-js-5f97
// https://dev.to/gssudharsan/integrating-p5-js-with-react-3g5e
// https://nextjs.org/docs/advanced-features/dynamic-import#with-no-ssr


import Sketch from 'react-p5'

const DotCanvas = () => {
    let cnvParent = document.getElementById('dotcanvas');
    let cnvWidth = cnvParent.offsetWidth;
    let cnvHeight = cnvParent.offsetHeight;

    let t = 0; // time variable
    let ti = 0.0002; // time increment
    let s = 3; // size
    let xs = 60;
    let ys = 60;
    let magic = 2.5;
    let backgroundColor = 'rgb(14, 14, 14)';
    let backgroundColorAlpha = 'rgba(14, 14, 14, 0.20)';
    let particleColor = 'rgb(80, 80, 80)';

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
                let myX = x + xs * p5.cos(20 * p5.PI * t + angle);
                let myY = y + ys * p5.sin(2 * p5.PI * t + angle);

                // draw particle
                p5.ellipse(myX, myY, s); 
            }
        }

        // update time
        t = t + ti; 
    }

    const keyPressed = (event) => {
        // TODO: fix this...
        console.log("key pressed!");
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

    return <Sketch setup={setup} draw={draw} keyPressed={keyPressed}/>
}

export default DotCanvas
