//León Sebastián Ruiz Pulgarín

//Carga del documento html
document.addEventListener("DOMContentLoaded", () => {
    // Confirmación de que el script se ha cargado y el DOM está listo
    console.log("hero2.js cargado: La sección Hero está lista para interactuar.");

    //Busca los botones con clase establecida

    const foroButton = document.querySelector('.hero2-button.primary');
    const eventosButton = document.querySelector('.hero2-button.primary');

    //Condicionales al hacer click en los botones, sus funcionalidades aún están pendientes

    if (foroButton) {
        foroButton.addEventListener('click', (event) => {
            event.preventDefault();
            console.log('Botón "Foro social" clickeado.');
            alert('¡Has hecho clic en "Foro social"! (Funcionalidad pendiente)');
        });
    }

    if (eventosButton) {
        eventosButton.addEventListener('click', (event) => {
            event.preventDefault();
            console.log('Botón "Eventos" clickeado.');
            alert('¡Has hecho clic en "Eventos"! (Funcionalidad pendiente)');
        });
    }
});