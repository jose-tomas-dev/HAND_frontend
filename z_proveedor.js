// Todas las estrellas
const estrellas = document.querySelectorAll('.estrella');

// Guarda la calificación final seleccionada
let seleccion = 0;

// Hover: se rellenan mientras pasas el mouse
estrellas.forEach((estrella, index) => {

    estrella.addEventListener('mouseenter', () => {
        actualizarEstrellas(index + 1); // Muestra las que vas pasando
    });

    estrella.addEventListener('click', () => {
        seleccion = index + 1; // Guarda la selección final
        actualizarEstrellas(seleccion); // Mantiene esa selección
    });

});

// Cuando sacas el mouse del contenedor, vuelve a lo seleccionado
document.querySelector('.estrellas-seleccion').addEventListener('mouseleave', () => {
    actualizarEstrellas(seleccion);
});

// Función que pinta o despinta estrellas
function actualizarEstrellas(cantidad) {
    estrellas.forEach((estrella, index) => {
        if (index < cantidad) {
            estrella.textContent = '★';   // Rellena
            estrella.classList.add('activa');
        } else {
            estrella.textContent = '☆';   // Vacía
            estrella.classList.remove('activa');
        }
    });
}


function reservarCita() {
    Notiflix.Notify.success('¡Perfecto! Tienes una cita reservada. Te contactaremos pronto.');
    
}

function enviarResena() {
    Notiflix.Notify.success('Gracias por compartirnos tu experiencia :)');
}