/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/

const $botonAceptar = document.querySelector('#boton-aceptar');

$botonAceptar.onclick = function(event){
    ocultarNodo('#resultados');
    removerIntegrantes();
    
    const cantidadPersonas = document.querySelector('#cantidad-personas').value;
    const errorCantidadPersonas = validarCantidadPersonas(cantidadPersonas);
    const esExito = manejarErrorCantidadPersonas(errorCantidadPersonas);

    if (esExito){
        crearIntegrantes(cantidadPersonas);
        mostrarNodo('#boton-calcular');
        mostrarNodo('#boton-empezar-de-nuevo');
    }
    else{
        ocultarNodo('#boton-calcular');
        ocultarNodo('#boton-empezar-de-nuevo');
    }
    
    event.preventDefault();
}

const $botonCalcular = document.querySelector('#boton-calcular');

$botonCalcular.onclick = function(event){
    ocultarNodo('#resultados');
    const $edadesIntegrantes = document.querySelectorAll('#integrantes input');
    const esExito = manejarErroresEdadesIntegrantes($edadesIntegrantes) === 0;


    if(esExito){
        const edadIntegrantes = devolverEdadIntegrantes(); 

        mostrarResultadosEdad('mayor', devolverMayorEdad(edadIntegrantes));
        mostrarResultadosEdad('menor', devolverMenorEdad(edadIntegrantes));
        mostrarResultadosEdad('promedio', devolverPromedioEdad(edadIntegrantes));
        mostrarNodo('#resultados');
    }
    

    event.preventDefault();
}

const $botonEmpezarDeNuevo = document.querySelector('#boton-empezar-de-nuevo');

$botonEmpezarDeNuevo.onclick = function(event){
    eliminarErrores();
    removerIntegrantes();
    ocultarNodo('#boton-calcular');
    ocultarNodo('#boton-empezar-de-nuevo');
    ocultarNodo('#resultados');

    event.preventDefault();

}





