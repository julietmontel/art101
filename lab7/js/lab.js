// index.js - Lab 7 : Functions
// Author: Juliet Montelongo
// Date: 11/3/2023

//functions

//this will sort user inputted text
function userNameSort(){
    //get the user name
    var userName = window.prompt("Please enter your UserName: ")
    console.log(userName)
    //make the string into an array
    var userNameSplit = userName.split("")
    console.log(userNameSplit)
    //sort the array
    var userNameSort = userNameSplit.sort()
    console.log(userNameSort)
    //join the array back into a string
    var userNameJoin = userNameSort.join("")
    console.log(userNameJoin)
    //return result
    return userNameJoin
}


//output
document.writeln("Here is your sorted username!: ",
    userNameSort(), "</br>");