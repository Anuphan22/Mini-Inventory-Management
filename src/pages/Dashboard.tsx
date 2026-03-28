// src/pages/Dashboard.tsx
import { Link } from 'react-router-dom';

interface DashboardProps {
  totalItems: number;
  totalValue: number;
  outOfStock: number;
}

export default function Dashboard({ totalItems, totalValue, outOfStock }: DashboardProps) {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold text-white mb-2">📦 ระบบจัดการสต๊อกสินค้า</h1>
          <p className="text-slate-400">ภาพรวมสต๊อกสินค้าของคุณ</p>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {/* Total Items */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 flex flex-col items-center shadow-xl hover:scale-105 transition-transform duration-200">
            <div className="text-5xl mb-3">🗂️</div>
            <p className="text-slate-300 text-sm font-medium uppercase tracking-wider mb-1">จำนวนรายการสินค้า</p>
            <p className="text-5xl font-bold text-white">{totalItems}</p>
            <p className="text-slate-400 text-sm mt-1">ชนิด</p>
          </div>

          {/* Total Value */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 flex flex-col items-center shadow-xl hover:scale-105 transition-transform duration-200">
            <div className="text-5xl mb-3">💰</div>
            <p className="text-slate-300 text-sm font-medium uppercase tracking-wider mb-1">มูลค่ารวมของสต๊อก</p>
            <p className="text-4xl font-bold text-emerald-400 leading-tight">
              {totalValue.toLocaleString('th-TH')}
            </p>
            <p className="text-slate-400 text-sm mt-1">บาท</p>
          </div>

          {/* Out of Stock */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 flex flex-col items-center shadow-xl hover:scale-105 transition-transform duration-200">
            <div className="text-5xl mb-3">⚠️</div>
            <p className="text-slate-300 text-sm font-medium uppercase tracking-wider mb-1">สินค้าหมด (Out of Stock)</p>
            <p className={`text-5xl font-bold ${outOfStock > 0 ? 'text-red-400' : 'text-emerald-400'}`}>
              {outOfStock}
            </p>
            <p className="text-slate-400 text-sm mt-1">รายการ</p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            to="/products"
            className="inline-block bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-8 py-3 rounded-xl shadow-lg transition-all duration-200 hover:shadow-indigo-500/30 hover:shadow-xl hover:-translate-y-0.5"
          >
            🛒 จัดการสินค้า →
          </Link>
        </div>
      </div>
    </div>
  );
}
