"use client";

import React, { useState, useEffect } from 'react';
import api from '../services/api';
import { Area } from '../services/api';

export default function ProblemsSection() {
  const [areas, setAreas] = useState<Area[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    api.get<Area[]>('/areas')
      .then(res => {
        if (Array.isArray(res.data)) {
          setAreas(res.data);
        } else {
          setError("Dados inesperados recebidos para a seção de problemas.");
        }
      })
      .catch(() => {
        setError("Não foi possível carregar os problemas.");
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <section id="problemas" className="py-20 bg-white text-center"><p>Carregando problemas...</p></section>;
  if (error) return <section id="problemas" className="py-20 bg-white text-center text-red-600"><p>Erro: {error}</p></section>;

  const allProblems = areas.flatMap(area => area.problemas.split(',').map(p => p.trim()));
  const uniqueProblems = Array.from(new Set(allProblems)).filter(p => p);

  return (
    <section id="problemas" className="py-20 bg-white text-gray-800">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-12 text-green-700">Desafios Enfrentados</h2>
        {uniqueProblems.length === 0 ? (
          <p className="text-lg">Nenhum problema ambiental registrado no momento.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {uniqueProblems.map((problem, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold mb-2 text-red-600 capitalize">{problem}</h3>
                <p className="text-gray-700 text-lg">Este é um desafio importante para as áreas de preservação.</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
