

// Initialize Firebase
/*const firebaseConfig = {
  apiKey: "AIzaSyDL6ncjZQvIzJ6NGS1xCIfdgcjLgTzDFZs",
  authDomain: "dbprueba-f644d.firebaseapp.com",
  projectId: "dbprueba-f644d",
  storageBucket: "dbprueba-f644d.appspot.com",
  messagingSenderId: "384772027808",
  appId: "1:384772027808:web:b751c94a9e6afc1d8560c5"
}; */

//Initialize Firebase
firebase.initializeApp({
  apiKey: "AIzaSyDL6ncjZQvIzJ6NGS1xCIfdgcjLgTzDFZs",
  authDomain: "dbprueba-f644d.firebaseapp.com",
  projectId: "dbprueba-f644d",
  storageBucket: "dbprueba-f644d.appspot.com",
  messagingSenderId: "384772027808",
  appId: "1:384772027808:web:b751c94a9e6afc1d8560c5"
}
  
  );

// Initialize Cloud Firestore and get a reference to the service
const db = firebase.firestore();