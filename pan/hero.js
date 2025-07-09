document.addEventListener("DOMContentLoaded", function() {
    const heroElement = document.querySelector(".hero"); 

    if (heroElement) {
        fetch("/hero.html") 
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.text();
            })
            .then(data => {
                const parser = new DOMParser();
                const doc = parser.parseFromString(data, 'text/html');
                const mainContent = doc.querySelector('.hero-section'); 
                if (mainContent) {
                    heroElement.appendChild(mainContent); 
                }
            })
            .catch(error => console.log("Error cargando el hero", error));
    }
});