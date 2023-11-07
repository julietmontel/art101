// index.js - Lab 8 : Anon Functions & Callbacks
// Author: Juliet Montelongo
// Date: 11/6/2023


//variables
var numArray = [44, 25, 64, 37, 84, 29, 50]

console.log("my array:", numArray)


//fucntions

function add(a) {
    //adds 100 to the variable
    var results = a + 100
    return results;
}

console.log("Adding 100 to the array:", numArray.map(add))

//anon function
var multiplyResult = numArray.map(function(a) {
    //multiplies 100 to each value 
    var newResults = a * 100
    return newResults
})

//print result
console.log("Multiplying the array by 100:", multiplyResult)

//anon function
var divideResult = numArray.map(function(a) {
    //divides each value by 5
    var results = a / 5
    return results
})

//print result
console.log("Dividing the array by 5:", divideResult)
