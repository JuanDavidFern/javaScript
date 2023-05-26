const saludo = nombre => console.log(`Hola ${nombre}`)


//set time out es una funcion que recibe primero la funcion que quieres que ejecute
//Segundo los milisegundos que va a esperar
//Tercero los parametros de entrada del primer metodo
setTimeout(saludo, 2000, 'Juanan') 

saludo('anfros')

