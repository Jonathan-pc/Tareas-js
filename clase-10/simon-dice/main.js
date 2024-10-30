const $colorBotones = ["boton-1", "boton-2", "boton-3", "boton-4"];
let secuenciaMaquina = [];
let secuenciaJugador = [];
let nivelActual = 0;

document.getElementById("iniciarJuego").addEventListener("click", empezarJuego);
document.querySelectorAll(".color-btn").forEach(botonIniciar => {
    botonIniciar.addEventListener("click", (e) => manejarInputJugador(e.target.id));
});

function empezarJuego (){
    nivelActual = 0
    secuenciaMaquina = [];
    secuenciaJugador = [];
    proximoNivel();
}

function proximoNivel(){
    secuenciaJugador = [];
    nivelActual = nivelActual + 1
    document.getElementById("iniciarJuego").innerText = `Nivel ${nivelActual}`;
    const proximoColor = $colorBotones[Math.floor(Math.random() * $colorBotones.length)];
    secuenciaMaquina.push(proximoColor);
    empezarSecuencia();
}

function empezarSecuencia(){
    secuenciaMaquina.forEach((colorActual, index) => {
        setTimeout(() => $activarBoton(colorActual), index * 1000);
    })
}

function $activarBoton (colorActual){
    const $boton = document.getElementById(colorActual);
    $boton.classList.add("activo");
    setTimeout(() => $boton.classList.remove("activo"), 300)
}

function manejarInputJugador(colorActual){
    secuenciaJugador.push(colorActual);
    $activarBoton(colorActual);

    if (!verificarSecuencia ()){
        alert ("Perdiste, empeza de nuevo.")
        empezarJuego();
    } else if (secuenciaJugador.length === secuenciaMaquina.length){
        setTimeout(proximoNivel, 1000);
    }
}

function verificarSecuencia (){
    for (let i = 0; i < secuenciaJugador.length; i = i + 1){
        if (secuenciaJugador[i] !== secuenciaMaquina[i]){
            return false 
        }
    }
    return true
}
