function cuentaAtras(numero) {
    // Condición base: Si el número que recibe es
    // menor de 0 entonces salimos de la función
    if (numero < 0) { return }
  
    // Si el número era mayor o igual a 0, lo mostramos
    console.log(numero);
  
    // Y llamamos a la función con el número anterior
    cuentaAtras(numero - 1);
  }

  cuentaAtras(6);

  function factorial(n) {
    // Condición base: Si el número es 0 o 1, devolvemos 1
    // y no llamamos a la función de nuevo
    if (n === 0 || n === 1) {
      return 1
    } else {
      // Si el número es mayor que 1, llamamos a la función
      return n * factorial(n - 1)
    }
  }
  
  console.log(factorial(5)) // Resultado: 120
  console.log(factorial(3)) // Resultado: 6