const textos = document.querySelectorAll('.texto')
const body = document.querySelector('body')
const letters = '0123456789ABCDEF';



const colorAleatorio = () => {
    let color = '#';
    for (let i = 0; i < 8; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

let color = colorAleatorio()

const eliminar = () => {
    textos.forEach(texto => {
        texto.classList.replace('activo', 'inactivo')
    })
}

const cargar = () => {
    textos.forEach(texto => {
        texto.addEventListener("mousemove", () => {
            eliminar()
            texto.classList.remove('inactivo')
            texto.classList.add('activo')
            document.body.style.backgroundColor = color
            color = colorAleatorio()
        })
    })

}

document.addEventListener('DOMContentLoaded', cargar(), false)