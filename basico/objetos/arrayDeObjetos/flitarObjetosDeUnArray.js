//array de objetos
const personas = [
    {nombre : 'juan' , profesion : 'barrendero'},
    {nombre : 'luis' , profesion : 'carpintero'},
    {nombre : 'maria' , profesion : 'bombero'},
    {nombre : 'alba' },
]

console.log(personas)

//filtramos los que persona.profesion devuelve true 
const enActivo = personas.filter(persona => persona.profesion)

console.log(enActivo)

//ahora filtramos los que no tienen profesión
const enParo = personas.filter(persona => !persona.profesion)

console.log(enParo)

//hacemos un mapeo del array
const asignarNini = personas.map(persona => {
    //si la persona no tiene profesion le asignamos nini
    if (!persona.profesion) {
        persona.profesion = 'nini'
    }
    //devolvemos la persona entera
    return persona
})

console.log(asignarNini)
 
