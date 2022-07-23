function probarDevolverMayorEdad(){
    
    console.assert(devolverMayorEdad([14,1,30,23,1]) === 30,
    'devolverMayorEdad falló, no devuelve la mayor edad');
}

function probarDevolverMenorEdad(){
    console.assert(devolverMenorEdad([14,1,30,23,2]) === 1,
    'devolverMenorEdad falló, no devuelve la menor edad');
}

function probarDevolverPromedioEdad(){
    console.assert(devolverPromedioEdad([14,1,30,23,2]) === 14, 
    'devolverPromedioEdad falló, no devuelve el promedio de edad');
}

function probarValidarCantidadPersonas(){
    console.assert(validarCantidadPersonas('0') === 'La cantidad de personas debe ser mayor a cero',
    'validarCantidadPersonas, no valido que no sea cero');

    console.assert(validarCantidadPersonas('') === 'La cantidad de personas no puede estar vacio',
    'validarCantidadPersonas, no valido que no sea vacio');

    console.assert(validarCantidadPersonas(-1) === 'La cantidad de personas no puede ser un numero negativo',
    'validarCantidadPersonas, no valido que no sea un numero negativo');

    console.assert(validarCantidadPersonas(4.3) === 'La cantidad de personas no puede incluir letras ni numeros decimales',
    'validarCantidadPersonas, no valido que el numero no sea un decimal');

    console.assert(validarCantidadPersonas(5) === '',
    'validarCantidadPersonas falló con un numero valido');
}

function probarValidarEdadIntegrante(){
    console.assert(validarEdadIntegrante('') === 'La edad del integrante no puede estar vacio',
    'validarEdadIntegrante, no valido que no sea vacio');

    console.assert(validarEdadIntegrante(-1) === 'La edad del integrante no puede ser un numero negativo',
    'validarEdadIntegrante, no valido que no sea un numero negativo');

    console.assert(validarEdadIntegrante(4.3) === 'La cantidad de personas no puede incluir letras ni numeros decimales',
    'validarEdadIntegrante, no valido que el numero no sea un numero decimal');

    console.assert(validarEdadIntegrante(18) === '',
    'validarEdadIntegrante falló con un numero valido');
}

probarDevolverMayorEdad();
probarDevolverMenorEdad();
probarDevolverPromedioEdad();
probarValidarCantidadPersonas();
probarValidarEdadIntegrante()
