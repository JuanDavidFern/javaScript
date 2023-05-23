const frutas = ["manzana", "pera", "plátano", "fresa"]
console.log(frutas.length); // 4

const frutillas = ["manzana", "pera", "plátano", "fresa"]
//Cortas la longitud del array perdiendo la informacion que cortes
frutillas.length = 2;

console.log(frutillas); // ["manzana", "pera"]
console.log(frutillas.length) ;// 2

frutillas.push('melocoton');
console.log(frutillas.length);
console.log(frutillas);

//Te da el ultimo elemento de un array y lo elimina de el mismo
console.log(frutillas.pop());
console.log(frutillas.length);
console.log(frutillas);

////Te da el primer elemento de un array y lo elimina de el mismo
console.log(frutillas.shift());
console.log(frutillas);

//Añanade un elemento al array en el primer puesto
console.log(frutillas.unshift('principio'));
console.log(frutillas);

//Añanade un elemento al array en el último puesto
console.log(frutillas.push('final'));
console.log(frutillas);

//Con push como con unshift puedes añadir varios valores de una vez
console.log(frutillas.push('final2', 'final3', 'final4'));
console.log(frutillas);

/*
2 Metodos usando splice :
                          Eliminando objetos en un array.
                          Insetando objetos en un array.
*/

//Con el metodo splice podemos sacar el valor que queremos del array
//Este valor desaparecera con su uso pero siempre puedes guardarlo
let obejtoSacado
for (let index = 0; index < frutillas.length; index++) {
    if(frutillas[index] === 'final2'){
        //El primer parametro es la posición del array que queremos sacar
        //El segundo el el numero que queremos sacar de hay en adelante
        //Si los dejamos en blanco eliminara todo lo posterior
        obejtoSacado = frutillas.splice(index,1);
    }
    
}
console.log(frutillas);
console.log(obejtoSacado);

//Con el metodo splice también podemos insertar valores en un array
//El primer parametro (3) corresponde a la posicion donde queremos insertar
//El segundo parametro (0) corrresponde a el número de objetos que queremos eliminar 
//El tercer parametro ('Elemento a insetar') corresponde al elemento que queremos añadir al array
//De este modo frutillas.splice(3, 0, 'Elemento a insertar', 'Segundo elemento'); Podriamos insertar varios
frutillas.splice(3, 0, 'Elemento a insertar');
console.log(frutillas)