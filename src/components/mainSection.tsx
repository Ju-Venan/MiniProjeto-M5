import React from 'react';

export default function HeroSection() {
  return (
    <section id="main" className="relative h-screen flex items-center justify-center text-white text-center">
      <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
      <div className="z-20 p-8">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4 text-green-300">
          Conectando Você à Natureza
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
          Explore as áreas de preservação mais vitais do nosso planeta, entenda seus desafios e como você pode ajudar.
        </p>
        <a href="#areas" className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full text-lg">
          Descobrir Áreas
        </a>
      </div>
    </section>
  );
}