
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAxHxJzuAdygymBaJWiwQrHKekwPAQ2gHE",
    authDomain: "outpatientai.firebaseapp.com",
    projectId: "outpatientai",
    storageBucket: "outpatientai.appspot.com",
    messagingSenderId: "436581701464",
    appId: "1:436581701464:web:43985e350c379f4c84372d",
    measurementId: "G-522VPT1D0C"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();

  function signUp(){
    var email = document.getElementById('email');
    var password = document.getElementById('password');

    firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    alert("You have been signed up!");
    // ...
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
        // After login redirect here 
        // window.location.replace("");
  
    })
    .catch((error) => {
      alert(error.code);
      var errorCode = error.code;
      var errorMessage = error.message;
    });

  }; 