// index.js - Lab 11 - JavaScript Events & Forms
// Author: Juliet Montelongo
// Date: 11/20/23

 
//Sorts the characters of a string in alphabetical order.
function sortString(inputString) {
    // We have to convert our string to an array and back again to sort it
    return inputString.split('').sort().join('');
  }


//button listener
 $("#submit").click(function() {
    //get value of input value
    const userName = $("#user-name").val();
    var userNameSorted = sortString(userName);
    $("#output").html('<div class"text"><p>' + "Your sorted input: " + userNameSorted + '</p></div>')
 });
