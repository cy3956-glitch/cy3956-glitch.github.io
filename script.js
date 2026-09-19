
const topbar = document.querySelector('.topbar');
const hero = document.querySelector('.hero');
const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');

window.addEventListener('scroll', () => {
  topbar.classList.toggle('scrolled', window.scrollY > 20);
});

setInterval(() => {
  hero.classList.toggle('alt');
}, 5200);

menuBtn.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', String(isOpen));
});

document.querySelectorAll('.nav a').forEach(a => {
  a.addEventListener('click', () => {
    nav.classList.remove('open');
    menuBtn.setAttribute('aria-expanded', 'false');
  });
});

document.getElementById('year').textContent = new Date().getFullYear();
