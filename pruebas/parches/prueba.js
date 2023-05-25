let array = [11, 18, 23, 25, 48, 55, 88, 111, 120]

const primeraBusqueda = (array, numeroABuscar) => array.includes(numeroABuscar)

console.log(primeraBusqueda(array, 55))



const segundaBusqueda = (array, numeroABuscar) => array.some(array => array === numeroABuscar)

console.log(segundaBusqueda(array, 55))



const terceraBusqueda = (array, numeroABuscar) => array.find(array =>{
    if (array === numeroABuscar) {
        return numeroABuscar
    }
})

console.log(terceraBusqueda(array, 55))



const cuartaBusqueda = (array, numeroABuscar) => array.filter(array => {
    if (array === numeroABuscar) {
        return array
    }
})[0]

//const cuartaBusqueda = (array, numeroABuscar) => array.filter(array => array === numeroABuscar ? array : null)[0]

const cuartaBusquedaPaso = cuartaBusqueda(array, 55)
console.log(cuartaBusquedaPaso)

//Devuelve un array, no medifica el original
let pruebaFlat = [11, 18, 23, 25, 48, 55, 88, 111, 120,[33,44]]
console.log(pruebaFlat.flat())
console.log(pruebaFlat)

//faltmap es un map pero los resultados te haze un flat
const flatmap = (array, numeroABuscar) => pruebaFlat.flatMap( array => array !== numeroABuscar ? [] : array)[0]
console.log(flatmap(pruebaFlat, 55))

//Ejercicio
/**
 * En una biblioteca queremos saber qué libro es el que menos páginas tiene y el que más páginas.
 *  Por suerte, no hay dos libros con el mismo número de páginas.
 * Necesitamos que la función reciba un array de números, sin ordenar, y que devuelva un array de dos posiciones
 *  con el índice del libro con menos páginas y el índice del libro con más páginas.
 */

let arraysito = [18, 23, 25, 48, 55, 88, 111, 120, 11]

const maximoMinimo = array =>{
    let coleccion = []
    array.forEach((element, index, array) => {
        if (element === Math.max(...array)) {
            coleccion[1] = index
        }
        if (element === Math.min(...array)) {
            coleccion[0] = index
        }
    });
    return coleccion
}

console.log(maximoMinimo(arraysito))

const otraForma = (array, verdadero) => array.flatMap((array, index) =>{
    if (array === Math.max(...verdadero)) {
        return index
    }else if(array === Math.min(...verdadero)){
        return index
    }else
        return []
})

console.log(otraForma(arraysito, arraysito))


const hacerArray = () => {
    //eval() parsea un string y si tienes una operación la realiza
    let tamanio = eval('2**2')
    console.log(tamanio)
    let array = []
    for (let index = 0; index < tamanio; index++) {
     array[index] = Math.floor(Math.random() * 10 + 1) 
     console.log(array[index])
  }
  return array
  }

  console.log(hacerArray())



  const arr1 = [1, 2, [3,3]]

const result = arr1.flat(Infinity).flatMap((num) => (num === 3 ? 2 : 1))

console.log(result)

function miFuncion() {
    const  numsGreaterThanFive = number.map(num => num * 2).filter(num => num > 5)
    // const numsGreaterThenFive = number.flatMap(n => n * 2 > 5 ? n * 2 : [])
  }
  
  console.time('miFuncion');
  const number = [1, 2, 3, 4, 5, 6, 7]
  
  miFuncion();
  
  console.timeEnd('miFuncion');
