


function validarNombre(nombre){
    if (nombre.length === 0){
        return 'El campo nombre debe tener al menos 1 caracter';
    }
    if (nombre.length >= 50){
        return 'Este campo debe tener menos de 50 caracteres';
    }

    if(!/^[a-z]+$/i.test(nombre)){
        return 'El campo nombre solo acepta letras';
    }

    return '';
}
function validarCiudad(ciudad){
    if(ciudad.length === 0){
        return 'El campo ciudad no debe estar vacio';
    }

    return '';
}

function validarDescripcionRegalo(descripcionRegalo){
    if(descripcionRegalo.length === 0 ){
        return 'El campo descripcion no puede estar vacio';
    }
    if(descripcionRegalo.length >= 100){
        return 'Este campo debe tener menos de 100 caracteres'
    }

    if(!/^[a-z0-9]+$/i.test(descripcionRegalo)){
        return 'El campo descripción sólo puede tener números y letras';
    }

    return '';
}

function validarFormulario(event){
    const $form = document.querySelector('#carta-a-santa');

    const nombre = $form.nombre.value;
    const ciudad = $form.ciudad.value;
    const descripcionRegalo = $form['descripcion-regalo'].value;

    const errorNombre = validarNombre(nombre);
    const errorCiudad = validarCiudad(ciudad);
    const errorDescripcionRegalo = validarDescripcionRegalo(descripcionRegalo);

    const errores = {
        nombre: errorNombre,
        ciudad: errorCiudad,
        'descripcion-regalo' : errorDescripcionRegalo
    };

    const esExito = manejarErrores(errores) === 0;

    if(esExito){
        $form.className = 'oculto';
        document.querySelector('#exito').className = '';
        
        setTimeout(function(){
            window.location.href = 'wishlist.html';
        },5000);
    }

    event.preventDefault();
}

function manejarErrores(errores){
    
    const keys = Object.keys(errores);
    const $errores = document.querySelector('#errores');
    let cantidadErrores = 0;

    const $li = document.querySelectorAll('#errores li');
    for(let i=0; i<$li.length; i++){
        $li[i].remove();
    }

    keys.forEach(function(key){
        const error = errores[key];

        if(error){
            cantidadErrores++;
            $form[key].className = 'error';

            const $error = document.createElement('li');
            $error.innerText = error;

            $errores.appendChild($error);
        }else{
            $form[key].className = '';

            

        }
    });

    return cantidadErrores;
}


const $form = document.querySelector('#carta-a-santa');
$form.onsubmit = validarFormulario;



// const nombre = $form.nombre.value;
// //const nombre = document.querySelector('[name=nombre]').value;
// const ciudad = $form.ciudad.value;
// const comportamiento = $form.comportamiento.value;
// const descripcionRegalo = $form['descripcion-regalo'].value;