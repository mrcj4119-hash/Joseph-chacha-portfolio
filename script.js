const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('#nav');

menuBtn.addEventListener('click', () => {
  nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
});

document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 850) nav.style.display = 'none';
  });
});

const reveal = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      reveal.unobserve(entry.target);
    }
  });
}, {threshold: 0.08});

document.querySelectorAll('.project-card,.skill,.timeline-item,.contact-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(18px)';
  el.style.transition = 'opacity .6s ease, transform .6s ease';
  reveal.observe(el);
});
