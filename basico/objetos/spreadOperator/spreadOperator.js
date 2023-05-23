//creo un objeto con valores x
let obj =  {
    id:1,
    nombre: 'juan',
    edad: 45
}

console.log(obj);

//Segundo objeto, a las propiedades del obejto para mas tarde
//Sobre escribirlas deben llamarse iguales en este ejemplo
//nombre && nombre, edad && edad.
let datosModificar = {
    nombre:'pepe',
    edad:23
}

//En la creación del objeto unimos ambos con el spradeOperator
//Conseguimos que los valores con el mismo nombre se sobreescriban 
//El orden es importante tendran prioridad los objetos que se coloquen al final
//En este caso se queda el nombre de pepe por que es el ultimo
let objUndido = {
    ...obj, 
    ...datosModificar
    
}

console.log(objUndido);

//Podemos añadir propiedades, no solo sobreescribirlas
//Por separado como con otros objetos
let objAniendo = {
    ...objUndido,
    aniadido: 'prueba',
    id: 5
}

console.log(objAniendo);
