const gallerie = document.querySelector('.gallerie')
const imgs = [
    {
        id: 'Convention',
        src: './img/Convention.jpg',
        year: '2021',
    },
    {
        id: 'Chateau Asca Bis',
        src: './img/Chateau Asca Bis.jpg',
        year: '2021',
    },
    { id: 'GAM', src: './img/GAM.jpg', year: '2021' },

    { id: 'Colloque', src: './img/Colloque V2.jpg', year: '2021' },
    { id: 'Richard Allen', src: './img/Richard Allen.jpg', year: '2021' },
    {
        id: 'Developpez - vous!',
        src: './img/Developpez-vous! Propaganda.jpg',
        year: '2021',
    },
    {
        id: 'Experimentation 1',
        src: './img/Experimentation 1.jpg',
        year: '2021',
    },
    {
        id: 'Experimentation 2',
        src: './img/Experimentation 2.jpg',
        year: '2021',
    },
    {
        id: 'Experimentation 5',
        src: './img/Experimentation 5.jpg',
        year: '2021',
    },
    {
        id: 'Typon Mini Fanzine',
        src: './img/Typon Mini Fanzine 1.jpg',
        year: '2021',
    },
    { id: 'Usine', src: './img/Usine.jpg', year: '2021' },
    { id: 'Vitrine', src: './img/Vitrine.jpg', year: '2021' },
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

    imgDiv.addEventListener('click', i => {
        i.target.classList.toggle('clicked')
        imgDivDiv.classList.toggle('clickedDiv')
    })
})
