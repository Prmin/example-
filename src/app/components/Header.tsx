import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white px-8 py-4 border-b border-gray-200 flex justify-between items-center">
      <div className="text-2xl font-bold text-slate-800">My PraminO</div>
      <nav>
        <ul className="flex items-center gap-6">
          
           {/* Link ที่ 1 */}
          <li>
            <Link
              href="/"
              className="text-gray-600 font-medium hover:text-blue-600 transition-colors"
            >
              Home
            </Link>
          </li>
          
          {/* Link ที่ 2 */}
          <li>
            <Link
              href="/about"
              className="text-gray-600 font-medium hover:text-blue-600 transition-colors"
            >
              About
            </Link>
          </li>
          
          {/* Link ที่ 3 */}
          <li>
            <Link
              href="/contact"
              className="text-gray-600 font-medium hover:text-blue-600 transition-colors"
            >
              Contact
            </Link>
          </li>
          
          {/* Link ที่ 4 */}
          <li>
            <Link
              href="/todolist"
              className="text-gray-600 font-medium hover:text-blue-600 transition-colors"
            >
              To-Do List {/* ลองใช้ whitespace-nowrap เพื่อไม่ให้ข้อความตกบรรทัด */}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
