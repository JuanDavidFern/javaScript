const numbers = [13, 27, 44, -10, 81]

// encuentra el índice del primer número negativo
const firstNegativeNumberIndex = numbers.findIndex(number => number < 0)

console.log(firstNegativeNumberIndex) // -> 3

// ahora puedes usar el índice para acceder al elemento
console.log(numbers[firstNegativeNumberIndex]) // -> -10

const numerillos = [13, 27, 44, 81]

// encuentra el índice del primer número negativo
//si no lo encuentra devuelve -1
const primerIndecilloDelNumerilloNegativillo = numerillos.findIndex(number => number < 0)

console.log(primerIndecilloDelNumerilloNegativillo) // -> -1