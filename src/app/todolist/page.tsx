'use client';
import React, { useState } from "react";
import AddTaskForm from "./components/AddTaskForm";
import TaskList from "./components/TaskList";


interface Task {
  id: number;
  text: string;
  completed: boolean;
  category: string;
}

const categories = ["All", "Personal", "Work", "Study"];

export default function TodoListPage() {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, text: "Learn Next.js", completed: true, category: "Study" },
    { id: 2, text: "Build a To-Do App", completed: false, category: "Work" },
    { id: 3, text: "Go to the gym", completed: false, category: "Personal" },
  ]);

  const [activeFilter, setActiveFilter] = useState("All");

  const handleAddTask = (text: string, category: string) => {
    const newTask: Task = {
      id: Date.now(),
      text: text,
      completed: false,
      category: category,
    };
    setTasks([...tasks, newTask]);
  };

  const handleDeleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleToggleComplete = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const filteredTasks =
    activeFilter === "All"
      ? tasks
      : tasks.filter((task) => task.category === activeFilter);

  return (
    <div className="bg-slate-100 flex-1 p-4 md:p-8">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold text-slate-800 mb-6 text-center">
          My To-Do List
        </h1>

        <AddTaskForm onAddTask={handleAddTask} />

        <div className="flex justify-center gap-2 mb-6 border-b pb-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 text-sm font-semibold rounded-full transition-colors ${
                activeFilter === cat
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        
        <TaskList
          tasks={filteredTasks}
          onToggleComplete={handleToggleComplete}
          onDelete={handleDeleteTask}
        />
      </div>
    </div>
  );
}