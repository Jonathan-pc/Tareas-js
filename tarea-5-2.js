$botonMostrarDatos = document.querySelector("#mostrar-datos")


$botonMostrarDatos.onclick = function(){
    const $nombreUsuario = document.querySelector("#nombre-usuario").value;
    const $nombreUsuario2 = document.querySelector("#nombre-usuario2").value;
    const $apellidoUsuario = document.querySelector("#apellido-usuario").value;
    const $edadUsuario = Number(document.querySelector("#edad-usuario").value)

    document.querySelector("h1").innerText = `Bienvenido, ${$nombreUsuario}`

    const $resultado = document.querySelector("#resultado")

    document.querySelector("#resultado").innerText = `Tus nombre/s son ${$nombreUsuario} ${$nombreUsuario2}, tus apellido/s ${$apellidoUsuario} y tu edad es ${$edadUsuario} años`


    return false
}
