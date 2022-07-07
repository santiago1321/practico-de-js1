let numero1 = parseInt(prompt('Ingrese el primer numero'));
let numero2 = parseInt(prompt('Ingrese el segundo numero'));
let numero3 = parseInt(prompt('Ingrese el tercer numero'));

console.log(numero1);
console.log(numero2);
console.log(numero3);

if ( numero1 > numero2 && numero1 > numero3) {
    document.write('El primer numero es el mayor: ' + numero1);
   }else if (numero2 > numero3){
    document.write('el segundo valor es el mayor: ' + numero2); 
   }else{
    document.write('El tercer numero es el mayor: ' + numero3);
   }

