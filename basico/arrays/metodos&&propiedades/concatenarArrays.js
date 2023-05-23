//Fúncion concat en arrays
const numbers = [1, 2, 3]
const numbers2 = [4, 5]

const allNumbers = numbers.concat(numbers2);

console.log(numbers);
console.log(numbers2);
console.log(allNumbers); // [1, 2, 3, 4, 5]


//Concatenar con Spread
const numeros = [6, 7, 8]
const numeros2 = [9, 10]

//... Los tres puntos simbolizan el spread con ellos creamos un array concatenando varios          
const todosLosNumeros = [...numeros, ...numeros2]

console.log(todosLosNumeros) // [1, 2, 3, 4, 5]