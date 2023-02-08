const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.mobile-menu');
const menuItem = document.querySelector('.mobile-menu__li');
const menuIcon = document.querySelector('.hamburger__menu-icon');
const closeIcon = document.querySelector('.hamburger__close-icon');

function toggleMenu() {
  if (menu.classList.contains('showMenu')) {
    menu.classList.remove('showMenu');
    closeIcon.style.display = 'none';
    menuIcon.style.display = 'block';
  } else {
    menu.classList.add('showMenu');
    closeIcon.setAttribute('style', 'display: block !important');
    menuIcon.style.display = 'none';
  }
}

hamburger.addEventListener('click', toggleMenu);

menuItem.forEach(
  (m) => {
    m.addEventListener('click', toggleMenu);
  },
);