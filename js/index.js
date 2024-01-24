const menu = document.querySelector('.menu');
const menuItem = document.querySelectorAll('.menu-item');
const menuIcon = document.querySelector('.menuIcon');
const closeIcon = document.querySelector('closeIcon');

function toggleMenu() {
  if (menu.classList.contains('showMenu')) {
    menu.classList.remove('showMenu');
    closeIcon.style.display = 'none';
    menuIcon.style.display = 'block';
  }
  else{
    menu.classList.add('showMenu');
    closeIcon.style.display = 'block';
    menuIcon.style.display = 'none';
  }
}

hamburger.addEventListener('click', toggleMenu)

menuItem.forEach(
  function() {
    menuItem.addEventListener('click', toggleMenu);
  }
)