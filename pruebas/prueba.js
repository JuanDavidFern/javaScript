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



const cuartaBusqueda = (array, numeroABuscar) => array.map(array =>{
    if (array === numeroABuscar) {
        return numeroABuscar
    }
}).filter(array => {
    if (array === numeroABuscar) {
        return array
    }
})[0]

const cuartaBusquedaPaso = cuartaBusqueda(array, 55)
console.log(cuartaBusquedaPaso)

