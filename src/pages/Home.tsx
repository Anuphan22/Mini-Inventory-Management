// src/pages/Home.tsx
import React from 'react';
import type { Todo } from '../types';

interface Props {
  todos: Todo[];
}

const Home: React.FC<Props> = ({ todos }) => {
  // TODO: คำนวณจำนวนงานที่ทำเสร็จแล้ว (completed === true)
  // Hint: ลองใช้ Array.filter() ในการกรองข้อมูล
  const completedCount = todos.filter(todo => todo.completed).length;

  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="bg-blue-100 p-4 rounded-lg">
        <p className="text-lg">
          คุณมีงานทั้งหมด: <span className="font-bold">{todos.length}</span> งาน
        </p>
        <p className="text-lg text-green-600">
          เสร็จแล้ว: <span className="font-bold">{completedCount}</span> งาน
        </p>
      </div>
    </div>
  );
};

export default Home;