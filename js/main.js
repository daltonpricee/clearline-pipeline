/* ── main.js ── Clearline Pipeline ─────────────────────── */

// Dynamic year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// ── Mobile nav burger ───────────────────────────────────
const burger = document.querySelector('.nav__burger');
const navLinks = document.querySelector('.nav__links');

burger?.addEventListener('click', () => {
  const isOpen = burger.getAttribute('aria-expanded') === 'true';
  burger.setAttribute('aria-expanded', String(!isOpen));
  burger.classList.toggle('open');
  navLinks.classList.toggle('open');
});

// Close nav when a link is clicked
navLinks?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    burger?.classList.remove('open');
    navLinks.classList.remove('open');
    burger?.setAttribute('aria-expanded', 'false');
  });
});

// ── Scroll-reveal ────────────────────────────────────────
const revealEls = document.querySelectorAll(
  '.service-card, .stat, .about__heading, .about__text, .contact__form'
);
revealEls.forEach(el => el.classList.add('reveal'));

const observer = new IntersectionObserver(
  entries => entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  }),
  { threshold: 0.12 }
);
revealEls.forEach(el => observer.observe(el));

// ── Contact form (stub — wire up your backend or Formspree) ──
const form = document.querySelector('.contact__form');
form?.addEventListener('submit', e => {
  e.preventDefault();
  const btn = form.querySelector('button[type="submit"]');
  btn.textContent = 'Message Sent ✓';
  btn.disabled = true;
  form.reset();
  setTimeout(() => {
    btn.textContent = 'Send Message';
    btn.disabled = false;
  }, 4000);
});