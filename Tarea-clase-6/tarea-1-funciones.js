function crearIntegrantes(cantidadPersonas){
    $integrantes = document.querySelector('#integrantes');
    
    for(let i=1; i<=cantidadPersonas; i++){

        $div = document.createElement('div');
        $div.className = 'integrante';
        $label = document.createElement('label');
        $input = document.createElement('input');
        $input.type = 'number';
        $label.innerText = `Edad del integrante ${i}`;
        $div.appendChild($label);
        $div.appendChild($input);
        $integrantes.appendChild($div);
    }
    

}

function removerIntegrantes(){
    const $integrantes = document.querySelectorAll('.integrante');

    for(let i=0; i<$integrantes.length;i++){
        $integrantes[i].remove();
    }
}


function devolverEdadIntegrantes(){
    
    const edadIntegrantes = [];
    const $edadIntegrantes = document.querySelectorAll('#integrantes input');
    for(let i=0; i<$edadIntegrantes.length; i++){
        edadIntegrantes.push(Number($edadIntegrantes[i].value));
    }
    return edadIntegrantes;
}


function devolverMayorEdad(edadIntegrantes){
    return (Math.max(...edadIntegrantes));
}

function devolverMenorEdad(edadIntegrantes){
    return (Math.min(...edadIntegrantes));
}

function devolverPromedioEdad(edadIntegrantes){
    let suma = 0;

    for (let i=0; i<edadIntegrantes.length; i++){
        suma += edadIntegrantes[i];
    }

    return (suma / edadIntegrantes.length);
}

function mostrarResultadosEdad(identificador,edad){
    document.querySelector(`#${identificador}-edad`).value = edad;
}


function mostrarNodo(nodo){
    document.querySelector(`${nodo}`).className = '';
}

function ocultarNodo(nodo){
    document.querySelector(`${nodo}`).className = 'oculto';
}

function validarCantidadPersonas(cantidadPersonas){
    if(cantidadPersonas === ''){
        return 'La cantidad de personas no puede estar vacio';
    }
    if(cantidadPersonas === '0'){
        return 'La cantidad de personas debe ser mayor a cero';
    }
    if(cantidadPersonas < 0){
        return 'La cantidad de personas no puede ser un numero negativo';
    }
    if(!/^[0-9]+$/.test(cantidadPersonas)){
        return 'La cantidad de personas no puede incluir letras ni numeros decimales';
    }

    return '';
}

function validarEdadIntegrante(edadIntegrante){
    if(edadIntegrante === ''){
        return 'La edad del integrante no puede estar vacio';
    }
    if(edadIntegrante < 0){
        return 'La edad del integrante no puede ser un numero negativo';
    }
    if(!/^[0-9]+$/.test(edadIntegrante)){
        return 'La cantidad de personas no puede incluir letras ni numeros decimales';
    }

    return '';
}

function manejarErrorCantidadPersonas(error){
    eliminarErrores();
    const cantidadPersonas = document.querySelector('#cantidad-personas');
    if(error){
        cantidadPersonas.className = 'error';
        const $errores = document.querySelector('#errores');
        const $error = document.createElement('li');
        $error.innerText = error;
        $errores.appendChild($error);

        return false;
    }else{
        cantidadPersonas.className = '';
        return true;
    }
}

function manejarErroresEdadesIntegrantes($edadesIntegrantes){
    let cantidadErrores = 0;
    eliminarErrores();
    $edadesIntegrantes.forEach(function($edadIntegrante){
        const edadIntegrante = $edadIntegrante.value
        const error = validarEdadIntegrante(edadIntegrante);

        if(error){
            cantidadErrores++;
            $edadIntegrante.className = 'error';
            if(!existeElError(error)){
                const $errores = document.querySelector('#errores');
                const $error = document.createElement('li');
                $error.innerText = error;
                $errores.appendChild($error);
            }
            

        }else{
            $edadIntegrante.className = '';
        }

    });

    return cantidadErrores;
}

function eliminarErrores(){
    const $error = document.querySelectorAll('#errores li');
    for(let i=0; i<$error.length; i++){
        $error[i].remove();
    }
}

function existeElError(error){
    const $errores = document.querySelectorAll('#errores li');
    
    for(let i=0; i<$errores.length;i++){
        if($errores[i].innerText === error){
            return true;
        }
    }


    return false;
}