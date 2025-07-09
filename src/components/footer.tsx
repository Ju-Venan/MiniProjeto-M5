import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 text-center">
      <div className="container mx-auto">
        <p>&copy; {new Date().getFullYear()} EcoAPI.</p>
        <div className="mt-4 text-sm text-gray-400">
          <p>Dados fornecidos pela API do Mini Projeto M4.</p>
        </div>
      </div>
    </footer>
  );
}