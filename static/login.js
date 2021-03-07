
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDJl_pbfefFTrRfu7cHMuHuakbgHncy_xQ",
    authDomain: "tartan-306800.firebaseapp.com",
    projectId: "tartan-306800",
    storageBucket: "tartan-306800.appspot.com",
    messagingSenderId: "24059805871",
    appId: "1:24059805871:web:2f6543a18cd49cf488145a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // Your web app's Firebase configuration
  // var firebaseConfig = {
  //   apiKey: "AIzaSyAxHxJzuAdygymBaJWiwQrHKekwPAQ2gHE",
  //   authDomain: "outpatientai.firebaseapp.com",
  //   projectId: "outpatientai",
  //   storageBucket: "outpatientai.  appspot.com",
  //   messagingSenderId: "436581701464",
  //   appId: "1:436581701464:web:43985e350c379f4c84372d",
  //   measurementId: "G-522VPT1D0C"
  // };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();

  function signUp(){
    var name = document.getElementById('name').value;
    var email = document.getElementById('email');
    var password = document.getElementById('password');

    firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    alert("Registration successful! Welcome, " + name + "😊");
    $.get("/patient", function(name) {
      alert("Posting name: " + name);
    })
    window.location.assign("/patient");
    // $.post("/patient", {patientName: name}, () => {
    //   console.log("post success");
    // })
  })
  .catch((error) => {
    alert(error.code);
    var errorCode = error.code;
    var errorMessage = error.message;
  });


  }

  function signIn(){
    var email = document.getElementById('email');
    var password = document.getElementById('password');


    var authFlag = true;


    firebase.auth().signInWithEmailAndPassword(email.value, password.value)
          .then((userCredential) => {
      
        var user = userCredential.user;
        alert("Sign-in successful! Welcome 😊");
        window.location.assign("/patient");
        // window.location.replace("");
  
    })
    .catch((error) => {
      alert(error.code);
      var errorCode = error.code;
      var errorMessage = error.message;
    });

  }; 