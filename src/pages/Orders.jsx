import React from 'react'
import { FaBoxOpen } from "react-icons/fa";

function Orders() {
 return (
    <div className="flex flex-col items-center justify-center h-[80vh] text-gray-600">
      <FaBoxOpen size={80} className="text-gray-400 mb-4" />
      <h2 className="text-2xl font-bold mb-2">You haven’t placed any orders</h2>
      <p className="mb-6">Start shopping and your orders will appear here.</p>
      <a
        href="/products"
        className="px-6 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 transition"
      >
        Shop Now
      </a>
    </div>
  );
}

export default Orders
