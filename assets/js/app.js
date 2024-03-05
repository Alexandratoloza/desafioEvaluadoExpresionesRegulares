
document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.getElementById('formulario');
    const nombreCompletoInput = document.getElementById('nombreCompleto');
    const asuntoInput = document.getElementById('escribaSuAsunto');
    const mensajeTextarea = document.getElementById('MensajeEscrito');

    formulario.addEventListener('submit', function(event) {
        // Validación del campo Nombre Completo
        if (!/^[a-zA-Z ]+$/.test(nombreCompletoInput.value)) {
            event.preventDefault();
            document.querySelector('.errorNombre').textContent = 'Ingrese un nombre válido';
        } else {
            document.querySelector('.errorNombre').textContent = '';
        }

        // Validación del campo Asunto
        if (!/^[a-zA-Z\s.,!?¡¿]+$/.test(asuntoInput.value)) {
            event.preventDefault();
            document.querySelector('.errorAsunto').textContent = 'Ingrese un asunto válido';
        } else {
            document.querySelector('.errorAsunto').textContent = '';
        }

        // Validación del campo Mensaje (no se aplica la expresión regular)
        if (mensajeTextarea.value.trim() === '') {
            event.preventDefault();
            document.querySelector('.errorMensaje').textContent = 'Ingrese un mensaje';
        } else {
            document.querySelector('.errorMensaje').textContent = '';
        }
    });
});
   










