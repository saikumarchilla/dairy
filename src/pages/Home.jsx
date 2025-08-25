import React from 'react'
import { GiCow } from "react-icons/gi";  

function Home() {
return (
    <div className="flex flex-col items-center justify-center h-[80vh] bg-gradient-to-b from-blue-50 to-green-50 text-gray-700">
      <GiCow size={90} className="text-green-500 mb-6 animate-bounce" />
      
      <h1 className="text-3xl font-bold mb-3 text-green-700">
        Welcome to Village Dairy 🥛
      </h1>
      
      <p className="text-lg text-center max-w-md mb-6">
        Fresh milk and dairy products delivered straight to your village.  
        Taste the goodness of nature every day!
      </p>
      
      <a
        href="/products"
        className="px-6 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 transition"
      >
        Explore Products
      </a>
    </div>
  );
}

export default Home
