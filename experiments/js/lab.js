
//event listener that works when user clicks button
$("#my-button").click(function(){
    //var name = prompt("Name please:");
    //replaced prompt with input.val()
    var name = $("#input").val()
    //inputs data into header
    $("#title").html("hello" + " " + name + "!");
});