// Function to validate the form
function validateForm() {
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const gender = document.getElementById('gender').value;
    const reason = document.getElementById('reason').value;
    const appointmentDate = document.getElementById('appointmentDate').value;
    const successMessage = document.getElementById('successMessage');

    // Check if all fields are filled
    if (fullName === '' || email === '' || phone === '' || gender === '' || reason === '' || appointmentDate === '') {
        alert('Please fill in all fields.');
        return false;
    }

    // Check if phone number is valid
    if (!/^\d{10}$/.test(phone)) {
        alert('Please enter a valid 10-digit phone number.');
        return false;
    }

    // If everything is correct, show success message
    successMessage.textContent = 'Registration successful! We will contact you shortly.';
    successMessage.style.display = 'block';

    // Clear the form fields after submission
    document.getElementById('registrationForm').reset();

    // Prevent form from submitting normally
    return false;
}
