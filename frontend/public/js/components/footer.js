document.addEventListener("DOMContentLoaded", function(){
    const footerElement = document.querySelector(".footer-container");

    if(footerElement){
        fetch("/frontend/public/views/components/footer.html")
        .then(response => response.text())
        .then(data => {
            footerElement.innerHTML = data;
        })

    .catch(error => console.log("Error cargando el hero", error));
    }   
});