import firebase from 'firebase/app'
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
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage()

export { storage, firebase as default }
