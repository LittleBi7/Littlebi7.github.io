// carrito.js

// Obtener el carrito desde localStorage o inicializarlo como un arreglo vacío
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// Función para agregar un producto al carrito y actualizar localStorage
function agregarAlLocalStorage(producto) {
    carrito.push(producto);
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

// Agregar un evento de carga para inicializar el carrito desde localStorage
window.addEventListener("load", () => {
    actualizarCarrito(); // Actualizar el carrito al cargar la página
});
