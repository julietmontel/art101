// index.js - Lab 15 - AJAX
// Author: Juliet Montelongo
// Date: 12/4/23



$("#activate").click(function(){
    $.ajax({
        url: "https://yesno.wtf/api",
        data: {
            id: 123,
            api_key: "blahblahblah",
         },
        type: "GET",
        dataType : "json",
        success: function(data){
            $("#output").append('<div class="text"><p>' + " " + data.answer + '</p></div>');
            console.log(data);
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log("Error", textStatus, errorThrown);
        }
    });
    
 });
