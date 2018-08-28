import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
    apiKey: "AIzaSyCnpJ3yPC7pMiPW2PHEgjzGQToMwO5HCMs",
    authDomain: "i-am-learning-ec3a8.firebaseapp.com",
    databaseURL: "https://i-am-learning-ec3a8.firebaseio.com",
    projectId: "i-am-learning-ec3a8",
    storageBucket: "i-am-learning-ec3a8.appspot.com",
    messagingSenderId: "139215370083"
};

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();

export { db, auth };