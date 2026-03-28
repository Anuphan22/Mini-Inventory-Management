// src/pages/Todos.tsx
import React from 'react';
import type { Todo } from '../types';
import AddTodoForm from '../components/AddTodoForm';
import TodoList from '../components/TodoList';

interface Props {
  todos: Todo[];
  onAdd: (title: string) => void;
  onDelete: (id: number) => void;
  onCompletedChange: (id: number, completed: boolean) => void;
}

const Todos: React.FC<Props> = ({ todos, onAdd, onDelete, onCompletedChange }) => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-center mb-6">To-Do App</h1>

      {/* TODO: เรียกใช้ <AddTodoForm /> และส่ง Props onSubmit เข้าไป */}
      <AddTodoForm onSubmit={onAdd} />

      {/* TODO: เรียกใช้ <TodoList /> และส่ง Props todos, onDelete, onCompletedChange เข้าไป */}
      <TodoList todos={todos} onDelete={onDelete} onCompletedChange={onCompletedChange} />
    </div>
  );
};

export default Todos;