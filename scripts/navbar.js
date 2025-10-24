const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  menu.classList.toggle('active');
});


document.querySelectorAll('.menu a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    menu.classList.remove('active');
  });
});
