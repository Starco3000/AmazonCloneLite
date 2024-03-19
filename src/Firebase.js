import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyC8onnKr-Qjb3nK3g-5a9E1Rmx6cCeLvic',
  authDomain: 'azonlite-7c3bf.firebaseapp.com',
  projectId: 'azonlite-7c3bf',
  storageBucket: 'azonlite-7c3bf.appspot.com',
  messagingSenderId: '346044372055',
  appId: '1:346044372055:web:9ef727935e361289ac3f12',
  measurementId: 'G-8PSB302BL4',
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

const auth = getAuth(firebaseApp);

export { db, auth };
