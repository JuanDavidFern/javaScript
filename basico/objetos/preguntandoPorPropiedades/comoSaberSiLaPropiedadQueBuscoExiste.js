const usuario = {
    nombre : 'juan',
    loclizacion : {
        ciudad :'barcelona'
    }
}

//Cuando usamos ? antes de la propiedad que queremos buscar en este caso ?.localizacion
console.log(usuario?.loclizacion?.ciudad)

// Si buscaramos esto nos daria un fallo el programa al estar buscando sobre un elemento que no existe 
// console.log(usuario.loclizacion.ciudad.aswd.asd)

// Si lo buscamos asi devolvera undefind y no petara el programa por que primero preguntara
console.log(usuario?.loclizacion?.ciudad?.aswd?.asd)