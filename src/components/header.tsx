import React from 'react';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-gray-800 text-white p-4 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-green-400">
          EcoAPI
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li><Link href="#hero">Início</Link></li>
            <li><Link href="#sobre">Sobre</Link></li>
            <li><Link href="#areas">Áreas</Link></li>
            <li><Link href="#continentes">Continentes</Link></li>
            <li><Link href="#problemas">Problemas</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}