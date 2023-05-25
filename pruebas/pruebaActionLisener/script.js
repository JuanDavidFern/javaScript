// Function to change the content of t2
let contador = 0
function modifyText() {
    //coge el elemento con id t2 y modifica su valor nodeValue
    let t2 = document.getElementById("t2");
    t2.firstChild.nodeValue = "three";
  }
  
  // Function to add event listener to t
  function load() {
    let el = document.getElementById("t");
    //Cuando se haga click en el elemento con id t se llama a la funcion modifyText
    //click 1 click
    //dblclick 2 clicks
    el.addEventListener("click", modifyText, false);
    
  }
  
  //DOMContentLoaded Significa que realize la funcion load cuando la pagina se carge
  document.addEventListener("DOMContentLoaded", load, false);



  function modificarTexto() {
    //coge el elemento con id t2 y modifica su valor nodeValue
    let t1 = document.getElementById("t1");
    contador++
    t1.firstChild.nodeValue = 'Has hecho doble click ' + contador + ' veces'
  }
  
  // Function to add event listener to t
  function cargar() {
    let el = document.getElementById("t1");
    el.addEventListener("dblclick", modificarTexto, false);
  }

  //document.addEventListener("DOMContentLoaded", cargar, false);

  const hacerArray = () => {
    let tamanio = eval(prompt('Longitud del array'))
    let array = []
    for (let index = 0; index < tamanio; index++) {
     array[index] = Math.floor(Math.random() * 10 + 1) 
  }
  return array
  }

  function cargarArray() {
    let el = document.getElementById("t1");
    el.addEventListener("dblclick", cargarArrayDaVerdad, false);
  }

  function cargarArrayDaVerdad() {
    let t1 = document.getElementById("t2");
    t1.firstChild.nodeValue = hacerArray()
  }
  

  document.addEventListener("DOMContentLoaded", cargarArray, false);



