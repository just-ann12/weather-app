import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCmAmPLIe0f4jzUkRsUCTT6sx6xUTOdAQ4',
  authDomain: 'weather-app-42ae7.firebaseapp.com',
  projectId: 'weather-app-42ae7',
  storageBucket: 'weather-app-42ae7.appspot.com',
  messagingSenderId: '437790965512',
  appId: '1:437790965512:web:b71ada02640241240176bd',
  measurementId: 'G-D64E7E19QF',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
