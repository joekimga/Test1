    // START CODING BELOW!!

    // Initialize Firebase
   var config = {
    apiKey: "AIzaSyBrtH3V54Agw02jUBKMTr-F61xW3OLg3og",
    authDomain: "milestoneloginjs.firebaseapp.com",
    databaseURL: "https://milestoneloginjs.firebaseio.com",
    projectId: "milestoneloginjs",
    storageBucket: "milestoneloginjs.appspot.com",
    messagingSenderId: "638365950363"
  };
  firebase.initializeApp(config);

    // Create a variable to reference the database
    var database = firebase.database();

    // Initial Values
    var username = "";
    var password = "";
    //var rememberMe = "";
    //var cancel = "";
    //var forgetPwd = "";




    // Capture Button Click
    $("#add-user").on("click", function(event) {
      // Don't refresh the page!
      event.preventDefault();

      // YOUR TASK!!!
      // Code in the logic for storing and retrieving the most recent user.
      // Don't forget to provide initial data to your Firebase database.
      username = $("#username-input").val().trim();
      password = $("#password-input").val().trim();
      //comment = $("#comment-input").val().trim();

      database.ref().set({
        username: username,
        password: password,
        //comment: comment
      });

    });

    // Firebase watcher + initial loader HINT: .on("value")
    database.ref().on("value", function(snapshot) {

      var db = snapshot.val();


      // Change the HTML to reflect
      $("#username-display").html(db.username);
      $("#password-display").html(db.password);
      //$("#comment-display").html(db.comment);

      // Handle the errors
    }, function(errorObject) {
      console.log("Errors handled: " + errorObject.code);
    });

