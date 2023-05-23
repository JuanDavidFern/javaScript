function sumar(a,b) {
    return a + b;
  }

// podemos guardar el resultado en una variable
const resultado = sumar(5, 6);


// o ver en consola directamente el resultado
console.log(resultado); 

function getRandomNumber() {
  // recuperamos un número aleatorio entre 0 y 1
  const random = Math.random(); // por ejemplo: 0.6803487380457318

  // lo multiplicamos por 10 para que esté entre 0 y 10
  const multiplied = random * 10; 

  // redondeamos hacia abajo para que esté entre 0 y 9
  const rounded = Math.floor(multiplied); 

  // le sumamos uno para que esté entre 1 y 10
  const result = rounded + 1; 

  // devolvemos el resultado
  return result;
}

console.log(getRandomNumber());

function getRandomNumber2() {
  return Math.floor(Math.random() * 10) + 1; 
}

console.log(getRandomNumber2());

function cocinarMicroondas(plato, tiempo, potencia) {
  if (plato === '🐥' && tiempo === 1 && potencia === 5) {
    return '🍗';
  }

  if (plato === '🥚' && tiempo === 2 && potencia === 3) {
    return '🍳';
  }

  return '❌ Plato no soportado'
}

console.log(cocinarMicroondas('🥚',2,3));


