alert("Mensaje que se muertra a un usuario");

//Se muestra dialogo y se le pide al usuario que escriba. Esto devuelve un string
var nombre = prompt("Ingrese su nombre:");
console.log("Hola, " + nombre + "!");

//Se muestra dialogo al usuario y se le pide un booleano
var confirmacion = confirm("¿Estás seguro de que deseas continuar?");
if (confirmacion) {
  console.log("El usuario confirmó.");
} else {
  console.log("El usuario canceló.");
}

const suma = (a, b) => a + b;

console.log(suma(parseFloat(prompt('Introduzca el primer número de la suma:'))), parseFloat(prompt('Introduzca el segundo número de la suma:')))