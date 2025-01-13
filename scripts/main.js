// Add this JavaScript
document.querySelector('.close-menu').addEventListener('click', function() {
    document.querySelector('.navbar-collapse').classList.remove('show');
    document.querySelector('.menu-backdrop').classList.remove('show');
});

document.querySelector('.navbar-toggler').addEventListener('click', function() {
    document.querySelector('.menu-backdrop').classList.add('show');
});
