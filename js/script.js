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

    imgDiv.addEventListener('mouseover', () => {
        img.classList.add('hover')
        imgDivDiv.classList.add('visible')
    })

    imgDiv.addEventListener('mouseout', () => {
        img.classList.remove('hover')
        imgDivDiv.classList.remove('visible')
    })
})
