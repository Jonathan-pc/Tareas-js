// TAREA: Imprimí cada 3er número del 3 al 22 usando un 'bucle for'.

/*
let i;

for (i = 3; i <= 22; i = i + 3){
    console.log(i)
}
*/


// TAREA: Usando un bucle 'while', decile a tu computadora que registre los números de
//       diez a uno.

/*
let numero = 11
while (numero > 0){
    numero = numero - 1
    console.log(numero)
}
*/

// TAREA: Ha llegado el momento de un ejercicio clásico: 'FizzBuzz'.
// Cuenta del 1 al 50 e imprime los números:
// * Si un número es múltiplo de tres, imprime 'Fizz'.
// * Si es un múltiplo de 5, imprime 'Buzz'.
// * Si es un múltiplo de 3 y 5, imprime 'FizzBuzz'.
// * Para todo lo demás, imprime el número mismo.
// NOTA: Es posible que desees utilizar el operador aritmético modulo (%):
// Calcula el resto al dividir.
// 10% 3 = 1 - en 10 tenemos 3 * 3 + 1
// 16% 4 = 0 - en 16 tenemos 4 * 4
// 19% 4 = 3 - en 19 tenemos 4 * 4 + 3, etc.

/*
let i;

for (i = 1; i <= 50; i = i + 1){
    if (i % 3 === 0 && i % 5 === 0){
        console.log("FizzBuzz")
    } else if (i % 3 === 0){
        console.log("Fizz")
    } else if (i % 5 === 0) {
        console.log("Buzz")
    } else {
        console.log(i)
    }
}   
*/
// Calcular el promedio de todos los números en un array de números. (y ponerlo en una función)
// ej.: calcularPromedio([10,5,4,2,8])

/*
function calcularPromedio(array){
    let suma = 0;
    i = 0
    for (i = 0; i < array.length; i = i + 1 ) {
        suma = suma + array[2]
    } 
    return suma / array.length 
}

console.log(calcularPromedio([10,5,4,2,8]))
*/

/*
function verificarEdadEntrada(edad = 18){

    edad >= 18 ? console.log("Bienvenido al bar!") : console.log("Sos menor de edad")

}

verificarEdadEntrada(17)
*/

const sumar = function(n1, n2){
    return n1 + n2
}

const restar = function(n1, n2){
    return n1 - n2
}

function tareaOperador(funcionOperador, n1, n2){
    console.log(funcionOperador(n1, n2))
}

tareaOperador(sumar, 1, 2)