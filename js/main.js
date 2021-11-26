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