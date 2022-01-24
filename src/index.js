import validator from './validator.js';

console.log(validator);

const formulario = document.querySelector ("#formulario-tarjeta");


/* numero de tarjeta*/
formulario.numero.addEventListener("keyup", (e) => {
    let valorNumero = e.target.value;

    formulario.numero.value = valorNumero
     //quitar espacios
    .replace(/\s/g, "")

    //elimina letras
    .replace(/\D/g, "")     
    
    //espacios cada 4 numeros
    .replace(/([0-9]{4})/g, "$1 ")    

    //ultimo espacio
    .trim();



});



/* meses */
for (let i = 1; i <= 12; i++) {
    let opcion = document.createElement ("option");
    opcion.value = i;
    opcion.innerText = i;
    formulario.mes.appendChild(opcion);
}

/* años */
const yearActual = new Date().getFullYear();

for (let i = yearActual; i <= yearActual + 10; i++) {
    let opcion = document.createElement ("option");
    opcion.value = i;
    opcion.innerText = i;
    formulario.Year.appendChild(opcion);
}







/*
const formulario = document.getElementById("datacard");
const input = document.querySelectorAll("#datacard input");

const expresiones = {
        titular: /^[a-zA-Z]$/,
        numeroTarjeta: /^\d{0,16}$/,
        cvv: /^\d{0,3}$/,
        cuotas: /^[1|6|12|24|36|48]$/,
        celular: /^\d{0,10}$/
}

const formulario = document.getElementById("numero");
const enviar = document.getElementById("btnEnviar");

enviar.addEventListener("click", function(){
    console.log(formulario.value);
})
*/





