
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: "AIzaSyDsibdT83MrfY4lJU3G_LASfslqoXq7M6E",
  authDomain: "guestease123.firebaseapp.com",
  projectId: "guestease123",
  storageBucket: "guestease123.appspot.com",
  messagingSenderId: "794064762714",
  appId: "1:794064762714:web:1930ef14450759b3b06563",
  measurementId: "G-PM3QR9XQW4"
};

const app = initializeApp(firebaseConfig);
const database = getFirestore(app);
const colRef = collection(database, "collection_name");
export default database ;
//use state initial value ko transfer karta hai apni new value mein
