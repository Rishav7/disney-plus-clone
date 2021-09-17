import firebase from 'firebase'

const firebaseConfig = {
	apiKey: 'AIzaSyA9BnlX96fMf7XiUVCFRsoQzG8DGERJkeY',
	authDomain: 'disneyplus-clone-a33d5.firebaseapp.com',
	projectId: 'disneyplus-clone-a33d5',
	storageBucket: 'disneyplus-clone-a33d5.appspot.com',
	messagingSenderId: '37918794208',
	appId: '1:37918794208:web:dbe9842dfe1dda522a4b85',
	measurementId: 'G-DRVLJKWRWG',
	/* 
	apiKey: 'AIzaSyCi_ToKK7-P9ru1rcUe6hZ1RAxxCGo3gOc',
	authDomain: 'disney-pus-clone.firebaseapp.com',
	databaseURL: 'https://disney-pus-clone-default-rtdb.firebaseio.com',
	projectId: 'disney-pus-clone',
	storageBucket: 'disney-pus-clone.appspot.com',
	messagingSenderId: '287825722326',
	appId: '1:287825722326:web:939c1799a96050d7938277',
	measurementId: 'G-6XM3M0PYTB', */
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()
const storage = firebase.storage()

export { auth, provider, storage }
export default db
