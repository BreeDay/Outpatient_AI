var session = {
    audio: true,
    video: false
};
var recordRTC = null;
navigator.getUserMedia(session, initializeRecorder, onError);

if (firebase.auth().currentUser !== null) 
        console.log("user id: " + firebase.auth().currentUser.uid);
        
firebase.auth().onAuthStateChanged((user) => {
   if (user) {
     // User logged in already or has just logged in.
     console.log(user.uid);
   } else {
     // User not logged in or has just logged out.
   }
});