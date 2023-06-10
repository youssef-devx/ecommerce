import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth" 

const firebaseConfig = {
  apiKey: "AIzaSyBPh3sFORE5FwMCLCJmzWZLaqbN_0Z9ufA",
  authDomain: "store-feea9.firebaseapp.com",
  projectId: "store-feea9",
  storageBucket: "store-feea9.appspot.com",
  messagingSenderId: "69897823297",
  appId: "1:69897823297:web:b1692171b4803ce8fd92c0"
}

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)