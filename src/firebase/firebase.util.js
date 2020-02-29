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

  export const createUserProfileDocument = async (userAuth, additionalData  ) => {
    console.log('creating User ' );
    if (!userAuth) return;
    const userRef = firestore.doc (`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    if (!snapShot.exists) {
      const {displayName, email} = userAuth;
      const createdAt = new Date();
      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      } catch(error) {
        console.log('Error creating  user', error.message);
      }
    }
    return userRef;
  }

  firebase.initializeApp(config);
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  export default firebase;