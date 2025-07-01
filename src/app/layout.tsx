import React from "react";
import type { Metadata } from "next";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "My Tech Journey",
  description: "A blog about web development and tech.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th">
      <body className="flex flex-col min-h-screen bg-gray-100 font-sans">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
