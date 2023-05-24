//Declaración de matríz
const matriz = [
    [1, 2, 3],
    [4, 5, 6]
  ]

  let numero = matriz[1][2]
  console.log(numero) // -> 6

//Recorrer una matríz con docle for
  for (let i = 0; i < matriz.length; i++) { // {1}
    for (let j = 0; j < matriz[i].length; j++) { // {2}
      console.log(matriz[i][j])
    }
  }

  //Recorrer una matriz con doble forEach
  matriz.forEach((fila, filaIndex) => {
    fila.forEach((elemento, columnaIndex) => {
      console.log('Fila ' + filaIndex)
      console.log('Columna ' + columnaIndex)
      console.log('Elemento ', elemento)
      console.log('')
    })
  })

  //Tres en raya
  const tablero = [
    ['X', 'O', 'X'],
    ['O', 'X', 'O'],
    ['O', 'O', 'X']
  ]

  // Verifica las líneas horizontales
for (let i = 0; i < 3; i++) {
    if (
      tablero[i][0] === tablero[i][1] &&
      tablero[i][1] === tablero[i][2]
    ) {
      console.log(`El ganador es: ${tablero[i][0]}`);
    }
  }
  
  // Verifica las líneas verticales
  for (let i = 0; i < 3; i++) {
    if (
      tablero[0][i] === tablero[1][i] &&
      tablero[1][i] === tablero[2][i]
    ) {
      console.log(`El ganador es: ${tablero[0][i]}`);
    }
  }
  
  // Verifica la diagonal de arriba izquierda a derecha abajo
  if (
    tablero[0][0] === tablero[1][1] &&
    tablero[1][1] === tablero[2][2]
  ) {
    console.log(`El ganador es: ${tablero[0][0]}`);
  }
  
  // Verifica la diagonal de derecha arriba a izquierda abajo
  if (
    tablero[0][2] === tablero[1][1] &&
    tablero[1][1] === tablero[2][0]
  ) {
    console.log(`El ganador es: ${tablero[0][2]}`);
  }

//Ejercicio
/**
 * Recibimos una matriz de cadenas de texto. Tenemos que localizar la posición de la palabra "JavaScript"
 * en la matriz y devolver su posición como un array de dos elementos: el índice de la fila y el índice de la columna.
 */
const matrix = [
    ['HTML', 'CSS', 'JavaScript'],
    ['Java', 'C++', 'Python'],
    ['Ruby', 'Go', 'Swift']
  ]

  let stringABuscar = 'JavaScript'
  
  //Arrow function
  const position = matrix =>{
    let array = [-1, -1]
    matrix.forEach((row, index) => {
      row.forEach((col, indexRow) => {
        if(col === stringABuscar)
          array = [index,indexRow]
      })
    })
    return array
  }
  console.log(position(matrix)) // -> [0, 2]
  console.log(findJavaScript(matrix))
  
 //Function clásica
  function findJavaScript(matrix) {
    let array = [-1, -1]
    matrix.forEach((row, index) => {
      row.forEach((col, indexRow) => {
        if(col === 'JavaScript')
          array = [index,indexRow]
      })
    })
    return array
  }