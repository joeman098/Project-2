$(document).ready(function() {
  
// var $ = require('jquery');
// var http    = require('http');

// var data = {
//     content: "test from Ajax",
//     username: "Dr Lost Respect"
// };

// var newData = JSON.stringify(data); 

// function postMessage(){

//     $.ajax({
//         type: "POST",
//         url: "https://discordapp.com/api/webhooks/407562838324936719/WlmvjQV11V_JhMK5wQhbibIWcw6EDjbwVehzCc-UREmpJnQZwzy8iLELjOsouTNDDrx3",
//         data: newData,
//         contentType: "application/json; charset=utf-8",
//         dataType: "json",
//         success: function(msg) {
//         alert('In Ajax');
//         }
//        });

// }

// postMessage();

var blogContainer = $("#blog-container");
var feed;

  function getFeed(){
      $.get("/api/feed", function(data){
          console.log(data);
          feed = data;
        
          if (!feed || !feed.length) {
            displayEmpty();
          }
          else {
            initializeRows();
          }
      })

  }


function initializeRows() {
    blogContainer.empty();
    console.log(feed);
    var postsToAdd = [];
    for (var i = 0; i < feed.length; i++) {
      postsToAdd.push(feed[i]);
      console.log(feed[i]);
    }
    
  }

getFeed();




});