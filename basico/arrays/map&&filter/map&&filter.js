//La función filter Filtra con la condición que tu le metas
const numbers = [1, 2, 3, 4, 5, 6, 7]

const evenNumbers = numbers.filter(function (number) {
  return number % 2 === 0
})

console.log(evenNumbers) // [2, 4, 6]

const strings = ['hola', 'adiós', 'casa', 'coche', 'perro', 'gato']

// en las cadenas de texto podemos usar el método `includes`
// para saber si una cadena contiene otra:
const stringsWithA = strings.filter(string => string.includes('a'))

console.log(stringsWithA)

//La función .map sirve para hacer modificaciones
//sobre algun elemento del array
const numerillos = [1, 2, 3, 'hola']
//Operador ternario
const doubleNumbers = numerillos.map(numerillos => typeof numerillos === 'number' ? numerillos * 2 : numerillos)

console.log(doubleNumbers)

const palabritas = ['hola', 'javascript', 'midu', 'programación']

const stringsLength = palabritas.map(string => string.length)

console.log(stringsLength) // [4, 10, 4, 12]

/**
 * map + filter 
 * 
 */
const n = [1, 2, 3, 4, 5, 6, 7]
//Primero multiplicamos todos los valores por 2 y luego nos quedamos con los mayores de 5
const numsGreaterThanFive = n
  .map(number => number * 2) // [2, 4, 6, 8, 10, 12, 14]
  .filter(number => number > 5) // [6, 8, 10, 12, 14]

console.log(numsGreaterThanFive) // [6, 8, 10, 12, 14]


const nu = [1, 2, 3, 4, 5, 6, 7]
//Primero cojemos los pares y luego multiplicamos por 2
const doubleEvenNumbers = nu
  .filter(number => number % 2 === 0) // [2, 4, 6]
  .map(number => number * 2) // [4, 8, 12]

console.log(doubleEvenNumbers) // [4, 8, 12]

//Ejercicio
/**
 *Recibes dos parámetros: una lista de palabras words y una palabra word.
  Primero, busca el índice de la palabra en la lista. Después, usa ese índice
  (que será un número) y devuelve todas las palabras de words que sean más largas
  (length) que el número del índice.
 */

function buscaPalabras(words, word) {
    let indice = words.findIndex(palabra => palabra === word)
    return words.filter(palabra => palabra.length > indice)
    
}

const array = ['play', 'balon', 'asa', 'taza', 'tio']

console.log(buscaPalabras(array, 'tio'))

const flecha = (words, word) => {
  let indice = words.findIndex(palabra => palabra === word)
    return words.filter(palabra => palabra.length > indice)
}
console.log(flecha(array, 'tio'))