// ===== SCROLL ANIMATIONS =====
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.12 });

// Observe timeline items
document.querySelectorAll('.timeline-item').forEach(el => observer.observe(el));

// Observe fade-up elements
document.querySelectorAll(
  '.focus-card, .project-card, .conf-item, .stat-card, .achievement-box, .contact-card'
).forEach((el, i) => {
  el.classList.add('fade-up');
  el.style.transitionDelay = `${(i % 4) * 80}ms`;
  observer.observe(el);
});

// ===== NAVBAR SCROLL EFFECT =====
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    navbar.style.background = 'rgba(0,0,0,0.92)';
  } else {
    navbar.style.background = 'rgba(0,0,0,0.72)';
  }
});

// ===== SMOOTH ACTIVE NAV LINK =====
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      navLinks.forEach(link => {
        link.style.color = link.getAttribute('href') === `#${id}`
          ? '#f5f5f7'
          : '#86868b';
      });
    }
  });
}, { threshold: 0.4 });

sections.forEach(s => sectionObserver.observe(s));

// ===== HERO PARALLAX (subtle) =====
window.addEventListener('scroll', () => {
  const hero = document.querySelector('.hero-visual');
  if (hero) {
    const y = window.scrollY;
    hero.style.transform = `translateY(${y * 0.08}px)`;
  }
});
