import React from 'react';

const CTA = () => {
  // Función para redirigir al WhatsApp de la doctora
  const agendarCitaWhatsApp = () => {
    const numero = "51933698990"; 
    const mensaje = "¡Hola Dra. Karen! Vengo de su página web y deseo agendar una evaluación para el cuidado de mi piel.";
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
  };

  return (
    <section className="relative py-32 bg-[#7c8f7c] text-center px-6 overflow-hidden">
      {/* Onda decorativa sutil en el fondo */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0,50 Q25,0 50,50 T100,50 V100 H0 Z" fill="white" />
        </svg>
      </div>

      <div className="relative z-10 flex flex-col items-center">
        <h2 className="font-principal text-5xl md:text-8xl text-white mb-8 leading-tight">
          Tu piel merece <br /> el mejor cuidado
        </h2>
        
        <p className="font-secundaria text-white/80 mb-12 max-w-xl mx-auto font-light tracking-widest text-sm uppercase">
          Agenda tu evaluación en Santa Anita
        </p>
        
        {/* Grupo de Botón y Número */}
        <div className="flex flex-col items-center gap-6">
          <button 
            onClick={agendarCitaWhatsApp}
            className="bg-[#e0dcd1] text-[#7c8f7c] px-16 py-5 rounded-full font-bold tracking-[0.3em] text-[10px] uppercase shadow-2xl hover:bg-white transition-all transform hover:-translate-y-1 hover:shadow-white/20"
          >
            Agendar Cita Ahora
          </button>
          
          {/* Número de WhatsApp sutil */}
          <div className="flex items-center gap-2 text-white/80 font-secundaria text-xs tracking-[0.1em] font-light">
            <span className="text-white/60 uppercase text-[10px]">Atención directa:</span>
            <span className="font-medium text-white tracking-[0.2em]">933 698 990</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CTA;