function agregarIntegrante(){
    const $div = document.createElement('div');
    const cantidadIntegrantes = document.querySelectorAll('.integrante').length;
    const $label = document.createElement('label');
    const textoLabel = document.createTextNode(`Salario Anual del integrante ${cantidadIntegrantes + 1}`);
    const $input = document.createElement('input');
    const $integrantes = document.querySelector('#integrantes');
    $div.className = 'integrante';
    $input.type = 'number';
    $label.appendChild(textoLabel);
    $div.appendChild($label);
    $div.appendChild($input);
    $integrantes.appendChild($div);  
}

function quitarIntegrante(){
    const $integrantes = document.querySelectorAll('.integrante');
    if($integrantes.length > 0){
        $integrantes[$integrantes.length - 1].remove();
    }
}

function mostrarNodo(nodo){
    document.querySelector(`${nodo}`).className = '';
}

function ocultarNodo(nodo){
    document.querySelector(`${nodo}`).className = 'oculto';
}


function devolverMayorSalarioAnual(salarios){
    return Math.max(...salarios);
}

function devolverMenorSalarioAnual(salarios){
    return Math.min(...salarios);
}

function devolverPromedioSalarioAnual(salarios){
    let suma = 0;

    for(let i=0; i<salarios.length;i++){
        suma += salarios[i];
    }

    return suma / salarios.length;
}

function devolverPromedioSalarioMensual(salarios){
    let suma = 0;

    for(let i=0; i<salarios.length; i++){
        suma += salarios[i] / 12;
    }

    return  (suma / salarios.length).toFixed(2);
}

function mostrarResultados(identificador, resultado){
    document.querySelector(`#${identificador}`).textContent = resultado;
}

function validarSalarioAnual(salarioAnual){
    if(salarioAnual === ''){
        return 'El salario anual no puede estar vacio';
    }
    if(Number(salarioAnual) === 0){
        return 'El salario anual no puede ser igual a cero';
    }   
    
    // if(!/^[1-9]+[.,]*[0-9]*$/.test(salarioAnual)){
    //     return 'El salario anual no puede incluir letras';
    // }
    return '';   
}

function manejarErroresSalarios($salarios){
    let cantidadErrores = 0;
    eliminarErrores();
    $salarios.forEach(function($salario){
        
        const error = validarSalarioAnual($salario.value);
        if(error){
            cantidadErrores++;
            $salario.className = 'error';
            if(!existeElError(error)){
                ocultarNodo('#resultados');
                const $errores = document.querySelector('#errores');
                const $error = document.createElement('li');
                $error.innerText = error;
                $errores.appendChild($error);
            }    
        }else{
            $salario.className = '';
        }

    });
    return cantidadErrores;
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

function eliminarErrores(){
    const $error = document.querySelectorAll('#errores li');
    for(let i=0; i<$error.length; i++){
        $error[i].remove();
    }
}