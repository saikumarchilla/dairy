import React from 'react'
import { useNavigate } from "react-router-dom";

function Cart(cartItems) {
  console.log(cartItems);
const navigate = useNavigate();

  return (
    <div>
      <div className="flex justify-between items-center mt-2">
        <button className='bg-blue-400 p-2' onClick={() => navigate("/products")} >{'Go to Products  >>'}</button>
        <button className='bg-blue-400 p-2'>{'Checkout  >>'}</button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
        {cartItems.cartItems.map((product) => (
          <div
            key={product.productID}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            <img
              src={product.productImage}
              alt={product.productName}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{product.productName}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Cart
