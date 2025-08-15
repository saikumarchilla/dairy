import React from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { useState,useEffect } from 'react';
export default function Header({ toggleSidebar }) {

    const navigate = useNavigate();
    // const cartItems = JSON.parse(sessionStorage.getItem("cartItems"));
    const [cartItems, setCart] = useState(() => JSON.parse(sessionStorage.getItem("cartItems")) || []);
    console.log(cartItems);
    
    useEffect(() => {
      setCart(JSON.parse(sessionStorage.getItem("cartItems")));
      console.log(cartItems);
    },[])
    function navigateTocart() {
        navigate("/cart");
    }
    return (
        <header className="bg-blue-400 text-white p-6 flex justify-between items-center">
            <button onClick={toggleSidebar} className="bg-white text-green-600 px-3 py-1 rounded">
                ☰
            </button>
            <h1 className="text-lg font-bold">Village Dairy</h1>
            <button onClick={navigateTocart} className="bg-white text-green-600 px-3 py-1 rounded">
                🛒  <span>{cartItems.length}</span>    </button>
        </header>
    );
}
