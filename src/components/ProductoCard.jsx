import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

function ProductoCard({ producto, index }) {
  
  const comprarPorWhatsApp = () => {
    const numeroDoctora = "51999999999"; 
    const mensaje = `¡Hola! Vengo de la página web. Deseo información para comprar: ${producto.nombre}.`;
    const url = `https://wa.me/${numeroDoctora}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
  };

  return (
    <motion.article 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.15, duration: 0.5 }}
      className="bg-karen-blanco rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col h-full mx-auto w-full max-w-sm"
    >
      {/* Imagen responsiva: h-56 en celular, h-64 en PC */}
      <div className="h-56 md:h-64 overflow-hidden bg-gray-100 shrink-0">
        <img 
          src={producto.imagen} 
          alt={producto.nombre} 
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>
      
      <div className="p-6 md:p-8 flex flex-col flex-grow text-center">
        <h3 className="font-principal text-2xl md:text-3xl text-karen-verde mb-2 leading-tight">
          {producto.nombre}
        </h3>
        <p className="text-sm md:text-base font-light mb-4 flex-grow text-karen-gris/80">
          {producto.descripcion}
        </p>
        <p className="font-secundaria text-xl md:text-2xl font-medium text-karen-gris mb-6">
          {producto.precio}
        </p>
        
        <button 
          onClick={comprarPorWhatsApp}
          className="w-full bg-karen-verde text-karen-blanco py-3 md:py-4 rounded-full flex items-center justify-center gap-2 hover:bg-opacity-90 active:scale-95 transition-all text-sm md:text-base font-medium shadow-md"
        >
          <MessageCircle size={22} />
          <span>Comprar por WhatsApp</span>
        </button>
      </div>
    </motion.article>
  );
}

export default ProductoCard;