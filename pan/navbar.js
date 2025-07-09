

document.addEventListener("DOMContentLoaded", function() {
    const navbarPlaceholder = document.querySelector(".navbar__container"); 

    if (navbarPlaceholder) {
        fetch("/navbar.html") 
            .then(response => response.text())
            .then(data => {
                navbarPlaceholder.innerHTML = data; 
            })
            .catch(error => console.log("Error cargando el navbar", error));
    }
});

