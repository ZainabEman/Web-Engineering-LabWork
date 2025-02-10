// Function to handle user signup
function signup() {
    const name = document.getElementById('signupName').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;

    if (email && password && name) {//password validation
        if (password.length < 6) {
            alert("Password must be at least 6 characters long.");
            return;
        }//storing locally
        localStorage.setItem('userEmail', email);
        localStorage.setItem('userPassword', password);
        localStorage.setItem('userName', name);
        // hide signup and show login
     document.getElementById('signupForm').style.display = 'none';
        document.getElementById('loginForm').style.display = 'block';
    } else {
        alert("All fields are required.");
    }
}

// Function to handle user login
function login() {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    const storedEmail = localStorage.getItem('userEmail');
    const storedPassword = localStorage.getItem('userPassword');

    if (email && password) {
        if (email === storedEmail && password === storedPassword) {
            alert("Login successful! Welcome " + localStorage.getItem('userName'));
        } else {
            alert("Incorrect email or password.");
        }
    } else {
        alert("Both fields are required.");
    }
}
