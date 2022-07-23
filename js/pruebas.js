function probarValidarNombre() {
  console.assert(
      validarNombre('') === 'El campo nombre debe tener al menos 1 caracter',
      'Validar nombre no validó que el nombre no sea vacío',
  );

  console.assert(
      validarNombre(
          '111111111111111111111111111111111111111111111111111111111111111111111111111111111111111') ===
      'Este campo debe tener menos de 50 caracteres',
      'Validar nombre no validó que el nombre sea menor a 50 caracteres',
  );

  console.assert(validarNombre('dasfds123123') === 'El campo nombre solo acepta letras',
  'Validar nombre no validó que el nombre sólo tenga letras')

  console.assert(
    validarNombre('Ramiro') === '',
    'ValidarNombre falló con un nombre válido'
  );
}

function probarValidarCiudad(){
    console.assert(validarCiudad('') === 'El campo ciudad no debe estar vacio', 
    'Validar ciudad, no valido que la ciudad sea vacio');

    console.assert(validarCiudad('Santa Fe') === '',
    'ValidarCiudad falló con una ciudad valida');
}

function probarValidarDescripcionRegalo(){
    console.assert(validarDescripcionRegalo('') === 'El campo descripcion no puede estar vacio',
    'Validar descripcionRegalo, no validó que la descripcionRegalo sea vacio');

    console.assert(validarDescripcionRegalo('111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111') ===
    'Este campo debe tener menos de 100 caracteres', 
    'Validar descripcionRegalo, no validó que la descripcionRegalo sea menor a 100 caracteres');

    console.assert(validarDescripcionRegalo('Regalo') === '',
    'validarDescripcionRegalo falló con una descripcion valida');

    console.assert(validarDescripcionRegalo(',.,.,.,') === 'El campo descripción sólo puede tener números y letras',
    'la función validar descripción no validó que fuera sólo números y letras');
}

probarValidarNombre();
probarValidarCiudad();
probarValidarDescripcionRegalo();
