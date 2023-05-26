const persona = [
    ['nombre' , 'valeria'],
    ['edad', 29]
]

//queremos conseguir el objeto
//{nombre : 'valeria', edad : 27}

//object.fromEntries crea un objeto a partir de un array con esa extructura
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries
const valeria = Object.fromEntries(persona)

console.log(valeria);

