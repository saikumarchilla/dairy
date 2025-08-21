import React from 'react'
import { useNavigate } from "react-router-dom";
function Cart({ cartItems, quantities, onQuantityChange }) {
  const navigate = useNavigate();
  if (cartItems.length > 0) {
    return (
      <div>
        <div className="flex justify-between items-center mt-2">
          <button className='bg-blue-400 p-2' onClick={() => navigate("/products")} >{'Go to Products  >>'}</button>
          <button className='bg-blue-400 p-2'>{'Checkout  >>'}</button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
          {cartItems.map((product) => (
            <div
              key={product.productID}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              <img
                src={product.productImage}
                alt={product.productName}
                className="w-full h-48 object-cover"
              />
              {/* <div className="flex justify-between items-center mt-2 ">
                <h3 className="text-lg font-semibold">{product.productName}</h3>
                <h3 className="text-lg font-semibold">Price{product.productName}</h3>
              </div> */}
              <div className="flex justify-between items-center mt-3 space-x-2 p-2">
                <button
                  onClick={() => onQuantityChange(product.productID, -1)}
                  className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                >
                  -
                </button>
                <span>{ quantities[product.productID] ||1}</span>
                <button
                  onClick={() => onQuantityChange(product.productID, 1)}
                  className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                >
                  +
                </button>
                <h3 className="text-lg font-semibold">{product.productName}</h3>
                <label className="font-semibold item-left">₹ {quantities[product.productID] * product.price}</label>
              </div>
            </div>
          ))}
        </div>

      </div>
    )
  }
  else {
    return (<div><h2>Your Cart is Empty (for now)</h2></div>)

  }



}

export default Cart
