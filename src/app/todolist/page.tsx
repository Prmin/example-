'use client';
import React, { useState, useEffect } from "react";
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
  const [tasks, setTasks] = useState<Task[]>([]);
  const [activeFilter, setActiveFilter] = useState("All");

  // 1. สร้าง "ธง" ขึ้นมา โดยเริ่มแรกจะยังไม่โหลด (false)
  const [isLoaded, setIsLoaded] = useState(false);

  // 2. useEffect สำหรับ "โหลด" ข้อมูล (ทำงานครั้งเดียวตอนเปิดหน้า)
  useEffect(() => {
    try {
      const storedTasks = localStorage.getItem('tasks');
      if (storedTasks) {
        setTasks(JSON.parse(storedTasks));
      }
    } catch (error) {
      console.error("Failed to load tasks from localStorage", error);
    }
    // เมื่อโหลดเสร็จแล้ว (ไม่ว่าจะเจอข้อมูลหรือไม่) ให้ปักธงว่า "โหลดเสร็จแล้วนะ"
    setIsLoaded(true);
  }, []);

  // 3. useEffect สำหรับ "บันทึก" ข้อมูล
  useEffect(() => {
    // เพิ่มเงื่อนไข: ถ้ายังโหลดข้อมูลครั้งแรกไม่เสร็จ (isLoaded เป็น false) ให้ออกไปเลย ไม่ต้องทำอะไร
    if (!isLoaded) {
      return; 
    }

    try {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    } catch (error) {
      console.error("Failed to save tasks to localStorage", error);
    }
    // ฟังก์ชันนี้จะทำงานทุกครั้งที่ tasks เปลี่ยนแปลง (แต่ต้องหลัง isLoaded เป็น true แล้วเท่านั้น)
  }, [tasks, isLoaded]);

  // === LOGIC และ UI ที่เหลือทั้งหมดเหมือนเดิม ไม่ต้องแก้ไข ===
  const handleAddTask = (text: string, category: string) => {
    const newTask: Task = { id: Date.now(), text, completed: false, category };
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