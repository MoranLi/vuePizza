import firebase from 'firebase'

var config = {
  apiKey: "AIzaSyDe1nszGHWSpl6cWFO4I4K534wKGRONpWk",
  authDomain: "test-project-a20c2.firebaseapp.com",
  databaseURL: "https://test-project-a20c2.firebaseio.com",
  projectId: "test-project-a20c2",
  storageBucket: "test-project-a20c2.appspot.com",
  messagingSenderId: "848727857880"
};
const firebaseApp = firebase.initializeApp(config);
const db = firebaseApp.database();
export const dbMenuRef = db.ref('menu');