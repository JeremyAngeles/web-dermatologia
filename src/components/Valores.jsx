import React from 'react';

const Valores = () => {
  return (
    <section className="relative py-32 bg-white overflow-hidden">
      
      {/* 1. ONDA SUPERIOR: Color Arena (#e0dcd1) */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] transform rotate-180">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[100px] fill-[#e0dcd1]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 text-center relative z-10 pt-20">
        <div className="px-4">
          <span className="font-principal text-6xl text-[#7c8f7c]/20 mb-4 block italic">01</span>
          <h3 className="font-principal text-2xl text-[#7c8f7c] mb-4 uppercase tracking-widest">Ciencia Médica</h3>
          <p className="font-secundaria text-[#606060] text-sm font-light leading-relaxed">Resultados garantizados bajo supervisión profesional.</p>
        </div>
        <div className="px-4">
          <span className="font-principal text-6xl text-[#7c8f7c]/20 mb-4 block italic">02</span>
          <h3 className="font-principal text-2xl text-[#7c8f7c] mb-4 uppercase tracking-widest">Piel Saludable</h3>
          <p className="font-secundaria text-[#606060] text-sm font-light leading-relaxed">Equilibrio perfecto entre estética y bienestar.</p>
        </div>
        <div className="px-4">
          <span className="font-principal text-6xl text-[#7c8f7c]/20 mb-4 block italic">03</span>
          <h3 className="font-principal text-2xl text-[#7c8f7c] mb-4 uppercase tracking-widest">Innovación</h3>
          <p className="font-secundaria text-[#606060] text-sm font-light leading-relaxed">Tecnología de última generación para tu piel.</p>
        </div>
      </div>

      {/* 2. ONDA INFERIOR: Color Arena (#e0dcd1) */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[100px] fill-[#e0dcd1]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Valores;