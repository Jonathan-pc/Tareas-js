$botonCalcular = document.querySelector("#boton-calcular")

$botonCalcular.onclick = function(){
    const horasEnMinutos = 60
    const horasEnSegundos = 3600

    let horasTotales = 0
    let minutosTotales = 0
    let segundosTotales = 0
    let sumaTotal;

    for (let i = 1; i < 6; i = i + 1){
        const $horas = Number(document.querySelector(`#clase${String(i)}-horas`).value)
        const $minutos = Number(document.querySelector(`#clase${String(i)}-minutos`).value)
        const $segundos = Number(document.querySelector(`#clase${String(i)}-segundos`).value)
        
        horasTotales = horasTotales + $horas
        minutosTotales = minutosTotales + $minutos
        segundosTotales = segundosTotales + $segundos
    }

    sumaTotal = (horasTotales + (minutosTotales / horasEnMinutos) + (segundosTotales / horasEnSegundos))
    document.querySelector("#total").innerText = `${sumaTotal} horas`
    return false
}

