import firebase from 'firebase';

import 'firebase/auth';
import 'firebase/storage';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyB-13u1RgI_Rsy_rPKkUg1W8qZpRG3HvXc",
  authDomain: "cloudchat-5cdde.firebaseapp.com",
  databaseURL: "https://cloudchat-5cdde-default-rtdb.firebaseio.com",
  projectId: "cloudchat-5cdde",
  storageBucket: "cloudchat-5cdde.appspot.com",
  messagingSenderId: "814512207045",
  appId: "1:814512207045:web:ea80dc0dc2f94f15ccacac",
  measurementId: "G-QNLH4QLWGP"
};

  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default firebase;