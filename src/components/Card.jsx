// ProductCard.jsx
import React from "react";

const Card = ({ product, addToCart }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center justify-between">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-40 object-cover rounded-md"
      />
      <h3 className="text-gray-700 text-lg font-semibold mt-3 text-center">
        {product.title}
      </h3>
      <p className="text-gray-600 text-sm mt-2">₹{product.price}</p>
      <button
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
        onClick={() => addToCart(product)}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Card;
