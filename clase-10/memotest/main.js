let $cartas = [];
let $cartasGiradas = [];
let partidas = 0;
let intentos = 0;
let temporizador = 0;
let intervalo;

const $tablero = document.getElementById("tablero");
const $mostrarIntentos = document.getElementById("intentos");
const $mostrarTemporizador = document.getElementById("temporizador");

function empezarJuego() {
    $cartas = []; // Reinicia las cartas en cada nuevo juego
    intentos = 0;
    temporizador = 0;
    partidas = 0;
    $mostrarIntentos.textContent = intentos;
    $mostrarTemporizador.textContent = temporizador;

    clearInterval(intervalo);
    intervalo = setInterval(() => {
        temporizador += 1;
        $mostrarTemporizador.textContent = temporizador;
    }, 1000);

    for (let i = 1; i <= 8; i++) {
        $cartas.push(i);
        $cartas.push(i);
    }
    mezclar($cartas);

    $tablero.innerHTML = "";
    $cartas.forEach((value) => {
        const $carta = document.createElement("div");
        $carta.classList.add("carta");
        $carta.dataset.value = value;
        $carta.addEventListener("click", girarCarta);
        $tablero.appendChild($carta);
    });
}

function mezclar(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function girarCarta(event) {
    const carta = event.target;
    if (carta.classList.contains("girada") || $cartasGiradas.length === 2) return;

    carta.classList.add("girada");
    carta.textContent = carta.dataset.value;
    $cartasGiradas.push(carta);

    if ($cartasGiradas.length === 2) {
        intentos += 1;
        $mostrarIntentos.textContent = intentos;

        if ($cartasGiradas[0].dataset.value === $cartasGiradas[1].dataset.value) {
            $cartasGiradas = [];
            partidas += 1;
            if (partidas === $cartas.length / 2) {
                clearInterval(intervalo);
                alert(`¡Ganaste! Tiempo total: ${temporizador} segundos, Intentos: ${intentos}`);
            }
        } else {
            setTimeout(() => {
                $cartasGiradas.forEach((carta) => {
                    carta.classList.remove("girada");
                    carta.textContent = "";
                });
                $cartasGiradas = [];
            }, 1000);
        }
    }
}

empezarJuego();
