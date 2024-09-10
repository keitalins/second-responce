// Function to validate the login form
function validateLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');

    // Basic validation to check if fields are filled
    if (username === '' || password === '') {
        errorMessage.textContent = 'Please fill in both fields.';
        errorMessage.style.display = 'block';
        return false;
    }

    // Simulating a successful login (in real scenario, you'd check these credentials from the server)
    if (username === 'admin' && password === 'password123') {
        alert('Login successful!');
        // Redirect to dashboard or another page (optional)
        window.location.href = 'dashboard.html'; // Change this to actual dashboard link
    } else {
        errorMessage.textContent = 'Incorrect username or password.';
        errorMessage.style.display = 'block';
        return false;
    }
}
