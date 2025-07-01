// app/page.tsx
import React from 'react';
import Sidebar from './components/Sidebar';
import PostContent from './components/PostContent';

export default function HomePage() {
  return (
    // flex-1 ทำให้ <main> ขยายเต็มพื้นที่ที่เหลือระหว่าง header และ footer
    <main className="flex flex-1 p-4 gap-4">
      <PostContent />
      <Sidebar />
    </main>
  );
}