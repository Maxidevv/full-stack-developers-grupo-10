function addToCart(productId) {
  let cartItems = [];
  try {
    const stored = localStorage.getItem("cartItems");
    if (stored) {
      const parsed = JSON.parse(stored);
      if (Array.isArray(parsed)) cartItems = parsed;
    }
  } catch (error) {
    cartItems = [];
  }
  cartItems.push(productId);
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  if (typeof window.updateCartCount === "function") {
    window.updateCartCount();
  }
}

window.addToCart = addToCart;