import React from 'react';
import { Link } from 'react-router-dom'; // Agregamos esto para que el botón funcione como enlace

// Importamos las imágenes desde tu carpeta assets
import imgClinica from '../assets/clinica-dermatologica-karen.jpg';
import imgEstetica from '../assets/estetica-facial-profesional.webp';
import imgAcne from '../assets/tratamiento-acne-santa-anita.jpg';
import imgLaser from '../assets/tecnologia-laser-dermatologica.jpg';

const Especialidades = () => {
  const especialidadesData = [
    {
      nombre: 'Clínica',
      img: imgClinica,
      desc: 'Diagnóstico y tratamiento de enfermedades de la piel.'
    },
    {
      nombre: 'Estética',
      img: imgEstetica,
      desc: 'Procedimientos para realzar tu belleza natural.'
    },
    {
      nombre: 'Acné',
      img: imgAcne,
      desc: 'Soluciones efectivas para una piel libre de imperfecciones.'
    },
    {
      nombre: 'Láser',
      img: imgLaser,
      desc: 'Tecnología avanzada para rejuvenecimiento y cicatrices.'
    }
  ];

  return (
    <section className="relative pt-0 pb-32 bg-[#e0dcd1] px-6 overflow-hidden">
      
      {/* Contenedor principal sin padding-top para que el título suba al máximo */}
      <div className="max-w-7xl mx-auto relative z-10 pt-4">
        <div className="text-center mb-10">
          <span className="text-[#7c8f7c] font-bold tracking-[0.5em] text-[10px] uppercase block mb-2">Tratamientos</span>
          <h2 className="font-principal text-5xl md:text-8xl text-[#7c8f7c]">Especialidades</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {especialidadesData.map((esp) => (
            <div key={esp.nombre} className="bg-white rounded-[3rem] shadow-sm hover:shadow-2xl transition-all overflow-hidden border border-white/50 group hover:-translate-y-2 duration-500 flex flex-col">
              
              <div className="h-56 overflow-hidden shrink-0">
                <img 
                  src={esp.img} 
                  alt={esp.nombre} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Contenido de la tarjeta */}
              <div className="p-8 md:p-10 text-center flex flex-col flex-grow">
                <h4 className="font-principal text-3xl text-[#7c8f7c] group-hover:scale-105 transition-transform">
                  {esp.nombre}
                </h4>
                
                <div className="w-8 h-0.5 bg-[#7c8f7c]/30 mx-auto mt-4 mb-6 group-hover:w-16 transition-all duration-500"></div>
                
                {/* TEXTO VISIBLE SIEMPRE */}
                <p className="font-secundaria text-[#606060] text-sm leading-relaxed font-light">
                  {esp.desc}
                </p>
              </div>

            </div>
          ))}
        </div>

        {/* BOTÓN "MÁS SERVICIOS" ELEGANTE */}
        <div className="flex justify-center mb-10">
          <Link 
            to="/servicios" 
            className="group relative inline-flex items-center justify-center px-10 py-4 text-xs font-bold tracking-[0.2em] uppercase text-[#7c8f7c] border border-[#7c8f7c] rounded-full overflow-hidden transition-all duration-500"
          >
            <span className="absolute inset-0 w-full h-full bg-[#7c8f7c] -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></span>
            <span className="relative flex items-center gap-3 group-hover:text-white transition-colors duration-300">
              Ver todos los servicios
              <svg className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </Link>
        </div>

      </div>

      {/* ONDA INFERIOR */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[100px] fill-white">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Especialidades;