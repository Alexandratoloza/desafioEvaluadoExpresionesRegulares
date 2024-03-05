
    document.addEventListener('DOMContentLoaded', function() {
        
        const cajaColor = document.getElementById('cajaColor');
        const btnRed = document.getElementById('btnRed');
        const btnNaranja = document.getElementById('btnNaranja');
        const btnAmarillo = document.getElementById('btnAmarillo');
        const btnVerde = document.getElementById('btnVerde');
        const btnCeleste = document.getElementById('btnCeleste');
        const btnRosa = document.getElementById('btnRosa');

        // Funciones para cambiar el color de la caja
        function cambiarColorRojo() {
            cajaColor.style.backgroundColor = '#e53e3e';
        }

        function cambiarColorNaranja() {
            cajaColor.style.backgroundColor = '#dd6b20';
        }

        function cambiarColorAmarillo() {
            cajaColor.style.backgroundColor = '#faf089';
        }

        function cambiarColorVerde() {
            cajaColor.style.backgroundColor = '#48bb78';
        }

        function cambiarColorCeleste() {
            cajaColor.style.backgroundColor = '#81e6d9';
        }

        function cambiarColorRosa() {
            cajaColor.style.backgroundColor = '#d53f8c';
        }

        // Asignar eventos
        btnRed.addEventListener('click', cambiarColorRojo);
        btnNaranja.addEventListener('click', cambiarColorNaranja);
        btnAmarillo.addEventListener('click', cambiarColorAmarillo);
        btnVerde.addEventListener('click', cambiarColorVerde);
        btnCeleste.addEventListener('click', cambiarColorCeleste);
        btnRosa.addEventListener('click', cambiarColorRosa);
    });

