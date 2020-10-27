import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/storage'

// Web App's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyB8FDogSMqpU1Tlgac8TTUM7WTFu8pZauU",
  authDomain: "instagram-react-33e3f.firebaseapp.com",
  databaseURL: "https://instagram-react-33e3f.firebaseio.com",
  projectId: "instagram-react-33e3f",
  storageBucket: "instagram-react-33e3f.appspot.com",
  messagingSenderId: "177759254873",
  appId: "1:177759254873:web:99038b71e40565bfc4b448"
};

// class Firebase {
//   constructor() {
//     app.initializeApp(firebaseConfig)

//     this.auth = app.auth()
//     this.storage = app.storage()
//     this.database = app.database()
//   }

//   // Auth API
//   doCreateUserWithEmailAndPassword = (email, password) => this.auth.createUserWithEmailAndPassword(email, password)
//   doSignInWithEmailAndPassword = (email, password) => this.auth.signInWithEmailAndPassword(email, password)
//   doSignOut = () => this.auth.signOut()
//   doPasswordReset = email => this.auth.sendPasswordResetEmail(email)
//   doPasswordUpdate = password => this.auth.currentUser.updatePassword(password)

//   // User API
//   user = userId => this.database.ref(`users/${userId}`)
//   users = () => this.database.ref('users')
// }

// export default Firebase

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth()
const database = firebase.database()
const storage = firebase.storage()

export { auth, database, storage, firebase as default }
