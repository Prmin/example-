import Link from "next/link";
import React from "react";

export default function FeatureSection() {
  return (
    <section className="bg-white rounded-lg shadow-sm p-8">
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
        {/* ส่วนด้านซ้าย: คำอธิบาย */}
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">
            Built with Modern Technology
          </h2>
          <p className="text-gray-600 mb-4">
            This entire layout is built using the latest features of Next.js and
            styled with Tailwind CSS, ensuring a high-performance and easily
            maintainable codebase.
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Server-side Rendering (SSR) with Next.js App Router</li>
            <li>Component-based architecture with React</li>
            <li>Utility-first styling with Tailwind CSS</li>
            <li>Responsive design for all screen sizes</li>
          </ul>
        </div>

        <div className="flex-1 w-full mt-6 md:mt-0">
          <img
            src="/capoo.jpg"
            alt="Modern web technologies placeholder"
            className="rounded-lg object-cover w-full h-full shadow-md"
          />
        </div>
      </div>
    </section>
  );
}
