// Инициализация слайдера
const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.slider-button_next',
    prevEl: '.slider-button_prev',
  },

  effect: 'coverflow',

});