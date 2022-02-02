function setup() {
    createCanvas(500,500)
    background(125);
}

function draw() {
    drawGrid(5);
}


function drawGrid(numBoxes) {
    fill(125);
    stroke(255);


for(let j=0; j<numBoxes; j++) {
    for(let i=0; i<=numBoxes; i++) {
        let boxSize = width/numBoxes;
        rect(i*boxSize, j*boxSize,boxSize, boxSize)
    } 
  }
}


