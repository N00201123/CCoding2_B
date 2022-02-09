let chartWidth = 400;
let chartHeight = 400;
let tickLength = 10;
let data = [30, 90, 60, 15, 27]
let dataLabels = ["Oranges", "Bananas", "Lemons", "Limes","Apples", "Grapes"]
//let data = [30, 90, 60
let spacing= 5;
let margin = 60;
let scaledData = [];

let maxValue;

let numTicks = 10;
let tickIncrements 
let tickSpacing = chartHeight/numTicks;
let availableWidth = chartWidth - (margin*2) - (spacing*(data.length-1))
let barWidth = availableWidth/data.length;

console.log(barWidth)

function setup() {
    createCanvas(500,500);
    background(0);
    maxValue = max(data);
    tickIncrements = Math.round(maxValue/numTicks);

    for(let i=0; i<data.length; i++) {
        let tempVal = map(data[i], 0, max(data), 0, chartHeight)

        //let tempVal = data[i]*4;
        scaledData.push(tempVal);
    }
}

function draw() {
    background(0,0,255);

    translate(50,450);

    stroke(255, 200);
    strokeWeight(1);
    line(0,0,0,-chartHeight);
    line(0,0,chartWidth,0);
    
    //line(0, 0, -10, 0);
    //line(0, -20, -10, -40);
    //line(0, -40, -10, -80);

    for(let i=0; i<=numTicks; i++) {
        stroke(255,200);
        line(0, -tickSpacing*i, -tickLength, -tickSpacing * i);

        fill(255,0,0)
        noStroke()
        textSize(14)
        textAlign(RIGHT, CENTER)
        text(i * tickIncrements, -15, tickSpacing * -i);
    }


    translate(margin, 0);
    for(let i=0; i<scaledData.length; i++) {
        let totalSpace = barWidth + spacing;
        fill(255);
        noStroke();
        rect(i*totalSpace, 0, barWidth, -scaledData[i]);

        noStroke()
        fill(255,0,0)
        textSize(14)
        textAlign(CENTER, BOTTOM)
        text(data[i], ((barWidth + spacing) *i) + barWidth/2, -scaledData[i]);

        noStroke()
        fill(255,0,0)
        textSize(14)
        textAlign(CENTER, BOTTOM)
        text(dataLabels[i], ((barWidth + spacing) *i) + barWidth/2, 20);

        //fill(255,0,0);
        //noStroke()
        //textSize(14)
        //textAlign(CENTER)
        //text(data[i], barWidth, -data[i]);
    }

    

    //rect(0,0,barWidth,-data[0]);
    //rect(barWidth+spacing, 0,barWidth,-data[1]);
    //rect(((barWidth+spacing) * 2), 0,barWidth,-data[2]);
}





