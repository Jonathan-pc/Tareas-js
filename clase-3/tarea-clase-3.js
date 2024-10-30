// Tarea 1:
// Preguntarle al usuario su nombre.
// Si el nombre del usuario es el mismo que  el  de ustedes
// Imprimir "Hola, Tocayo! Yo también me llamo " y su nombre.
// Elijan otro nombre, puede ser de un pariente, amigo, conocido.
// Si el nombe del usuario es el mismo que el que nombre que eligieron
// Imprimir "Hola " y el nombre, " te llamás igual que mi ..."
// Si no, simplemente imprimir "Hola " + nombre!


const nombreUsuario = prompt("Hola, indique su nombre")
const miNombre = "jonathan"
const nombrePariente = "jose"


if (nombreUsuario.toLowerCase() === miNombre){
        console.log(`Hola, Tocayo! yo tambien me llamo ${miNombre}`)
} else if (nombreUsuario.toLowerCase() === nombrePariente){
        console.log(`Hola ${nombreUsuario} te llamas igual que mi primo ${nombrePariente}`)
} else {
        console.log(`Hola ${nombreUsuario}`)
}


//Tarea 2:
// Preguntar la edad del usuario
// Hacerle saber si tiene más, menos ó la misma edad que nosotros.


const miEdad = 25
const edadUsuario = Number(prompt("Indique su edad"))

if (edadUsuario === miEdad){
    console.log("Tenemos la misma edad")
} else if (edadUsuario < miEdad){
    console.log("Sos menor que yo")
} else if (edadUsuario > miEdad){
    console.log("Sos mayor que yo")
}


//Tarea 3:
// Preguntarle al usuario si tiene documento, y que conteste con "si" o "no".
// Si dice si, preguntarle la edad.
// Si la edad es mayor a 18, dejarlo entrar al bar.
// Si la edad es menor a 18, no dejarlo entrar al bar.
// Si no tiene documento, no dejarlo entrar al bar.
// Si no entendemos la respuesta, le decimos que no entendimos la respuesta.
// Punto bonus: SI, NO, Si, No, si, no.

const respuestaUsuario = prompt("¿Tiene documento? indique si/no")
const edadUsuarioBar = Number(prompt("Decime tu edad"))


if (respuestaUsuario.toLowerCase() === "si") {
    if (edadUsuario >= 18){
        console.log("Podes entrar al bar")
    } else if (edadUsuario <= 18) {
        console.log("Sos menor de edad, no podes entrar al bar")
    }
} else if (respuestaUsuario.toLowerCase() === "no"){
        console.log("No podes entrar al bar sin documento")
} else {
        console.log("No te entendi, por favor indique si/no")
}