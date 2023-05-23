const emojis = ['✨', '🥑', '😍']

//indexOf devuelve el indice de lo que estamos preguntando
const posicionCorazon = emojis.indexOf('😍')

console.log(posicionCorazon) // -> 2

/*
 array.some()
*/ 
//some devulve true con que solo coincida uno de los elementos
const tieneCorazon = emojis.some(emoji => emoji === '😍')
console.log(tieneCorazon) // -> true

const names = ['Leo', 'Isa', 'Ían', 'Lea']

const tieneNombreLargo = names.some(name => name.length > 3)
console.log(tieneNombreLargo) // -> false

//some detiene la ejecución en el momento de encontrar un true
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

const tieneNumeroMayorA5 = numbers.some(number => {
  console.log(`Estoy iterando sobre el número ${number}`) // -> Imprime hasta el número 6
  return number > 5
})

console.log(tieneNumeroMayorA5) // -> true