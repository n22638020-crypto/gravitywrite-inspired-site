// Mobile menu toggle
const menuButton = document.querySelector('.mobile-menu');
const navLinks = document.querySelector('.nav-links');
const navActions = document.querySelector('.nav-actions');
const yearEl = document.querySelector('#year');

// Set current year in footer
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// Mobile navigation toggle
if (menuButton && navLinks && navActions) {
  menuButton.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    navActions.classList.toggle('open');
    menuButton.classList.toggle('open');
  });

  // Close menu when clicking a link
  const links = document.querySelectorAll('.nav-links a, .nav-actions a');
  links.forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      navActions.classList.remove('open');
      menuButton.classList.remove('open');
    });
  });
}

// Smooth scroll behavior for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href !== '#' && href !== '#cta' && !href.includes('gravitywrite')) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    }
  });
});

// Simple form handling for demo (if needed)
const demoButton = document.querySelector('.input-section button');
if (demoButton) {
  demoButton.addEventListener('click', () => {
    const input = document.querySelector('.input-section input');
    if (input.value.trim()) {
      // Simple animation feedback
      demoButton.textContent = 'Generating...';
      setTimeout(() => {
        demoButton.textContent = 'Generate with AI';
      }, 2000);
    }
  });
}
