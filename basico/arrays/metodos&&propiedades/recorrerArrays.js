let frutas = ['🍎', '🍌', '🍓']

//Frutas es el array con este bucle lo que hacemos en guardar
//en la variable fruta el elemento del array correpondiente en cada vuelta
for (let fruta of frutas) {
  console.log(fruta); // imprime el elemento en la posición i
}

/*
  2 formas de usar el bucle for each normal y arroy function
*/

let muchasFrutas = ['🍎', '🍌', '🍓']

//Declaramos el array y hacemos un for each la primera variable (fruta) 
//es donde se guardadn los valores por cada iteración del bucle
//La segunda variavle index guarda el indice
muchasFrutas.forEach(function (fruta, index) {
  console.log(fruta); // imprime el elemento en la posición i
  console.log(index);

})

let frutaArrow = ['🍎', '🍌', '🍓']

//Creamos un forEach con arrow function. (fruta) es la variable a iterar
frutaArrow.forEach((fruta, index) => {
  console.log(fruta); // imprime el elemento en la posición i
  console.log(index);
})

//El tercer parametro corresponde al propio array
frutaArrow.forEach((fruta, index, array) => {
  console.log(fruta); // imprime el elemento en la posición i
  console.log(index);
})