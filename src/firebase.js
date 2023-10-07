import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCOtFiFtTPSn918Zy0QgT6TYFosvgSKcKg",
    authDomain: "dragons-react-f4b95.firebaseapp.com",
    projectId: "dragons-react-f4b95",
    storageBucket: "dragons-react-f4b95.appspot.com",
    messagingSenderId: "602107445926",
    appId: "1:602107445926:web:601ae378d5126636556a67",
    measurementId: "G-D8T01PNXGS"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
