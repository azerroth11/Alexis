const data = [
  {
    id: 'Events / Évènements',
    photos: [
      { src: './img/gallerie/Events/affiche Pogo WEB.webp' },
      { src: './img/gallerie/Events/Affiche Rouher 2021.webp' },
      { src: './img/gallerie/Events/Aquaserge.webp' },
      { src: './img/gallerie/Events/BEECHWOOD.webp' },
      { src: './img/gallerie/Events/bUTTSHAKERS.webp' },
      { src: './img/gallerie/Events/CDACT GAZOLINE WEB.webp' },
      { src: './img/gallerie/Events/CDactXXII.webp' },
      { src: './img/gallerie/Events/CDF XII.webp' },
      { src: './img/gallerie/Events/celebration Days Roots web.webp' },
      { src: './img/gallerie/Events/Chateau Asca Bis.webp' },
      { src: './img/gallerie/Events/CHATEAU D_EAU Final WEB.webp' },
      { src: './img/gallerie/Events/Convention.webp' },
      { src: './img/gallerie/Events/Developpez-vous! Propaganda.webp' },
      { src: './img/gallerie/Events/GAM.webp' },
      { src: './img/gallerie/Events/le Cirque.webp', main: true },
      { src: './img/gallerie/Events/Madcaps Noir.webp' },
      { src: './img/gallerie/Events/Richard Allen.webp' },
      { src: './img/gallerie/Events/thourotte.webp' },
    ],
  },
  {
    id: 'Expositions',
    photos: [{ src: './img/gallerie/Expositions/Affiche 40 x 60 (A2) (main).webp', main: true }],
  },
  {
    id: 'Projets perso',
    photos: [
      { src: './img/gallerie/Personnal Projects/Experimentation 1.webp', main: true },
      { src: './img/gallerie/Personnal Projects/Experimentation 2.webp' },
      { src: './img/gallerie/Personnal Projects/Experimentation 5.webp' },
      { src: './img/gallerie/Personnal Projects/Instagram.webp' },
      { src: './img/gallerie/Personnal Projects/Lino.webp' },
      { src: './img/gallerie/Personnal Projects/lino2.webp' },
      { src: './img/gallerie/Personnal Projects/lino3.webp' },
      { src: './img/gallerie/Personnal Projects/lino4.webp' },
      { src: './img/gallerie/Personnal Projects/Typon Mini Fanzine 1.webp' },
    ],
  },
  {
    id: 'Goodies',
    photos: [
      { src: './img/gallerie/Records Covers - Goodies/Cheap Wine.webp' },
      { src: './img/gallerie/Records Covers - Goodies/Cheapies.webp', main: true },
      { src: './img/gallerie/Records Covers - Goodies/grainotheque.webp' },
    ],
  },
  {
    id: 'Street Art',
    photos: [
      { src: './img/gallerie/Street Arts/Building.webp' },
      { src: './img/gallerie/Street Arts/Coeur de Ville.webp' },
      { src: './img/gallerie/Street Arts/Coeur de Ville2.webp' },
      { src: './img/gallerie/Street Arts/Coeur de Ville3.webp' },
      { src: './img/gallerie/Street Arts/Coeur de Ville4.webp' },
      { src: './img/gallerie/Street Arts/Coeur de Ville5.webp' },
      { src: './img/gallerie/Street Arts/Coeur de Ville6.webp' },
      { src: './img/gallerie/Street Arts/Coeur de Ville7.webp' },
      { src: './img/gallerie/Street Arts/Coeur de Ville8.webp' },
      { src: './img/gallerie/Street Arts/Coeur de Ville9.webp' },
      { src: './img/gallerie/Street Arts/Vitrine2.webp' },
      { src: './img/gallerie/Street Arts/Vitrine.webp' },
      { src: './img/gallerie/Street Arts/Usine.webp', main: true },
    ],
  },
]

function createMainSwiper() {
  const body = document.querySelector('body')
  const swiperDiv = body.appendChild(document.createElement('div'))
  swiperDiv.classList.add('swiper', 'opacity')
  const swipperWrapper = swiperDiv.appendChild(document.createElement('div'))
  swipperWrapper.classList.add('swiper-wrapper')
  data.forEach((folder) => {
    folder.photos.forEach((photo) => {
      if (!photo.main == false) {
        const swiperSlide = swipperWrapper.appendChild(document.createElement('div'))
        swiperSlide.classList.add('swiper-slide')
        const swiperImg = swiperSlide.appendChild(document.createElement('img'))
        swiperImg.src = photo.src
        const swiperSlideInnerDiv = swiperSlide.appendChild(document.createElement('div'))
        const swiperInnerH1 = swiperSlideInnerDiv.appendChild(document.createElement('h1'))
        swiperInnerH1.innerText = folder.id
        const swiperSlideBtn = swiperSlideInnerDiv.appendChild(document.createElement('a'))
        swiperSlideBtn.href = 'javascript:;'
        swiperSlideBtn.classList.add('discover')
        swiperSlideBtn.innerText = 'Découvrir'
        swiperSlideBtn.addEventListener('click', () => {
          swiperDiv.classList.toggle('opacity')
          setTimeout(() => {
            swiperDiv.remove()
            const galleryDetail = body.appendChild(document.createElement('div'))
            galleryDetail.classList.add('galleryDetail', 'opacity')
            const galleryWrapper = galleryDetail.appendChild(document.createElement('div'))
            galleryWrapper.classList.add('swiper-wrapper')
            data.forEach((folder) => {
              if (folder.id == swiperSlideBtn.previousElementSibling.innerText) {
                folder.photos.forEach((photo) => {
                  const swiperSlide = galleryWrapper.appendChild(document.createElement('div'))
                  swiperSlide.classList.add('swiper-slide')
                  const galleryImg = swiperSlide.appendChild(document.createElement('img'))
                  galleryImg.src = photo.src
                })
              }
            })
            const prevArrow = galleryDetail.appendChild(document.createElement('div'))
            prevArrow.classList.add('swiper-button-prev')
            const nextArrow = galleryDetail.appendChild(document.createElement('div'))
            nextArrow.classList.add('swiper-button-next')
            const galleryDetailInnerDiv = galleryDetail.appendChild(document.createElement('div'))
            galleryDetailInnerDiv.classList.add('galleryDetailInnerDiv')
            const swiperInnerH1 = galleryDetailInnerDiv.appendChild(document.createElement('h1'))
            swiperInnerH1.innerText = folder.id
            const swiperBackBtn = galleryDetailInnerDiv.appendChild(document.createElement('a'))
            swiperBackBtn.href = 'javascript:;'
            swiperBackBtn.classList.add('discover')
            swiperBackBtn.innerText = 'Retour'
            swiperBackBtn.addEventListener('click', () => {
              galleryDetail.classList.toggle('opacity')
              setTimeout(() => {
                galleryDetail.remove()
              }, 750)
              setTimeout(() => {
                createMainSwiper()
              }, 750)
            })
            const swiper2 = new Swiper('.galleryDetail', {
              effect: 'coverflow',
              grabCursor: true,
              centeredSlides: true,
              slidesPerView: 'auto',
              coverflowEffect: {
                rotate: 1,
                stretch: 1,
                depth: 700,
                modifier: 1,
                slideShadows: false,
              },
              normalizeSlideIndex: false,
              initialSlide: 0,
              navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              },
            })
            galleryDetail.classList.remove('opacity')
          }, 750)
        })
      }
    })
  })
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
    normalizeSlideIndex: false,
    initialSlide: 2,
  })
  swiperDiv.classList.remove('opacity')
}

createMainSwiper()
