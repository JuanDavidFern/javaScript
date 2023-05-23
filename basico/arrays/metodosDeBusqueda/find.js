//find no devuelve un valor booleano sino que devuelve el primer valor que cumpla la condición

const numbers = [13, 27, 44, -10, 81]
// encuentra el primer número negativo
const firstNegativeNumber = numbers.find(number => number < 0)

console.log(firstNegativeNumber) // -> -10

const numeritos = [13, 27, 44, 81]
// encuentra el primer número negativo
const primerNumeritoNegativillo = numeritos.find(number => number < 0)

console.log(primerNumeritoNegativillo) // -> undefined