import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Instagram, MessageCircle, Clock } from 'lucide-react';
import Footer from '../components/Footer';
import fotoDra from '../assets/foto-doctora.jpg';

const Contacto = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#fcfcfc] min-h-screen flex flex-col font-secundaria">
      
      {/* 0. ESPACIADOR SUPERIOR */}
      <div className="h-40 md:h-48 w-full shrink-0"></div>

      {/* CONTENEDOR PRINCIPAL */}
      <main className="flex-grow flex flex-col px-6 max-w-7xl mx-auto w-full">
        
        {/* 1. HERO */}
        <section className="text-center mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-[#7c8f7c] font-bold tracking-[0.5em] text-xs uppercase block mb-4">
              Estamos para ayudarte
            </span>
            <h1 className="font-principal text-5xl md:text-7xl text-[#606060] mb-6">
              Contacto
            </h1>
            <p className="text-[#606060]/80 text-base md:text-lg font-light max-w-xl mx-auto">
              Da el primer paso hacia una piel sana. Contáctanos por nuestros canales oficiales o visítanos en nuestra clínica.
            </p>
          </motion.div>
        </section>

        {/* 2. TARJETAS DE CONTACTO REDISEÑADAS */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          
          {/* Tarjeta 1: Citas Médicas (Verde Sólido Premium) */}
          <div className="bg-[#7c8f7c] text-white p-10 rounded-[2.5rem] shadow-xl shadow-[#7c8f7c]/20 flex flex-col items-center text-center transition-all duration-500 hover:-translate-y-2">
            <div className="bg-white/10 p-5 rounded-full mb-6">
              <MessageCircle size={32} strokeWidth={1.5} />
            </div>
            <h3 className="font-principal text-3xl mb-4 tracking-wide">Citas Médicas</h3>
            <p className="text-sm font-light opacity-90 mb-8 flex-grow leading-relaxed">
              Reserva tu consulta personalizada con la Dra. Karen Angeles y empieza el cambio hoy.
            </p>
            <a 
              href="https://wa.me/51933698990?text=¡Hola!%20Deseo%20agendar%20una%20cita%20médica." 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[10px] font-bold tracking-[0.25em] uppercase border border-white/40 rounded-full py-4 px-8 w-full hover:bg-white hover:text-[#7c8f7c] transition-all duration-300 shadow-lg"
            >
              WhatsApp Citas
            </a>
          </div>

          {/* Tarjeta 2: Venta de Productos (Blanco Minimalista) */}
          <div className="bg-white text-[#606060] p-10 rounded-[2.5rem] border border-[#e0dcd1] shadow-xl shadow-gray-200/50 flex flex-col items-center text-center transition-all duration-500 hover:-translate-y-2">
            <div className="bg-[#7c8f7c]/10 p-5 rounded-full mb-6 text-[#7c8f7c]">
              <Phone size={32} strokeWidth={1.5} />
            </div>
            <h3 className="font-principal text-3xl mb-4 tracking-wide">Productos</h3>
            <p className="text-sm font-light opacity-70 mb-8 flex-grow leading-relaxed">
              Consulta stock y envíos de nuestra exclusiva línea dermo-cosmética clínica.
            </p>
            <a 
              href="https://wa.me/51933698990?text=¡Hola!%20Deseo%20información%20sobre%20sus%20productos." 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[10px] font-bold tracking-[0.25em] uppercase border border-[#7c8f7c]/30 text-[#7c8f7c] rounded-full py-4 px-8 w-full hover:bg-[#7c8f7c] hover:text-white transition-all duration-300 shadow-md"
            >
              WhatsApp Ventas
            </a>
          </div>

          {/* Tarjeta 3: Horarios y Redes (Arena Soft & Minimal) */}
          <div className="bg-[#e0dcd1]/30 text-[#606060] p-10 rounded-[2.5rem] border border-[#e0dcd1] shadow-sm flex flex-col items-center text-center transition-all duration-500 hover:-translate-y-2">
            <div className="bg-white/50 p-5 rounded-full mb-6 text-[#7c8f7c]">
              <Clock size={32} strokeWidth={1.5} />
            </div>
            <h3 className="font-principal text-3xl mb-4 tracking-wide">Horarios</h3>
            
            <div className="flex-grow flex flex-col justify-center space-y-4 mb-8">
              <div>
                <span className="text-[10px] font-bold tracking-widest text-[#7c8f7c] uppercase">Lunes a Viernes</span>
                <p className="text-lg font-light">09:00 AM - 07:00 PM</p>
              </div>
              <div>
                <span className="text-[10px] font-bold tracking-widest text-[#7c8f7c] uppercase">Sábados</span>
                <p className="text-lg font-light">09:00 AM - 01:00 PM</p>
              </div>
            </div>
            
            {/* Redes Sociales Estilo "Lujo Minimal" */}
            <div className="w-full pt-8 border-t border-[#606060]/10 flex flex-col items-center gap-4">
              <span className="text-[9px] font-bold tracking-[0.4em] uppercase text-[#7c8f7c]/70">Síguenos</span>
              <div className="flex justify-center items-center gap-8">
                {/* ENLACE REAL A INSTAGRAM */}
                <a 
                  href="https://www.instagram.com/derma.karenangeles/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[#606060] hover:text-[#7c8f7c] transition-all duration-300 transform hover:scale-125"
                >
                  <Instagram size={24} strokeWidth={1.2} />
                </a>
                {/* ENLACE REAL A TIKTOK */}
                <a 
                  href="https://www.tiktok.com/@derma.karenangeles?_r=1&_t=ZS-94OTkKYVYKA" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[#606060] hover:text-[#7c8f7c] transition-all duration-300 transform hover:scale-125 font-bold text-xl leading-none flex items-center justify-center h-6"
                >
                  TK
                </a>
              </div>
            </div>
          </div>

        </section>

        {/* 3. EL MAPA CON BOTÓN EN LA ESQUINA SUPERIOR DERECHA */}
        <section className="bg-white rounded-[2rem] md:rounded-[3rem] shadow-xl border border-[#e0dcd1]/50 p-8 md:p-12 flex flex-col gap-8 mb-8 md:mb-20">
          
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            
            {/* IZQUIERDA: Icono y Títulos */}
            <div className="flex items-center gap-4">
              <div className="bg-[#7c8f7c]/10 p-4 rounded-2xl">
                <MapPin className="text-[#7c8f7c]" size={32} />
              </div>
              <div>
                <h4 className="font-principal text-3xl text-[#606060]">Nuestra Ubicación</h4>
                <p className="text-[10px] tracking-[0.3em] uppercase font-bold text-[#7c8f7c] mt-1">Jesús María, Lima</p>
              </div>
            </div>
            
            {/* DERECHA: Dirección */}
            <div className="flex flex-col md:justify-end border-l-0 md:border-l md:pl-8 border-[#e0dcd1]">
              <p className="text-sm md:text-base text-[#606060] font-light leading-tight">
                Av. San Felipe 1001, Jesús María.
              </p>
              <p className="text-[11px] opacity-60 font-light mt-1">
                (Referencia: Cerca a Latina)
              </p>
            </div>
          </div>

          {/* CONTENEDOR DEL MAPA CON BOTÓN FLOTANTE */}
          <div 
            className="w-full rounded-[2rem] overflow-hidden bg-gray-200 border border-[#e0dcd1]/50 shadow-inner relative"
            style={{ minHeight: '600px' }}
          >
            {/* EL MAPA */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.621535790897!2d-77.05116742523274!3d-12.083287388156172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c8f85f524f7d%3A0x82b1c4a0340ad62e!2sAv.%20San%20Felipe%201001%2C%20Jes%C3%BAs%20Mar%C3%ADa%2015072!5e0!3m2!1ses-419!2spe!4v1710000000000!5m2!1ses-419!2spe"
              width="100%" 
              height="100%" 
              style={{ border: 0, position: 'absolute', top: 0, left: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa de Clínica en Jesús María"
              className="filter contrast-100 saturate-50 hover:saturate-100 transition-all duration-700"
            ></iframe>

            {/* EL BOTÓN EN LA ESQUINA SUPERIOR DERECHA COMO CARTEL */}
            <a 
                href="https://www.google.com/maps/dir/?api=1&destination=-12.0833,-77.0500" 
                target="_blank" 
                rel="noopener noreferrer"
                className="absolute top-6 right-6 z-[100] text-white text-[13px] font-bold tracking-[0.2em] uppercase py-4 px-16 rounded-xl flex items-center gap-3 border-2 border-white/30 shadow-2xl"
                style={{ backgroundColor: '#606060', opacity: 1, visibility: 'visible' }}
                >
                <MapPin size={14} />
                Cómo llegar
            </a>
          </div>

          <div className="flex items-center gap-4 pt-4 border-t border-[#e0dcd1]/50">
            <img src={fotoDra} alt="Dra. Karen Angeles" className="w-16 h-16 rounded-full object-cover border-2 border-[#7c8f7c] shadow-md" />
            <p className="text-sm font-light text-[#606060] italic">
              "Te esperamos en un ambiente diseñado para tu comodidad."
            </p>
          </div>

        </section>

      </main>

      {/* BLOQUE DE SEPARACIÓN FINAL CORREGIDO */}
      {/* Reducido a h-6 en móvil, se mantiene invisible/cero en escritorio */}
      <div className="h-6 md:h-0 w-full shrink-0"></div>

      <Footer />
      
    </div>
  );
};

export default Contacto;