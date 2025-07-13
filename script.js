// Arreglo inicial de productos
let productos = [
  { nombre: "Laptop", precio: 800, descripcion: "Laptop de alto rendimiento" },
  { nombre: "Mouse", precio: 20, descripcion: "Mouse inalámbrico" },
  { nombre: "Teclado", precio: 35, descripcion: "Teclado mecánico retroiluminado" }
];

// Función para renderizar productos
function renderizarProductos() {
  const lista = document.getElementById("lista-productos");
  lista.innerHTML = ""; // Limpiar contenido previo

  productos.forEach((producto) => {
    const li = document.createElement("li");
    li.innerHTML = `<strong>${producto.nombre}</strong> - $${producto.precio} <br><em>${producto.descripcion}</em>`;
    lista.appendChild(li);
  });
}

// Evento al cargar la página
document.addEventListener("DOMContentLoaded", () => {
  renderizarProductos();

  document.getElementById("agregar-producto").addEventListener("click", () => {
    const nuevoProducto = {
      nombre: "Nuevo Producto",
      precio: 0,
      descripcion: "Descripción del nuevo producto"
    };
    productos.push(nuevoProducto);
    renderizarProductos();
  });
});
