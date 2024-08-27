/*Escribe un programa que reciba un arreglo de números y retorne un nuevo arreglo con 
solo los números pares utilizando funciones.*/

let numeros = [1,2,3,4,5,6,7,8,9,10];

function pares(numeros) {
    return numeros.filter(numeros => numeros % 2 === 0);
}

console.log(pares(numeros));