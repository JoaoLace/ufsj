import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyC2wzob4G4hx0WZb4OgdXC_jsIG9gDrNwM",
  authDomain: "ufsj-894af.firebaseapp.com",
  projectId: "ufsj-894af",
  storageBucket: "ufsj-894af.appspot.com",
  messagingSenderId: "74536358217",
  appId: "1:74536358217:web:f4868d9a2f016147674a98"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

function redirectToHomePage() {
  window.location.href = "your-home-page.html";
}

function checkIfUserLoggedIn() {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const confirmRedirect = confirm("Você já está logado. Deseja ir para a página principal?");
      if (confirmRedirect) {
        redirectToHomePage();
      }
    }
  });
}

if (window.location.pathname === "signup.html") {
  checkIfUserLoggedIn();
}
