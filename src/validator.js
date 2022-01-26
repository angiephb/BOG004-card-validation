const validator = {

/* Aquí tomamos el metodo "isValid" para ejecutar dentro cada funcion del algoritmo de luhn */

  isValid:function(creditCardNumber){
   creditCardNumber.reverse();
   
   console.log("valortarjeta",creditCardNumber);

/*numeros impares y pares: filtramos cada el elemento del array con .filter por numero y posicion
  para obtener los numeros pares e impares y guardarlos en un array diferente*/
      console.log("digito",digitoA)
    let impares =creditCardNumber.filter (function (num,position){
      
        return (num,position % 2 !=1)            
    })
    console.log("impares", impares);
  

    let pares =creditCardNumber.filter (function (num,position){
    return (num,position % 2 == 1);             
    })
    console.log("pares", pares);

/*Aquí utilizamos el metodo map para obtener un array con los resultados de las operaciones
en las pocisiones pares*/

    let dobles = pares.map(function (num){
  let multi = num*2
  if (multi > 9) {
    multi = multi - 9
  } 
  return multi;
    })
    console.log("multi", dobles);
  
  }

    
  

  

};

export default validator;
