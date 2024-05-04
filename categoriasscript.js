
// Menu cortina
const abrir = document.getElementById("abrirMenu");
const cerrar = document.getElementById("cerrarMenu");
const menu = document.querySelector(".menu");

abrir.addEventListener("click", toggleMenu);
cerrar.addEventListener("click", toggleMenu);

function toggleMenu() {
  menu.classList.toggle("apareceMenu");
}




// Efecto parallax, le damos a las categorias un evento para que aparezca el fondo y otro para que desaparezca, con mouseenter y mouseleave
// de tal manera que cuando el raton pase por encima de una categoria el fondo pasará de ser un color liso a una imagen representativa de esa categoría

function handleEvents(){
    var categorias = document.querySelectorAll('.categoria');
    for(let i = 0; i < categorias.length; i++){
        categorias[i].addEventListener('mouseenter', apareceFondo);
        categorias[i].addEventListener('mouseleave', desapareceFondo);
    }
};

function apareceFondo(e){
    var contenedor = document.querySelector('.contenedorCategorias');
    var categoria = document.querySelectorAll('.categoria');

    var categoria = e.target;

    if(categoria.id === 'pintura'){
        contenedor.style.backgroundImage = 'url(./media/pintando.jpg)';    
    }else if(categoria.id === 'ceramica'){
        contenedor.style.backgroundImage = 'url(./media/barrocolor.jpg)';
    }else if(categoria.id === 'costura'){
        contenedor.style.backgroundImage = 'url(./media/hiloscolor.jpg)';
    }else if (categoria.id === 'pirografia'){
        contenedor.style.backgroundImage = 'url(./media/madera.jpg)';
    }
    
};

function desapareceFondo(e){
    var contenedor = document.querySelector('.contenedorCategorias');
    var categoria = document.querySelectorAll('.categoria');
    contenedor.style.backgroundImage = '';
}

window.onload = handleEvents();