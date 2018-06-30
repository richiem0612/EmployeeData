  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBuCEzTY05UQrsBFjSXuz76WcIOwqqQ54Q",
    authDomain: "employees-a8bfb.firebaseapp.com",
    databaseURL: "https://employees-a8bfb.firebaseio.com",
    projectId: "employees-a8bfb",
    storageBucket: "",
    messagingSenderId: "1062590078336"
  };
  firebase.initializeApp(config);

  var database =  firebase.database();

  var name = "";
  var role = "";
  var date = "";
  var monthly = "";

  $("#add-employee").on("click", function(){
      event.preventDefault();

      name = $("#employee-name").val().trim();
      role = $("#role").val().trim();
      date = $("#start-date").val().trim();
      monthly = $("#monthly-rate").val().trim();

      database.ref().push({
          name: name,
          role: role,
          date: date,
          monthly: monthly,
          dateAdded: firebase.database.ServerValue.TIMESTAMP
      });

     database.ref().on("child_added", function(childSnapshot){
         console.log(childSnapshot.val().name);
         console.log(childSnapshot.val().role);
         console.log(childSnapshot.val().date);
         console.log(childSnapshot.val().monthly);
     });

    }, function (errorObject) {
        console.log("Errors handled: " + errorObject.code);
    });