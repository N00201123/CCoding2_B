clap(3,8); 

function clap(startNum,endNum) {
    let loopCount = endNum-startNum
    for(let i=0; i<=loopCount ;i++) {
       
        console.log("Hi" + (startNum+i))
    }

    return "Done";
}

function addMeUp(num01, num02) {
    let total = num01 + num02;
    console.log("all my work is done")
    return total;
}
