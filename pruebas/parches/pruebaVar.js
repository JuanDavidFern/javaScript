console.time('miFuncion');
for (var index = 0; index < 3; index++) {
    setTimeout(() => {
        console.log(index);
    }, 3000)  
}

for (let w = 0; w < 3; w++) {
    setTimeout(() => {
        console.log(w);
    }, 3000)
}

console.log('hola');

console.timeEnd('miFuncion');