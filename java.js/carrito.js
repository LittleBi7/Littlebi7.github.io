// carrito.js

// Inicializar el carrito como un arreglo vacío
let carrito = [];

// Función para agregar un producto al carrito
function agregarAlCarrito(producto) {
    carrito.push(producto);
    actualizarCarrito();
}

// Función para actualizar la lista de productos en el carrito
function actualizarCarrito() {
    const carritoLista = document.getElementById("carrito");
    carritoLista.innerHTML = "";

    carrito.forEach((producto) => {
        const li = document.createElement("li");
        li.textContent = producto;
        carritoLista.appendChild(li);
    });

    // Actualizar el contador de elementos en el carrito en el icono del carrito
    const contadorCarrito = document.getElementById("contadorCarrito");
    contadorCarrito.textContent = carrito.length;
}

// Obtener todos los botones "Añadir al Carrito" por su clase
const botonesAgregarAlCarrito = document.querySelectorAll(".agregarAlCarrito");

// Agregar un evento de clic a cada botón
botonesAgregarAlCarrito.forEach((boton) => {
    boton.addEventListener("click", () => {
        const producto = boton.getAttribute("data-producto");
        agregarAlCarrito(producto);
    });
});

// carrito.js

// Inicializar el carrito a partir de localStorage o crear un arreglo vacío
let carrito2 = JSON.parse(localStorage.getItem("carrito")) || [];

// Función para agregar un producto al carrito y actualizar localStorage
function agregarAlCarrito(producto) {
    carrito.push(producto);
    actualizarCarrito();
    actualizarLocalStorage();
}

// Función para actualizar localStorage con el contenido del carrito
function actualizarLocalStorage() {
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

// Resto del código del archivo carrito.js sin cambios

// carrito.js



