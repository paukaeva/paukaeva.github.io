const iconMenu = document.querySelector('.menu_icon');
const menuBody = document.querySelector('.menu_body');
const menuItems = document.querySelectorAll('.header_main_nav a');

iconMenu.addEventListener('click', () => {
  iconMenu.classList.toggle('active');
  menuBody.classList.toggle('active');
});

menuItems.forEach((item) => {
  item.addEventListener('click', () => {
    iconMenu.classList.remove('active');
    menuBody.classList.remove('active');
  })
})