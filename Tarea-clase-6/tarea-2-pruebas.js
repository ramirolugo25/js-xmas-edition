function probarDevolverMayorSalarioAnual(){
    console.assert(devolverMayorSalarioAnual([22,433,112,12]) === 433,
    'devolverMayorSalarioAnual falló, no devuelve el mayor salario anual');
}

function probarDevolverMenorSalarioAnual(){
    console.assert(devolverMenorSalarioAnual([22,433,112,12,23]) === 12,
    'devolverMenorSalarioAnual falló, no devuelve el menor salario anual');
}

function probarDevolverPromedioSalarioAnual(){
    console.assert(devolverPromedioSalarioAnual([22,433,112,12,23]) === 120.4,
    'devolverPromedioSalarioAnual falló, no devuelve el promedio del salario anual' );
}

function probarDevolverPromedioSalarioMensual(){
    console.assert(devolverPromedioSalarioMensual([22,433,112,12,23]) == 10.03,
    'devolverPromedioSalarioMensual falló, no devuelve el promedio del salario mensual' );
}

function probarValidarSalarioAnual(){
    console.assert(validarSalarioAnual('0') === 'El salario anual no puede ser igual a cero',
    'validarSalarioAnual no valido que el salario no sea cero');

    console.assert(validarSalarioAnual('') === 'El salario anual no puede estar vacio',
    'validarSalarioAnual no valido que el salario no este vacio');

    // console.assert(validarSalarioAnual('e') === 'El salario anual no puede incluir letras',
    // 'validarSalarioAnual no valido que el salario no incluya letras');

    console.assert(validarSalarioAnual(1500.00) === '',
    'validarSalarioAnual falló con un salario valido');
}

probarDevolverMayorSalarioAnual();
probarDevolverMenorSalarioAnual();
probarDevolverPromedioSalarioAnual();
probarDevolverPromedioSalarioMensual();
probarValidarSalarioAnual();