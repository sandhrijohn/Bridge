// Firebase configuration
const firebaseConfig = {
    apiKey: "265a5dd88ce145ebaa3c25d96272bfa1",
    authDomain: "investment-ideas-db535.firebaseapp.com",
    projectId: "investment-ideas-db535",
    storageBucket: "investment-ideas-db535.appspot.com",
    messagingSenderId: "659736052367",
    appId: "1:659736052367:web:8cf58c02a29b548670a6fa"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Signup functionality
document.getElementById('signup-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            console.log("User signed up:", userCredential.user);
            window.location.href = "dashboard.html";
        })
        .catch((error) => {
            console.error("Error signing up:", error.message);
        });
});

// Login functionality
document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            console.log("User logged in:", userCredential.user);
            window.location.href = "dashboard.html";
        })
        .catch((error) => {
            console.error("Error logging in:", error.message);
        });
});

// Logout functionality
document.getElementById('logout').addEventListener('click', function () {
    auth.signOut().then(() => {
        console.log("User logged out");
        window.location.href = "index.html";
    });
});

// Display user email on dashboard
auth.onAuthStateChanged(function (user) {
    if (user) {
        document.getElementById('user-email').textContent = user.email;
    } else {
        window.location.href = "login.html";
    }
});
