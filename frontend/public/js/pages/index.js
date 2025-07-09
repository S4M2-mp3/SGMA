function aplicarResponsive() {
  const contenedor = document.getElementById("cards__container");

  if (window.innerWidth <= 768) {
    contenedor.style.flexDirection = "column";  // tarjetas apiladas
    contenedor.style.alignItems = "center";
  } else {
    contenedor.style.flexDirection = "row";     // tarjetas lado a lado
    contenedor.style.alignItems = "stretch";
  }
}

