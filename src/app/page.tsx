// app/page.tsx
import React from "react";
import Sidebar from "./components/Sidebar";
import PostContent from "./components/PostContent";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
export default function HomePage() {
  return (
    <main className="flex flex-1 p-4 gap-4">
      <Sidebar />
      <div className="flex flex-1 flex-col gap-4">
        <HeroSection />
        <PostContent />
        <FeatureSection />
      </div>
    </main>
  );
}
