import React from 'react'
import { Link } from 'react-router-dom';

export default function Header({ toggleSidebar }) {
    return (
        <header className="bg-blue-400 text-white p-6 flex justify-between items-center">
            <button onClick={toggleSidebar} className="bg-white text-green-600 px-3 py-1 rounded">
                ☰
            </button>
            <h1 className="text-lg font-bold">Village Dairy</h1>
            <button onClick={toggleSidebar} className="bg-white text-green-600 px-3 py-1 rounded">
                🛒  <span>1</span>    </button>
        </header>
    );
}
