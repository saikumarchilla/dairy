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

function App() {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
 <div className="flex flex-col h-screen w-full">
  {/* Header */}
  <Header toggleSidebar={() => setShowSidebar(!showSidebar)} />

  {/* Body */}
  <div className="flex flex-1 w-full">
    {showSidebar && <Sidebar />}

    <main className={`p-4 bg-gray-100 transition-all duration-1 ${showSidebar ? "flex-1" : "w-full"}`}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </main>
  </div>

  {/* Footer */}
  <Footer />
</div>
  )
}

export default App
