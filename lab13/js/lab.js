// index.js - Lab 13 - Loops
// Author: Juliet Montelongo
// Date: 11/27/23


//variables
maxFactors = 4;
outputEl = document.getElementById("output")


//functions

function getFactorObj(){
    var factorObj = {};
    for (var factor=0; factor<maxFactors; factor++) {
       var numID = "num" + factor;
       var textID = "text" + factor;
       var numValue = document.getElementById(numID).value;
       var textValue = document.getElementById(textID).value;
        console.log(factor + ") num:", numValue, "text:", textValue)
        if (numValue && textValue) {
            factorObj[numValue] = textValue;
        }
    }
    return factorObj;
}


function outputToPage(str) {
    var newEl = document.createElement("p");
    newEl.innerHTML = str;
    outputEl.appendChild(newEl);
}



function fizzBuzzBoom(maxNum, factorObj) {
    for (var num = 0; num<maxNum; num++) {
        var outputStr = "";
        for (var factor in factorObj) {
            if (num % parseInt(factor) === 0) {
                outputStr += factorObj[factor];
            }
        }
        if (outputStr) {
            outputStr = " - " + outputStr + "!";
        }
        outputToPage(num.toString() + outputStr)
    }

}

