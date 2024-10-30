const validador = {
    validarNumeroFamiliares(numero) {
    const errores = []
    const numeroEntero = parseInt(numero)
    if (isNaN(numeroEntero) || numeroEntero <= 0){
        errores.push("Por favor ingresa un numero de familiares mayor que 0")
        }
        return errores;
        
    },
    validarSalario(salario){
    const regexSalario = /^[1-9]\d*$/
    if(!regexSalario.test(salario)){
        return "Por favor ingresa un salario valido (numero entero y mayor que 0"
        }
    }
}

function agregarMiembro(){
    const $numeroFamiliares = document.getElementById("cantidad-familiares").value;
    const $familiares = document.getElementById("laburantes");

    const errores = validador.validarNumeroFamiliares($numeroFamiliares);
    if (errores.length > 0) {
        alert(errores.join("\n"));
        return;
    }

    if ($numeroFamiliares > 0){
        for (let i = 1; i <= $numeroFamiliares; i = i + 1){
            const contenedor = document.createElement("div")
            contenedor.classList.add("miembro")

            const label = document.createElement("label")
            label.textContent = `Salario de familiar ${i}`

            const input = document.createElement("input")
            input.type = "number"
            input.placeholder = `Indique su salario anual`
            input.classList.add("salarioAnual")

            const $botonEliminar = document.createElement("button")
            $botonEliminar.textContent = "Eliminar"
            $botonEliminar.type = "button"
            $botonEliminar.onclick = function(){
                contenedor.remove()
            }

            contenedor.appendChild(label)
            contenedor.appendChild(input)
            contenedor.appendChild($botonEliminar)

            $familiares.appendChild(contenedor)
        }
    } else {
        alert("Por favor ingrese un numero mayor que 0")
    }
}

function calcularSalarios(){
    const salarioAnual = document.querySelectorAll(".salarioAnual")
    let sumaSalarios = 0
    let salariosArray = []

    const errores = []

    salarioAnual.forEach(input => {
        const salario = input.value.trim();
        const error = validador.validarSalario(salario);
        if (error) {
            errores.push(error);
        }
    });

    if(errores.length > 0){
        alert(errores.join("\n"));
        return;
    }

    salarioAnual.forEach(input =>{
        const salario = parseInt(input.value)
        if (!isNaN(salario)){
            salariosArray.push(salario)
            sumaSalarios = sumaSalarios + salario
        }
    })

    if (salariosArray.length > 0){
        const $salarioAnualMayor = Math.max(...salariosArray)
        const $salarioAnualMenor = Math.min(...salariosArray)
        const $salarioAnualPromedio = (sumaSalarios/salariosArray.length)
        const $salarioMensualPromedio = (sumaSalarios/salariosArray.length /12)

        document.getElementById("calculos").innerHTML = `
        <p> El salario anual mayor es: ${$salarioAnualMayor} <p/>
        <p> El salario anual menor es: ${$salarioAnualMenor} <p/>
        <p> El salario anual promedio es: ${$salarioAnualPromedio} <p/>
        <p> El salario mensual promedio es: ${$salarioMensualPromedio} <p/>
        `
    }
}
