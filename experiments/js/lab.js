
//event listener that works when user clicks button
$("#my-button").click(function(){
    var name = prompt("Name please:");
    //pop up askes for name
    $("#title").html("hello" + " " + name + "!");
    //changes header to inputted name
});

