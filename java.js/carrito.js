// carrito.js

// Obtener el carrito desde localStorage o inicializarlo como un arreglo vacío
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// Función para agregar un producto al carrito
function agregarAlCarrito(producto) {
    carrito.push(producto);
    actualizarCarrito();
    actualizarLocalStorage();
}

// Función para actualizar localStorage con el contenido del carrito
function actualizarLocalStorage() {
    localStorage.setItem("carrito", JSON.stringify(carrito));
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

// Agregar un evento de carga para inicializar el carrito desde localStorage
window.addEventListener("load", () => {
    actualizarCarrito(); // Actualizar el carrito al cargar la página
});

