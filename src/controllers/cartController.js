export function addToCart(cart, item) {
  const itemId = item.id || `item-${Date.now()}`;
  const existingIndex = cart.findIndex((i) => i.id === itemId);

  if (existingIndex > -1) {
    return cart.map((i, index) =>
      index === existingIndex ? { ...i, quantity: (i.quantity || 1) + 1 } : i
    );
  }

  return [
    ...cart,
    {
      id: itemId,
      title: item.title || item.name || item.value || "VIP Sports Car",
      value: item.value || item.name || item.title || "VIP Sports Car",
      category: item.category || "VIP Service",
      rate: item.dailyRate || item.rate || 25000,
      quantity: 1,
      image: item.image || "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=600&q=80"
    }
  ];
}

export function removeFromCart(cart, itemId) {
  return cart.filter((item) => item.id !== itemId);
}

export function clearCart() {
  return [];
}

export function getCartTotal(cart) {
  return cart.reduce((sum, item) => sum + (item.rate || 0) * (item.quantity || 1), 0);
}
