/**
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * nos da los valores de un array
 * Objet.values()
 * 
 * 
 * 
 * 
 * const nuevoArrayConLosValores = Object.values(arrayDelQueQueremosObtenerValores)
 * 
 * 
 * parámetros que no son Objetos se fuerzan a que se comporten como tal
 * console.log(Object.values('foo')); // ['f', 'o', 'o']
 * 
 * 
 * 
 * 
 * https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Object/values
 * 
 * 
 * 
 * 
 */

//objeto 
const edades = {
    juan : 24,
    luis : 56,
    maria : 23
}

const prueba = {
    antonio : 2,
    ...edades
}


//Mostramos valores de todo el objeto
console.log(prueba)

//modificamos el valor de la edad de juan
//aunque la variable sea const podemos modificar sus valores 
//por que const no nos deja modificar el objeto en si
//pero si sus valores internos
prueba.juan = 87

//creamos una variable con los valores dentro del objeto edades
const valores = Object.values(prueba)

//mostramos los valores 
console.log(valores)

//creamos una variable que guardara el valor total
//para ello usaremos reduce que usa 2 parametros 
//el primero sera global que se acumulara en todas la iteraciones
//el , 0 del final indica su valor inicial
//el segundo sera el iterable que pasara por todos los valores del array
const total = valores.reduce((total, actual) => {
    console.log(total)
    console.log(actual)
    return total + actual
    
}, 0)

console.log(total)

// parámetros que no son Objetos se fuerzan a que se comporten como tal
console.log(Object.values('foo')); // ['f', 'o', 'o']

