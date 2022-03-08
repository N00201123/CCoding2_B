class LineChart{
    constructor(_data){
        this.data = _data;

        this.chartHeight = 200;
        this.chartWidth = 200;
        this.spacing = 10;
        this.margin = 20;
        this.numTicks = 9;
        this.posX = 100;
        this.posY = 400;
        this.tickIncrements;
        this.maxValue;
        this.numPlaces = 0;
        this.tickSpacing;
        this.barWidth;
        this.availableWidth;
        this.title = "Positioning"
        this.horizontalTitle = "Season"
        this.verticalTitle = "Points"

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
        //this.availableWidth = this.chartWidth - (this.margin * 2) - (this.spacing * (this.data.length - 1)); //available space for bars
        //this.barWidth = this.availableWidth / this.data.length; //bar width
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
            strokeWeight(1);
            line(this.tickSpacing * i, 0, this.tickSpacing * i, 15);
            line(0,this.tickSpacing * -i, -15, this.tickSpacing * -i);
            
    
            //numbers (text)
            fill(0);
            noStroke();
            textSize(11);
            textFont(fontRegular);
            textAlign(RIGHT, CENTER);
            text((i * this.tickIncrements).toFixed(this.numPlaces), -15, this.tickSpacing * -i);

            fill(0);
            noStroke();
            textSize(11);
            textAlign(RIGHT, CENTER);
            text(this.data[i].season, this.tickSpacing * i, 15);
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
        for(let i=0; i<this.data.length; i++){
            beginShape();
            for (let j=0; j<this.data[i].values.length; j++) {
                let colorNumber = i % 6;
                noFill();
                stroke(this.colors[colorNumber]);
                strokeWeight(3);
                vertex(j * 60, -this.scaledData(this.data[i].values[j]));
            }
            endShape();

        for(let i=0; i<this.data.length; i++){
            for (let j=0; j<this.data[i].values.length; j++) {

                let colorNumber = i % 6;
                fill(this.colors[colorNumber]);
                stroke(255);
                strokeWeight(0);
                ellipse(j*60, -this.scaledData(this.data[i].values[j]),8,8);
                }
            }
                
        
            //numbers (text)
            if(this.showValues){
                noStroke();
                fill(0);
                textSize(16);
                textFont(fontRegular);
                textAlign(CENTER, BOTTOM);
                text(this.data[i].season, ((this.barWidth + this.spacing) * i) + this.barWidth / 2, this.scaledData(-this.data[i].season));
            }
    
            //text
            if(this.showLabels){
                if(this.rotateLabels){
                    push();
                    noStroke();
                    fill(0);
                    textSize(14);
                    textAlign(LEFT, CENTER);
    
                    translate(((this.barWidth + this.spacing) * i) + this.barWidth / 2, 10);
                    rotate(PI / 4);
                    text(this.data[i].name, 0, 0);
                    pop();
                }    else{
                    noStroke();
                    fill(0);
                    textSize(14);
                    textAlign(CENTER, BOTTOM);
                    text(this.data[i].name, ((this.barWidth + this.spacing) * i) + this.barWidth / 2, 20);
                }
                
            }

            
        }
        pop();
    }

    drawTitle(){
        push()
        fill(127,0,0);
        textSize(16);
        textAlign(CENTER, TOP);
        translate(this.chartWidth/2, -this.chartHeight-30);
        text(this.title, 0,0);
        pop()
    }

    drawhorizontalTitle(){
        push()
        fill(127,0,0);
        textSize(14);
        textFont(fontTitle);
        textAlign(CENTER,BOTTOM);
        translate(this.chartWidth/2,80);
        text(this.horizontalTitle, 0,0);
        pop()
    }

    drawverticalTitle(){
        push()
        fill(127,0,0);
        textSize(14);
        textFont(fontTitle);
        textAlign(CENTER,BOTTOM);
        translate(-35, -this.chartHeight/2);
        rotate(PI/-2);
        text(this.verticalTitle, 0,0);
        pop()
    }
}