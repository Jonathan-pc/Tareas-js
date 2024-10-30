const meses_anuales = 12
const semanas_anuales = 52
const dias_anuales = 365
const $botonCalcular = document.querySelector("#calcular")

function calcularSalarioMensual ($salarioAnual){
    return $salarioAnual / meses_anuales
}

function calcularSalarioSemanal ($salarioAnual){
    return $salarioAnual / semanas_anuales
}

function calcularSalarioDiario ($salarioAnual){
    return $salarioAnual / dias_anuales
}

$botonCalcular.onclick = function(){
    const $salarioAnual = Number(document.querySelector("#salario-anual").value);
    const $salarioMensual = calcularSalarioMensual($salarioAnual);
    const $salarioSemanal = calcularSalarioSemanal($salarioAnual)
    const $salarioDiario = calcularSalarioDiario($salarioAnual)

    document.querySelector("#salario-mensual").value = $salarioMensual
    document.querySelector("#salario-semanal").value = $salarioSemanal
    document.querySelector("#salario-diario").value = $salarioDiario

    return false
}