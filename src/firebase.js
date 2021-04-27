import firebase from 'firebase/app'
import 'firebase/auth'
const firebaseConfig = {
	apiKey: "AIzaSyDryZLHeSClenzQiWc5Py7mhNz9_BGo5oo",
	authDomain: "clone-e3a3e.firebaseapp.com",
	projectId: "clone-e3a3e",
	storageBucket: "clone-e3a3e.appspot.com",
	messagingSenderId: "628420702508",
	appId: "1:628420702508:web:d6493966c09f930aae7c89"
};

firebase.initializeApp(firebaseConfig)

export default firebase.auth()