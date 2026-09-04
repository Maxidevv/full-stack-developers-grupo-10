import { productos } from "./productos.js";

document.addEventListener("DOMContentLoaded", () => {
  const catalogGrid = document.getElementById("jh-catalog-grid");
  const catalogLoader = document.getElementById("jh-catalog-loader");

  if (!catalogGrid) return;

  function obtenerProductosAPI() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (typeof productos !== "undefined" && productos.length > 0) {
          resolve(productos);
        } else {
          reject("Error al obtener los datos del catálogo");
        }
      }, 1200);
    });
  }

  async function cargarCatalogo() {
    try {
      if (catalogLoader) catalogLoader.style.display = "flex";
      catalogGrid.style.display = "none";

      const lista = await obtenerProductosAPI();

      if (catalogLoader) catalogLoader.style.display = "none";
      catalogGrid.style.display = "grid";

      renderizarTarjetas(lista);
    } catch (error) {
      console.error(error);
      if (catalogLoader) {
        catalogLoader.innerHTML = `<p class="productos-destacados__error">Error al cargar los productos.</p>`;
      }
    }
  }

  function renderizarTarjetas(items) {
    catalogGrid.innerHTML = "";

    items.forEach((prod) => {
      const card = document.createElement("article");
      card.classList.add("card-producto");

      card.innerHTML = `
        <img src="${prod.imagen}" alt="${prod.nombre}" class="card-producto__img" loading="lazy" />
        <h3 class="card-producto__nombre">${prod.nombre}</h3>
        <p class="card-producto__precio">$${prod.precio.toLocaleString("es-AR")}</p>
        <a href="/producto.html?id=${prod.id}" class="card-producto__detalle">Ver detalle</a>
      `;

      catalogGrid.appendChild(card);
    });
  }

  cargarCatalogo();
});

document.addEventListener("DOMContentLoaded", () => {
  const detalleContainer = document.getElementById("jh-detalle-producto");
  if (!detalleContainer) return;

  const loader = document.getElementById("jh-detalle-loader");
  const errorBox = document.getElementById("jh-detalle-error");
  const img = document.getElementById("jh-detalle-img");
  const nombre = document.getElementById("jh-detalle-nombre");
  const precio = document.getElementById("jh-detalle-precio");
  const descripcion = document.getElementById("jh-detalle-descripcion");
  const fabricacion = document.getElementById("jh-detalle-fabricacion");
  const addCartBtn = document.getElementById("jh-detalle-add-cart");

  function mostrarError() {
    if (loader) loader.style.display = "none";
    if (errorBox) errorBox.classList.add("jh-detalle__error--visible");
  }

  function renderDetalle() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
    const producto = productos.find((p) => p.id === id);

    if (!producto) {
      mostrarError();
      return;
    }

    if (loader) loader.style.display = "none";
    detalleContainer.classList.add("jh-detalle__producto--visible");

    if (img) {
      img.src = producto.imagen;
      img.alt = `Imagen de ${producto.nombre}`;
    }
    if (nombre) nombre.textContent = producto.nombre;
    if (precio) {
      precio.textContent = `$${producto.precio.toLocaleString("es-AR")}`;
    }
    if (descripcion) descripcion.textContent = producto.descripcion;
    if (fabricacion) {
      fabricacion.textContent = producto.detallesFabricacion;
    }

    document.title = `${producto.nombre} - Mueblería Jota`;

    if (addCartBtn) {
      addCartBtn.addEventListener("click", () => {
        window.addToCart(producto.id);
      });
    }
  }

  setTimeout(renderDetalle, 800);
});
