// Header - menú móvil y contador de carrito

document.addEventListener("DOMContentLoaded", function () {
  // Menú móvil burger toggle
  const burger = document.getElementById("jh-burger");
  const nav = document.getElementById("jh-nav");
  if (burger && nav) {
    burger.addEventListener("click", function () {
      nav.classList.toggle("open");
    });
    // Cierra el menú si cambias el tamaño de pantalla a escritorio
    window.addEventListener("resize", function () {
      if (window.innerWidth > 870) nav.classList.remove("open");
    });
  }

  // Manejo contador carrito
  function updateCartCount() {
    let count = 0;
    try {
      const stored = localStorage.getItem("cartItems");
      if (stored) {
        const arr = JSON.parse(stored);
        count = Array.isArray(arr) ? arr.length : 0;
      }
    } catch (e) {
      count = 0;
    }
    const cartCount = document.getElementById("jh-cart-count");
    if (cartCount) cartCount.textContent = count;
  }

  // Evento de actualización ficticio; llama updateCartCount() después de agregar/eliminar del carrito real
  window.updateCartCount = updateCartCount;
  updateCartCount();
  window.addEventListener("storage", function (e) {
    if (e.key === "cartItems") updateCartCount();
  });
});
