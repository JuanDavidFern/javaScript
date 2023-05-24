//every devuelve true solo si todos los elementos coinciden con lo que se pregunta

// ¿Todos los emojis son felices?
const emojis = ['😀', '😂', '😍', '😭', '🥺', '😎']
const todosSonFelices = emojis.every(emoji => emoji === '😀')
console.log(todosSonFelices) // -> false

// ¿Todos los números son pares?
const numbers = [2, 4, 7, 10, 12]
const todosSonPares = numbers.every(number => number % 2 === 0)
console.log(todosSonPares) // -> false

// ¿Todos los strings son mayores a 3 caracteres?
const names = ['Miguela', 'Juana', 'Itziara', 'Isabela']
const todosLosNombresSonLargos = names.every(name => name.length > 3)
console.log(todosLosNombresSonLargos) // -> true

//Ejercicio
/**
 * Crear una función que reciba un array de palabras y devuelva true si todas las palabras term
 * inan con la letra "a" y false si al menos una palabra no termina con la letra "a".
 * Usa el método endsWith() de string para resolverlo.
 */
function acabanEnA(words) {
    return words.every(word => word.endsWith('a'))
  }

console.log(acabanEnA(names))