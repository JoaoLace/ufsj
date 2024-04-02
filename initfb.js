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

onAuthStateChanged(auth, (user) => {
  if (user) {
    
      window.location.href = "main.html";
    
  }
});

if (document.getElementById("btn")) {
  document.getElementById("btn").addEventListener("click", (e) => {
    signInWithEmailAndPassword(
      auth,
      document.getElementById("email").value,
      document.getElementById("senha").value
    ).then(response => {
   
        window.location.href = "main.html";
      
    }).catch(error => {
      alert(error.message);
    });
  });
}

if (document.getElementById("googlebtn")) {
  document.getElementById("googlebtn").addEventListener("click", (e) => {
    signInWithPopup(auth, googleProvider)
    
      .then((result) => {
        location.reload()

        const confirmRedirect = confirm("Login bem-sucedido com o Google. Deseja ir para a página principal?");
        if (confirmRedirect) {
          window.location.href = "main.html";
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  });
}
