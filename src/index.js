import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import * as firebase from 'firebase';

let config = {
  apiKey: "AIzaSyAhJGvcZr7s5d9dIXkvPayG4yf4eFc_Ei0",
  authDomain: "dog-hikes.firebaseapp.com",
  databaseURL: "https://dog-hikes.firebaseio.com",
  projectId: "dog-hikes",
  storageBucket: "dog-hikes.appspot.com",
  messagingSenderId: "738078416726"
};

firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
