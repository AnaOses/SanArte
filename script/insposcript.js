// menu cortina

const abrir = document.getElementById("abrirMenu");
const cerrar = document.getElementById("cerrarMenu");
const menu = document.querySelector(".menu");

abrir.addEventListener("click", toggleMenu);
cerrar.addEventListener("click", toggleMenu);

function toggleMenu() {
  menu.classList.toggle("apareceMenu");
}