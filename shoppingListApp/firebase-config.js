  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyCIZt2nDusz1j3_zFuHleKHZN6ztnNA7hU",
    authDomain: "shopping-list-17700.firebaseapp.com",
    databaseURL: "https://shopping-list-17700-default-rtdb.firebaseio.com",
    projectId: "shopping-list-17700",
    storageBucket: "shopping-list-17700.appspot.com",
    messagingSenderId: "927746454606",
    appId: "1:927746454606:web:4c7d4053f9dd3c87fb7f1f",
    measurementId: "G-BXDJWZJD1N"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  
  var db = firebase.firestore();
