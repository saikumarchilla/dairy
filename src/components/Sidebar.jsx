import { Link } from 'react-router-dom';

export default function Sidebar() {
//   return (
//     <aside style={{ width: '200px', background: '#f0f0f0', padding: '1rem' }}>
//       <h3>Categories</h3>
//       <ul style={{ listStyle: 'none', padding: 0 }}>
//         <li><Link to="/products?cat=milk">Milk</Link></li>
//         <li><Link to="/products?cat=curd">Curd</Link></li>
//         <li><Link to="/products?cat=lassi">Lassi</Link></li>
//         <li><Link to="/products?cat=buttermilk">Buttermilk</Link></li>
//       </ul>
//     </aside>
//   );
return (
    <aside className="w-48 bg-green-200 p-4">
      <nav className="flex flex-col space-y-2">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/products" className="hover:underline">Products</Link>
        <Link to="/cart" className="hover:underline">Cart</Link>
      </nav>
    </aside>
  );
}