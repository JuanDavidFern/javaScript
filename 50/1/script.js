const panels = document.querySelectorAll('.panel')

function cambiarTamanio() {
    panels.forEach(panel => {
        panel.addEventListener('click', () => {
            removeActiveClasses()
            panel.classList.add('activet')
        })
    })
}

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('activet')
    })
}

document.addEventListener("DOMContentLoaded", cambiarTamanio, false);