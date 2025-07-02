'use client';
import React from 'react';

interface Task {
  id: number;
  text: string;
  completed: boolean;
  category: string;
}

interface TaskItemProps {
  task: Task;
  onToggleComplete: (id: number) => void;
  onDelete: (id: number) => void;
}

const getCategoryColor = (category: string) => {
  switch (category) {
    case 'Work': return 'bg-blue-100 text-blue-800';
    case 'Study': return 'bg-green-100 text-green-800';
    case 'Personal': return 'bg-purple-100 text-purple-800';
    default: return 'bg-gray-100 text-gray-800';
  }
};

export default function TaskItem({ task, onToggleComplete, onDelete }: TaskItemProps) {
  return (
    <li className="flex items-center p-3 bg-gray-50 rounded-lg shadow-sm">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggleComplete(task.id)}
        className="w-5 h-5 mr-4 rounded text-blue-500 focus:ring-blue-500 shrink-0"
      />
      <div className="flex-grow">
        <span className={`${task.completed ? 'line-through text-gray-400' : 'text-gray-800'}`}>
          {task.text}
        </span>
        <div className="mt-1">
          <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${getCategoryColor(task.category)}`}>
            {task.category}
          </span>
        </div>
      </div>
      
      <div className="flex items-center ml-4 shrink-0">
        <button
          onClick={() => onDelete(task.id)}
          className="p-2 text-red-500 hover:text-red-700"
          title="Delete task"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
        </button>
      </div>
    </li>
  );
}