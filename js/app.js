document.addEventListener('DOMContentLoaded', function () {
  const burgerMenuButton = document.querySelector('.burger-menu');
  const mobileMenu = document.querySelector('.mobile-menu');
  const closeButton = document.querySelector('.close-btn');

  // Обработчик события для открытия мобильного меню
  burgerMenuButton.addEventListener('click', function () {
    mobileMenu.style.display = 'block';
  });

  // Обработчик события для закрытия мобильного меню
  closeButton.addEventListener('click', function () {
    mobileMenu.style.display = 'none';
  });
});
