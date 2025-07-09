// Espera a que el documento HTML esté completamente cargado
document.addEventListener("DOMContentLoaded", () => {

    // Obtiene el formulario por su ID
    const formulario = document.getElementById("formularioContacto");

    // Verifica que el formulario exista en el DOM
    if (formulario) {

        // Agrega un evento al enviar el formulario
        formulario.addEventListener("submit", function (event) {
            // Evita que el formulario se envíe y recargue la página
            event.preventDefault();

            // Obtiene los valores de los campos del formulario y elimina espacios en blanco
            const nombre = formulario.nombre.value.trim();
            const correo = formulario.correo.value.trim();
            const telefono = formulario.telefono.value.trim(); 
            const mensaje = formulario.mensaje.value.trim();

            // Verifica que los campos obligatorios no estén vacíos
            if (!nombre || !correo || !mensaje) {
                alert("Por favor completa los campos obligatorios (Nombre, Correo electrónico, Mensaje).");
                return; // Sale de la función si falta alguno
            }

            // Verifica que el correo electrónico tenga un formato válido
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo)) {
                alert("Por favor, introduce un correo electrónico válido.");
                return; // Sale si el correo no es válido
            }

            // Si todo está bien, muestra un mensaje de agradecimiento al usuario
            alert(`Gracias por tu mensaje, ${nombre}. ¡Nos pondremos en contacto pronto!`);

            // Muestra los datos del formulario en la consola (útil para pruebas)
            console.log('Formulario enviado:', {
                nombre,
                correo,
                telefono,
                mensaje
            });

            // Limpia el formulario después del envío
            formulario.reset();
        });
    }
});
