
var a = document.getElementById("loginBtn");
var b = document.getElementById("registerBtn");
var x = document.getElementById("login");
var y = document.getElementById("register");

function login() {
    x.style.left = "4px";
    y.style.right = "-520px";
    a.className += " white-btn";
    b.className = "btn";
    x.style.opacity = 1;
    y.style.opacity = 0;
}

function register() {
    x.style.left = "-510px";
    y.style.right = "5px";
    a.className = "btn";
    b.className += " white-btn";
    x.style.opacity = 0;
    y.style.opacity = 1;
}

function myMenuFunction() {
    var i = document.getElementById("navMenu");

    if(i.className === "nav-menu") {
        i.className += " responsive";
    } else {
        i.className = "nav-menu";
    }
   }
  const signinButton = document.querySelector('input[type="submit"]'); // Changed button selection

        signinButton.addEventListener('click', (e) => {
                        e.preventDefault();
                 // Redirect to the second page
            window.location.href = 'diet.html';
        });


const signupButton = document.querySelector('input[type="submit"][value="Register"]');

        signupButton.addEventListener('click', (e) => {
                        e.preventDefault();
                 // Redirect to the second page
            window.location.href = 'role.html';
        });
function register() {
    // Get form input values
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Check if the name is a number
    if (!isNaN(firstName) || !isNaN(lastName)) {
        alert('Name cannot be a number.');
        return;
    }

    // Email validation using a regular expression
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    // Password validation
    if (password.length < 8) {
        alert('Password must be at least 8 characters long.');
        return;
    }

    if (!/[A-Z]/.test(password) || !/[a-z]/.test(password) || !/[0-9]/.test(password)) {
        alert('Password must contain at least one uppercase letter, one lowercase letter, and one digit.');
        return;
    }

    // Client-side validation for other fields (first name, last name)
    if (!firstName || !lastName) {
        alert('Please fill in all fields.');
        return;
    }

    // If all validation passes, proceed with registration
    alert('Registration successful. You can now proceed.');
    // Add code here to send registration data to the server
}

document.querySelector('.submit').addEventListener('click', register);
