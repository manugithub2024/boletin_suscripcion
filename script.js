document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario para mostrar el popup

    // Muestra el popup
    document.getElementById('popup').style.display = 'flex';
});

document.getElementById('closeBtn').addEventListener('click', function() {
    // Oculta el popup
    document.getElementById('popup').style.display = 'none';
});




