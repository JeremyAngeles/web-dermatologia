import React from 'react';
import { motion } from 'framer-motion';
import fondoHero from '../assets/image_9f887b.jpg'; 

function Hero() {
  return (
    /* He subido de pt-48/64 a pt-64/80 para que baje notablemente más */
    <section id="inicio" className="relative w-full h-[100svh] flex items-start justify-center overflow-hidden pt-64 md:pt-80">
      
      {/* IMAGEN DE FONDO REALMENTE RESPONSIVA */}
      <div className="absolute inset-0 z-0 bg-white">
        <img 
          src={fondoHero} 
          alt="Dra. Karen Angeles" 
          className="w-full h-full object-cover object-center md:object-center transition-all duration-500" 
        />
        {/* Capa de contraste para que el texto blanco no se pierda */}
        <div className="absolute inset-0 bg-black/40 md:bg-black/30 z-10" />
      </div>

      {/* TEXTO ENCIMA DE LA FOTO - Bajado con el padding del section */}
      <div className="relative z-20 text-center px-4 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <span className="font-secundaria text-karen-arena tracking-[0.4em] text-[10px] md:text-xs mb-4 block font-bold uppercase drop-shadow-md">
            Excelencia en Dermatología
          </span>
          <h1 className="font-principal text-5xl md:text-8xl text-white leading-tight mb-8 drop-shadow-2xl">
            Salud y Bienestar <br className="hidden md:block" /> Natural
          </h1>
          <p className="font-secundaria text-white text-sm md:text-xl mb-10 font-light max-w-xs md:max-w-3xl mx-auto drop-shadow-lg leading-relaxed">
            "Cuidar tu piel es cuidar tu salud. Descubre tratamientos personalizados con tecnología médica de vanguardia."
          </p>
          <button className="bg-karen-verde text-white px-10 md:px-16 py-4 rounded-full font-secundaria tracking-widest text-xs uppercase font-bold shadow-2xl hover:bg-opacity-90 transition-all text-white">
            Agenda tu Cita
          </button>
        </motion.div>
      </div>

      {/* Suavizado inferior para unir con el blanco de abajo */}
      <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-t from-white to-transparent z-10" />
    </section>
  );
}

export default Hero;