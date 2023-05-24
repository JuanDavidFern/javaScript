//El metodo reduce devuleve un unico valor de un array
/**
 * La función recibe tres parámetros:

El acumulador: el valor que se va a ir acumulando en cada iteración
El elemento actual: el elemento del Array que estamos iterando en ese momento.
El índice: la posición del elemento actual en el Array.
 */
const numbers = [1, 2, 3]

const sum = numbers.reduce((accumulator, currentNumber, index) => {
    console.log(index)
  return accumulator + currentNumber
}, 0) // <- el 0 es el valor inicial

console.log(sum) // 6

//Multiplicamos los números pares y los multiplicamos por 2 
//y nos quedamos los mallores de 5
const numeroides = [1, 2, 3, 4, 5, 6, 7]

const doubleEvenNumbers = numeroides.reduce((accumulator, currentNumber) => {
  const doubled = currentNumber * 2
  const isEven = doubled % 2 === 0
  const isGreaterThanFive = doubled > 5

  // si es par y mayor que 5, lo añadimos al array
  if (isEven && isGreaterThanFive) {
    // para ello devolvemos un nuevo array con el valor actual
    return accumulator.concat(doubled)
  } else {
    // si no, devolvemos lo que ya teníamos
    return accumulator
  }
}, []) // <- el array vacío es el valor inicial

console.log(doubleEvenNumbers) // [6, 8, 10, 12, 14]