const swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  effect: "fade",

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
});