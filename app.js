 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
 import { getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
 const firebaseConfig = {
   apiKey: "AIzaSyCRIgaMm0ls-tCQI5m1bPS3bgyapz6bzjo",
   authDomain: "learning-wih-ibles.firebaseapp.com",
   projectId: "learning-wih-ibles",
   storageBucket: "learning-wih-ibles.appspot.com",
   messagingSenderId: "318340415626",
   appId: "1:318340415626:web:c6bd364a864a8ecf272d73"
 };

 const app = initializeApp(firebaseConfig);


 const auth = getAuth(app);
 console.log(app)

const email = document.getElementById("signup-email");
const password = document.getElementById("signup-pass");
const signup_btn = document.getElementById("Sinup-btn");

signup_btn.addEventListener("click", cua);


 onAuthStateChanged(auth, (user) => {
   if (user) {
    console.log("User loggin")
         const uid = user.uid;
     
   } else {
    
    console.log("User not loggin")
    
  }
 });
 
function cua(){
  createUserWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => {
    // Signed up
    Swal.fire({
      title: "success",
      text: "SignUP in successfully!",
      icon: "success"
    }); 
    const user = userCredential.user;
    // ...
    console.log("user",user)
  })
  .catch((error) => {
    // const errorCode = error.code;
    const errorMessage = error.message;
    // ..
    console.log(errorMessage);
  });
}
const email_g = document.getElementById("Login-email")
const pass_g = document.getElementById("Login-pass")
const btn_g = document.getElementById("login-btn")
btn_g.addEventListener("click",done)
function done(){
signInWithEmailAndPassword(auth, email_g.value, pass_g.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
    Swal.fire({
      title: "success",
      text: "Signed in successfully!",
      icon: "success"
    });
    console.log(user)
    window.location.href = "https://github.com/hafiz-hammad"
  })
  .catch((error) => {
   //  const errorCode = error.code;
    const errorMessage = error.message;
    Swal.fire({
      title: "error",
      text: errorMessage,
      icon: "error"
    });
  });
}