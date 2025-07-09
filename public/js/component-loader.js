//Esto es una función que permite cargar componentes html externos dentro del index

function loadComponent(containerId, url) {
    fetch(url)
        .then(res => {
            if (!res.ok) throw new Error(`No se pudo cargar ${url}`);
            return res.text();
        })
        .then(html => {
            const container = document.getElementById(containerId);
            if (container) {
                container.innerHTML = html;
            } else {
                console.warn(`No se encontró el contenedor con id '${containerId}'`);
            }
        })
        .catch(err => console.error(err));
}

//Espera que todo el contenido html cargue para cargar los archivos externos de los componentes.
window.addEventListener("DOMContentLoaded", () => {
    loadComponent("hero2-container", "/public/views/hero2.html");
    loadComponent("form-container", "/public/views/form.html");
});
