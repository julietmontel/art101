// index.js - Lab 9 : Libraries & jQuery
// Author: Juliet Montelongo
// Date: 11/10/2023


//buttons
$("#challenge").append("<button id='button-challenge'>Click me!</button>");
$("#button-challenge").click(function(){
    // now add (or subtract) the "special" class to the section
    $("#challenge").toggleClass("special");
});

$("#problem").append("<button id='button-problem'>NO, click me!</button>")
$("#button-problem").click(function(){
    // now add (or subtract) the "special" class to the section
    $("#problem").toggleClass("special-two");
});

$("#result").append("<button id='button-result'>Click me!!!</button>")
$("#button-result").click(function(){
    // now add (or subtract) the "special" class to the section
    $("#result").toggleClass("special-three");
});