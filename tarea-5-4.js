const $numeros = document.querySelectorAll("li")
let arrayDeNumeros = []

for (let i = 0; i<$numeros.length; i = i + 1){
    arrayDeNumeros.push(Number($numeros[i].innerText));
}

let sumaDeNumeros = 0

for (let a = 0; a < arrayDeNumeros.length; a = a + 1){
    sumaDeNumeros = sumaDeNumeros + arrayDeNumeros[a]
}

let $promedio = (sumaDeNumeros / arrayDeNumeros.length)
document.querySelector(`#promedio`).innerText = $promedio

let $menor = Math.min(...arrayDeNumeros)
document.querySelector("#menor").innerText = $menor

let $mayor = Math.max(...arrayDeNumeros)
document.querySelector("#mayor").innerText = $mayor 

let contador = {}
let numeroMax = arrayDeNumeros[0]
let maxRepetir = 0

for (let b = 0; b < arrayDeNumeros.length; b = b + 1){
    let numero = arrayDeNumeros[b]
    contador[numero] = (contador[numero] || 0) + 1;

    if (contador[numero] > maxRepetir){
        maxRepetir = contador[numero]
        numeroMax = numero
    }
}

document.querySelector("#repetir").innerText = numeroMax
