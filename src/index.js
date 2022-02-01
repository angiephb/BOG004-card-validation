 import validator from './validator.js';

/*console.log(validator);*/

const formulario = document.querySelector ("#formulario-tarjeta");
const inputNumero = document.querySelector ("#numero");
const enviar = document.getElementById ("btnEnviar");
const enviar2 = document.querySelector("#btnEnviar2");
const cerrar = document.querySelector(".contenido .btn-cerrar");

/*funcionalidad del boton formulario cliente para que traiga el formulario de la tarjeta */

enviar2.addEventListener("click", function (){
    document.querySelector(".contenido").classList.add("active");
});

cerrar.addEventListener("click", function (){
   document.querySelector(".contenido").classList.remove("active");
});


/* Aqui le dimos una funcion al boton para que nos trajera la información del INPUT */

enviar.addEventListener("click", function(){

/* Aquí llamamos las variables y el metodo para que ejecutara las funciones de "validator.js" */ 

let enmascarado = validator.maskify(inputNumero.value);  

let validacion = validator.isValid(inputNumero.value);
if (validacion === true){
     alert ("El número " + enmascarado + " es valido, Tu pago ha sido exitoso")
  }else {alert ("El número " +  enmascarado + " es Invalido, Por favor ingresa un nuevo número");
  }
   
});

/* Aqui le dimos un evento de escucha:KEYUP al input del numero de la tarjeta
para que evitara algunos caractes*/

formulario.numero.addEventListener("keyup", (e) => {
    let valorNumero = e.target.value;
    
    formulario.numero.value = valorNumero
     //quitar espacios
    .replace(/\s/g, "")

    //ultimo espacio
    .trim();
    
});

/* Aquí modificamos las opciones de seleccion en meses y las personalizamos con un ciclo FOR */

for (let i = 1; i <= 12; i++) {
    let opcion = document.createElement ("option");
    opcion.value = i;
    opcion.innerText = i;
    formulario.mes.appendChild(opcion);
}

/* Aquí modificamos las opciones de seleccion en año y las personalizamos con un ciclo FOR */

const yearActual = new Date().getFullYear();

for (let i = yearActual; i <= yearActual + 10; i++) {
    let opcion = document.createElement ("option");
    opcion.value = i;
    opcion.innerText = i;
    formulario.Year.appendChild(opcion);
    
}



