// Menu cortina
const abrir = document.getElementById("abrirMenu");
const cerrar = document.getElementById("cerrarMenu");
const menu = document.querySelector(".menu");

abrir.addEventListener("click", toggleMenu);
cerrar.addEventListener("click", toggleMenu);

function toggleMenu() {
  menu.classList.toggle("apareceMenu");
}


// Collapsible, para tener los articulos ocultos, cuando le demos click al collapsible se abrira el siguiente elemento que es el articulo
// y si vuelves a hacer click se vuelven a ocultar

var collapsible = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < collapsible.length; i++) {
  collapsible[i].addEventListener("click", function() {
    this.classList.toggle("activo");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}


