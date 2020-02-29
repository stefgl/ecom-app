import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {  apiKey: "AIzaSyCTD7nDZctveqymv0E2ho1hywqkPdkaivE",
    authDomain: "udemy-test-db.firebaseapp.com",
    databaseURL: "https://udemy-test-db.firebaseio.com",
    projectId: "udemy-test-db",
    storageBucket: "udemy-test-db.appspot.com",
    messagingSenderId: "293014410287",
    appId: "1:293014410287:web:6f2347eec7f5ed973b22da",
    measurementId: "G-LP3RX6HBEL"
  };

  firebase.initializeApp(config);
  export const auth = firebase.auth();
  export const firstore = firebase.firestore();
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  export default firebase;