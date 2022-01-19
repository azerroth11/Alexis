const swiper = new Swiper('.swiper', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 10,
    stretch: 100,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
})
