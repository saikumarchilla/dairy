import React, { useEffect, useState } from "react";

const productsData = [
  {
    id: 1,
    name: "Milk",
    image: "https://t4.ftcdn.net/jpg/02/31/84/29/360_F_231842968_qThCnmslPbEAwhg7nuW9rAy8qRNhRli7.jpg",
    price: 50
  },
  {
    id: 2,
    name: "Curd",
    image: "https://5.imimg.com/data5/QV/LM/RV/SELLER-12689510/fresh-full-fat-curd-500x500.jpg",
    price: 30

  },
  {
    id: 3,
    name: "Ghee",
    image: "https://t3.ftcdn.net/jpg/05/08/18/00/360_F_508180044_bhS8JphGiKuT3U9bt8LWANF7x9xBRTor.jpg",
    price: 75

  },
  {
    id: 4,
    name: "Butter Milk",
    image: "https://www.shutterstock.com/image-photo/summer-cooler-buttermilk-drink-made-260nw-1388268470.jpg",
    price: 20
  },
  {
    id: 5,
    name: "Lassi",
    image: "https://media.istockphoto.com/id/1365859011/photo/drink-mango-lassi-in-two-glasses-on-rustic-concrete-table-with-fresh-ripe-cut-manfo-from-above.jpg?s=612x612&w=0&k=20&c=uHnr_0raQDe2sgUYHdP5GSa2raaj3ILG4m1cmFHtVJA=",
    price: 40
  },
  {
    id: 6,
    name: "Ice Cream",
    image: "https://thumbs.dreamstime.com/b/holding-ice-cream-cones-under-sunset-two-hands-chocolate-raspberry-flavors-sunny-evening-busy-outdoor-event-370574051.jpg",
    price: 25
  },
];



export default function Products({cartItems,onProductChange,quantities,onQuantityChange}) {

  useEffect(() => {
    console.log("Updated cartItems:", cartItems);
  }, [cartItems]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {productsData.map((product) => (
        <div
          key={product.id}
          className="bg-white shadow-md rounded-lg overflow-hidden"
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold">{product.name}</h3>

            {/* Quantity selector */}
            <div className="flex items-center mt-3 space-x-2">
              <button
                onClick={() => onQuantityChange(product.id, -1)}
                className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
              >
                -
              </button>
              <span>{quantities[product.id] || 1}</span>
              <button
                onClick={() => onQuantityChange(product.id, 1)}
                className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
              >
                +
              </button>
              <label className="font-semibold item-left">₹ {quantities[product.id] * product.price || product.price}</label>
            </div>

            {/* <div className="mt-3 space-x-2">
              <button
                onClick={() => handleQuantityChange(product.id, -1)}
                className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
              >
                -
              </button>
           
            </div> */}

            {/* Add to Cart */}
            <button
              onClick={() => onProductChange(product)}
              className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded"
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
