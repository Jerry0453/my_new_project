import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyDY0lPLRedc6whExQZHKEcaR4HoBsdQhuM",
    authDomain: "login-d92c5.firebaseapp.com",
    projectId: "login-d92c5",
    storageBucket: "login-d92c5.appspot.com",
    messagingSenderId: "931648412130",
    appId: "1:931648412130:web:fdb15aa3fc0591183401bb"
  };

  const fireBase = firebase.initializeApp(firebaseConfig);

  export default fireBase;