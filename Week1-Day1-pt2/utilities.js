function drawGrid(numBoxes,strokeColor, strokeThickness) {
    
    


    for(let j=0; j<numBoxes; j++) {
        for(let i=0; i<=numBoxes; i++) {
            let boxSize = width/numBoxes;
            noFill()
            strokeWeight(strokeThickness)
            stroke(strokeColor);
            push()
            translate(i*boxSize, j*boxSize)
            rotate(40)
            rect(0,0 ,boxSize, boxSize)
            pop()
        } 
      }
    }