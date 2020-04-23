import Firebase from 'firebase';
let config = {
	apiKey: "AIzaSyCp0zWQN-2t7Sn0o1XGnUFKt_t_XNCx-w0",
    authDomain: "book-club-zaffora.firebaseapp.com",
    databaseURL: "https://book-club-zaffora.firebaseio.com",
    projectId: "book-club-zaffora",
    storageBucket: "book-club-zaffora.appspot.com",
    messagingSenderId: "906429618226",
    appId: "1:906429618226:web:577646869d30f8955b442b",
    measurementId: "G-V59804ECL2"

};
let app = Firebase.initializeApp(config);
export const db = app.database();


