'use client';
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form'; // 1. Import useForm

// กำหนด Type ของข้อมูลในฟอร์ม
type FormInputs = {
  text: string;
  category: string;
};

interface AddTaskFormProps {
  onAddTask: (text: string, category: string) => void;
}

const categories = ['Personal', 'Work', 'Study'];

export default function AddTaskForm({ onAddTask }: AddTaskFormProps) {
  // 2. เรียกใช้ useForm hook
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormInputs>({
    defaultValues: {
      category: 'Personal' // กำหนดค่าเริ่มต้นให้ dropdown
    }
  });

  // 3. สร้างฟังก์ชัน onSubmit ที่จะถูกเรียกโดย handleSubmit
  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    onAddTask(data.text, data.category); // ส่งข้อมูลจากฟอร์ม
    reset({ text: '', category: data.category }); // รีเซ็ตฟอร์ม (ให้เหลือ category เดิม)
  };

  return (
    // 4. เปลี่ยน div เป็น form และใช้ onSubmit ของ react-hook-form
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col sm:flex-row gap-2 mb-4">
      <div className="flex-grow">
        {/* 5. ใช้ `register` แทน `value` และ `onChange` และเพิ่ม validation */}
        <input
          {...register("text", { required: "Please enter a task." })}
          type="text"
          placeholder="What needs to be done?"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {/* แสดงข้อความ Error ถ้าไม่กรอก */}
        {errors.text && <p className="text-red-500 text-sm mt-1">{errors.text.message}</p>}
      </div>

      <select
        {...register("category")}
        className="p-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {categories.map(cat => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </select>
      
      {/* 6. เปลี่ยนปุ่มเป็น type="submit" */}
      <button
        type="submit"
        className="bg-blue-600 text-white px-6 py-3 font-semibold rounded-lg hover:bg-blue-700 transition-colors"
      >
        Add
      </button>
    </form>
  );
}