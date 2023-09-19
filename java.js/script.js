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
// script.js

const carrito = [];

function agregarAlCarrito(event) {
    const producto = event.target.getAttribute("data-producto");
    carrito.push(producto);
    actualizarCarrito();
}

function actualizarCarrito() {
    const carritoLista = document.getElementById("carrito");
    carritoLista.innerHTML = ""; // Limpiar la lista antes de actualizar

    carrito.forEach((producto) => {
        const li = document.createElement("li");
        li.textContent = producto;
        carritoLista.appendChild(li);
    });
}
