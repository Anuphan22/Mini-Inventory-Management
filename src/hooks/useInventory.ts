// src/hooks/useInventory.ts
import { useState } from 'react';
import type { Product } from '../types';

const INITIAL_PRODUCTS: Product[] = [
  { id: 1, name: 'แล็ปท็อป', price: 35000, quantity: 5 },
  { id: 2, name: 'เมาส์ไร้สาย', price: 890, quantity: 12 },
  { id: 3, name: 'คีย์บอร์ด', price: 1500, quantity: 0 },
  { id: 4, name: 'จอมอนิเตอร์', price: 8500, quantity: 3 },
];

export function useInventory() {
  const [products, setProducts] = useState<Product[]>(INITIAL_PRODUCTS);

  const addProduct = (name: string, price: number, quantity: number) => {
    const newProduct: Product = {
      id: Date.now(),
      name: name.trim(),
      price,
      quantity,
    };
    setProducts((prev) => [...prev, newProduct]);
  };

  const updateQuantity = (id: number, delta: number) => {
    setProducts((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, quantity: Math.max(0, p.quantity + delta) } : p
      )
    );
  };

  const deleteProduct = (id: number) => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  const totalItems = products.length;
  const totalValue = products.reduce((sum, p) => sum + p.price * p.quantity, 0);
  const outOfStock = products.filter((p) => p.quantity === 0).length;

  return {
    products,
    addProduct,
    updateQuantity,
    deleteProduct,
    totalItems,
    totalValue,
    outOfStock,
  };
}
