import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const productsData = [
  {
    id: 1,
    name: "Milk",
    image: "https://t4.ftcdn.net/jpg/02/97/14/83/360_F_297148349_lEPXSzxqNO8MIyAqdXMEgfQkamgzu2WW.jpg",
    price: 50
  },
  {
    id: 2,
    name: "Curd",
    image: "https://5.imimg.com/data5/SELLER/Default/2021/1/KP/LY/GJ/118764700/fresh-curd.jpg",
    price: 30
  },
  {
    id: 3,
    name: "Ghee",
    image: "https://img.freepik.com/free-photo/ghee-clarified-butter-jar-wooden-table-ai-generative_123827-24203.jpg",
    price: 75
  },
  {
    id: 4,
    name: "Butter Milk",
    image: "https://www.shutterstock.com/image-photo/serving-buttermilk-drink-mud-cup-260nw-2615809651.jpg",
    price: 20
  },
  {
    id: 5,
    name: "Lassi",
    image: "https://www.shutterstock.com/image-photo/sweet-lassi-served-glass-cup-260nw-2288527407.jpg",
    price: 40
  },
  {
    id: 6,
    name: "Ice Cream",
    image: "https://media.istockphoto.com/id/1155863812/photo/soft-serve-ice-cream-cone-trio-on-blue.jpg?s=612x612&w=0&k=20&c=kklcAss6W5AwOthhlcVAeQL8quJm8ekuVM-nS1xEXsY=",
    price: 25
  },
  {
    id: 7,
    name: "Paneer",
    image: "https://media.istockphoto.com/id/2209167127/photo/indian-paneer-cheese-made-from-fresh-milk-and-lemon-juice-on-grey-background-copy-space.jpg?s=612x612&w=0&k=20&c=W2zbsvaFjN81WYaeqP7MBBys8-w76Z3gO4GbE-Eokus=",
    price: 120
  },
  {
    id: 8,
    name: "Cheese",
    image: "https://media.istockphoto.com/id/1458714898/photo/various-cheese-on-board.jpg?s=612x612&w=0&k=20&c=_CXI6ISgHeI8Mn5HCK9QghEvBH-AZajl-pI6z3upcd0=",
    price: 150
  },
  {
    id: 9,
    name: "Butter",
    image: "https://media.istockphoto.com/id/906372070/photo/butter.jpg?s=612x612&w=0&k=20&c=cBD5fIc1AdiDdqvE2RBBz_sBhR9n38unk2Q1rxj1rQM=",
    price: 60
  },
  {
    id: 10,
    name: "Flavored Milk",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdcPCn8nmulZi4A-Y4d_h1Nbalr8uUpMp_tE38Uyj2b4bMLWG5QjbUGtfZrdhf2PpTRJg&usqp=CAU",
    price: 35
  },
  {
    id: 11,
    name: "Khoa / Mawa",
    image: "https://www.shutterstock.com/image-photo/milk-mawa-khoya-dairy-product-260nw-1855459150.jpg",
    price: 100
  },
  {
    id: 12,
    name: "Milkshake",
    image: "https://media.istockphoto.com/id/1281122491/photo/homemade-frozen-vanilla-milkshake.jpg?s=612x612&w=0&k=20&c=2l1GD_rg1k0HawUhBJWkRXmIsyBUe0khPXmWRt-MPGo=",
    price: 70
  }
];




export default function Products({cartItems,onProductChange,quantities,onQuantityChange}) {

  useEffect(() => {
    console.log("Updated cartItems:", cartItems);
  }, [cartItems]);

    return (
    <div className="max-h-[600px] overflow-y-auto p-4 bg-gray-50 rounded-lg shadow-inner">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
        {productsData.map((product) => (
          <motion.div
            key={product.id}
            className="bg-white shadow-md hover:shadow-xl transition-all duration-300 rounded-xl overflow-hidden border border-gray-100 cursor-pointer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            {/* Product Image */}
            <div className="bg-gray-50 flex justify-center items-center h-44">
              <img
                src={product.image}
                alt={product.name}
                className="h-40 object-contain"
              />
            </div>

            {/* Product Details */}
            <div className="p-4">
              <h3 className="text-base font-semibold text-gray-800 truncate">
                {product.name}
              </h3>

              {/* Quantity selector */}
              <div className="flex items-center justify-between mt-3">
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => onQuantityChange(product.id, -1)}
                    className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300 text-sm"
                  >
                    -
                  </button>
                  <span className="text-sm font-medium">
                    {quantities[product.id] || 1}
                  </span>
                  <button
                    onClick={() => onQuantityChange(product.id, 1)}
                    className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300 text-sm"
                  >
                    +
                  </button>
                </div>
                <label className="font-semibold text-blue-600 text-sm">
                  ₹ {quantities[product.id] * product.price || product.price}
                </label>
              </div>

              {/* Add to Cart */}
              <motion.button
                onClick={() => onProductChange(product)}
                className="mt-4 w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white py-2 rounded-lg text-sm font-medium shadow-md transition"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Add to Cart
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );

}
