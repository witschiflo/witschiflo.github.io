
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.navigation-links');
    const navLinks = document.querySelectorAll('.navigation-links li');
    //Toggle Navigation
    burger.addEventListener('click', () => {
        nav.classList.toggle('navigation-active');
    });
    //Animate Links
    navLinks.forEach((link, index) => {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3} s`;
    });
}


navSlide();

