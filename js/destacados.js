import { productos } from "./productos.js";

function getDestacados(max = 4, min = 3) {
  let destacados = productos.filter((p) => p.destacado === true);
  if (destacados.length < min) {
    return destacados; // Devuelve 0-2 si hay pocos, gestiona edge case abajo
  }
  return destacados.slice(0, max);
}

function crearCard(producto) {
  const card = document.createElement("article");
  card.className = "card-producto";
  card.setAttribute("tabindex", "0");
  card.setAttribute("role", "group");

  // Imagen, fallback + accesibilidad
  const imagen = document.createElement("img");
  imagen.className = "card-producto__img";
  imagen.src = producto.imagen || "/img/no-image.svg";
  imagen.alt = producto.nombre
    ? `Imagen de ${producto.nombre}`
    : "Imagen de producto sin nombre";
  imagen.loading = "lazy";
  card.appendChild(imagen);

  // Nombre
  const nombre = document.createElement("h3");
  nombre.className = "card-producto__nombre";
  nombre.textContent = producto.nombre || "Producto sin nombre";
  card.appendChild(nombre);

  // Precio
  const precio = document.createElement("p");
  precio.className = "card-producto__precio";
  precio.textContent =
    typeof producto.precio === "number"
      ? `$${producto.precio.toLocaleString("es-AR")}`
      : "Consultar precio";
  card.appendChild(precio);

  // Ver detalle
  const link = document.createElement("a");
  link.className = "card-producto__detalle";
  link.href = producto.id ? `producto.html?id=${producto.id}` : "#";
  link.textContent = "Ver detalle";
  link.setAttribute("role", "button");
  link.setAttribute("tabindex", "0");
  link.setAttribute(
    "aria-label",
    `Ver detalle del producto${producto.nombre ? " " + producto.nombre : ""}`,
  );
  link.rel = "noopener";
  if (!producto.id) link.tabIndex = -1;
  card.appendChild(link);

  return card;
}

document.addEventListener("DOMContentLoaded", () => {
  const cont = document.getElementById("productos-destacados");
  if (!cont) return;
  let destacados;
  try {
    destacados = getDestacados();
  } catch (err) {
    cont.innerHTML = `<div class="productos-destacados__error" role="alert">No se pudieron cargar los productos destacados.</div>`;
    return;
  }
  if (!destacados.length) {
    cont.innerHTML =
      '<p role="status">No hay productos destacados actualmente.</p>';
    return;
  }
  cont.innerHTML =
    '<h2 class="productos-destacados__title" id="productos-destacados-title">Conoce nuestros productos destacados</h2>';
  const wrap = document.createElement("div");
  wrap.className = "productos-destacados__lista";
  destacados.forEach((prod) => {
    try {
      wrap.appendChild(crearCard(prod));
    } catch (e) {
      // Fallback en caso de card corrupta
      const fallback = document.createElement("article");
      fallback.textContent = "Producto no disponible.";
      fallback.className = "card-producto card-producto--error";
      wrap.appendChild(fallback);
    }
  });
  cont.appendChild(wrap);
});
