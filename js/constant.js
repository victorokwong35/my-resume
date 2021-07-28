// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDssHvncl22ngOCbdzdfhb3430bgpffmRY",
    authDomain: "resume-5b73d.firebaseapp.com",
    projectId: "resume-5b73d",
    storageBucket: "resume-5b73d.appspot.com",
    messagingSenderId: "263888275174",
    appId: "1:263888275174:web:9f9dd8f45b67c751e69d27"
  };
  
  // Initialize Firebase
var setupFirebase = function () {
    firebase.initializeApp(firebaseConfig);
    //Reference contact info collections
     contactInfo = firebase.database().ref("infos");
}

var contactInfo;
