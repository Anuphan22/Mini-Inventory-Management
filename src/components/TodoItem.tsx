// src/components/TodoItem.tsx
import React from 'react';
import type { Todo } from '../types';

interface Props {
  todo: Todo;
  onCompletedChange: (id: number, completed: boolean) => void;
  onDelete: (id: number) => void;
}

const TodoItem: React.FC<Props> = ({ todo, onCompletedChange, onDelete }) => {
  return (
    <div className="flex items-center justify-between p-3 border-b">
      <div className="flex items-center space-x-4">
        <input
          type="checkbox"
          checked={todo.completed}
          // TODO: สร้าง Callback function เมื่อ Checkbox มีการเปลี่ยนแปลง
          onChange={(e) => { onCompletedChange(todo.id, e.target.checked) }}
          className="h-5 w-5 text-blue-500 rounded"
        />

        {/* TODO: Lab Step 3 - สร้าง Interactive UI ด้วย Conditional Styling */}
        {/* เคล็ดลับ: ถ้า todo.completed เป็นจริง ให้ใส่คลาส 'line-through text-gray-400' */}
        <span className={todo.completed ? 'line-through text-gray-400' : ''}>
          {todo.title}
        </span>
      </div>

      <button
        // TODO: เรียกใช้ฟังก์ชัน onDelete เมื่อคลิกปุ่ม
        onClick={() => onDelete(todo.id)}
        className="text-red-400 hover:text-red-600 font-semibold"
      >
        ลบ
      </button>
    </div>
  );
};

export default TodoItem;