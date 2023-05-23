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