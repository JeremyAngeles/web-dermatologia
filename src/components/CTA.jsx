import React from 'react';

const CTA = () => {
  return (
    <section className="relative py-32 bg-[#7c8f7c] text-center px-6 overflow-hidden">
      {/* Onda decorativa sutil en el fondo */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0,50 Q25,0 50,50 T100,50 V100 H0 Z" fill="white" />
        </svg>
      </div>

      <div className="relative z-10">
        <h2 className="font-principal text-5xl md:text-8xl text-white mb-8 leading-tight">
          Tu piel merece <br /> el mejor cuidado
        </h2>
        <p className="font-secundaria text-white/80 mb-12 max-w-xl mx-auto font-light tracking-widest text-sm">
          AGENDA TU EVALUACIÓN EN SANTA ANITA
        </p>
        <button className="bg-[#e0dcd1] text-[#7c8f7c] px-16 py-5 rounded-full font-bold tracking-[0.3em] text-[10px] uppercase shadow-2xl hover:bg-white transition-all transform hover:scale-105">
          Agendar Cita Ahora
        </button>
      </div>
    </section>
  );
};

export default CTA;