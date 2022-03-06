class ScatteredChart{
    constructor(_data){
        this.data = _data;

        this.chartHeight = 300;
        this.chartWidth = 300;
        this.spacing = 10;
        this.legendSpace = 40;
        this.margin = 20;
        this.numTicks = 10;
        this.posX = 100;
        this.posY = 400;
        this.tickIncrements;
        this.maxValue;
        this.numPlaces = 0;
        this.tickSpacing;
        this.barWidth;
        this.availableWidth;
        this.title = "Premier League Big 6 GF/GA"
        this.horizontalTitle = "Goal Conceded"
        this.verticalTitle = "Goal Scored"

        this.showValues = false;
        this.showLabels = true;
        this.rotateLabels = true;
        this.showLegend = true;

        this.colors = [color('#F43910'), color('#C90808'), color('#F3AEAE'), color('#0D2968'), color('#96B2F1'), color('#FFFFFF')];

        this.updateValues();
        this.calculateMaxValue();
    }

     updateValues(){
         this.tickSpacing = this.chartHeight / this.numTicks; //space between ticks on  the left 
    //     this.availableWidth = this.chartWidth - (this.margin * 2) - (this.spacing * (this.data.length - 1)); //available space for bars
    //     this.barWidth = this.availableWidth / this.data.length; //bar width
     }

    calculateMaxValue(){
        let listValues = this.data.map(function(x) {return x.goalScored});
        this.maxValue = max(listValues);
        this.tickIncrements = (this.maxValue / this.numTicks);
    }
    
    


    render(){
    push()
    translate(this.posX, this.posY);
    this.drawAxis();
    this.drawTicks();
    this.drawPoints();
    this.drawTitle();
    this.drawhorizontalTitle();
    this.drawverticalTitle();
    pop()
    }


    scaledData(num){ //this function accepts a parameter(number) and scales it using max and chartHeight
        return map(num, 0, this.maxValue, 0, this.chartHeight);
    }

    scaledData2(num){ //this function accepts a parameter(number) and scales it using max and chartHeight
        return map(num, 0, this.maxValue, 0, this.chartHeight);
    }

    drawAxis(){
        stroke(0);
        strokeWeight(2);
        line(0, 0, 0, -this.chartHeight); //y
        line(0, 0, this.chartWidth, 0); //x
        line(0,0,this.chartWidth,-this.chartHeight); //diagonal
    }
    
    drawTicks(){
        for(let i=0; i<=this.numTicks; i++){
            //ticks
            stroke(0);
            strokeWeight(1);
            line(this.tickSpacing * i, 0, this.tickSpacing * i, 15);
            line(0,this.tickSpacing * -i, -15, this.tickSpacing * -i);
    
            //numbers (text)
            fill(0);
            noStroke();
            textSize(11);
            textAlign(RIGHT, CENTER);
            text((i * this.tickIncrements).toFixed(this.numPlaces), this.tickSpacing *i, 15);

            fill(0);
            noStroke();
            textSize(11);
            textAlign(RIGHT, CENTER);
            text((i * this.tickIncrements).toFixed(this.numPlaces),-15, this.tickSpacing *-i);
        }
    }
    
    
    drawPoints(){
        push();
        translate(0, 0);
        for(let i=0; i<this.data.length; i++){
            let colorNumber = i % 6;
            //bars
            fill(this.colors[colorNumber]);
            noStroke();
            ellipse(this.scaledData(this.data[i].goalConceded),this.scaledData2(-this.data[i].goalScored),10,10);
    
            //numbers (text)
            if(this.showValues){
                noStroke();
                fill(255);
                textSize(16);
                textAlign(LEFT, CENTER);
                text(this.data[i].total, this.scaledData(this.data[i].total), ((this.barWidth + this.spacing) * -i) + this.barWidth / -2);
            }
    
            //text
            if(this.showLabels){
                if(this.rotateLabels){
                    push();
                    noStroke();
                    fill(this.colors[colorNumber]);
                    textSize(14);
                    textAlign(CENTER, CENTER);
                    translate(0,-this.margin+5);
                    text(this.data[i].name, this.scaledData(this.data[i].goalConceded), this.scaledData2(-this.data[i].goalScored));
                    pop();
                }    else{
                    noStroke();
                    fill(255);
                    textSize(14);
                    textAlign(CENTER, BOTTOM);
                    text(this.data[i].name, ((this.barWidth + this.spacing) * i) + this.barWidth / 2, 20);
                }
                
            }

            if(this.showLegend){
                push();
                translate(0, this.margin);
                
                fill(this.colors[colorNumber]);
                rect(this.chartWidth+20, -this.legendSpace*i -5, 10, 10);
                
                fill(0);
                textSize();
                textAlign(LEFT, CENTER);
                text(this.data[i].name,this.chartWidth+40, this.legendSpace*-i);
                pop();
            }
        }
        pop();
    }

    drawTitle(){
        push()
        fill(127,0,0);
        textSize(16);
        textAlign(CENTER, TOP);
        translate(this.chartWidth/2, -this.chartHeight-35);
        text(this.title, 0,0);
        pop()
    }

    drawhorizontalTitle(){
        push()
        fill(127,0,0);
        textSize(14)
        textAlign(CENTER,BOTTOM);
        translate(this.chartWidth/2,80);
        text(this.horizontalTitle, 0,0);
        pop()
    }

    drawverticalTitle(){
        push()
        fill(127,0,0);
        textSize(14)
        textAlign(CENTER,BOTTOM);
        translate(-35, -this.chartHeight/2);
        rotate(PI/-2);
        text(this.verticalTitle, 0,0);
        pop()
    }
}