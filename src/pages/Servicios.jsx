import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';

// IMPORTACIÓN DE TUS IMÁGENES EXACTAS
import imgHero from '../assets/servicios-hero.png';
import imgAcne from '../assets/servicio-acne.webp';
import imgRejuv from '../assets/estetica-facial-profesional.webp';
import imgManchas from '../assets/servicio-manchas.jpg';
import imgClinica from '../assets/clinica-dermatologica-karen.jpg';
import imgLunares from '../assets/image_9f887b.jpg'; 
import imgLaser from '../assets/tecnologia-laser-dermatologica.jpg';

const Servicios = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Lista de servicios enlazada con tus imágenes
  const listaServicios = [
    {
      titulo: "Tratamiento de Acné y Cicatrices",
      desc: "Protocolos personalizados para controlar brotes activos y atenuar marcas, devolviendo la textura uniforme a tu piel.",
      img: imgAcne
    },
    {
      titulo: "Rejuvenecimiento Facial",
      desc: "Aplicación segura de Toxina Botulínica y Ácido Hialurónico para suavizar líneas de expresión y recuperar volumen natural.",
      img: imgRejuv
    },
    {
      titulo: "Tratamiento de Manchas (Melasma)",
      desc: "Sistemas avanzados de láser y peelings médicos para unificar el tono de la piel afectada por daño solar o factores hormonales.",
      img: imgManchas
    },
    {
      titulo: "Dermatología Clínica",
      desc: "Diagnóstico certero y tratamiento de rosácea, dermatitis, psoriasis, caída del cabello (alopecia) y alergias cutáneas.",
      img: imgClinica
    },
    {
      titulo: "Mapeo de Lunares",
      desc: "Evaluación digital profunda para la prevención y detección temprana del cáncer de piel, vital por la alta radiación en Lima.",
      img: imgLunares
    },
    {
      titulo: "Tecnología Láser Avanzada",
      desc: "Procedimientos médicos para depilación definitiva, remoción de tatuajes y tratamiento de lesiones vasculares superficiales.",
      img: imgLaser
    }
  ];

  return (
    <div className="bg-white min-h-screen flex flex-col">
      
      {/* 1. HERO DE SERVICIOS (Fondo Arena Suave) */}
      <section className="relative pt-48 pb-32 px-6 overflow-hidden">
        {/* Imagen de fondo desenfocada para el Hero */}
        <div className="absolute inset-0 z-0">
          <img src={imgHero} alt="Servicios Dermatológicos" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-[#e0dcd1]/80"></div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center relative z-10"
        >
          <span className="text-[#7c8f7c] font-bold tracking-[0.5em] text-[10px] md:text-xs uppercase block mb-4">
            Catálogo Médico
          </span>
          <h1 className="font-principal text-5xl md:text-7xl text-[#606060] mb-8 leading-tight">
            Nuestros <br className="md:hidden" /> Servicios
          </h1>
          <p className="font-secundaria text-[#606060] text-sm md:text-lg font-light leading-relaxed max-w-2xl mx-auto">
            Ofrecemos soluciones dermatológicas integrales, combinando experiencia médica, productos de primera línea y tecnología de vanguardia para el cuidado de tu piel.
          </p>
        </motion.div>

        {/* ONDA INFERIOR: Arena -> Blanco */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-10">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[80px] md:h-[120px] fill-white">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
          </svg>
        </div>
      </section>

      {/* 2. GRILLA DE SERVICIOS (Fondo Blanco) */}
      <section className="relative py-16 px-6 bg-white z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {listaServicios.map((servicio, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="bg-white rounded-[2.5rem] border border-[#e0dcd1]/50 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden group flex flex-col h-full"
            >
              {/* Imagen del Servicio */}
              <div className="h-56 overflow-hidden relative">
                <img 
                  src={servicio.img} 
                  alt={servicio.titulo} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-[#7c8f7c]/10 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>

              {/* Contenido */}
              <div className="p-8 flex flex-col flex-grow text-center">
                <h3 className="font-principal text-2xl text-[#7c8f7c] mb-4">{servicio.titulo}</h3>
                <div className="w-8 h-0.5 bg-[#e0dcd1] mx-auto mb-4 group-hover:w-16 group-hover:bg-[#7c8f7c] transition-all duration-500"></div>
                <p className="font-secundaria text-[#606060] text-sm font-light leading-relaxed flex-grow">
                  {servicio.desc}
                </p>
                <button className="mt-8 text-[10px] font-bold tracking-[0.2em] text-[#7c8f7c] uppercase border border-[#7c8f7c] rounded-full py-3 px-6 hover:bg-[#7c8f7c] hover:text-white transition-colors self-center">
                  Consultar
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. SECCIÓN ORIGINAL: EL PROCESO (Fondo Arena) */}
      <section className="relative py-32 bg-[#e0dcd1]/40 px-6 mt-16 overflow-hidden flex-grow">
        
        {/* ONDA SUPERIOR: Blanco -> Arena */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] transform rotate-180">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[80px] md:h-[120px] fill-white">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto relative z-10 pt-10 text-center">
          <h2 className="font-principal text-4xl md:text-5xl text-[#7c8f7c] mb-16">Tu Experiencia con Nosotros</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {/* Línea conectora (solo en desktop) */}
            <div className="hidden md:block absolute top-1/4 left-1/6 right-1/6 h-0.5 bg-[#7c8f7c]/20 z-0"></div>

            <div className="relative z-10 bg-white p-8 rounded-[2rem] shadow-lg border border-[#e0dcd1] group hover:-translate-y-2 transition-transform duration-500">
              <div className="w-16 h-16 mx-auto bg-[#7c8f7c] text-white rounded-full flex items-center justify-center font-principal text-2xl mb-6 shadow-md group-hover:scale-110 transition-transform">1</div>
              <h4 className="font-principal text-xl text-[#606060] mb-3">Evaluación Clínica</h4>
              <p className="font-secundaria text-xs text-[#606060] font-light">Diagnóstico médico detallado de tu piel, escuchando tus necesidades y analizando tu historial.</p>
            </div>

            <div className="relative z-10 bg-white p-8 rounded-[2rem] shadow-lg border border-[#e0dcd1] md:-translate-y-6 group hover:-translate-y-8 transition-transform duration-500">
              <div className="w-16 h-16 mx-auto bg-[#7c8f7c] text-white rounded-full flex items-center justify-center font-principal text-2xl mb-6 shadow-md group-hover:scale-110 transition-transform">2</div>
              <h4 className="font-principal text-xl text-[#606060] mb-3">Plan Personalizado</h4>
              <p className="font-secundaria text-xs text-[#606060] font-light">Diseñamos un protocolo único combinando tratamientos en consultorio y rutina en casa.</p>
            </div>

            <div className="relative z-10 bg-white p-8 rounded-[2rem] shadow-lg border border-[#e0dcd1] group hover:-translate-y-2 transition-transform duration-500">
              <div className="w-16 h-16 mx-auto bg-[#7c8f7c] text-white rounded-full flex items-center justify-center font-principal text-2xl mb-6 shadow-md group-hover:scale-110 transition-transform">3</div>
              <h4 className="font-principal text-xl text-[#606060] mb-3">Seguimiento</h4>
              <p className="font-secundaria text-xs text-[#606060] font-light">Monitoreo constante de tu evolución para asegurar los mejores resultados sostenibles en el tiempo.</p>
            </div>
          </div>
        </div>

        {/* ONDA INFERIOR: Arena -> Verde */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[80px] md:h-[120px] fill-[#7c8f7c]">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
          </svg>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />

    </div>
  );
};

export default Servicios;