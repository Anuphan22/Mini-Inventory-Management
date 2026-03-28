// src/components/ProductCard.tsx
import type { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onIncrement: (id: number) => void;
  onDecrement: (id: number) => void;
  onDelete: (id: number) => void;
}

export default function ProductCard({ product, onIncrement, onDecrement, onDelete }: ProductCardProps) {
  const isOutOfStock = product.quantity === 0;

  return (
    <div
      className={`rounded-xl border p-4 flex items-center justify-between gap-4 transition-all duration-200 shadow-sm hover:shadow-md ${
        isOutOfStock
          ? 'bg-red-50 border-red-200'
          : 'bg-white border-slate-200 hover:border-indigo-300'
      }`}
    >
      {/* Product Info */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 flex-wrap">
          <h3 className="font-semibold text-slate-800 truncate">{product.name}</h3>
          {isOutOfStock && (
            <span className="bg-red-100 text-red-600 text-xs font-medium px-2 py-0.5 rounded-full whitespace-nowrap">
              สินค้าหมด
            </span>
          )}
        </div>
        <p className="text-sm text-slate-500 mt-0.5">
          ราคา: <span className="font-medium text-indigo-600">{product.price.toLocaleString('th-TH')} บาท</span>
        </p>
        <p className="text-sm text-slate-500">
          มูลค่ารวม: <span className="font-medium text-emerald-600">{(product.price * product.quantity).toLocaleString('th-TH')} บาท</span>
        </p>
      </div>

      {/* Quantity Control */}
      <div className="flex items-center gap-2 shrink-0">
        <button
          onClick={() => onDecrement(product.id)}
          disabled={isOutOfStock}
          className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-slate-200 disabled:opacity-40 disabled:cursor-not-allowed font-bold text-slate-700 transition-colors duration-150 flex items-center justify-center"
          title="ลดจำนวน"
        >
          −
        </button>

        <span className={`w-10 text-center font-bold text-lg ${isOutOfStock ? 'text-red-500' : 'text-slate-800'}`}>
          {product.quantity}
        </span>

        <button
          onClick={() => onIncrement(product.id)}
          className="w-8 h-8 rounded-lg bg-indigo-100 hover:bg-indigo-200 font-bold text-indigo-700 transition-colors duration-150 flex items-center justify-center"
          title="เพิ่มจำนวน"
        >
          +
        </button>

        <button
          onClick={() => onDelete(product.id)}
          className="w-8 h-8 rounded-lg bg-red-100 hover:bg-red-200 font-bold text-red-600 transition-colors duration-150 flex items-center justify-center ml-1"
          title="ลบสินค้า"
        >
          🗑
        </button>
      </div>
    </div>
  );
}
