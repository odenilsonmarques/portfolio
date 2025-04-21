const offcanvasElement = document.getElementById('offcanvasNavbar');
const offcanvas = new bootstrap.Offcanvas(offcanvasElement);
const navLinks = offcanvasElement.querySelectorAll('a.nav-link');

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    offcanvas.hide();
  });
});