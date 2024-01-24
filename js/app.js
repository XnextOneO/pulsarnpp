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


document.addEventListener("DOMContentLoaded", function() {
  let searchButton = document.getElementById("searchButton");
  let searchWrapper = document.getElementById("searchWrapper");

  searchButton.addEventListener("click", function(event) {
    if (event.target === searchButton || event.target === document.getElementById("searchImg")) {
      toggleSearchWrapper();
    }
  });

  document.addEventListener("click", function(event) {
    if (!searchWrapper.contains(event.target) && event.target !== searchButton && event.target !== document.getElementById("searchImg")) {
      searchWrapper.style.display = "none";
    }
  });

  function toggleSearchWrapper() {
    searchWrapper.style.display = (searchWrapper.style.display === "flex") ? "none" : "flex";
  }
});

