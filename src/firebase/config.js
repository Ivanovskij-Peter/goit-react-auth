import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyAA58sF2xbfOuATbdMQDsIF1PhFP_iMwnc',
  authDomain: 'react-auth-3a3db.firebaseapp.com',
  databaseURL: 'https://react-auth-3a3db.firebaseio.com',
  projectId: 'react-auth-3a3db',
  storageBucket: 'react-auth-3a3db.appspot.com',
  messagingSenderId: '707073016540',
  appId: '1:707073016540:web:17e19ea8d1042e07a32a19',
};

firebase.initializeApp(firebaseConfig);

export default firebase;
