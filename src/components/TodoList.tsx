// src/components/TodoList.tsx
import React from 'react';
import type { Todo } from '../types';
import TodoItem from './TodoItem';

interface Props {
  todos: Todo[];
  onDelete: (id: number) => void;
  onCompletedChange: (id: number, completed: boolean) => void;
}

const TodoList: React.FC<Props> = ({ todos, onDelete, onCompletedChange }) => {

  // TODO: สร้างเงื่อนไข ถ้า todos ไม่มีข้อมูลเลย (length === 0) 
  // ให้ return ข้อความ <p className="text-center text-gray-500">ไม่มีงานในรายการ</p>
  if (todos.length === 0) {
    return <p className="text-center text-gray-500">ไม่มีงานในรายการ</p>;
  }

  return (
    <div className="border border-gray-200 rounded-md">
      {/* TODO: ใช้ Array.map() เพื่อวนลูปสร้าง <TodoItem /> */}
      {/* Hint: อย่าลืมส่ง key={todo.id} และส่ง Props ที่จำเป็นเข้าไปด้วย */}
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDelete={onDelete}
          onCompletedChange={onCompletedChange}
        />
      ))}
    </div>
  );
};

export default TodoList;