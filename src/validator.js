const validator = {

/* Aquí tomamos el metodo "isValid" para ejecutar dentro cada funcion del algoritmo de luhn */

  isValid:function(creditCardNumber){
  creditCardNumber.reverse();

    console.log("valortarjeta", creditCardNumber);

/*Utilizamos el metodo .map para recorrer el array y nos devolviera cada elemento convertido en un entero*/

  let Enteros = creditCardNumber.map(function (num){
    return  parseInt(num, 10);    
  })
  console.log("enteros", Enteros);

/*numeros impares y pares: filtramos cada el elemento del array con .filter por numero y posicion
para obtener los numeros pares e impares y guardarlos en un array diferente*/

    let impares = Enteros.filter (function (num,position){
      return (num,position % 2 != 1);   
    })
    console.log("impares", impares);
  

    let pares = Enteros.filter (function (num,position){
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
    console.log("dobles", dobles);

    let digitos = dobles.concat(impares);   
    console.log("digitos", digitos);

    let suma =  digitos.reduce((acc, valor) => acc + valor, 0);
    let resultados = suma % 10 === 0;
       return resultados  
  },
  
  }
    
  }

 

};

export default validator;
 
