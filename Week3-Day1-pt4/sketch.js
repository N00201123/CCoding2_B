
//let data = [30, 100, 90, 20, 180, 94];
//scaledData = [];
//let dataLabels = ["Oranges", "Bananas", "Lemons", "Limes", "Apples", "Grapes"];
let data = [{name: "Oranges", total:63}, 
{name: "Banana", total:33}, 
{name: "Pears", total:21}, 
{name: "Apples", total:43},
{name: "Lemons", total:121},
{name: "Limes", total:40}];

//this is an array method that maps out a new array
//property of an objesct


function setup() {
    createCanvas(700,700);
    chart1 = new BarChart(data);
    chart1.chartWidth = 200;
    chart1.chartHeight = 200;
    chart1.posX = 100;
    chart1.posY = 400;

    chart2 = new BarChart(data);
    chart1.chartWidth = 200;
    chart1.chartHeight = 200;
    chart1.posX = 400;
    chart1.posY = 400;
}


function draw() {
    background(50);
    chart1.updateValues()
    chart1.updateValues()
    chart1.render()
    chart2.render()
    
}

