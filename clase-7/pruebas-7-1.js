function probarValidarNombre (validarNombre){

    console.assert(
    validarNombre("") === "Este campo debe tener al menos 1 caracter", 
    "Validar nombre no funciono con un string vacio"
    );

    console.assert(
    validarNombre("QWEOQWEOQPÉQJWEOPQEJQWPEOQWJEPOOPEJOJPEOJPWEQJOPQWEOJPQWEOJPEWQOJPWEQJOEWQ") === "Este campo debe tener menos de 50 caracteres",
    "Validar nombre no valido que el nombre sea menor a 50 caracteres"
    );

}

function probarValidarCiudad (validarCiudad){
    console.assert(
        validarCiudad("") === "Seleccionar una ciudad",
        "Validar ciudad no valido que la ciudad este seleccionada"
    )

    console.assert(
        validarCiudad("Bs. As.") === "",
        "Validar ciudad no funciono con un nombre de ciudad valido"
    )
}

function probarValidarDescripcionRegalo (descripcionRegalo){
    console.assert(
        validarDescripcionRegalo("") === "La descripcion del regalo no puede estar vacia",
        "Validar descripcion regalo no valido que la descripcion este completa"
    )

    console.assert(
        validarDescripcionRegalo("Quiero una PS5") === "",
        "Validar descripcion regalo no funciono con la descripcion dada del regalo"
    )
}