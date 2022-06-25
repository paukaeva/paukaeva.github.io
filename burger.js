const iconMenu = document.querySelector('.menu_icon');
const menuBody = document.querySelector('.menu_body');
const menuItems = document.querySelectorAll('.header_main_nav a');

iconMenu.addEventListener('click', function (e) {
  document.body.classList.toggle('lock');
  iconMenu.classList.toggle('active');
  menuBody.classList.toggle('active');
});

// menuItems.forEach((item) => {
//   item.addEventListener('click', () => {
//     document.body.classList.remove('lock');
//     iconMenu.classList.remove('active');
//     menuBody.classList.remove('active');
//   })
// })