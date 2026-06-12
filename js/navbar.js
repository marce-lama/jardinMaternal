document.addEventListener('DOMContentLoaded', () => {

  const burger = document.querySelector('.navbar-burger');
  const menu = document.querySelector('.navbar-menu');

  // Abrir / cerrar hamburguesa
  burger.addEventListener('click', () => {
    burger.classList.toggle('is-active');
    menu.classList.toggle('is-active');
  });

  // 👉 Cerrar menú al hacer click en cualquier link
  menu.addEventListener('click', (e) => {
  if (e.target.tagName === 'A') {
    burger.classList.remove('is-active');
    menu.classList.remove('is-active');
  }});

});

