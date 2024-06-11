import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAP7gh6xBEvLR4hDTNiGLpA7YO9zgcQPVE",
  authDomain: "fir-auth-af13b.firebaseapp.com",
  projectId: "fir-auth-af13b",
  storageBucket: "fir-auth-af13b.appspot.com",
  messagingSenderId: "134397791661",
  appId: "1:134397791661:web:d52e3262154db01a832524",
  measurementId: "G-C47WWZF3ZJ"
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

export default {
  auth,
  firebaseConfig
}