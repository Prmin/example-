import React from "react";


export default function HeroSection() {
  return (
    <section className="bg-slate-700 text-white text-center rounded-lg p-12 md:p-20">
      <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
        Welcome to My Tech Space of PraminO
      </h1>
      <p className="mt-4 text-lg text-slate-300 max-w-2xl mx-auto">
        Exploring the latest in web development, from frontend frameworks to
        backend architecture. Let's learn and build together.
      </p>
      <button className="mt-8 px-6 py-3 bg-blue-600 rounded-md font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition-colors">
        Explore Articles
      </button>
    </section>
  );
}
