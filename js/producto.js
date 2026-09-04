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
