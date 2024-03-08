import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase, ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyC2wzob4G4hx0WZb4OgdXC_jsIG9gDrNwM",
    authDomain: "ufsj-894af.firebaseapp.com",
    projectId: "ufsj-894af",
    storageBucket: "ufsj-894af.appspot.com",
    messagingSenderId: "74536358217",
    appId: "1:74536358217:web:f4868d9a2f016147674a98"
  };
const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);
document.addEventListener("DOMContentLoaded", function () {
if (document.getElementById("submit")){
document.getElementById("submit").addEventListener("click", function () { 
    event.preventDefault();
    var email = document.getElementById("email-sign").value;
    var senha1 = document.getElementById("senha1").value;
    var senha2 = document.getElementById("senha2").value;

    if (senha1 !== senha2) {
        alert("As senhas não coincidem");
        setTimeout(function () {
            location.reload(true);
        }, 100);
    } else {
        createUserWithEmailAndPassword(auth, email, senha1)
            .then(() => {
            //location.reload()
                
                window.location.href = "index.html";
            })
            .catch((error) => {
                alert(error);
            });
    }
});
} });