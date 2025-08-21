import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import Register from './pages/Register'
import Cart from './pages/Cart'
import toast, { Toaster } from 'react-hot-toast';

function App() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [quantities, setQuantities] = useState({});

  const handleQuantityChange = (id, change) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max(1, (prev[id] || 1) + change),
    }));
  };

  const handleAddToCart = (product) => {
    setCartItems((prev) => [
      ...prev, // keep existing cart items
      {
        productID: product.id,
        quantity: quantities[product.id] || 1,
        productImage: product.image,
        productName: product.name,
        price: product.price,
      }
    ]);
    toast.success(`${product.name} added to cart!`);

    // alert(`Added ${quantities[product.id] || 1} of ${product.name} to cart`);
  };
  return (
    <div className="flex flex-col h-screen w-full">
      {/* Header */}
      <Header toggleSidebar={() => setShowSidebar(!showSidebar)} cartItems={cartItems} />

      {/* Body */}
      <div className="flex flex-1 w-full">
        {showSidebar && <Sidebar />}

        <main className={`p-4 bg-gray-100 transition-all duration-1 ${showSidebar ? "flex-1" : "w-full"}`}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products quantities={quantities} onQuantityChange={handleQuantityChange} cartItems={cartItems} onProductChange={handleAddToCart} />} />
            <Route path="/register" element={<Register />} />
            <Route path="/cart" element={<Cart cartItems={cartItems} quantities={quantities} onQuantityChange={handleQuantityChange}/>} />
          </Routes>
        </main>
      </div>

      {/* Footer */}
      <Footer />
      <Toaster position="top-right" reverseOrder={false} />

    </div>
  )
}

export default App
