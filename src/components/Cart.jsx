import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Navigation from "./Navigation"; // Import Navigation component

function Cart() {
  const [products, setProducts] = useState([]);
  const cart = useSelector((state) => state.shop.cart); // Get cart items (IDs) from Redux store

  useEffect(() => {
    const storedProducts = localStorage.getItem("products");
    if (storedProducts) {
      setProducts(JSON.parse(storedProducts)); // Set products from localStorage
    }
  }, []);

  const cartItems = products.filter((product) => cart.includes(product.id));

  const getTotalPrice = () => {
    return cartItems.reduce((total, product) => total + product.price, 0).toFixed(2);
  };

  const getTotalItems = () => {
    return cartItems.length;
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navigation /> {/* Add Navigation */}
      <div className="p-6">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Your Cart</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Panel - Cart Items */}
          <div className="space-y-4">
            {cartItems.length === 0 ? (
              <p>Your cart is empty!</p>
            ) : (
              cartItems.map((product) => (
                <div
                  key={product.id}
                  className="flex items-center justify-between bg-white p-4 rounded-md shadow-md"
                >
                  <div className="flex items-center space-x-4">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-24 h-24 object-contain"
                    />
                    <div>
                      <h2 className="text-lg font-semibold">{product.title}</h2>
                      <p className="text-sm text-gray-500">${product.price}</p>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Right Panel - Cart Summary */}
          <div className="bg-white p-6 rounded-md shadow-md">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Cart Summary</h2>
            <div className="space-y-2 mb-4">
              <div className="flex justify-between">
                <span>Total Items</span>
                <span>{getTotalItems()}</span>
              </div>
              <div className="flex justify-between">
                <span>Total Price</span>
                <span>${getTotalPrice()}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
