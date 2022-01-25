const validator = {
  isValid:function(creditCardNumber){
   creditCardNumber.reverse();

    console.log("valortarjeta",creditCardNumber);

    /*numeros pares: filtramos cada el elemento del array con .filter por numero y posicion
    para obtener solo los numeros en posiciones pares*/

let impares =creditCardNumber.filter (function (num,position){
        return (num,position % 2 != 0);             
    })

console.log("impares", impares);

let pares =creditCardNumber.filter (function (num,position){
    return (num,position % 2 == 0);             
})

console.log("pares", pares);


/* multiplicacion de posiciones pares*/

let dobles = pares.map(function (num){
  let multi= num*2
  if(multi>9) {
    multi =multi-9

  }

 
  return multi ;
}  

)
console.log("multi", dobles);


  }

    
  

  

};

export default validator;



/*

    /*numeros pares: filtramos cada el elemento del array con .filter por numero y posicion
    para obtener solo los numeros en posiciones pares
let pares = arrayNumbers.filter (function (num,position){
  return num,position % 2 == 0;
});

console.log("pares", pares);
/* multiplicacion de posiciones pares

let dobles = pares.map(function (num){
  return num*2;} 
      console.log("multi", dobles);
      )



});
*/