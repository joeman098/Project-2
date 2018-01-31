$(document).ready(function() {

  console.log("I AM LINKED");
/*
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

  */

  $("#post-button").click(function(event){
    event.preventDefault();
    var newPost = {
      post: $("#post-input").val().trim(),
      author: ""
    }

    $.ajax("/api/newPost", {
      type: "POST",
      data: newPost
    }).then(function(data) {
      getAllPosts();
    });
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
    });
  };
  var loginCardDegree = 1;
  function loginRotateY() {
    var timeoutId;
    clearTimeout(timeoutId);
    document.getElementById("login-card").style.transform = "rotateY("+loginCardDegree+"deg)";

    loginCardDegree++;
    console.log(loginCardDegree);

    if(loginCardDegree <= 180) {
      timeoutId = setTimeout(loginRotateY, 2);
    }
    else {
      return;
    }
  }
  
  var profileCardDegree = 89;
  function createProfileRotateY() {
    var timeoutId;
    clearTimeout(timeoutId);
    document.getElementById("create-profile-card").style.transform = "rotateY(-"+profileCardDegree+"deg)";

    profileCardDegree--;
    console.log(profileCardDegree);

    if(profileCardDegree >= 0) {
      timeoutId = setTimeout(createProfileRotateY, 2);
    }
    else {
      return;
    }
  }

  var interests = [];

  $("#register").on("click", function() {
    loginRotateY();
    $("#main-page-title").fadeOut("slow");
    $("#login-card-links").fadeOut("slow");
    $("#login-card").fadeOut("slow");

    var createProfileCard = $("<div>");
    createProfileCard.addClass("card");
    createProfileCard.attr("id", "create-profile-card");

    var cardContent = $("<div>");
    cardContent.addClass("card-content white-text ");
    cardContent.attr("id", "profile-card-content");

    var mainRow = $('<div class="row">');

    var registerForm = $("<form>");
    registerForm.addClass("col s12");
    registerForm.attr("id", "register-form");
    registerForm.attr("name", "register-form");
    registerForm.attr("method", "post");
    registerForm.attr("action", "/signup");

    var formTitle = $("<h5>");
    formTitle.attr("id", "form-title");
    formTitle.text("ENTER YOUR PROFILE INFORMATION");

    var titleBreak = $("<br>");

    var rowOne = $('<div class="row">');

    var loginInfoTitle = $("<h6>");
    loginInfoTitle.attr("id", "loginInfoTitle");
    loginInfoTitle.text("LOGIN CREDENTIALS");

    var inputFieldOne = $("<div>");
    inputFieldOne.addClass("input-field col s12 m6");

    var displayNameInput = $("<input>");
    displayNameInput.addClass("validate");
    displayNameInput.attr("id", "displayName");
    displayNameInput.attr("name", "displayName");
    displayNameInput.attr("type", "text");

    var displayNameLabel = $("<label>");
    displayNameLabel.attr("for", "displayName");
    displayNameLabel.attr("id", "displayNameLabel");
    displayNameLabel.text("Display Name");

    var inputFieldTwo = $("<div>");
    inputFieldTwo.addClass("input-field col s12 m6");

    var userEmailInput = $("<input>");
    userEmailInput.addClass("validate");
    userEmailInput.attr("id", "userEmail");
    userEmailInput.attr("name", "userEmail");
    userEmailInput.attr("type", "email");

    var userEmailLabel = $("<label>");
    userEmailLabel.attr("for", "user-email");
    userEmailLabel.attr("id", "userEmailLabel");
    userEmailLabel.text("Email");

    inputFieldOne.append(displayNameInput, displayNameLabel);
    inputFieldTwo.append(userEmailInput, userEmailLabel);
    rowOne.append(loginInfoTitle, inputFieldOne, inputFieldTwo);

    var rowTwo = $('<div class="row">');

    var inputFieldThree = $("<div>");
    inputFieldThree.addClass("input-field col s12 m6");

    var passwordInput = $("<input>");
    passwordInput.attr("name", "password");
    passwordInput.attr("id", "passwordInput");
    passwordInput.attr("type", "password");
    passwordInput.addClass("validate");

    var passwordLabel = $("<label>");
    passwordLabel.attr("for", "password");
    passwordLabel.attr("id", "userPasswordLabel");
    passwordLabel.text("Password");

    var inputFieldFour = $("<div>");
    inputFieldFour.addClass("input-field col s12 m6");

    var passwordConfirmInput = $("<input>");
    passwordConfirmInput.attr("id", "passwordConfirmInput");
    passwordConfirmInput.attr("name", "confirmPassword");
    passwordConfirmInput.attr("type", "password");
    passwordConfirmInput.addClass("validate");

    var passwordConfirmLabel = $("<label>");
    passwordConfirmLabel.attr("for", "confirm-password");
    passwordConfirmLabel.attr("id", "userPasswordConfirmLabel");
    passwordConfirmLabel.text("Confirm Password");

    inputFieldThree.append(passwordInput, passwordLabel);
    inputFieldFour.append(passwordConfirmInput, passwordConfirmLabel);
    rowTwo.append(inputFieldThree, inputFieldFour);

    var rowThree = $('<div class="row">');

    var profilePicTitle = $("<h6>");
    profilePicTitle.attr("id", "profilePicTitle");
    profilePicTitle.text("PROFILE PICTURE");

    var inputFieldFive = $("<div>");
    inputFieldFive.addClass("input-field col s12");
    
    var imageLink = $("<input>");
    imageLink.addClass("validate");
    imageLink.attr("id", "image-link");
    imageLink.attr("name", "imageLink");
    imageLink.attr("type", "text");

    var imageLinkLabel = $("<label>");
    imageLinkLabel.attr("for", "image-link");
    imageLinkLabel.attr("id", "imageLinkLabel");
    imageLinkLabel.text("Paste a link to an image of yourself");

    inputFieldFive.append(imageLink, imageLinkLabel);
    rowThree.append(profilePicTitle, inputFieldFive);

    var rowFour = $('<div class="row">');

    var interestsTitle = $("<h6>");
    interestsTitle.attr("id", "interestsTitle");
    interestsTitle.text("TOPICS OF INTEREST");

    rowFour.append(interestsTitle);

    var rowFive = $('<div class="row">');

    var gamingCategoryTitleCol = $("<div>");
    gamingCategoryTitleCol.addClass("col s3");

    var gamingCategoryTitle = $("<h6>");
    gamingCategoryTitle.attr("id", "gamingCategoryTitle");
    gamingCategoryTitle.text("GAMING");

    gamingCategoryTitleCol.append(gamingCategoryTitle);

    var tvCategoryTitleCol = $("<div>");
    tvCategoryTitleCol.addClass("col s3");

    var tvCategoryTitle = $("<h6>");
    tvCategoryTitle.attr("id", "tvCategoryTitle");
    tvCategoryTitle.text("TV SHOWS");

    tvCategoryTitleCol.append(tvCategoryTitle);

    var movieCategoryTitleCol = $("<div>");
    movieCategoryTitleCol.addClass("col s3");

    var movieCategoryTitle = $("<h6>");
    movieCategoryTitle.attr("id", "movieCategoryTitle");
    movieCategoryTitle.text("MOVIES");

    movieCategoryTitleCol.append(movieCategoryTitle);

    var sportsCategoryTitleCol = $("<div>");
    sportsCategoryTitleCol.addClass("col s3");

    var sportsCategoryTitle = $("<h6>");
    sportsCategoryTitle.attr("id", "sportsCategoryTitle");
    sportsCategoryTitle.text("SPORTS");

    sportsCategoryTitleCol.append(sportsCategoryTitle);

    rowFive.append(gamingCategoryTitleCol, tvCategoryTitleCol, movieCategoryTitleCol, sportsCategoryTitleCol);

    var rowSix = $('<div class="row">');

    var gamingSwitchCol = $("<div>");
    gamingSwitchCol.addClass("col s3");

    var gamingSwitch = $("<div>");
    gamingSwitch.addClass("switch");
    var gamingLabel = $("<label>");
    var gamingInput = $("<input>");
    gamingInput.attr("type", "checkbox");
    gamingInput.attr("id", "gamingCheckbox");
    gamingInput.addClass("categoryCheckbox");
    var gamingSpan = $("<span>");
    gamingSpan.attr("class", "lever");

    gamingLabel.append("No", gamingInput, gamingSpan, "Yes")
    gamingSwitch.append(gamingLabel);
    gamingSwitchCol.append(gamingSwitch);

    var tvSwitchCol = $("<div>");
    tvSwitchCol.addClass("col s3");

    var tvSwitch = $("<div>");
    tvSwitch.addClass("switch");
    var tvLabel = $("<label>");
    var tvInput = $("<input>");
    tvInput.attr("type", "checkbox");
    tvInput.attr("id", "tvCheckbox");
    tvInput.addClass("categoryCheckbox");
    var tvSpan = $("<span>");
    tvSpan.attr("class", "lever");

    tvLabel.append("No", tvInput, tvSpan, "Yes")
    tvSwitch.append(tvLabel);
    tvSwitchCol.append(tvSwitch);

    var movieSwitchCol = $("<div>");
    movieSwitchCol.addClass("col s3");

    var movieSwitch = $("<div>");
    movieSwitch.addClass("switch");
    var movieLabel = $("<label>");
    var movieInput = $("<input>");
    movieInput.attr("type", "checkbox");
    movieInput.attr("id", "movieCheckbox");
    movieInput.addClass("categoryCheckbox");
    var movieSpan = $("<span>");
    movieSpan.attr("class", "lever");

    movieLabel.append("No", movieInput, movieSpan, "Yes")
    movieSwitch.append(movieLabel);
    movieSwitchCol.append(movieSwitch);

    var sportsSwitchCol = $("<div>");
    sportsSwitchCol.addClass("col s3");

    var sportsSwitch = $("<div>");
    sportsSwitch.addClass("switch");
    var sportsLabel = $("<label>");
    var sportsInput = $("<input>");
    sportsInput.attr("type", "checkbox");
    sportsInput.attr("id", "sportsCheckbox");
    sportsInput.addClass("categoryCheckbox");
    var sportsSpan = $("<span>");
    sportsSpan.attr("class", "lever");

    sportsLabel.append("No", sportsInput, sportsSpan, "Yes")
    sportsSwitch.append(sportsLabel);
    sportsSwitchCol.append(sportsSwitch);

    rowSix.append(gamingSwitchCol, tvSwitchCol, movieSwitchCol, sportsSwitchCol);

    var rowSeven = $('<div class="row">');

    var inputFieldSix = $("<div>");
    inputFieldSix.addClass("input-field col s12");

    var createProfileButton = $("<input>");
    createProfileButton.addClass("btn");
    createProfileButton.attr("type", "submit");
    createProfileButton.attr("value", "CREATE PROFILE");
    createProfileButton.attr("id", "create-profile-button");

    inputFieldSix.append(createProfileButton);
    rowSeven.append(inputFieldSix);


    registerForm.append(rowOne, rowTwo, rowThree, rowFour, rowFive, rowSix, rowSeven);
    mainRow.append(formTitle, titleBreak, registerForm);
    cardContent.append(mainRow);
    createProfileCard.append(cardContent);
    createProfileCard.hide();
    $("#card-col").append(createProfileCard);

    var turnTimeoutId = setTimeout(function() {
      createProfileRotateY();
    }, 450);

    var timeoutId = setTimeout(function(){
      createProfileCard.fadeIn("slow");
    }, 575);
/*
    $("#register-form").validate({
      rules: {
        displayName: {
          required: true,
          minlength: 2
        },
        userEmail: {
          required: true,
          email: true
        },
        password: {
          required: true,
          minlength: 6
        },
        confirmPassword: {
          required: true,
          minlength: 6,
          equalTo: "#password"
        },
        imageLink: {
          url: true
        },
        errorElement : "div",
        errorPlacement : function(error, element) {
          var placement = $(element).data('error');
          alert(placement);
          if (placement) {
            $(placement).append(error)
          } else {
            error.insertAfter(element);
          }
        }
      }
    });
    */
    

    $(function() {
      $(".categoryCheckbox").click(function() {
        var isGamingChecked = $("#gamingCheckbox").prop("checked");
        var isTvChecked = $("#tvCheckbox").prop("checked");
        var isMovieChecked = $("#movieCheckbox").prop("checked");
        var isSportsChecked = $("#sportsCheckbox").prop("checked");

        var gamingInterest = "Gaming";
        var tvInterest = "TV Shows";
        var movieInterest = "Movies";
        var sportsInterest = "Sports";

        if(isGamingChecked) {
          gamingCategoryTitle.css("color", "#71E5D9");
          for (var i = -1; i < interests.length; i++) {
            if(interests.indexOf(gamingInterest) === -1) {
              interests.push(gamingInterest);
              console.log(interests);
            }
          }
        }
        else {
          gamingCategoryTitle.css("color", "white");
          if(interests.indexOf(gamingInterest) !== -1) {
            var interestIndex = interests.indexOf(gamingInterest);
            interests.splice(interestIndex, 1);
            console.log(interests);
          }
        }

        if(isTvChecked) {
          tvCategoryTitle.css("color", "#71E5D9");
          for (var i = -1; i < interests.length; i++) {
            if(interests.indexOf(tvInterest) === -1) {
              interests.push(tvInterest);
              console.log(interests);
            }
          }
        }
        else {
          tvCategoryTitle.css("color", "white");
          if(interests.indexOf(tvInterest) !== -1) {
            var interestIndex = interests.indexOf(tvInterest);
            interests.splice(interestIndex, 1);
            console.log(interests);
          }
        }

        if(isMovieChecked) {
          movieCategoryTitle.css("color", "#71E5D9");
          for (var i = -1; i < interests.length; i++) {
            if(interests.indexOf(movieInterest) === -1) {
              interests.push(movieInterest);
              console.log(interests);
            }
          }        
        }
        else {
          movieCategoryTitle.css("color", "white");
          if(interests.indexOf(movieInterest) !== -1) {
            var interestIndex = interests.indexOf(movieInterest);
            interests.splice(interestIndex, 1);
            console.log(interests);
          }
        }

        if(isSportsChecked) {
          sportsCategoryTitle.css("color", "#71E5D9");
          for (var i = -1; i < interests.length; i++) {
            if(interests.indexOf(sportsInterest) === -1) {
              interests.push(sportsInterest);
              console.log(interests);
            }
          }   
        }
        else {
          sportsCategoryTitle.css("color", "white");
          if(interests.indexOf(sportsInterest) !== -1) {
            var interestIndex = interests.indexOf(sportsInterest);
            interests.splice(interestIndex, 1);
            console.log(interests);
          }
        }
      });
    });
  });

  $("#sign-in-button").on("click", function(event) {
    event.preventDefault();

    var userLogin = {
      email: $("#email").val().trim(),
      password: $("#password").val().trim()
    }

    console.log(userLogin);

    $.ajax("/signin", {
      type: "POST",
      data: userLogin
    }).then(function(data) {
      console.log("New User Created");
      console.log(data);
    });
  })

  $(document).on("click", "#create-profile-button", function(event){
    event.preventDefault();

    console.log(interests);
    
    var newUser = {
      displayName: $("#displayName").val().trim(),
      email: $("#userEmail").val().trim(),
      password: $("#passwordInput").val().trim(),
      image: $("#image-link").val().trim(),
      interests: interests
    }

    $.ajax("/signup", {
      type: "POST",
      data: newUser
    }).then(function(data) {
      console.log("New User Created");
      console.log(data);
    });
  })

});