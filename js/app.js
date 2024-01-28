document.addEventListener('DOMContentLoaded', function () {
  const burgerMenuButton = document.querySelector('.burger-menu');
  const mobileMenu = document.querySelector('.mobile-menu');
  const closeButton = document.querySelector('.close-btn');

  burgerMenuButton.addEventListener('click', function () {
    mobileMenu.style.display = 'block';
  });

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
      name: "Силовые быстродействующие диоды", href: "#", subLinks: []
    },
    {name: "Быстродействующие диоды", href: "#", subLinks: []},
    {name: "Биполярные СВЧ транзисторы", href: "#", subLinks: []},
    {name: "Полевые ВЧ и СВЧ транзисторы ", href: "#", subLinks: []},
    {
      name: "Силовые переключательные транзисторы",
      href: "#",
      subLinks: [{name: "На основе AIGaN/GaN", href: "#"}, {name: "На основе Si", href: "#"}]
    },
  ]);

  processMenu1('#men2', [
    {
      name: "СВЧ МИС", href: "#", subLinks: [{name: "Широкополосные усилители", href: "#"},
        {name: "Логарифмические детекторы/усилители", href: "#"},
        {name: "Смесители", href: "#"},
        {name: "Квадратные модуляторы", href: "#"},
        {name: "Умножители частоты", href: "#"},
        {name: "Делители частоты", href: "#"},
        {name: "Синтезаторы частоты", href: "#"},
        {name: "Источники тока", href: "#"},
        {name: "Аттенюаторы", href: "#"},
        {name: "Фазовращатели", href: "#"},
      ]
    },
    {
      name: "БИС и ВЧ МИС", href: "#", subLinks: [{name: "Операционные усилители", href: "#"},
        {name: "Буферные усилители", href: "#"},
        {name: "Дифференциальные усилители", href: "#"},
        {name: "Быстродействующие компараторы", href: "#"},
        {name: "Операционные усилители с регулируемым коэффициентом усиления", href: "#"},
        {name: "Логарифмические усилители", href: "#"},
        {name: "Устройства выборки и хранения", href: "#"},
        {name: "Измерители разности фаз", href: "#"},
      ]
    },
    {
      name: "Драйверы управления",
      href: "#",
      subLinks: [{name: "Упарвление фазовращателями и аттенюаторами", href: "#"},
        {name: "Управление ферритовыми фазовращателями(ФФ)", href: "#"},
        {name: "БИС управления ПЗС", href: "#"},
      ]
    },
  ]);

  processMenu1('#men3', [
    {
      name: "Диоды", href: "#", subLinks: [{name: "P-I-N фотодиоды большой площади", href: "#"},
        {name: "Многоэлементные P-I-N фотодиоды", href: "#"},
        {name: "Детекторы рентгеновского и гамма-излучения", href: "#"},
      ]
    },
    {name: "ПЗС", href: "#", subLinks: [{name: "Линейные ПЗС", href: "#"}, {name: "Матричные ПЗС", href: "#"}]},
    {name: "Фоточувствительные КМОП-матрицы", href: "#", subLinks: []},
  ]);

  processMenu1('#men4', [
    {
      name: "СВЧ модули", href: "#", subLinks: [
        {name: "Синтезаторы частоты (СВЧ)", href: "#"},
        {name: "Генераторы, управляемые напряжением", href: "#"},
        {name: "Широкополосные генераторы, управляемые напряжением", href: "#"},
        {name: "Усилители мощности", href: "#"},
        {name: "Широкополосные усилители", href: "#"},
        {name: "Преобразователи частоты", href: "#"},
        {name: "Управление амплитудными и фазовыми характеристиками", href: "#"},
      ]
    },
    {name: "Модули силовой электроники", href: "#"},
    {name: "Фотоприемные устройства", href: "#"},
  ]);
});

