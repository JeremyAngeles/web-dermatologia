import React from 'react';
import { motion } from 'framer-motion';
import fondoHero from '../assets/portada.png';

function Hero() {
  // Función para redirigir al WhatsApp de la doctora
  const agendarCitaWhatsApp = () => {
    const numero = "51933698990"; 
    const mensaje = "¡Hola Dra. Karen! Vengo de su página web y deseo agendar una cita.";
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="inicio" className="relative w-full h-[100svh] flex items-start justify-center overflow-hidden pt-64 md:pt-80">
      
      {/* IMAGEN DE FONDO */}
      <div className="absolute inset-0 z-0 bg-white">
        <img 
          src={fondoHero} 
          alt="Dra. Karen Angeles" 
          className="w-full h-full object-cover object-center transition-all duration-700" 
        />
        {/* Capa de contraste con gradiente elegante (más oscuro arriba y abajo, transparente en medio) */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/50 z-10" />
      </div>

      {/* TEXTO Y CONTENIDO */}
      <div className="relative z-20 text-center px-6 w-full max-w-5xl mx-auto mt-4 md:mt-0">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          {/* Etiqueta superior con líneas finas */}
          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 md:w-16 h-[1px] bg-white/50"></div>
            <span className="font-secundaria text-white/90 tracking-[0.3em] md:tracking-[0.5em] text-[10px] md:text-xs font-light uppercase">
              Dermatología Clínica, Estética y Láser
            </span>
            <div className="w-8 md:w-16 h-[1px] bg-white/50"></div>
          </div>

          {/* Título Principal Minimalista */}
          <h1 className="font-principal text-5xl md:text-7xl lg:text-8xl text-white leading-[1.1] mb-8 drop-shadow-md">
  El Arte de Cuidar <br className="hidden md:block" /> tu Piel
</h1>
          
          {/* Descripción */}
          <p className="font-secundaria text-white/80 text-sm md:text-xl mb-12 font-light max-w-2xl mx-auto leading-relaxed drop-shadow-sm flex items-center justify-center gap-3">
            <span className="opacity-90"></span>
            <span>Salud de la piel. Descubre tratamientos personalizados con tecnología médica de vanguardia.</span>
          </p>
          
          {/* Grupo de Botón y Número */}
          <div className="flex flex-col items-center gap-5 mt-4">
            {/* Botón efecto Cristal */}
            <button 
              onClick={agendarCitaWhatsApp}
              className="group relative px-12 md:px-16 py-4 bg-white/10 backdrop-blur-md border border-white/30 rounded-full overflow-hidden transition-all duration-500 hover:bg-white hover:border-white hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]"
            >
              <span className="relative z-10 font-secundaria tracking-[0.2em] text-xs md:text-sm uppercase font-bold text-white group-hover:text-karen-verde transition-colors duration-500">
                Agendar Cita
              </span>
            </button>
            
            {/* Número de WhatsApp sutil debajo del botón */}
            <div className="flex items-center gap-2 text-white/80 font-secundaria text-xs md:text-sm tracking-[0.1em] font-light">
              <span className="text-white/60 uppercase text-[10px]">Citas directas:</span>
              <span className="font-medium text-white tracking-[0.2em]">933 698 990</span>
            </div>
          </div>

        </motion.div>
      </div>

      {/* Suavizado inferior para transición con la siguiente sección */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none" />
    </section>
  );
}

export default Hero;