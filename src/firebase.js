import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/storage'

  var firebaseConfig = {
    apiKey: "AIzaSyDd1TXLJEZcuCfFnqfTxw_UTLIanazIV_k",
    authDomain: "labadiena-68b67.firebaseapp.com",
    databaseURL: "https://labadiena-68b67.firebaseio.com",
    projectId: "labadiena-68b67",
    storageBucket: "labadiena-68b67.appspot.com",
    messagingSenderId: "127179820390",
    appId: "1:127179820390:web:77ac00930277033d404ca7",
    measurementId: "G-T777FF1Z76"
  };
  // Initialize Firebase
export const fb = firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore()
export const dbMenuAdd = db.collection('menuItems')
export const dbOrders = db.collection('ordersItems')