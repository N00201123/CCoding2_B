
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

let data03 = [{season:"10/11", value:[1,6,4,2,3,5]}, 
{season:"11/12", value:[2,8,3,6,1,4]}, 
{season:"12/13", value:[1,7,4,3,2,5]}, 
{season:"13/14", value:[7,2,4,3,1,6]},
{season:"14/15", value:[4,6,3,1,2,5]},
{season:"15/16", value:[5,8,2,10,4,3]},
{season:"16/17", value:[6,4,5,1,3,2]},
{season:"17/18", value:[2,4,6,5,1,3]},
{season:"18/19", value:[6,2,5,3,1,4]},
{season:"19/20", value:[3,1,8,4,2,6]}];

//this is an array method that maps out a new array
//property of an objesct


function setup() {
    createCanvas(1000,1000);
    chart01 = new BarChart(data01);
    chart01.chartWidth = 300;
    chart01.chartHeight = 300;
    chart01.posX = 60;
    chart01.posY = 400;

    chart02 = new ScatteredChart(data02);
    chart02.chartWidth = 300;
    chart02.chartHeight = 300;
    chart02.posX = 500;
    chart02.posY = 400;

    chart03 = new LineChart(data03);
    chart03.chartWidth = 300;
    chart03.chartHeight = 300;
    chart03.posX = 60;
    chart03.posY = 825;
}


function draw() {
    background('#B8FFF9');
    chart01.updateValues()
    chart02.updateValues()
    chart03.updateValues()
    chart01.render()
    chart02.render()
    chart03.render()
    
}

