// Función para mostrar u ocultar la información de los productos
function mostrarInfo(id) {
    var info = document.getElementById(id);
    if (info.style.display === "none" || info.style.display === "") {
        info.style.display = "block";
    } else {
        info.style.display = "none";
    }
}

// Función para mostrar u ocultar subcategorías al hacer clic en una categoría
document.addEventListener("DOMContentLoaded", function () {
    let categorias = document.querySelectorAll(".titulo-categoria");

    categorias.forEach(categoria => {
        categoria.addEventListener("click", function () {
            let subcategorias = this.nextElementSibling;
            if (subcategorias.style.display === "none" || subcategorias.style.display === "") {
                subcategorias.style.display = "block";
            } else {
                subcategorias.style.display = "none";
            }
        });
    });

    // Funcionalidad para mostrar/ocultar productos al hacer clic en una subcategoría
    let subcategorias = document.querySelectorAll(".subcategoria");
    subcategorias.forEach(subcat => {
        subcat.addEventListener("click", function () {
            let productos = this.nextElementSibling;
            if (productos.style.display === "none" || productos.style.display === "") {
                productos.style.display = "flex";
            } else {
                productos.style.display = "none";
            }
        });
    });
});

// Función para redireccionar al inicio desde otras páginas
function irAInicio() {
    window.location.href = "index.html";
}

// Función para ir a la página de catálogo
function irACatalogo() {
    window.location.href = "catalogo.html";
}

// Función para ir a la página de contacto
function irAContacto() {
    window.location.href = "contacto.html";
}

// Función para abrir WhatsApp directamente
function abrirWhatsApp() {
    window.open("https://wa.me/524923688638", "_blank");
}
