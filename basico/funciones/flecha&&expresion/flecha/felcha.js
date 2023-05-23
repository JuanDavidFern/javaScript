let a = 70, b = 7;

// Declaración de función regular
function sumar(a, b) {
    return a + b;
  }
// Función flecha
const sumarFlecha = (a, b) => {
    return a + b;
}
  
// Función flecha con return implícito
const sumarFlecha2 = (a, b) => a + b;

// La función flecha o tiene por que tener return
const sumarFlecha3 = (a, b) => {
    console.log(a, b);
}

// La función flecha o tiene por que tener return ni en una linea
const sumarFlecha4 = (a, b) => console.log(a, b); 

console.log(sumar(a, b));
console.log(sumarFlecha(a, b));
console.log(sumarFlecha2(a, b));
sumarFlecha3('adios', 'bambino');
sumarFlecha4('awuayin', 'copión');