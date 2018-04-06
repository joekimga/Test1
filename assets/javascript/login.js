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
      name = $("#name-input").val().trim();
      email = $("#email-input").val().trim();
      comment = $("#comment-input").val().trim();

      // Code for the push
      dataRef.ref().push({

        name: name,
        email: email,
        comment: comment,
        dateAdded: firebase.database.ServerValue.TIMESTAMP
      });
    };

    // Firebase watcher + initial loader HINT: This code behaves similarly to .on("value")
    dataRef.ref().on("child_added", function(childSnapshot) {

      // Log everything that's coming out of snapshot
      console.log(childSnapshot.val().name);
      console.log(childSnapshot.val().name);
      console.log(childSnapshot.val().email);
      console.log(childSnapshot.val().comment);
      console.log(childSnapshot.val().joinDate);

      // full list of items to the well
      $("#full-member-list").append("<div class='well'><span id='name'> " + childSnapshot.val().name +
        " </span><span id='email'> " + childSnapshot.val().email +
        " </span><span id='comment'> " + childSnapshot.val().comment + " </span></div>");

    // Handle the errors
    }, function(errorObject) {
      console.log("Errors handled: " + errorObject.code);
    });

    dataRef.ref().orderByChild("dateAdded").limitToLast(1).on("child_added", function(snapshot) {

      // Change the HTML to reflect
      $("#name-display").html(snapshot.val().name);
      $("#email-display").html(snapshot.val().email);
      $("#comment-display").html(snapshot.val().comment);
    });    



      // Change the HTML to reflect
     // $("#username-display").html(db.username);
     // $("#password-display").html(db.password);
      //$("#comment-display").html(db.comment);

      // Handle the errors
    //}, function(errorObject) {
     // console.log("Errors handled: " + errorObject.code);
    //});

