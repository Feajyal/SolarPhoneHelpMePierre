// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDRtPtmImtPoESME3WCcuJyjZ-1T3Hzeow",
    authDomain: "solarphone2022.firebaseapp.com",
    projectId: "solarphone2022",
    storageBucket: "solarphone2022.appspot.com",
    messagingSenderId: "706633546108",
    appId: "1:706633546108:web:4433b6dbfaf3f18c854cf9",
    measurementId: "G-0R4MMXTR46"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getFirestore(app);

export default app;
