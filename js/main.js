// Инициализация первого слайдера
const hotelSlider = new Swiper('.swiper', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.slider-button_next',
    prevEl: '.slider-button_prev',
  },
  
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },

});


// Инициализация второго слайдера
const reviewsSlider = new Swiper('.swiper-reviews', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.slider-button_right',
    prevEl: '.slider-button_left',
  },

  
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },

});

// Parallax
$('.newsletter').parallax({
  imageSrc: 'img/subscribe.jpg',
  speed: 0.4,
});

// Код для показа меню в мобильной версии при нажатии на кнопку
let menuButton = document.querySelector('.menu-button');

menuButton.addEventListener('click', function () {
  console.log('Клик по кнопке меню');
  document.querySelector('.navbar-bottom').classList.toggle('navbar-bottom_visible');
});