import validator from './validator.js';

console.log(validator);

const formulario = document.querySelector ("#formulario-tarjeta");
const inputNumero = document.querySelector ("#numero");
const enviar = document.getElementById ("btnEnviar");
let arrayNumbers = [];

/* Convertir input en array e invertir */
enviar.addEventListener("click", function(){

/* empezamos a trabajar en el algoritmo */ 

    /*console.log("antes",arrayNumbers);
    console.log("valor",inputNumero.value);*/
    arrayNumbers = (inputNumero.value.split(''));    
    arrayNumbers.reverse();
    console.log(arrayNumbers);

    /*numeros pares: filtramos cada el elemento del array con .filter por numero y posicion
    para obtener solo los numeros en posiciones pares*/

let impares = arrayNumbers.filter (function (num,position){
        return (num,position % 2 != 0);             
    })

console.log("impares", impares);

let pares = arrayNumbers.filter (function (num,position){
    return (num,position % 2 == 0);             
})

console.log("pares", pares);


/* multiplicacion de posiciones pares*/

let dobles = pares.map(function (num){
    return num*2;}        
)
console.log("multi", dobles);


});




/* numero de tarjeta*/
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

/* numero de tarjeta
formulario.numero.addEventListener("keyup", (e) => {
    var valorNumero = e.target.value;
    console.log(valorNumero);
});



/*multiplicacion numeros pares: usamos el parametro .map para multiplicar cada numero de la posicion par
por 2 y obtener el nuevo arreglo 

let suma =
    
if (dobles >= 9) {
    return dobles -= 9;

}
console.log("suma", dobles);

})
   
*/
