let numeros = [5, 10, 2, 25, 7]
/*
Por que le pasamos una función a .sort esta devuelve
Un valor negativo si el primer argumento debe aparecer antes que el segundo.
Un valor positivo si el segundo argumento debe aparecer antes que el primero.
Cero si ambos argumentos son iguales.
*/
numeros.sort(function (a, b) {
    return a - b
})

console.log(numeros) // [2, 5, 7, 10, 25]


let numerillos = [5, 10, 2, 25, 7]

//Usando una arrow functión
//Para ordenar de forma descandente restamos b - a
numerillos.sort((a, b) => b - a)

console.log(numerillos)

//Usamos el spreadOperator ... para no modificar el original
let numeretes = [5, 10, 2, 25, 7]
//Copiadmos el array numeretes dentro de copiaNúmeros
const copiaNumeros = [...numeretes]
// ordenamos la copia y no el original
copiaNumeros.sort((a, b) => a - b)

console.log(copiaNumeros) // [2, 5, 7, 10, 25]
console.log(numeretes) // [5, 10, 2, 25, 7]

//Ejercicio
/**
 * Recibes una lista de números. Debes ordenar los números de menor a mayor
 *  según su valor absoluto. Eso quiere decir que los números negativos
 *  pierden el signo y se ordenan como si fueran positivos.
 * Por ejemplo, si recibes [5, -10, -2, -25, -7] deberías devolver [-2, 5, 7, -10, -25].
 * Puedes usar el método Math.abs(num) para obtener el valor absoluto de un número.
 */

function sortAbsoluteNumbers(numbers) {
    return numbers.sort((a, b) => Math.abs(a) - Math.abs(b))
}

console.log(sortAbsoluteNumbers(numeretes))

/* 
Como ves, .sort() modifica el array original. Si quieres obtener un array ordenado sin modificar el original, 
puedes usar el método .toSorted(). Sólo ten en cuenta que, ahora mismo, su soporte en navegadores es limitado.

let numeros3 = [5, 10, 2, 25, 7]
let numerosOrdenados = numeros3.toSorted((a, b) => a - b)

console.log(numerosOrdenados) // [2, 5, 7, 10, 25]
console.log(numeros3) // [5, 10, 2, 25, 7]
*/