class StackedBarChart{
    constructor(_data){
        this.data = _data;

        this.chartHeight = 200;
        this.chartWidth = 200;
        this.spacing = 10;
        this.margin = 20;
        this.numTicks = 11;
        this.legendSpace = 40;
        this.posX = 100;
        this.posY = 400;
        this.tickIncrements;
        this.maxValue;
        this.numPlaces = 0;
        this.tickSpacing;
        this.barWidth;
        this.availableWidth;
        this.title = "Premier League Big 6 Most Trophies"
        this.horizontalTitle = "Teams"
        this.verticalTitle = "Trophies"
        this.showLegend = true;

        this.showValues = true;
        this.showLabels = true;
        this.rotateLabels = true;

        this.colors = [color('#FFD32D'), color('#C90808'), color('#34BE82'), color('#533E85')];

        this.updateValues();
        this.calculateMaxValue();
    }

    updateValues(){
        this.tickSpacing = this.chartHeight / this.numTicks; //space between ticks on  the left 
        this.availableWidth = this.chartWidth - (this.margin * 2) - (this.spacing * (this.data.length - 1)); //available space for bars
        this.barWidth = this.availableWidth / this.data.length; //bar width
    }

    calculateMaxValue(){
        let listValues = this.data.map(function(x) {return x.total});
        this.maxValue = max(listValues);
        this.tickIncrements = (this.maxValue / this.numTicks);
    }
    


    render(){
    push()
    translate(this.posX, this.posY);
    this.drawAxis();
    this.drawTicks();
    this.drawHorizontalTicks();
    this.drawRects();
    this.drawTitle();
    this.drawhorizontalTitle();
    this.drawverticalTitle();
    pop()
    }


    scaledData(num){ //this function accepts a parameter(number) and scales it using max and chartHeight
        return map(num, 0, this.maxValue, 0, this.chartHeight);
    }
    
    drawAxis(){
        stroke(0);
        strokeWeight(2);
        line(0, 0, 0, -this.chartHeight); //y
        line(0, 0, this.chartWidth, 0); //x
    }
    
    drawTicks(){
        for(let i=0; i<=this.numTicks; i++){
            //ticks
            stroke(0);
            strokeWeight(0.5);
            line(0, this.tickSpacing * -i, -10, this.tickSpacing * -i);
    
            //numbers (text)
            fill(0);
            noStroke();
            textSize(11);
            textFont(fontRegular);
            textAlign(RIGHT, CENTER);
            text((i * this.tickIncrements).toFixed(this.numPlaces), -15, this.tickSpacing * -i);
        }
    }
    
    drawHorizontalTicks(){
            for(let i=0; i<=this.numTicks; i++){
                //horizontal lines
                stroke(20);
                strokeWeight(0.5);
                line(0, this.tickSpacing * -i, this.chartWidth, this.tickSpacing * -i);
            }
    }
    
    drawRects(){
        push();
        translate(this.margin, 0);
        for(let i=0; i<this.data.length; i++){
            push();
            for(let j=0; j<this.data[i].values.length; j++) {
            let colorNumber = j % 4;
            //bars
            fill(this.colors[colorNumber]);
            noStroke();
            rect((this.barWidth + this.spacing) * i, 0, this.barWidth, this.scaledData(-this.data[i].values[j]));
            translate(0, this.scaledData(-this.data[i].values[j]));
            }
            
            pop();
            //numbers (text)
            if(this.showValues){
                noStroke();
                fill(0);
                textSize(16);
                textFont(fontRegular);
                textAlign(CENTER, BOTTOM);
                text(this.data[i].total, ((this.barWidth + this.spacing) * i) + this.barWidth / 2, this.scaledData(-this.data[i].total));
            }
    
            //text
            if(this.showLabels){
                if(this.rotateLabels){
                    push();
                    noStroke();
                    fill(0);
                    textSize(14);
                    textFont(fontTitle);
                    textAlign(LEFT, CENTER);
    
                    translate(((this.barWidth + this.spacing) * i) + this.barWidth / 2, 10);
                    rotate(PI / 4);
                    text(this.data[i].name, 0, 0);
                    pop();
                }    else{
                    noStroke();
                    fill(0);
                    textSize(14);
                    textFont(fontTitle);
                    textAlign(CENTER, BOTTOM);
                    text(this.data[i].name, ((this.barWidth + this.spacing) * i) + this.barWidth / 2, 20);
                }
                
            }

            if(this.showLegend){
                push();
                translate(0, 0);
                //EPL
                fill(255, 211, 45);
                noStroke();
                rect(this.chartWidth+20, -this.legendSpace*0 -5, 10, 10);
                
                fill(0);
                noStroke();
                textSize(12);
                textFont(fontRegular);
                textAlign(LEFT, CENTER);
                text("EPL",this.chartWidth+40, this.legendSpace*-0);
                //FA CUP
                fill(201, 8, 8);
                rect(this.chartWidth+20, -this.legendSpace*1 -5, 10, 10);

                fill(0);
                noStroke();
                textSize(12);
                textFont(fontRegular);
                textAlign(LEFT, CENTER);
                text("FA Cup",this.chartWidth+40, this.legendSpace*-1);
                //EFL CUP
                fill(52, 190, 130);
                rect(this.chartWidth+20, -this.legendSpace*2 -5, 10, 10);

                fill(0);
                noStroke();
                textSize(12);
                textFont(fontRegular);
                textAlign(LEFT, CENTER);
                text("EFL Cup",this.chartWidth+40, this.legendSpace*-2);
                //European Trophies
                fill(83, 62, 133);
                rect(this.chartWidth+20, -this.legendSpace*3 -5, 10, 10);

                fill(0);
                textSize(12);
                textFont(fontRegular);
                textAlign(LEFT, CENTER);
                text("European Trophies",this.chartWidth+40, this.legendSpace*-3);
                pop();
            }
        }
        pop();
    }

    drawTitle(){
        push()
        fill(127,0,0);
        textSize(16);
        textFont(fontTitle);
        textAlign(CENTER, TOP);
        translate(this.chartWidth/2, -this.chartHeight-32);
        text(this.title, 0,0);
        pop()
    }

    drawhorizontalTitle(){
        push()
        fill(127,0,0);
        textSize(14)
        textFont(fontTitle);
        textAlign(CENTER,BOTTOM);
        translate(this.chartWidth/2,80);
        text(this.horizontalTitle, 0,0);
        pop()
    }

    drawverticalTitle(){
        push()
        fill(127,0,0);
        textSize(14)
        textFont(fontTitle);
        textAlign(CENTER,BOTTOM);
        translate(-35, -this.chartHeight/2);
        rotate(PI/-2);
        text(this.verticalTitle, 0,0);
        pop()
    }
}