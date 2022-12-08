const navLi = document.querySelectorAll('nav div ul li a');
const sections = document.querySelectorAll('section');

const navLinks = document.querySelectorAll('.nav__item:not(.dropdown)'); 
const navLink = document.querySelectorAll('.nav__link'); 
const menuToggle = document.getElementById('navbarNavAltMarkup'); 
const bsCollapse = new bootstrap.Collapse(menuToggle, {toggle: false});
navLinks.forEach( (l) => { 
    l.addEventListener('click', () =>
    {  if (menuToggle.classList.contains('show'))  bsCollapse.toggle(); });}); 

    
window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        let sectionTop = section.offsetTop;
        if (scrollY >= sectionTop - 400) {  //original 65 no 400
            current = section.getAttribute('id');
        }
    });
    navLi.forEach(li => {
        li.classList.remove('active');
        document.querySelector('nav div ul li a[href*= ' + current + ']').classList.add('active');
    });
});

