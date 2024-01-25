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


document.addEventListener("DOMContentLoaded", function () {
  let searchButton = document.getElementById("searchButton");
  let searchWrapper = document.getElementById("searchWrapper");

  searchButton.addEventListener("click", function (event) {
    if (event.target === searchButton || event.target === document.getElementById("searchImg")) {
      toggleSearchWrapper();
    }
  });

  document.addEventListener("click", function (event) {
    if (!searchWrapper.contains(event.target) && event.target !== searchButton && event.target !== document.getElementById("searchImg")) {
      searchWrapper.style.display = "none";
    }
  });

  function toggleSearchWrapper() {
    searchWrapper.style.display = (searchWrapper.style.display === "flex") ? "none" : "flex";
  }
});


//listen for men1 mouseover

$(document).ready(function () {
  console.log("ready");
  const secondColLinks = $("#second-col-links");
  const thirdColLinks = $('#third-col-links');

  function genLinkTemplate(id, name, href) {
    return `<a id="${id}" href="${href}" class="menLink">${name}</a>`
  }

  function processMenu1(elementId, links) {
    $(elementId).mouseover(function () {
      console.log("mouse over");
      secondColLinks.empty();
      thirdColLinks.empty();
      for (let i = 0; i < links.length; i++) {
        secondColLinks.append(genLinkTemplate(`link-${i}`, links[i].name, links[i].href));
        $(`#link-${i}`).mouseover(function () {
          console.log("link mouse over");
          thirdColLinks.empty();
          if (links[i].subLinks) {
            for (let j = 0; j < links[i].subLinks.length; j++) {
              thirdColLinks.append(genLinkTemplate(`link-${i}-${j}`, links[i].subLinks[j].name, links[i].subLinks[j].href));
            }
          }
        });
      }
    });
    $(elementId).mouseout(function () {
      console.log("mouse out");
    });
  }

  processMenu1('#men1', [
    {
      name: "men1 Link 1", href: "#", subLinks: [
        {name: "men1 Link 1.1", href: "#"},
        {name: "men1 Link 1.2", href: "#"},
        {name: "men1 Link 1.3", href: "#"},
        {name: "men1 Link 1.4", href: "#"},
        {name: "men1 Link 1.5", href: "#"},
      ]
    },
    {name: "men1 Link 2", href: "#", subLinks: [{name: "men1 Link 2.1", href: "#"},]},
    {name: "men1 Link 3", href: "#", subLinks: [{name: "men1 Link 3.1", href: "#"},]},
    {name: "men1 Link 4", href: "#", subLinks: [{name: "men1 Link 4.1", href: "#"},]},
    {name: "men1 Link 5", href: "#", subLinks: [{name: "men1 Link 5.1", href: "#"},]},
  ]);

  processMenu1('#men2', [
    {name: "men2 Link 1", href: "#", subLinks: [{name: "men2 Link 1.1", href: "#"},]},
    {name: "men2 Link 2", href: "#", subLinks: [{name: "men2 Link 2.1", href: "#"},]},
  ]);

  processMenu1('#men3', [
    {name: "men3 Link 1", href: "#", subLinks: [{name: "men3 Link 1.1", href: "#"},]},
    {name: "men3 Link 2", href: "#", subLinks: [{name: "men3 Link 2.1", href: "#"},]},
    {name: "men3 Link 3", href: "#", subLinks: [{name: "men3 Link 3.1", href: "#"},]},
  ]);

  processMenu1('#men4', [
    {name: "men4 Link 1", href: "#"},
    {name: "men4 Link 2", href: "#"},
    {name: "men4 Link 3", href: "#"},
    {name: "men4 Link 4", href: "#"},
    {name: "men4 Link 5", href: "#"},
  ]);
});

