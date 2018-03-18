import * as Firebase from 'firebase';
import {store} from '../store/store-module';
import {
  firebaseConnected,
  firebaseDisonnected,
  firebaseUserAuth,
  firebaseUserUnAuth
} from './firebase-actions';

export const firebaseApp = Firebase.initializeApp({
  apiKey: 'AIzaSyB4CSUOnrOogteHnL1BcnZSOlrexhsw4yk',
  authDomain: 'lvl-shoper.firebaseapp.com',
  databaseURL: 'https://lvl-shoper.firebaseio.com',
  projectId: 'lvl-shoper',
  storageBucket: 'lvl-shoper.appspot.com',
  messagingSenderId: '263939525766'
});
export const firebaseDb: firebase.database.Database = firebaseApp.database();
export const Goods: firebase.database.Reference = firebaseDb.ref('goods');

Firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // User is signed in.
    store.dispatch(firebaseUserAuth(user))
  } else {
    // User is signed out.
    store.dispatch(firebaseUserUnAuth())
  }
});

export const dbConnectedRef = firebaseDb.ref('.info/connected');

dbConnectedRef.on('value', (snapshot) => {
  const isConnected: boolean = snapshot.val();

  store.dispatch(isConnected ? firebaseConnected() : firebaseDisonnected());
}, this);


// Firebase.auth().signInWithEmailAndPassword('lvlonstradamus@gmail.com', '15091984')
//   .then((value) => console.log(value))
//   .catch(function (error) {
//     // Handle Errors here.
//     var errorCode = error.code;
//     var errorMessage = error.message;
//     console.warn(errorCode, errorMessage);
//   });

// Goods.on('value', (snapshot: firebase.database.DataSnapshot | null) => {
//   console.log(snapshot.val());
// });

// const onDbConnectChangeHandker:  (a: firebase.database.DataSnapshot | null, b?: string) => any = (snapshot) => {
//   const isConnected: boolean = snapshot.val();
//
//   store.dispatch(isConnected ? firebaseConnected() : firebaseDisonnected());
// };2