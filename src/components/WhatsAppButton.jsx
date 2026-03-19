import React from 'react';
import { motion } from 'framer-motion'; 
import whasapIcon from '../assets/whasap.png'; 

const WhatsAppButton = () => {
  const agendarCitaWhatsApp = () => {
    const numero = "51933698990"; 
    const mensaje = "¡Hola Dra. Karen! Vengo de su página web y deseo agendar una cita.";
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
  };

  return (
    <motion.button
      onClick={agendarCitaWhatsApp}
      // -- ANIMACIÓN DE FLOTACIÓN SUAVE --
      animate={{ y: [0, -10, 0] }}
      transition={{ 
        duration: 2.5,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      // -- ESTILOS DEL CÍRCULO BLANCO --
      // Aquí está el bg-white, rounded-full, y una sombra elegante para que sobresalga de la página
      className="fixed bottom-6 right-6 z-50 bg-white rounded-full p-3 shadow-[0_10px_30px_rgba(0,0,0,0.2)] hover:shadow-[0_15px_35px_rgba(0,0,0,0.3)] hover:scale-110 transition-all duration-300 flex items-center justify-center group"
      aria-label="Contactar por WhatsApp"
    >
      {/* TU IMAGEN DE WHATSAPP */}
      <img 
        src={whasapIcon} 
        alt="WhatsApp" 
        className="w-12 h-12 object-contain transition-transform duration-300" 
      />
      
      {/* Texto flotante al pasar el mouse */}
      <span className="absolute right-full mr-4 bg-white text-gray-800 text-xs font-bold py-2 px-4 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap hidden md:block">
        ¡Agenda tu cita!
      </span>
    </motion.button>
  );
};

export default WhatsAppButton;