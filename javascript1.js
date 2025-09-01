function validateForm() {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const errorMessage = document.getElementById('errorMessage');

    // Basic validation to check if all fields are filled
    if (username.trim() === "" || email.trim() === "" || password.trim() === "" || confirmPassword.trim() === "") {
        errorMessage.textContent = "All fields are required.";
        return false;
    }

    // Check if passwords match
    if (password !== confirmPassword) {
        errorMessage.textContent = "Passwords do not match.";
        return false;
    }

    // Check password strength (simple validation)
    if (password.length < 6) {
        errorMessage.textContent = "Password must be at least 6 characters.";
        return false;
    }

    // If validation passes, redirect to the next page (Main page of the app)
    errorMessage.textContent = "";
    alert("Account created successfully!");

    window.location.href = "file:///C:/Users/chand/OneDrive/Desktop/animated.html";  // Redirect to main page (you can replace this with your next page)
    return false;
}
