//Ejercicio 2.1: Dado el array [3, 7, 2, 9, 5], calcula su suma usando for o for...of.

const array = [3, 7, 2, 9, 5];
let sum = 0;

for(
    let num of array){
    sum += num;
}
 
console.log(sum)

//Ejercicio 2.2: Encuentra el número mayor en el array [12, 45, 6, 89, 23].

const arra = [12, 45, 6, 89, 23];
const NumAlto = Math.max(...arra);

console.log(NumAlto);

// Ejercicio 2.3: Filtra los números menores a 10 del array [15, 3, 8, 12, 1] y crea un nuevo array.

const arre = [15, 3, 8, 12, 1];
const cumplen = array.filter(nu => nu < 10);
console.log(cumplen)
