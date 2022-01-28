const validator = {

/* Aquí tomamos el metodo "isValid" para ejecutar dentro cada funcion del algoritmo de luhn */

  isValid:function(creditCardNumber){
    creditCardNumber.reverse(); 

<<<<<<< HEAD
   /* console.log("valortarjeta", creditCardNumber);*/
=======
    /*console.log("valortarjeta", creditCardNumber);*/
>>>>>>> 6e2813f1817f689befce6d42d047394741dfb642

/*Utilizamos el metodo .map para recorrer el array y nos devolviera cada elemento convertido en un entero*/

  let Enteros = creditCardNumber.map(function (num){
    return  parseInt(num, 10);    
  })
  /*console.log("enteros", Enteros);*/

/*numeros impares y pares: filtramos cada el elemento del array con .filter por numero y posicion
para obtener los numeros pares e impares y guardarlos en un array diferente*/

    let impares = Enteros.filter (function (num,position){
      return (num,position % 2 != 1);   
    })
<<<<<<< HEAD
   /* console.log("impares", impares);*/
=======
    /*console.log("impares", impares);*/
>>>>>>> 6e2813f1817f689befce6d42d047394741dfb642
  

    let pares = Enteros.filter (function (num,position){
    return (num,position % 2 == 1);             
    })
<<<<<<< HEAD
   /* console.log("pares", pares);*/
=======
    /*console.log("pares", pares);*/
>>>>>>> 6e2813f1817f689befce6d42d047394741dfb642

/*Aquí utilizamos el metodo map para obtener un array con los resultados de las operaciones
en las pocisiones pares, ejecutamos multiplicacion y suma de los digitos mayores que 9*/

    let dobles = pares.map(function (num){
      let multi = num*2
      if (multi > 9) {
        multi = multi - 9
      } 
      return multi;
    })
    /*console.log("dobles", dobles);*/

    let digitos = dobles.concat(impares);   
    /*console.log("digitos", digitos);*/
<<<<<<< HEAD
=======

/* Aqui utilizamos el metodo .reduce, para que nos acumulara o sumara todos los digitos
y nos diera un numero de 2 cifras */
>>>>>>> 6e2813f1817f689befce6d42d047394741dfb642

    let suma =  digitos.reduce((acc, valor) => acc + valor, 0);
    let resultados = suma % 10 === 0;
       return resultados;  
  },

/* Aqui esta maskify, utilizamos dentro de la funcion el metodo .map para que nos recorriera el array original
y lo trajera enmascarando las primeras 12 cifras*/

  maskify: (creditCardNumber) => {
    return creditCardNumber.map( (num, position) => {
      return (position < creditCardNumber.length - 4 ) ? '#': num;
    }).join('');
},
};

export default validator;
 
