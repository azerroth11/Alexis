const gallerie = document.querySelector('.gallerie')
const imgs = [
    {
        id: 'Convention',
        src: './img/gallerie/Convention.webp',
        year: '2021',
    },
    {
        id: 'Chateau Asca Bis',
        src: './img/gallerie/Chateau Asca Bis.webp',
        year: '2021',
    },
    { id: 'GAM', src: './img/gallerie/GAM.webp', year: '2021' },

    { id: 'Colloque', src: './img/gallerie/Colloque V2.webp', year: '2021' },
    {
        id: 'Richard Allen',
        src: './img/gallerie/Richard Allen.webp',
        year: '2021',
    },
    {
        id: 'Developpez - vous!',
        src: './img/gallerie/Developpez-vous! Propaganda.webp',
        year: '2021',
    },
    {
        id: 'Experimentation 1',
        src: './img/gallerie/Experimentation 1.webp',
        year: '2021',
    },
    {
        id: 'Experimentation 2',
        src: './img/gallerie/Experimentation 2.webp',
        year: '2021',
    },
    {
        id: 'Experimentation 5',
        src: './img/gallerie/Experimentation 5.webp',
        year: '2021',
    },
    {
        id: 'Typon Mini Fanzine',
        src: './img/gallerie/Typon Mini Fanzine 1.webp',
        year: '2021',
    },
    { id: 'Usine', src: './img/gallerie/Usine.webp', year: '2021' },

    { id: 'Vitrine', src: './img/gallerie/Vitrine.webp', year: '2021' },
    { id: 'Vitrine2', src: './img/gallerie/Vitrine2.webp', year: '2021' },

    { id: 'Instagram', src: './img/gallerie/Instagram.webp', year: '2021' },
    {
        id: 'Cheap Wine',
        src: './img/gallerie/Cheap Wine.webp',
        year: '2021',
    },
    {
        id: 'Cheapies',
        src: './img/gallerie/Cheapies.webp',
        year: '2021',
    },
]

const videos = [
    {
        id: 'Cheap Wine - Sold Out',
        src: './img/gallerie/CHEAP WINE SOLD OUT.mp4',
        year: '2021',
    },
]

imgs.forEach(e => {
    const imgDiv = gallerie.appendChild(document.createElement('div'))
    const img = imgDiv.appendChild(document.createElement('img'))
    img.src = e.src
    img.alt = `Affiche ${e.id}`
    const imgDivDiv = imgDiv.appendChild(document.createElement('div'))
    const imgName = imgDivDiv.appendChild(document.createElement('h1'))
    imgName.innerText = e.id
    const imgDesc = imgDivDiv.appendChild(document.createElement('p'))
    imgDesc.innerText =
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint aliquid nam ut obcaecati nostrum placeat!'
    const imgYear = imgDivDiv.appendChild(document.createElement('h2'))
    imgYear.innerText = e.year

    // imgDiv.addEventListener('mouseover', () => {
    //     img.classList.add('hover')
    //     imgDivDiv.classList.add('visible')
    // })

    // imgDiv.addEventListener('mouseout', () => {
    //     img.classList.remove('hover')
    //     imgDivDiv.classList.remove('visible')
    // })
})

videos.forEach(e => {
    const videoDiv = gallerie.appendChild(document.createElement('div'))
    const video = videoDiv.appendChild(document.createElement('video'))
    video.src = e.src
    video.alt = `Vidéo ${e.id}`
    video.setAttribute('autoplay', true)
    video.setAttribute('muted', true)
    const videoDivDiv = videoDiv.appendChild(document.createElement('div'))
    const videoName = videoDivDiv.appendChild(document.createElement('h1'))
    videoName.innerText = e.id
    const videoDesc = videoDivDiv.appendChild(document.createElement('p'))
    videoDesc.innerText =
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint aliquid nam ut obcaecati nostrum placeat!'
    const imgYear = videoDivDiv.appendChild(document.createElement('h2'))
    imgYear.innerText = e.year

    // videoDiv.addEventListener('mouseover', () => {
    //     video.classList.add('hover')
    //     videoDivDiv.classList.add('visible')
    // })

    // videoDiv.addEventListener('mouseout', () => {
    //     video.classList.remove('hover')
    //     videoDivDiv.classList.remove('visible')
    // })
})
