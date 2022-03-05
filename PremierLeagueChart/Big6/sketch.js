
//let data = [30, 100, 90, 20, 180, 94];
//scaledData = [];
//let dataLabels = ["Oranges", "Bananas", "Lemons", "Limes", "Apples", "Grapes"];
let data01 = [{name: "Man United", points:734}, 
{name: "Liverpool", points:724}, 
{name: "Arsenal", points:700}, 
{name: "Chelsea", points:730},
{name: "Man City", points:826},
{name: "Spurs", points:672}];

let data02 = [{name: "Man United", goalScored: 681, goalConceded:332},
{name: "Liverpool", goalScored: 729, goalConceded:410},
{name: "Arsenal", goalScored: 702, goalConceded:436},
{name: "Chelsea", goalScored: 691, goalConceded:394},
{name: "Man City", goalScored: 858, goalConceded:336},
{name: "Spurs", goalScored: 637, goalConceded:394}];

//this is an array method that maps out a new array
//property of an objesct


function setup() {
    createCanvas(1000,1000);
    chart01 = new BarChart(data01);
    chart01.chartWidth = 300;
    chart01.chartHeight = 300;
    chart01.posX = 60;
    chart01.posY = 400;

    chart02 = new ScatteredBarChart(data02);
    chart02.chartWidth = 300;
    chart02.chartHeight = 300;
    chart02.posX = 500;
    chart02.posY = 400;
}


function draw() {
    background('#B8FFF9');
    chart01.updateValues()
    chart02.updateValues()
    chart01.render()
    chart02.render()
    
}

