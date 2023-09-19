// script.js

// Función que se ejecuta cuando se hace clic en el botón "Agregar al Carrito"
function agregarAlCarrito() {
    // Aquí puedes realizar alguna acción, como agregar el producto al carrito
    alert("Producto agregado al carrito");
}

// Asociar la función "agregarAlCarrito" al botón por su id
var botonAgregarAlCarrito = document.getElementById("agregarAlCarrito");
if (botonAgregarAlCarrito) {
    botonAgregarAlCarrito.addEventListener("click", agregarAlCarrito);
}