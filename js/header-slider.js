let swiper = new Swiper(".swiper", {
  //   autoplay: {
  //     delay: 5000,
  //     stopOnLastSlide: false,
  //     disabledOnInteraction: false,
  //   },

  loop: true,
  speed: 3000,

  effect: "fade",

  fadeEffect: {
    crossFade: true,
  },

  pagination: {
    el: ".pagination",
    clickable: true,
  },
});
