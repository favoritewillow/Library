console.log(
  'Total 100/100 \n 1.Вёрстка валидная +10; \n 2.Вёрстка семантическая +16. \n В коде страницы присутствуют следующие элементы (указано минимальное количество, может быть больше) \n <header>, <main>, <footer> +2; \n шесть элементов <section> (по количеству секций) +2; \n только один заголовок <h1> +2; \n пять заголовков <h2> (легко отличимы на верхних границах секций, имеют единый стиль) +2; \n один элемент <nav> (панель навигации в хедере) +2; \n два списка ul > li > a (панель навигации, ссылки на соцсети в футере) +2; \n семь кнопок <button> +2; \n два инпута <input>. \n 3. Вёрстка соответствует макету +54: \n блок <header> +8; \n секция Welcome +4; \n секция About +6; \n секция Favorites +8; \n секция CoffeShop +6; \n секция Contacts +6; \n секция LibraryCard +8; \n блок <footer> +8. \n 4. Общие требования к верстке +20: \n для построения сетки используются флексы или гриды (display: flex... или display: grid...) +2; \n при уменьшении масштаба страницы браузера вся вёрстка (контент и фоны) размещается по центру, а не сдвигается в сторону +2. Для этого должна быть обертка вокруг всей страницы, которая выравнивается по центру. Фон за рамками страницы может быть черным, белым или любого оттенка серого. Изображение библиотеки в секции Welcome - тянется на всю ширину экрана. \n иконки добавлены в формате .svg. SVG может быть добавлен любым способом. Обращаем внимание на формат, а не на способ добавления +2; \n изображения добавлены в формате .jpg (.jpeg) или .png +2; \n есть favicon +2. В макете иконки нет, поэтому можно сгенерировать самому с помощью сервиса favicon-generator. Иконка должна содержать 3 буквы "BPL" (Brooklyn Public Library); \n плавная прокрутка по якорям +2; \n в футере название ссылки Username заменено и ведет на GitHub студента +2; \n в футере ссылка The Rolling Scopes School ведет на страницу курса https://rs.school/js-stage0/ +2; \n интерактивность элементов согласно макету. Интерактивность включает в себя не только изменение внешнего вида курсора, например, при помощи свойства cursor: pointer, но и другие визуальные эффекты, например, изменение цвета фона или цвета шрифта. Если в макете указаны стили при наведении и клике, для элемента указываем эти стили. Если в макете стили не указаны, реализуете их по своему усмотрению, руководствуясь общим стилем макета +2; \n обязательное требование к интерактивности: плавное изменение внешнего вида элемента при наведении и клике не влияет на соседние элементы +2; '
);
console.log(
  'Total 50/50 \n 1.Вёрстка соответствует макету. Ширина экрана 768px +26 \n блок <header> +2 \n секция Welcome +2 \n секция About +2. Обратите внимание на появление новых элементов в виде стрелок.\n На макете в секции About расположены 5 точек, т.к. картинки лишь скрываются, а не пропадают. Если под картинкой находится 5 точек: +2\n секция Favorites +4\n секция CoffeShop +4\n секция Contacts +4\n секция LibraryCard +4 \n блок <footer> + 2 \n Ни на одном из разрешений до 640px включительно не появляется горизонтальная полоса прокрутки. Весь контент страницы при этом сохраняется: не обрезается и не удаляется +12\n нет полосы прокрутки при ширине страницы от 1440рх до 640рх +4.\n элементы не выходят за пределы окна браузера при ширине страницы от 1440рх до 640рх +4.\n элементы не наезжают друг на друга при ширине страницы от 1440рх до 640рх +4. Например, меню в хедере должно преобразоваться в бургер-меню до того, как элементы начнут наезжать друг на друга.\n все что будет происходить на ширине свыше 1440px - не оценивается. Поэтому можно либо растягивать на весь экран, либо оставить центральной колонкой.\n На ширине экрана 768рх реализовано адаптивное меню +12 (Рекомендуется сделать появление бургер-меню на ширине 1024px):\n если при ширине страницы в 768рх панель навигации не скрыта, а бургер-иконка не появилась (при этом учитывайте "Особенности проверки адаптивности в DevTools"), то ставим 0 за данный пункт, и дальше его не проверяем. Иначе:\n при нажатии на бургер-иконку плавно появляется адаптивное меню +4\n при нажатии на крестик, или на область вне меню, адаптивное меню плавно скрывается, уезжая за экран +4\n ссылки в адаптивном меню работают, обеспечивая плавную прокрутку по якорям при нажатии, а само адаптивное меню при этом плавно скрывается +2\n размеры открытого бургер-меню соответствуют макету, так же открытое бургер-меню проверяется на PixelPerfect +2'
);

//burger start

let burgerHeader = document.querySelector('.header__burger');
let burgerNavigation = document.querySelector('.navigation');
let iconProfile = document.querySelector('.icon-profile');
let burgerLines = document.querySelectorAll('.burger__line');
let screenWidth = window.innerWidth;

function toggleMenu() {
  burgerNavigation.classList.toggle('active');
  burgerHeader.classList.toggle('active');
  iconProfile.classList.toggle('active');
  burgerLines.forEach((line) => line.classList.toggle('active'));
}

function closeMenu() {
  burgerNavigation.classList.remove('active');
  burgerHeader.classList.remove('active');
  iconProfile.classList.remove('active');
  burgerLines.forEach((line) => line.classList.remove('active'));
}

burgerHeader.addEventListener('click', toggleMenu);

// закрытие вне меню

document.addEventListener('click', function (event) {
  if (
    (!event.target.closest('.header__burger') &&
      !event.target.closest('.navigation')) ||
    event.target.closest('.link-close')
  ) {
    closeMenu();
  }
});

window.addEventListener('resize', function () { 
  if (window.innerWidth > 768 && screenWidth <= 768) {
    closeMenu();
  }
  // обновление екрана
  screenWidth = window.innerWidth;
});

//burger end

//carousel ABOUT start
const about_buttons = document.querySelectorAll(
  '.about__button .button__circle'
);
const CAROUSEL = document.querySelector('.carousel');
const BTN_LEFT = document.querySelector('.button-arrow-left');
const BTN_RIGHT = document.querySelector('.button-arrow-right');
const carouselItemWidth = window.innerWidth === 1440 ? 475 : 755;

let currentIndex = 0;

function activeButton(index) {
  about_buttons.forEach((button) => {
    button.classList.remove('active-background');
  });

  about_buttons[index].classList.add('active-background');
}

function moveCarousel(index) {
  currentIndex = index;

  CAROUSEL.style.left = -index * carouselItemWidth + 'px';
  activeButton(index);
}

function initializeCarousel() {
  about_buttons.forEach((button, index) => {
    button.addEventListener('click', () => moveCarousel(index));
  });

  activeButton(currentIndex);
}

BTN_LEFT.addEventListener('click', () => {
  if (currentIndex > 0) {
    moveCarousel(currentIndex - 1);
  }
});

BTN_RIGHT.addEventListener('click', () => {
  if (currentIndex < about_buttons.length - 1) {
    moveCarousel(currentIndex + 1);
  }
});

document.addEventListener('DOMContentLoaded', initializeCarousel);

//carousel ABOUT end

//carousel FAVORITES start

document.addEventListener('DOMContentLoaded', function () {
  const seasonInputs = document.querySelectorAll('input[name="season"]');
  const strategies = document.querySelectorAll('.favorites__wrapper');
  const labels = document.querySelectorAll('.favorites__inputs label');
  
  function showSeasonBooks(season) {
    strategies.forEach((strategy) => {
      strategy.classList.add('displaynone');
      strategy.classList.remove('active');
    });

    const activeStrategy = document.querySelector(`.strategies-${season}`);
    if (activeStrategy) {
      activeStrategy.classList.remove('displaynone');
      activeStrategy.classList.add('active');      
    }

    labels.forEach((label) => {
      label.classList.remove('active-bold');
    });

    const activeLabel = document.querySelector(`label[for="${season}"]`);
    if (activeLabel) {
      activeLabel.classList.add('active-bold');
    }
  }

  seasonInputs.forEach((input) => {
    input.addEventListener('change', function () {
      if (this.checked) {
        showSeasonBooks(this.id);        
      }
    });
  });

  const defaultSeason = 'winter';
  const defaultSeasonInput = document.getElementById(defaultSeason);
  if (defaultSeasonInput) {
    defaultSeasonInput.checked = true;
    showSeasonBooks(defaultSeason);
  }
});

//carousel FAVORITES end

const popUpProfile = document.querySelector('.icon-profile');
const popUpToggle = document.querySelector('.pop-up-icon');

popUpProfile.addEventListener('click', () => {
  popUpToggle.classList.toggle('active');
});

