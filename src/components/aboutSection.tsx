"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AboutSection() {
  return (
    <motion.section
      id="sobre"
      className="py-20 bg-gray-100 text-gray-800"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto text-center px-4">
        <h2 className="text-4xl font-bold mb-8 text-green-700">Sobre a EcoAPI</h2>
        <div className="flex flex-col md:flex-row items-center justify-center md:space-x-8 max-w-4xl mx-auto">

          <div className="md:w-1/2 flex justify-center items-center mb-8 md:mb-0">
            <motion.div
              animate={{
                y: [0, -20, 0] 
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut"
              }}
            >
              <Image
                src="/arvore.png"
                width={250}
                height={250}
                alt="Árvore"
                className="rounded-xl"
              />
            </motion.div>
          </div>

          <div className="md:w-1/2 text-left">
            <p className="text-lg leading-relaxed mb-4">
              Nosso planeta abriga ecossistemas incríveis...
            </p>
            <p className="text-lg leading-relaxed">
              Utilizando dados precisos da nossa API, transformamos informações complexas...
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
