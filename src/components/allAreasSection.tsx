import { useEffect } from 'react';
import { useState }from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { Area } from '@/types/area';

// export default function AllAreasSection() {
//   const [areas, setAreas] = useState<Area[]>([]);

//   useEffect(() => {
//     axios.get('http://localhost:3001/areas')
//       .then(res => setAreas(res.data))
//       .catch(() => console.error("Erro ao buscar áreas"));
//   }, []);

//   return (
//     <motion.section
//       id="areas"
//       className="py-20 bg-white text-gray-800"
//       initial={{ opacity: 0 }}
//       whileInView={{ opacity: 1 }}
//       transition={{ duration: 0.6 }}
//       viewport={{ once: true }}
//     >
//       <div className="container mx-auto px-4">
//         <h2 className="text-4xl font-bold text-center mb-12 text-green-700">Explore Nossas Áreas</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {areas.map((area) => (
//             <motion.div
//               key={area.id}
//               className="bg-gray-50 rounded-lg shadow-md overflow-hidden"
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.3 }}
//             >
//               <div className="p-6">
//                 <h3 className="text-2xl font-semibold mb-2 text-green-600">{area.nome}</h3>
//                 <p className="text-gray-600 mb-1"><strong>Continente:</strong> {area.continente}</p>
//                 <p className="text-gray-600 mb-1"><strong>País:</strong> {area.pais}</p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </motion.section>
//   );
// }
