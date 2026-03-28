// src/App.tsx
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Products from './pages/Products';
import { useInventory } from './hooks/useInventory';

function NavLink({ to, children }: { to: string; children: React.ReactNode }) {
  const { pathname } = useLocation();
  const active = pathname === to;
  return (
    <Link
      to={to}
      className={`px-5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-200 ${
        active
          ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/30'
          : 'text-slate-300 hover:text-white hover:bg-white/10'
      }`}
    >
      {children}
    </Link>
  );
}

function App() {
  const {
    products,
    addProduct,
    updateQuantity,
    deleteProduct,
    totalItems,
    totalValue,
    outOfStock,
  } = useInventory();

  return (
    <BrowserRouter>
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-white/10 px-6 py-3">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <span className="text-white font-bold text-lg">📦 StockManager</span>
          <div className="flex gap-2">
            <NavLink to="/">📊 Dashboard</NavLink>
            <NavLink to="/products">🛒 สินค้า</NavLink>
          </div>
        </div>
      </nav>

      {/* Routes */}
      <Routes>
        <Route
          path="/"
          element={
            <Dashboard
              totalItems={totalItems}
              totalValue={totalValue}
              outOfStock={outOfStock}
            />
          }
        />
        <Route
          path="/products"
          element={
            <Products
              products={products}
              onAdd={addProduct}
              onUpdateQuantity={updateQuantity}
              onDelete={deleteProduct}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;