// Function to show/hide more information about doctors
function showMoreInfo(doctor) {
    const info = document.getElementById('info-' + doctor);
    if (info.style.display === 'none' || info.style.display === '') {
        info.style.display = 'block';
    } else {
        info.style.display = 'none';
    }
}
