const $form = document.querySelector("#carta-a-santa");

const nombre = $form.nombre.value;
const ciudad = $form.ciudad.value;
const comportamiento = $form.comportamiento.value;
const descripcionRegalo = $form[`descripcion-regalo`].value

console.log(nombre);
console.log(ciudad);
console.log(comportamiento);
console.log(descripcionREgalo);

function validarNombre(nombre){
    if (nombre.length === 0){
        return "Este campo debe tener al menos 1 caracter"
    } 

    if (nombre.length > 50){
        return "Este campo debe tener menos de 50 caracteres"
    }

    return "";
}

function validarCiudad(ciudad){
    if (ciudad.length === 0){
        return "Debes seleccionar una ciudad"
    }
}

function validarDescripcionRegalo(descripcionREgalo){
    if (descripcionRegalo.length === 0){
        return "La descripcion del regalo no puede estar vacia"
    }

    if (descripcionRegalo.length >= 100){
        return "La descripcion del regalo no puede tener mas de 100 caracteres"
    }
}