// Variable para rastrear si el menú está visible o no
let menuVisible = false;

// Función que oculta o muestra el menú
function mostrarOcultarMenu() {
    if (menuVisible) {
        // Ocultar el menú
        document.getElementById("nav").classList = "";
        menuVisible = false;
    } else {
        // Mostrar el menú en modo responsive
        document.getElementById("nav").classList = "responsive";
        menuVisible = true;
    }
}

// Función que se ejecuta cuando se selecciona una opción del menú
function seleccionar() {
    // Ocultar el menú una vez que se selecciona una opción
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

// Función para descargar el CV
function descargarCV() {
    // Crear un enlace invisible para descargar el archivo PDF del CV
    var enlace = document.createElement('a');
    enlace.href = '/Resources/CV_RicardoFuentes_2024_CV.pdf';
    enlace.download = 'CV_RicardoFuentes_2024_CV';
    enlace.click();
}

// Función que se ejecuta cuando se hace scroll en la página
window.onscroll = function () {
    // Llamar a la función efectoHabilidades() cuando se realiza el scrolling
    efectoHabilidades();
}

// Función para aplicar animaciones a las barras de habilidades
function efectoHabilidades() {
    // Obtener todas las habilidades con la clase 'skill'
    var habilidades = document.querySelectorAll('.skill');

    // Iterar sobre cada habilidad
    habilidades.forEach(function (habilidad) {
        // Obtener la posición del elemento en relación con la ventana gráfica
        var bounding = habilidad.getBoundingClientRect();

        // Si la habilidad está parcial o totalmente visible en la ventana gráfica
        if (bounding.top < window.innerHeight && bounding.bottom >= 0) {
            // Obtener el porcentaje de habilidad desde el atributo data-porcentaje
            var porcentaje = habilidad.getAttribute('data-porcentaje');

            // Aplicar la animación aumentando el ancho de la barra de habilidad
            habilidad.style.width = porcentaje + '%';

            // También puedes agregar otras animaciones o efectos aquí según tus necesidades
        }
    });
}



function openNav(){
    document.getElementById("mobile-menu").style.width = "100%";
}
function closeNav(){
    document.getElementById("mobile-menu").style.width = "0%";
}

var x = document.getElementById('login');
var y = document.getElementById('register');
var z = document.getElementById('btn');
function register() {
    x.style.left = '-400px';
    y.style.left = '45px';
    z.style.left = '110px';
}
function login() {
    x.style.left = '50px';
    y.style.left = '450px';
    z.style.left = '0px';
}
