// Function to show/hide more information about staff members
function showMoreInfo(staff) {
    const info = document.getElementById('info-' + staff);
    if (info.style.display === 'none' || info.style.display === '') {
        info.style.display = 'block';
    } else {
        info.style.display = 'none';
    }
}
