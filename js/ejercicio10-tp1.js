let numero = parseInt(prompt('Ingrese un numero'));
console.log(numero);

if (numero % 2 === 0 && numero % 3 === 0 && numero % 5 === 0 && numero % 7 === 0) {
    document.write('El numero es divisible por 2, 3, 5, 7');
}

else if (numero % 2 === 0) {
    document.write("<br>El numero es divisible por 2");
}
else if (numero % 3 === 0) {
    document.write("<br>El numero es divisible por 3 ");
}
else if (numero % 5 === 0) {
    document.write("<br>El numero es divisible por 5 ");
}
else if (numero % 7 === 0) {
    document.write("<br>El numero es divisible por 7 ");
}
