/* ============================================================
   Pioneer Inspection - Main JavaScript
   ============================================================
   HOW TO EDIT:
   - Slider speed: Change SLIDE_INTERVAL (milliseconds) below
   - Add/remove slides: Edit the HTML in index.html inside .hero-slider
   ============================================================ */

const SLIDE_INTERVAL = 5000; // Time between auto-slides (ms)

document.addEventListener('DOMContentLoaded', function () {

  // ── Hero Slider ──────────────────────────────────────────
  const slides = document.querySelectorAll('.hero-slider .slide');
  const dots   = document.querySelectorAll('.slider-dots .dot');
  let current  = 0;
  let timer;

  function goTo(index) {
    slides[current].classList.remove('active');
    dots[current].classList.remove('active');
    current = (index + slides.length) % slides.length;
    slides[current].classList.add('active');
    dots[current].classList.add('active');
  }

  function startAuto() {
    timer = setInterval(() => goTo(current + 1), SLIDE_INTERVAL);
  }

  function resetAuto() {
    clearInterval(timer);
    startAuto();
  }

  // Arrow buttons
  document.querySelector('.slider-arrow.prev')?.addEventListener('click', () => { goTo(current - 1); resetAuto(); });
  document.querySelector('.slider-arrow.next')?.addEventListener('click', () => { goTo(current + 1); resetAuto(); });

  // Dot buttons
  dots.forEach((dot, i) => dot.addEventListener('click', () => { goTo(i); resetAuto(); }));

  // Init
  if (slides.length) { slides[0].classList.add('active'); dots[0]?.classList.add('active'); startAuto(); }


  // ── Mobile Nav Toggle ────────────────────────────────────
  const toggle = document.querySelector('.navbar-toggle');
  const collapse = document.querySelector('.navbar-collapse');

  toggle?.addEventListener('click', () => collapse?.classList.toggle('open'));

  // Close nav when a link is clicked on mobile
  collapse?.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 768) collapse.classList.remove('open');
    });
  });


  // ── Sticky Nav shadow on scroll ──────────────────────────
  const navbar = document.querySelector('nav.navbar');
  window.addEventListener('scroll', () => {
    navbar?.classList.toggle('scrolled', window.scrollY > 10);
  });

});
