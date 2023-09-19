// script.js

// Función que se ejecuta cuando se hace clic en un botón "Añadir al Carrito"
function agregarAlCarrito(event) {
    const producto = event.target.getAttribute("data-producto");
    alert(`${producto} agregado al carrito`);
}

// Obtener todos los botones "Añadir al Carrito" por su clase
const botonesAgregarAlCarrito = document.querySelectorAll(".agregarAlCarrito");

// Agregar un evento de clic a cada botón
botonesAgregarAlCarrito.forEach((boton) => {
    boton.addEventListener("click", agregarAlCarrito);
});
