import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-8 text-center mt-auto">
      <p>&copy; {new Date().getFullYear()} My Tech Journey. All rights reserved.</p>
    </footer>
  );
}