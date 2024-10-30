function generarCampos(){
    event.preventDefault()

    const $numeroIntegrantes = document.getElementById("cantidad-integrantes").value;
    const $Integrantes = document.getElementById("integrantes");

    const errores = validarNumeroIntegrantes ($numeroIntegrantes)

    if (errores.length > 0 ){
        alert(errores.join("\n"))
        return
    }

    if ($numeroIntegrantes > 0){
        for (let i = 1; i <= $numeroIntegrantes; i = i + 1){
            const label = document.createElement("label")
            label.textContent = `Familiar ${i}`

            const input = document.createElement("input")
            input.type = "number"
            input.placeholder = `Indique su edad`
            input.classList.add("edad")

            $Integrantes.appendChild(label)
            $Integrantes.append(input)
        }
    } else {
        alert("Por favor ingrese un numero mayor que 0")
    }
}

function validarNumeroIntegrantes($numeroIntegrantes){
    const errores = []
    const numeroEntero = parseInt($numeroIntegrantes)

    if (isNaN(numeroEntero) || numeroEntero <= 0){
        errores.push("Por favor ingrese un numero de integrantes valido mayor que 0")
    }
    return errores;
}

function calcularEdades (){

    const edades = document.querySelectorAll(".edad")
    let sumaEdades = 0
    let edadesArray = []

    const errores = validarEdades(edades)
    if (errores.length > 0){
        alert(errores.join("\n"))
        return;
    }
    
    edades.forEach(input =>{
        const edad = parseInt(input.value)
        if (!isNaN(edad)){
            edadesArray.push(edad)
            sumaEdades = sumaEdades + edad
        }
    })

    if (edadesArray.length > 0){
        const $edadMayor = Math.max(...edadesArray)
        const $edadmenor = Math.min(...edadesArray)
        const $edadPromedio = (sumaEdades/edadesArray.length).toFixed(2)

        document.getElementById("calculos").innerHTML = `
        <p> La edad mayor es: ${$edadMayor} </p>
        <p> La edad menor es: ${$edadmenor} </p>
        <p> La edad promedio es: ${$edadPromedio} </p>   
        `
        
    }
}

function validarEdades(edades) {
    const errores = []

    edades.forEach(input => {
        const edad = input.value.trim()
        const regexEdad = /^[1-9]\d*$/

        if (!regexEdad.test(edad)){
            errores.push("Por favor ingresa una edad valida (entera y mayor que 0)")
        }
    })
    return errores
}


function resetCampos(){
    document.getElementById("cantidad-integrantes").innerHTML = ""
    document.getElementById("calculos").innerHTML = ""
    document.getElementById("integrantes").innerHTML =""
}
