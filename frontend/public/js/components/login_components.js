document.addEventListener("DOMContentLoaded", function(){
    const footerElement = document.querySelector(".login-container");

    if(footerElement){
        fetch("/frontend/public/views/components/login_components.html")
        .then(response => response.text())
        .then(data => {
            footerElement.innerHTML = data;
        })

    .catch(error => console.log("Error cargando el hero", error));
    }   
});