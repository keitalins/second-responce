// Function to show/hide more information about family members
function showMoreInfo(member) {
    const info = document.getElementById('info-' + member);
    if (info.style.display === 'none' || info.style.display === '') {
        info.style.display = 'block';
    } else {
        info.style.display = 'none';
    }
}
