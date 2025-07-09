// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Image from 'next/image';
// import { Area } from '@/types/area';

// export default function ContinentsSection() {
//   const [selectedContinent, setSelectedContinent] = useState<string>('América do Sul');
//   const [areasByContinent, setAreasByContinent] = useState<Area[]>([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     if (selectedContinent) {
//       setLoading(true);
//       setError(null);
//       axios.get<Area[]>(`http://localhost:3001/areas/continente/${selectedContinent.toLowerCase()}`)
//         .then(res => {
//           if (Array.isArray(res.data)) {
//             setAreasByContinent(res.data);
//           } else {
//             setAreasByContinent([]);
//             setError(`Nenhuma área encontrada para ${selectedContinent} ou dados inesperados.`);
//           }
//         })
//         .catch(err => {
//           setAreasByContinent([]);
//           setError(`Erro ao carregar áreas para ${selectedContinent}.`);
//         })
//         .finally(() => setLoading(false));
//     }
//   }, [selectedContinent]);

//   const continents = ["América do Sul", "América do Norte", "África", "Europa", "Ásia", "Oceania"];

//   return (
//     <section id="continentes" className="py-20 bg-gray-200 text-gray-800">
//       <div className="container mx-auto px-4 text-center">
//         <h2 className="text-4xl font-bold mb-12 text-green-700">Áreas por Continente</h2>

//         <div className="relative w-full max-w-2xl mx-auto h-64 mb-8">
//           {/* <Image
//             src="/images/map-world.png"
//             alt="Mapa mundi destacando continentes"
//             layout="fill"
//             objectFit="contain"
//             quality={80}
//           /> */}
//         </div>

//         <div className="flex flex-wrap justify-center gap-4 mb-10">
//           {continents.map(continent => (
//             <button
//               key={continent}
//               onClick={() => setSelectedContinent(continent)}
//               className={`px-6 py-3 rounded-full font-semibold
//                 ${selectedContinent === continent ? 'bg-green-600 text-white' : 'bg-gray-300 text-gray-700 hover:bg-gray-400'}`}
//             >
//               {continent}
//             </button>
//           ))}
//         </div>

//         {loading ? (
//           <p>Carregando áreas para {selectedContinent}...</p>
//         ) : error ? (
//           <p className="text-red-600">{error}</p>
//         ) : (
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {areasByContinent.length === 0 ? (
//               <p className="col-span-full text-lg">Nenhuma área encontrada para {selectedContinent}.</p>
//             ) : (
//               areasByContinent.map(area => (
//                 <div key={area.id} className="bg-white p-6 rounded-lg shadow-md text-left">
//                   <h3 className="text-xl font-semibold mb-2 text-green-600">{area.nome}</h3>
//                   <p className="text-gray-700">Tipo de Ecossistema: {area.tipo_ecossistema}</p>
//                   <p className="text-gray-700">País: {area.pais}</p>
//                   <p className="text-gray-700">Problemas: {area.problemas}</p>
//                 </div>
//               ))
//             )}
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }