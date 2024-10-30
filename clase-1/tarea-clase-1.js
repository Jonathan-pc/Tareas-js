// crear una función que tome como parámetro el año actual y el año de nacimiento
// y calcule la edad del usuario (más o menos).
// Preguntarle estos datos al usuario y guardarlos en 2 variables
// Ejecutar la función con estos datos
// Impriman el resultado en la consola

/*
function calcularEdadUsuario (anioActual, anioNacimiento){
    return anioActual - anioNacimiento
}

let anioActual = prompt("Indicar año actual");
let anioNacimiento = prompt ("Indicar año de nacimiento");

alert("Tenes " + calcularEdadUsuario(anioActual,anioNacimiento) + " años");
console.log(calcularEdadUsuario(anioActual.anioNacimiento))
*/

// Preguntar el salario anual y calcular el salario mensual
// Preguntar el salario mensual y calcular el anual
// diario... semanal, por hora. etc.

/*
const meses_anuales = 12
const semanas_anuales = 52
const dias_anuales = 365

let salarioMensual = Number(prompt("Cual es tu salario mensual?"))
let salarioAnual = Number(prompt("Cual es tu salario anual?"))

function calcularSalarioAnualTotal(salarioMensual){
    return salarioMensual * meses_anuales
}

function calcularSalarioMensualTotal (salarioAnual){
    return salarioAnual / meses_anuales
}

function calcularSalarioSemanalTotal (salarioAnual){
    return salarioAnual / semanas_anuales
}

function calcularSalarioDiarioTotal (salarioAnual){
    return salarioAnual / dias_anuales
}

console.log("Tu salario anual es " + calcularSalarioAnualTotal(salarioMensual))
console.log("Tu salario mensual es " + calcularSalarioMensualTotal(salarioAnual))
console.log("Tu salario semanal es " + calcularSalarioSemanalTotal(salarioAnual))
console.log("Tu salario diario es " + calcularSalarioDiarioTotal(salarioAnual))
*/

/// SCOPE

// Variable hoisting -> izar

//console.log(hola); //Falla porque no está definida

//console.log(mensaje); //No falla, pero muestra undefined... por qué?
//var mensaje = 'Hola, mundo';
// console.log(mensaje); //Hola, mundo

// Y con let?

/*
console.log(mensaje);
let mensaje = "Hola MUndo"
*/
// let mensaje = 'Hola, mundo';
// console.log(mensaje); //error

// function hoisting

/*
pruebaHoisting(); //funciona!
function pruebaHoisting(){
    console.log('prueba');
}
*/
//pruebaHoisting();


/*
var a = 1; //global
let b = 2; //global

function prueba(c) { //c es un parámetro de la función prueba. LOCAL.
    let d = 4; //local a la función

    if(c === 3){
        var e = 5; // por hoisting termina siendo local a la función
        let f = 6; // local al IF

        console.log('a dentro del if vale: ' + a); // 1
        console.log('b dentro del if vale: ' + b); // 2
        console.log('c dentro del if vale: ' + c); // lo que sea que le pasen a prueba
        console.log('d dentro del if vale: ' + d); // 4
        console.log('e dentro del if vale: ' + e); // 5
        console.log('f dentro del if vale: ' + f); // 6
    }

    console.log('a dentro de la funcion pero fuera del if, vale: ' + a); // 1
    console.log('b dentro de la funcion pero fuera del if, vale: ' + b); // 2
    console.log('c dentro de la funcion pero fuera del if, vale: ' + c); // lo que sea que le pasen a prueba
    console.log('d dentro de la funcion pero fuera del if, vale: ' + d); // 4
    console.log('e dentro de la funcion pero fuera del if, vale: ' + e); // 5
    // console.log('f dentro de la funcion pero fuera del if, vale: ' + f); // error
}

prueba(3);
*/


//console.log('a vale: ' + a); // 1
//console.log('b vale: ' + b); // 2
// console.log('c vale: ' + c); // error
// console.log('d vale: ' + d); // error
// console.log('e vale: ' + e); // error
// console.log('f vale: ' + f); // error

/*
function calcularMesesVividos (mesesVividos){
    console.log ("mesesVividos vale: " + mesesVividos);
    console.log ("anioNacimiento vale: " + anioNacimiento);
    console.log ("mesNacimiento vale : " + mesNacimiento);

    return (2025 - anioNacimiento) * 12 + mesNacimiento;
}
*/

function calcularMesesVividos(anioNacimiento, mesNacimiento){
    return (2025 - anioNacimiento) * 12 + mesNacimiento;
}

let anioNacimiento = Number(prompt("En que año naciste?"));
let mesNacimiento = Number(prompt("En que mes naciste?"));

console.log("Tenes " + calcularMesesVividos(anioNacimiento, mesNacimiento) + " meses vividos");