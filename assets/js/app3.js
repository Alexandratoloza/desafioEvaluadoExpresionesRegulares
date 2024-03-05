
document.addEventListener('DOMContentLoaded', function() {
    const resultadoSpan = document.querySelector('.resultadoOperaciones');
    const numUnoInput = document.getElementById('numUno');
    const numDosInput = document.getElementById('numDos');
    const btnSumar = document.getElementById('btnSumar');
    const btnRestar = document.getElementById('btnRestar');

    // sumar dos números
    function sumar() {
        const numUno = parseInt(numUnoInput.value);
        const numDos = parseInt(numDosInput.value);
        const resultado = numUno + numDos;
        resultadoSpan.textContent = resultado;
    }

    //  restar dos números
    function restar() {
        const numUno = parseFloat(numUnoInput.value);
        const numDos = parseFloat(numDosInput.value);
        const resultado = numUno - numDos;
        resultadoSpan.textContent = resultado;
    }

    // botones
    btnSumar.addEventListener('click', sumar);
    btnRestar.addEventListener('click', restar);
});