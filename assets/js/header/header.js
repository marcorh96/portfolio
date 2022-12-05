const navLinks = document.querySelectorAll('.nav__item:not(.dropdown)'); 
const navLink = document.querySelectorAll('.nav__link'); 
const menuToggle = document.getElementById('navbarNavAltMarkup'); 
const bsCollapse = new bootstrap.Collapse(menuToggle, {toggle: false});
navLinks.forEach( (l) => { 
    l.addEventListener('click', () =>
    {  if (menuToggle.classList.contains('show'))  bsCollapse.toggle(); });}); 


function linkAction () {
  // Active Link
  navLink.forEach((n) => n.classList.remove('active'));
  this.classList.add('active');
}
navLink.forEach((n) => n.addEventListener('click', linkAction));
