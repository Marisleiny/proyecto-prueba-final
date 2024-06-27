fetch("./parts/header.html")
.then(response => response.text())
.then(data => {
    document.querySelector('.header').innerHTML = data
})

fetch("./parts/footer.html")
.then(response => response.text())
.then(data => {
    document.querySelector('.footer').innerHTML = data
})

let carrusel = document.querySelector('.carrusel__container')
let packs = carrusel.querySelectorAll('.carrusel__container__content')
const prev = carrusel.querySelector('.carrusel__container__prev')
const next = carrusel.querySelector('.carrusel__container__next')
let counter = 0

setInterval( () => { 
    if (counter < packs.length - 1) {
        counter++;
        let calc = counter * -30;
        carrusel.style.transform = `translateX(${calc}vw)`;
    } else if (counter == packs.length - 1) {
        counter = 0;
        let calculo = counter * -30;
        carrusel.style.transform = `translateX(${calculo}vw)`;
    }
}, 2000)

prev.addEventListener('click', () => {
    counter --;
})

const iconHamburguesa = document.querySelector('.hamburguesa')
const popUp = document.querySelector('.overlay')
const boton = document.popUp.querySelector('.overlay__button')

iconHamburguesa.addEventListener('click', () => {
    popUp.classList.toggle('hidden')
})

boton.addEventListener('click', () => {
    popUp.classList.toggle('hidden')
})
