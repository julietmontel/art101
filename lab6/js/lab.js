// index.js - Lab 6 Arrays & Objects
// Author: Juliet Montelongo
// Date: 10/30/2023


// array that contains my different modes of transportation
var myTransport = ['legs',' loop bus',' metro bus',' Honda Pilot']

//an object that contains the information about my main ride (reference to lab 5)
var myMainRide = {
    make: "Honda",
    model: "Pilot",
    color: "Blue",
    year: 2006,
    age: function() {
      return 2023 - this.year;
    }
}

//output
document.writeln("Getting around: " + myTransport + "</br>");
document.writeln("My Main Ride: <pre>", 
    JSON.stringify(myMainRide, null, '\t'), "</pre>");