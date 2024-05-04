// Menu cortina, para conseguir este efecto de cortina de izquierda a derecha en el menu, necesito la clase apareceMenu anteriormente creada en CSS, 
// y le doi al icono de abrir menu y al icono de cerrar menu el evento de click y toggle, esto quiere decir que cuando haga click en los iconos, 
// si la clase apareceMenu está activa la desactiva, y al reves

const abrir = document.getElementById("abrirMenu");
const cerrar = document.getElementById("cerrarMenu");
const menu = document.querySelector(".menu");

abrir.addEventListener("click", toggleMenu);
cerrar.addEventListener("click", toggleMenu);

function toggleMenu() {
  menu.classList.toggle("apareceMenu");
}

