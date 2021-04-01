import firebase from "firebase/app"
import "firebase/auth";




 
 // Your web app's Firebase configuration
 const firebaseConfig = {
    apiKey: "AIzaSyDBx_xM57UqBFz1bknIxVH-kpUIsccSs4U",
    authDomain: "online-shopping-tdm.firebaseapp.com",
    projectId: "online-shopping-tdm",
    storageBucket: "online-shopping-tdm.appspot.com",
    messagingSenderId: "401730392836",
    appId: "1:401730392836:web:82608a443953abfba8b651"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  export const auth = firebase.auth();

  export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
 
  