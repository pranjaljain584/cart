import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase' ;
import 'firebase/firestore' ;

const firebaseConfig = {
  apiKey: "AIzaSyC9KzTpbzcpJ-LFHfJQyS2bB_R939mWmD4",
  authDomain: "cart-735ab.firebaseapp.com",
  databaseURL: "https://cart-735ab.firebaseio.com",
  projectId: "cart-735ab",
  storageBucket: "cart-735ab.appspot.com",
  messagingSenderId: "1008170865268",
  appId: "1:1008170865268:web:d296f35d2ff0acda5a7721"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
