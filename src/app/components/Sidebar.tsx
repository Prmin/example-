import React from 'react';

function Widget({ title, children }: { title: string, children: React.ReactNode }) {
  return (
    <div className="mb-10">
      <h2 className="text-xl font-bold text-slate-700 border-b pb-2 mb-4">
        {title}
      </h2>
      {children}
    </div>
  )
}

export default function Sidebar() {
  return (
    // w-[280px] คือการกำหนดความกว้างแบบเจาะจง, shrink-0 คือการป้องกันไม่ให้ component หดตัว
    <aside className="w-[280px] shrink-0 bg-white p-6 rounded-lg shadow-sm h-fit">
      <Widget title="About Me">
        <p className="text-gray-600">A passionate developer exploring the world of web technologies. Welcome to my personal blog!</p>
      </Widget>
      <Widget title="Categories">
        <ul className="space-y-1">
          <li><a href="#" className="block p-2 rounded-md text-gray-700 hover:bg-gray-100">React & Next.js</a></li>
          <li><a href="#" className="block p-2 rounded-md text-gray-700 hover:bg-gray-100">CSS & Design</a></li>
          <li><a href="#" className="block p-2 rounded-md text-gray-700 hover:bg-gray-100">FrontEnd Development</a></li>
          <li><a href="#" className="block p-2 rounded-md text-gray-700 hover:bg-gray-100">Productivity</a></li>
        </ul>
      </Widget>
    </aside>
  );
}