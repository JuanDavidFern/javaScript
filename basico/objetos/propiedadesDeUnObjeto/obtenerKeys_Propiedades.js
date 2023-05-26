/**
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * nos devuelve las keys o properties de un objeto
 * Objet.keys()
 * 
 * 
 * let keys = Object.keys(objetoPorElQuePreguntamos)
 * 
 * 
 * 
 * Las cadenas de texto tienen índices como propiedades propias enumerables
 * console.log(Object.keys('Cadena'))
 * 
 * 
 * console.log(Object.keys('Cadena')) nos devolvera un array con el indice de los caracteres
 * 
 * 
 * 
 * https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
 * 
 * 
 * 
 * 
 */

const personas = {
    laura : 22, 
    luis : 33, 
    juan : 12
}

//como saber si un objeto tiene propiedades
//preguntamos por la longitud de las keys
if (Object.keys(personas).length) {
    console.log('hola');
}

//obtenemos las propiedades
let keys = Object.keys(personas)

console.log(keys)

const prueba2 = {
   
}

//en este caso usamos un objeto sin propiedades y podemos ver que no se muestra
if (Object.keys(prueba2).length) {
    console.log('hola');
}

//si negamos la condicion ! preguntaremos si no tiene longitud
//y nos contestara
if (!Object.keys(prueba2).length) {
    console.log('hola');
}

//Las cadenas de texto tienen índices como propiedades propias enumerables
console.log(Object.keys('Cadena'))

