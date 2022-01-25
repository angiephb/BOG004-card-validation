import validator from './validator.js';

console.log(validator);

const formulario = document.querySelector ("#formulario-tarjeta");
const inputNumero = document.querySelector ("#numero");
const enviar = document.getElementById ("btnEnviar");
let arrayNumbers = [];

/* Aqui le dimos una funcion al boton para que nos trajera la información del INPUT */

enviar.addEventListener("click", function(){
    /*console.log("antes",arrayNumbers);
    console.log("valor",inputNumero.value);*/

/*Aqui guardamos el valor del INPUT, lo separamos por "," paraque quedara un array con varios elementos */ 
    arrayNumbers = (inputNumero.value.split(''));  

/* Aquí llamamos la variable y el metodo para que ejecutara las funciones de "validator.js"
y guardara los datos en nuestro array "arrayNumbers" */ 
    validator.isValid(arrayNumbers)  
   
});

/* Aqui le dimos un evento de escucha:KEYUP al input del numero de la tarjeta
para que evitara algunos caractes*/

formulario.numero.addEventListener("keyup", (e) => {
    let valorNumero = e.target.value;

    formulario.numero.value = valorNumero
     //quitar espacios
    .replace(/\s/g, "")

    //elimina letras
    .replace(/\D/g, "")    

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