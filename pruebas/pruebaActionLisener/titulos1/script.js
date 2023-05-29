const textos = document.querySelectorAll('.texto')
const body = document.querySelector('body')

const eliminar = () => {
    textos.forEach(texto => {
        texto.classList.replace('activo', 'inactivo')
    })
}

const cargar = () => {
    textos.forEach(texto => {
        texto.addEventListener('click', () => {
            eliminar()
            body.classList.replace(body.className, texto.id)
            texto.classList.remove('inactivo')
            texto.classList.add('activo')
        })
    })

}

document.addEventListener('DOMContentLoaded', cargar(), false)
