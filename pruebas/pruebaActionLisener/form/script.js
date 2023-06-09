const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')
const boxes = document.querySelectorAll('.box')
const botonForm = document.getElementById('botonFormulario')

document.querySelector('form').addEventListener('submit', e => {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.target))
    if (verificarCorreoElectronico(data.user_mail)) {
        alert('Su nombre es: ' + data.user_name + 
            '\nSu correo es: ' + data.user_mail + 
            '\nMensaje: ' + data.user_message)
    } else {
        alert('El correro: ' + data.user_mail + ' no cumple con el formato' + 
                '\nUse el siguiente formato: usuario@example.com')
        currentActive--
        botonForm.disabled = true
        update()
    }
})

let currentActive = 1

next.addEventListener('click', () => {
    currentActive++

    update()
})

prev.addEventListener('click', () => {
    currentActive--

    botonForm.disabled = true

    update()
})

function verificarCorreoElectronico(correo) {
    var patron = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return patron.test(correo);
  }

function update() {
    circles.forEach((circle, idx) => { idx < currentActive ? circle.classList.add('active') : circle.classList.remove('active')})

    const actives = document.querySelectorAll('.active')

    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%'

    if(currentActive === 1) {
        prev.disabled = true
    } else if(currentActive === circles.length) {
        next.disabled = true
        botonForm.disabled = false
    } else {
        prev.disabled = false
        next.disabled = false
    }

    boxes.forEach((box, ind) =>{
        if(currentActive === ind + 1) {
            box.classList.remove('hide1')
            box.classList.remove('hide2')
            box.classList.add('show')
        } else if(currentActive < ind + 1) {
            box.classList.remove('show')
            box.classList.add('hide2')
        } else {
            box.classList.remove('show')
            box.classList.add('hide1')
        }
    })
}