// index.js - Lab 16 - JSON & APIs
// Author: Juliet Montelongo
// Date: 12/8/23


$.ajax({
    url: "https://xkcd.com/info.0.json",
    data: {
        id: 123,
        api_key: "blahblahblah",
    },
    type: "GET",
    dataType : "json",
    success: function(data){
        $("#output").append('<div class="text"><p>' + " " + data.title + '</p></div>');
        $("#output").append("<img src=" + data.img + " width='75%'>");
        console.log(data);
    },
    error: function(jqXHR, textStatus, errorThrown) {
        console.log("Error", textStatus, errorThrown);
    }
})