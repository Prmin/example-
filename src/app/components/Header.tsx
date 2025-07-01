import React from 'react';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white px-8 py-4 border-b border-gray-200 flex justify-between items-center">
      <div className="text-2xl font-bold text-slate-800">
       My PraminO
      </div>
      <nav>
        <ul className="flex gap-6">
          <li>
            <a href="/" className="text-gray-600 font-medium hover:text-blue-600 transition-colors">
              Home
            </a>
          </li>
          <li>
            <a href="/about" className="text-gray-600 font-medium hover:text-blue-600 transition-colors">
              About
            </a>
          </li>
          <li>
            <Link href="/contact" className="text-gray-600 font-medium hover:text-blue-600 transition-colors">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}