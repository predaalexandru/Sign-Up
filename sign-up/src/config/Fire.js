import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBgD7WHdmPYMDAg14_noSsYoO2l2C24uI0",
    authDomain: "sign-up-a9bc9.firebaseapp.com",
    databaseURL: "https://sign-up-a9bc9.firebaseio.com",
    projectId: "sign-up-a9bc9",
    storageBucket: "",
    messagingSenderId: "693084603874",
    appId: "1:693084603874:web:5a15268719457cba"
};
const fire = firebase.initializeApp(config);
export default fire;