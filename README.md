const menuButton = document.querySelector('.mobile-menu');
const navLinks = document.querySelector('.nav-links');
const navActions = document.querySelector('.nav-actions');
const yearEl = document.querySelector('#year');

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

if (menuButton && navLinks && navActions) {
  menuButton.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    navActions.classList.toggle('open');
    menuButton.classList.toggle('open');
  });
}
