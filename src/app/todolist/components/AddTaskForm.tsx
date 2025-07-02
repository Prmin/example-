'use client';
import React, { useState } from 'react';

interface AddTaskFormProps {
  onAddTask: (text: string, category: string) => void; // แก้ไข prop ที่รับเข้ามา
}

const categories = ['Personal', 'Work', 'Study']; // กำหนดหมวดหมู่ที่มีให้เลือก

export default function AddTaskForm({ onAddTask }: AddTaskFormProps) {
  const [inputText, setInputText] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(categories[0]); // State สำหรับเก็บ category ที่เลือก

  const handleSubmit = () => {
    if (inputText.trim() === '') return;
    onAddTask(inputText, selectedCategory); // ส่ง category ไปด้วย
    setInputText('');
  };

  return (
    <div className="flex flex-col sm:flex-row gap-2 mb-6">
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
        placeholder="What needs to be done?"
        className="flex-grow p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {/* ส่วนที่เพิ่มเข้ามา: Dropdown สำหรับเลือก Category */}
      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        className="p-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {categories.map(cat => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </select>
      <button
        onClick={handleSubmit}
        className="bg-blue-600 text-white px-6 py-3 font-semibold rounded-lg hover:bg-blue-700 transition-colors"
      >
        Add
      </button>
    </div>
  );
}