const swiperScroll = new Swiper(".swiper-scroll", {
  // Optional parameters
  direction: "vertical",
  loop: false,

  keyboard: {
    enabled: true,
    onlyInVieport: true,
    pageUpDown: true,
  },

  mousewheel: {
    sensitivity: 1,
    eventsTarget: ".swiper-slide",
  },

  spaceBetween: 15,

  freeMode: true,

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
