

  $(document).ready(function() {



    var feed;
    var generalChannel = "https://discordapp.com/api/webhooks/407562838324936719/WlmvjQV11V_JhMK5wQhbibIWcw6EDjbwVehzCc-UREmpJnQZwzy8iLELjOsouTNDDrx3";
    var gamingChannel = "https://discordapp.com/api/webhooks/408282323222790146/JuT5qAW9607mvfqwyiVBauObKG7Mq6_3wH3zYZPmuPsepr0vnnMQmbkFWrdsYnqLWxj2";
    var tvChannel ="https://discordapp.com/api/webhooks/408277081642893332/Q7EwsWNZJgsdFwXIvvqM57d0pLPQwIOx_tcbogpq3er5hJRCDVs6ZT7d3xNwpzkeFCmR";
    var sportsChannel  = {
        url:"https://discordapp.com/api/webhooks/408290833171742720/ePL88vKgyqiGkgDNWcQwBPGHOpEFFoJmpfr1RRR88sTZhRGkfJ7QGrUUDeEEEW3NYCrZ",
        name: "sports"};

    function getFeed(){
        $.get("/api/feed", function(data){
            console.log(data);
            feed = data;
                initializeRows();
                })

    }
    function feedSubmit(event){
        var newPost ={
            channel: sportsChannel.name,//channel selection name
            user: "God",//userInput.val().trim(),
            message: "testing this sh!t3!!"//msgInput.val().trim()
        }
        postFeed(newPost);
    }
    function postFeed(data){
        $.ajax({
            method:"POST",
            url: "/api/feed",
            data:data

        }).then(console.log(data));

        
        
        var newerData ={
            content: data.message,
            username:data.user
        };

        var newData = JSON.stringify(newerData);
        console.log(newData + "Test"); 
        $.ajax({
            type: "POST",
            url:sportsChannel.url ,//channel selection
            data: newData,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function(msg) {
            console.log('In Ajax');
            }
        });
    }




    function initializeRows() {
        
        console.log(feed);
        var postsToAdd = [];
        for (var i = 0; i < feed.length; i++) {
        postsToAdd.push(feed[i]);
        console.log(feed[i]);
        }
        
    }

    getFeed();
    feedSubmit();

      });
