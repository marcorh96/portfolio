const navLinks = document.querySelectorAll('.nav__item:not(.dropdown)'); 
const navLink = document.querySelectorAll('.nav__link'); 
const menuToggle = document.getElementById('navbarNavAltMarkup'); 
const bsCollapse = new bootstrap.Collapse(menuToggle, {toggle: false});
navLinks.forEach( (l) => { 
    l.addEventListener('click', () =>
    {  if (menuToggle.classList.contains('show'))  bsCollapse.toggle(); });}); 


/*  function linkAction () {
  // Active Link
  navLink.forEach((n) => n.classList.remove('active'));
  this.classList.add('active');
}
navLink.forEach((n) => n.addEventListener('click', linkAction));  */


const navLi = document.querySelectorAll('nav div ul li a');
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        let sectionTop = section.offsetTop;
        if (scrollY >= sectionTop - 65) {
            current = section.getAttribute('id');
        }
    });
    navLi.forEach(li => {
        li.classList.remove('active');
        document.querySelector('nav div ul li a[href*= ' + current + ']').classList.add('active');
    });
});
