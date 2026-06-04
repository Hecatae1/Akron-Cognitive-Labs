// Year
document.getElementById('year').textContent = new Date().getFullYear();

// Smooth-scroll reveal-on-view
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

// Stagger cards slightly
document.querySelectorAll('.cards .card').forEach((card, i) => {
  card.style.transitionDelay = `${i * 120}ms`;
});
