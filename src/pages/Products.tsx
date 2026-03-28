// src/pages/Products.tsx
import { useState } from 'react';
import type { Product } from '../types';
import ProductCard from '../components/ProductCard';

interface ProductsProps {
  products: Product[];
  onAdd: (name: string, price: number, quantity: number) => void;
  onUpdateQuantity: (id: number, delta: number) => void;
  onDelete: (id: number) => void;
}

export default function Products({ products, onAdd, onUpdateQuantity, onDelete }: ProductsProps) {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [search, setSearch] = useState('');
  const [error, setError] = useState('');

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    const parsedPrice = parseFloat(price);
    const parsedQty = parseInt(quantity, 10);

    if (!name.trim()) { setError('กรุณากรอกชื่อสินค้า'); return; }
    if (isNaN(parsedPrice) || parsedPrice < 0) { setError('กรุณากรอกราคาที่ถูกต้อง'); return; }
    if (isNaN(parsedQty) || parsedQty < 0) { setError('กรุณากรอกจำนวนที่ถูกต้อง'); return; }

    onAdd(name, parsedPrice, parsedQty);
    setName('');
    setPrice('');
    setQuantity('');
    setError('');
  };

  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 p-6">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-2">🛒 จัดการสินค้า</h1>
          <p className="text-slate-400">เพิ่ม ค้นหา และจัดการสต๊อกสินค้า</p>
        </div>

        {/* Add Product Form */}
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 mb-6 shadow-xl">
          <h2 className="text-white font-semibold text-lg mb-4">➕ เพิ่มสินค้าใหม่</h2>
          <form onSubmit={handleAdd} className="space-y-3">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <input
                type="text"
                placeholder="ชื่อสินค้า"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-white/10 border border-white/20 text-white placeholder-slate-400 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
              />
              <input
                type="number"
                placeholder="ราคา (บาท)"
                value={price}
                min="0"
                step="0.01"
                onChange={(e) => setPrice(e.target.value)}
                className="bg-white/10 border border-white/20 text-white placeholder-slate-400 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
              />
              <input
                type="number"
                placeholder="จำนวนเริ่มต้น"
                value={quantity}
                min="0"
                onChange={(e) => setQuantity(e.target.value)}
                className="bg-white/10 border border-white/20 text-white placeholder-slate-400 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
              />
            </div>
            {error && <p className="text-red-400 text-sm">{error}</p>}
            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-2.5 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-indigo-500/30 hover:-translate-y-0.5 active:translate-y-0"
            >
              เพิ่มสินค้า
            </button>
          </form>
        </div>

        {/* Search Bar */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="🔍 ค้นหาสินค้า..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-slate-400 rounded-xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all shadow"
          />
        </div>

        {/* Product List */}
        <div className="space-y-3">
          {filtered.length === 0 ? (
            <div className="text-center text-slate-400 py-12">
              <p className="text-4xl mb-3">📭</p>
              <p>{search ? 'ไม่พบสินค้าที่ค้นหา' : 'ยังไม่มีสินค้าในระบบ'}</p>
            </div>
          ) : (
            filtered.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onIncrement={(id) => onUpdateQuantity(id, 1)}
                onDecrement={(id) => onUpdateQuantity(id, -1)}
                onDelete={onDelete}
              />
            ))
          )}
        </div>

        {filtered.length > 0 && (
          <p className="text-center text-slate-500 text-sm mt-4">
            แสดง {filtered.length} จาก {products.length} รายการ
          </p>
        )}
      </div>
    </div>
  );
}
