import React from 'react'
import { useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

function Cart({ cartItems, quantities, onQuantityChange }) {
  const navigate = useNavigate();
  if (cartItems.length > 0) {
    return (
      <div>
        <div className="flex justify-between items-center mt-2">
          <button className='bg-blue-400 p-2' onClick={() => navigate("/products")} >{'Go to Products  >>'}</button>
          <button className='bg-blue-400 p-2' onClick={() => navigate("/address")}>{'Checkout  >>'}</button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-6">
          {cartItems.map((product) => (
            <div
              key={product.productID}
              className="bg-white shadow-md hover:shadow-lg transition-transform transform hover:scale-105 duration-300 rounded-xl overflow-hidden border border-gray-100"
            >
              {/* Image container */}
              <div className="bg-gray-50 flex justify-center items-center h-44">
                <img
                  src={product.productImage}
                  alt={product.productName}
                  className="h-40 object-contain"
                />
              </div>

              {/* Product details */}
              <div className="p-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-base font-semibold text-gray-800 truncate">
                    {product.productName}
                  </h3>
                  <span className="text-blue-600 font-bold text-sm">
                    ₹ {(quantities[product.productID] || 1) * product.price}
                  </span>
                </div>

                {/* Quantity controls */}
                <div className="flex items-center justify-between mt-3">
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => onQuantityChange(product.productID, -1)}
                      className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300 text-sm"
                    >
                      -
                    </button>
                    <span className="text-sm font-medium">
                      {quantities[product.productID] || 1}
                    </span>
                    <button
                      onClick={() => onQuantityChange(product.productID, 1)}
                      className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300 text-sm"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>


      </div>
    )
  }
  else {
    return (<div className="flex flex-col items-center justify-center h-[80vh] text-gray-600">
      <FaShoppingCart size={80} className="text-gray-400 mb-4" />
      <h2 className="text-2xl font-bold mb-2">Your cart is empty</h2>
      <p className="mb-6">Looks like you haven’t added anything yet.</p>
      <a
        href="/products"
        className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition">
        Browse Products
      </a>
    </div>)

  }



}

export default Cart
