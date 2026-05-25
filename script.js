const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Navbar blur saat scroll
window.addEventListener('scroll', () => {

    const navbar = document.querySelector('.navbar');

    if(window.scrollY > 50){
        navbar.style.background = 'rgba(11,15,25,0.9)';
    }
    else{
        navbar.style.background = 'rgba(11,15,25,0.7)';
    }

});