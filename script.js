document.addEventListener("DOMContentLoaded", () => {
    // Manejo de categorías y productos desplegables en el catálogo
    const categorias = document.querySelectorAll(".titulo-categoria");
    categorias.forEach(categoria => {
        categoria.addEventListener("click", () => {
            const subcategorias = categoria.nextElementSibling;
            subcategorias.style.display = subcategorias.style.display === "block" ? "none" : "block";
        });
    });

    const subcategorias = document.querySelectorAll(".subcategoria");
    subcategorias.forEach(subcategoria => {
        subcategoria.addEventListener("click", () => {
            const productos = subcategoria.nextElementSibling;
            productos.style.display = productos.style.display === "block" ? "none" : "block";
        });
    });

    // Redirigir el botón de inicio a la sección "Quiénes Somos" en la página principal
    const botonInicio = document.querySelector('nav ul li a[href="index.html"]');
    if (botonInicio) {
        botonInicio.addEventListener("click", (event) => {
            event.preventDefault();
            window.location.href = "index.html#quienes-somos";
        });
    }

    // Manejo del formulario de contacto con validación
    const formulario = document.querySelector("form");
    if (formulario) {
        formulario.addEventListener("submit", (event) => {
            event.preventDefault(); // Evita el envío por defecto

            const nombre = document.getElementById("nombre").value.trim();
            const correo = document.getElementById("correo").value.trim();
            const mensaje = document.getElementById("mensaje").value.trim();

            if (nombre === "" || correo === "" || mensaje === "") {
                alert("Por favor, completa todos los campos.");
                return;
            }

            alert("Mensaje enviado correctamente.");
            formulario.reset(); // Limpia el formulario
        });
    }
});
