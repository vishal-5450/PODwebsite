// document.querySelector("#login").addEventListener("click", function () {
//     showLoginForm();
// });

// document.querySelector(".popup .close-btn").addEventListener("click", function () {
//     closePopup();
// });

function showLoginForm() {
    // callPhpFile("shubham", "pol", "Shubham123@gmail.com", "Shubham");
    // Show login form and hide registration form
    document.querySelector(".login-form").style.display = "block";
    document.querySelector(".registration-form").style.display = "none";

    // Update heading
    document.querySelector(".popup .form h2").textContent = "Login";

    // Show popup with fade-in effect
    document.querySelector(".popup").classList.add("active");
}

function showRegistrationForm() {
    // Show registration form and hide login form
    document.querySelector(".login-form").style.display = "none";
    document.querySelector(".registration-form").style.display = "block";

    // Update the message if needed
    document.querySelector(".popup .form h2").textContent = "Register";
}

function closePopup() {
    // Close the popup
    document.querySelector(".popup").classList.remove("active");

    // Reset form elements
    document.querySelector(".login-form").reset();
    document.querySelector(".registration-form").reset();
}

function signIn() {
    // Get user input values
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;

    // Simple email validation

    if (email.trim() === "" && password.trim() === "") {
        alert("Please enter all credentials.");
        return;
    }

    if (email.trim() === "") {
        alert("Please enter Email.");

        return;
    }

    if (!isValidEmail(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Simple password validation
    if (password.trim() === "") {
        alert("Please enter a password.");
        return;
    }

    // Implement your sign-in logic here (replace the following with actual logic)
    alert("Sign in successful!\nEmail: ${email}\nPassword: ${password}");
    closePopup();
}

function register() {
    // Get user input values for registration

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const regEmail = document.getElementById('regEmail').value;
    const regPassword = document.getElementById('regPassword').value;
    const regPassword2 = document.getElementById('regPassword2').value;

    // Simple name validation
    if (firstName.trim() === "" && lastName.trim() === "" && regEmail.trim() === "" && regPassword.trim() === "" && regPassword2.trim() === "") {
        alert("Please enter all credentials.");
        return;
    }

    if (firstName.trim() === "") {
        alert("Please enter first name.");
        return;
    }

    if (!isValidName(firstName)) {
        alert("Please enter a valid first name with only characters.");
        return;
    }

    if (lastName.trim() === "") {
        alert("Please enter last name.");

        return;
    }

    if (!isValidName(lastName)) {
        alert("Please enter a valid last name with only characters.");
        return;
    }
    if (regEmail.trim() === "") {
        alert("Please enter Email.");

        return;
    }

    // Simple email validation
    if (!isValidEmail(regEmail)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Simple password validation
    if (regPassword.trim() === "") {
        alert("Please enter a password.");
        return;
    }

    if (regPassword2.trim() === "") {
        alert("Please confirm your password.");

        return;
    }

    if (regPassword !== regPassword2) {
        alert("Passwords do not match.");
        return;
    }
    // Implement your registration logic here (replace the following with actual logic)
    callPhpFile(firstName, lastName, regEmail, regPassword2);
}

function callPhpFile(firstName, lastName, email, password) {

    var formData = {
        firstName: firstName,
        lastName: lastName,
        regEmail: email, 
        regPassword2: password
    };

    $.ajax({
        url: 'newlogin1.php',
        method: 'POST',
        data: formData,
        success: function (response) {
            // Handle the response from the PHP file
            alert("Registration successful!");
            showLoginForm();
        },
        error: function (error) {
            // Handle errors
            console.error('Error:', error);
        }
    });
}

function isValidEmail(email) {
    // Basic email validation using a regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidName(name) {
    // Basic name validation using a regular expression
    const nameRegex = /^[A-Za-z]+$/;
    return nameRegex.test(name);
}