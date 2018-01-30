$(document).ready(function() {

  var commentBarShown = false;

  var commentBarContainer;

  function showCommentBar() {
    commentBarContainer = $("<div>");
    commentBarContainer.addClass("comment-bar-container");
    var commentBar = $('<input placeholder="Comment" name="comment" type="text" id="comment-input"/>');
    var postComment = $('<input class="btn" type="submit" value="POST" id="post-comment-button"/>');
    commentBarContainer.append(commentBar);
    commentBarContainer.append(postComment);
    var postContainer = $("#post"); 
    postContainer.append(commentBarContainer);  
  }

  function hideCommentBar() {
    commentBarContainer.hide();
  }
  
  $(document).on("click", "#reply", function() {

    if(commentBarShown === true) {
      hideCommentBar();
      commentBarShown = false;
    }
    else {
      showCommentBar();
      commentBarShown = true;
    }
  });

  $("#post-button").click(function(event){
    event.preventDefault();
    var newPost = {
      post: $("#post-input").val().trim();
      author: 
    }

    $.ajax("/api/newPost", {
      type: "POST",
      data: newPost
    }).then(function(data) {
      getAllPosts();
    }
  });

  function getAllPosts() {
    var feed = $("#feed");
    feed.empty();
    $.ajax("api/allPosts", {
      type: "GET"
    }).then(function(data) {
      for (var i = 0; i < data.length; i++) {
        var post = $("<div>");
        post.addClass("card-panel");
        post.attr("id", "post");
       
        var postContent = $("<div>");
        postContent.addClass("card-content");
        
        var postAuthor = $("<a>");
        var currentUser = 
        postAuthor.text = "@" + currentUser;
        postAuthor.attr("href", "/profile/" + currentUser);
        
        var says = $("<span>");
        says.attr("id", "says");
        says.text(" says:");
        
        var doubleBreak = $("<br><br>");
       
        var postBody = $("<span>");
        postBody.attr("id", "post-body");
        postBody.text(data[i].post);
        
        var replyButton = $("<button>");
        replyButton.attr("id", "reply");
        replyButton.attr("type", "submit");
        replyButton.text("REPLY");

        postContent.append(postAuthor);
        postContent.append(says);
        postContent.append(doubleBreak);
        postContent.append(postBody);
        postContent.append(doubleBreak);
        postContent.append(replyButton);
        
        post.append(postContent);
        feed.append(post);
      }
    })
  }

});