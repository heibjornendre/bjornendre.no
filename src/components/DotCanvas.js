import Sketch from 'react-p5'

const DotCanvas = () => {
    let canvasWrapper = document.getElementById('canvasWrapper');

    let time = 0;
    const particleSpeed = 0.0002;
    const particleSize = 5;
    const xMargin = 60;
    const yMargin = 60;
    const magic = 2.5;
    const backgroundColor = 'rgb(14, 14, 14)';
    const backgroundColorAlpha = 'rgba(14, 14, 14, 0.2)';
    const particleColor = 'rgb(60, 60, 60)';

    let paused = false;

    const setup = (p5, canvasParentRef) => {
        p5.createCanvas(canvasWrapper.offsetWidth,canvasWrapper.offsetHeight).parent(canvasParentRef);
        console.log(canvasWrapper.offsetWidth, canvasWrapper.offsetHeight);
        p5.noStroke();
        p5.fill(particleColor);
        p5.background(backgroundColor);
    }
    
    const draw = (p5) => {

        p5.background(backgroundColorAlpha);

        // make a x and y grid of ellipses
        for (let x = 0; x <= p5.width; x = x + xMargin) {
            for (let y = 0; y <= p5.height; y = y + yMargin) {
                
                // starting point of each circle depends on mouse position
                // map(value, start1, stop1, start2, stop2, [withinBounds])
                let xAngle = p5.map(p5.mouseX, 0, p5.width, -magic * p5.PI, magic * p5.PI, true);
                let yAngle = p5.map(p5.mouseY, 0, p5.height, -magic * p5.PI, magic * p5.PI, true);

                // and also varies based on the particle's location
                let angle = xAngle * (x / p5.width) + yAngle * (y / p5.height);

                // each particle moves in a circle
                let myX = x + xMargin * p5.cos(20 * p5.PI * time + angle);
                let myY = y + yMargin * p5.sin(2 * p5.PI * time + angle);

                // draw particle
                p5.ellipse(myX, myY, particleSize); 
            }
        }

        // update time
        time = time + particleSpeed; 
    }

    const keyPressed = (p5) => {
        // spacebar
        if (p5.keyCode === 32) {
            if (paused) {
                p5.loop();
            } else {
                p5.noLoop();
            }
            paused = !paused;
            return false; // prevent default
        }
    }

    const windowResized = (p5) => {
        p5.resizeCanvas(canvasWrapper.offsetWidth, canvasWrapper.offsetHeight);
        p5.background(backgroundColor);
    }

    return <Sketch setup={setup} draw={draw} keyPressed={keyPressed} windowResized={windowResized}/>
}

export default DotCanvas