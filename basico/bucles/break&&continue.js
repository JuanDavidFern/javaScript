let drinkCoffee = 0;

while (drinkCoffee < 10) {
  drinkCoffee = drinkCoffee + 1;
  
  if (drinkCoffee === 8) { break }
  if (drinkCoffee === 5) { continue }

  console.log('Café ' + drinkCoffee);
}

for (let i = 0; i < 10; i++) {
  const esPar = i % 2 === 0;
  if (esPar) {
    continue;
  }

  // Solo mostramos este consola.log si es impar
  console.log(i); 

  // Salimos del bucle al llegar al 7
  if (i === 7) {
    break;
  }
}

alert('break se usa para terminar un bucle definitivamente\n' + 
          'continue avanza a la siguiente iteración del bucle, omitiendo todo lo que venga despues')