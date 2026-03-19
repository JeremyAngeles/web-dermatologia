import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';

const Productos = () => {
  // Asegura que la página inicie desde arriba
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Función para redirigir al WhatsApp con mensaje personalizado del producto
  const comprarPorWhatsApp = (nombreProducto) => {
    const numero = "51933698990"; 
    const mensaje = `¡Hola Dra. Karen! Vengo de su página web y deseo adquirir el producto: ${nombreProducto}.`;
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
  };

  // Función para el botón de asesoría al final de la página
  const agendarAsesoriaWhatsApp = () => {
    const numero = "51933698990"; 
    const mensaje = "¡Hola Dra. Karen! Vengo de su página web y deseo agendar una consulta para saber qué productos necesita mi piel.";
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
  };

  // Base de datos simulada con imágenes temporales de alta calidad (Unsplash)
  const listaProductos = [
    {
      id: 1,
      nombre: "Gel Limpiador Purificante",
      categoria: "Limpieza",
      precio: "S/ 85.00",
      desc: "Limpia a profundidad sin resecar. Ideal para pieles mixtas a grasas.",
      img: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 2,
      nombre: "Serum Vitamina C 15%",
      categoria: "Antioxidante",
      precio: "S/ 140.00",
      desc: "Ilumina el rostro y estimula la producción de colágeno. Efecto glow.",
      img: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 3,
      nombre: "Protector Solar SPF 50+",
      categoria: "Protección Solar",
      precio: "S/ 110.00",
      desc: "Alta protección contra rayos UVA/UVB. Acabado mate y sin rastros blancos.",
      img: "https://images.unsplash.com/photo-1556228720-1c27e462d49c?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 4,
      nombre: "Crema Hidratante Restauradora",
      categoria: "Hidratación",
      precio: "S/ 125.00",
      desc: "Repara la barrera cutánea con ceramidas y ácido hialurónico.",
      img: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 5,
      nombre: "Contorno de Ojos Anti-Fatiga",
      categoria: "Cuidado Específico",
      precio: "S/ 95.00",
      desc: "Descongestiona ojeras y atenúa las líneas de expresión sutiles.",
      img: "https://images.unsplash.com/photo-1599305090598-fe179d501227?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 6,
      nombre: "Tratamiento Despigmentante",
      categoria: "Tratamiento Nocturno",
      precio: "S/ 160.00",
      desc: "Fórmula intensiva para atenuar manchas oscuras y melasma mientras duermes.",
      img: "https://images.unsplash.com/photo-1617897903246-719242758050?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <div className="bg-[#fcfcfc] min-h-screen flex flex-col">
      
      {/* 1. HERO DE PRODUCTOS (Diseño limpio y recto, sin ondas) */}
      <section className="relative pt-48 pb-20 px-6 bg-white border-b border-[#e0dcd1]/50">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center relative z-10"
        >
          <span className="text-[#7c8f7c] font-bold tracking-[0.5em] text-[10px] md:text-xs uppercase block mb-4">
            Dermo-Cosmética Selecta
          </span>
          <h1 className="font-principal text-5xl md:text-7xl text-[#606060] mb-8">
            Nuestros Productos
          </h1>
          <p className="font-secundaria text-[#606060] text-sm md:text-base font-light leading-relaxed max-w-2xl mx-auto">
            Fórmulas de alta eficacia clínica, rigurosamente seleccionadas por la Dra. Karen Angeles para complementar tus tratamientos y cuidar tu piel en casa.
          </p>
        </motion.div>
      </section>

      {/* 2. CATÁLOGO DE PRODUCTOS */}
      <section className="relative py-20 px-6 flex-grow">
        <div className="max-w-7xl mx-auto">
          
          {/* Categorías / Filtros Visuales */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {['Todos', 'Limpieza', 'Hidratación', 'Protección Solar', 'Antioxidante'].map((cat, idx) => (
              <button 
                key={idx} 
                className={`font-secundaria text-xs font-bold tracking-widest uppercase py-2 px-6 rounded-full border transition-all ${idx === 0 ? 'bg-[#7c8f7c] text-white border-[#7c8f7c]' : 'bg-transparent text-[#606060] border-[#e0dcd1] hover:border-[#7c8f7c] hover:text-[#7c8f7c]'}`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grilla de Tienda */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {listaProductos.map((prod, index) => (
              <motion.div 
                key={prod.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                className="group cursor-pointer flex flex-col h-full"
              >
                {/* Contenedor de la Imagen del Producto */}
                <div className="relative bg-white rounded-[2rem] h-80 flex items-center justify-center p-8 mb-6 overflow-hidden border border-[#e0dcd1]/30 shadow-sm group-hover:shadow-xl transition-all duration-500">
                  {/* Etiqueta de Categoría Flotante */}
                  <span className="absolute top-6 left-6 bg-[#e0dcd1]/80 backdrop-blur-sm text-[#606060] text-[9px] font-bold uppercase tracking-widest py-1.5 px-4 rounded-full z-10">
                    {prod.categoria}
                  </span>
                  
                  {/* La imagen dinámica traída de Unsplash */}
                  <img 
                    src={prod.img} 
                    alt={prod.nombre} 
                    className="w-full h-full object-cover rounded-xl group-hover:scale-110 transition-transform duration-700" 
                  />
                  
                  {/* Botón flotante de compra (Aparece en hover) */}
                  <div className="absolute inset-0 bg-white/30 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20">
                    <button 
                      onClick={() => comprarPorWhatsApp(prod.nombre)} // <-- Agregada función aquí
                      className="bg-[#7c8f7c] text-white font-bold tracking-widest text-[10px] uppercase py-3 px-8 rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"
                    >
                      Lo Quiero
                    </button>
                  </div>
                </div>

                {/* Info del Producto */}
                <div className="text-center flex flex-col flex-grow">
                  <h3 className="font-principal text-xl text-[#606060] mb-2">{prod.nombre}</h3>
                  <p className="font-secundaria text-xs text-[#606060]/70 font-light mb-4 flex-grow px-4">
                    {prod.desc}
                  </p>
                  <span className="font-principal text-xl text-[#7c8f7c] font-medium">{prod.precio}</span>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. BANNER INFORMATIVO (CTA) - Ahora en Color Arena */}
      <section className="relative py-24 px-6 mt-10 bg-[#e0dcd1]/30 border-t border-[#e0dcd1]/50 overflow-hidden">
        
        {/* Detalles decorativos sutiles */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-white/60 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-white/50 blur-3xl"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="text-[#7c8f7c] font-bold tracking-[0.5em] text-[10px] uppercase block mb-6">
            Asesoría Personalizada
          </span>
          <h2 className="font-principal text-4xl md:text-5xl text-[#606060] mb-6">
            ¿No sabes qué producto es para ti?
          </h2>
          <p className="font-secundaria text-[#606060]/80 font-light mb-10 max-w-xl mx-auto leading-relaxed">
            Cada piel cuenta una historia diferente. Agenda una consulta dermatológica y diseñemos juntos una rutina clínica exacta para las necesidades de tu piel.
          </p>
          <button 
            onClick={agendarAsesoriaWhatsApp} // <-- Agregada función aquí
            className="bg-[#7c8f7c] text-white font-bold tracking-widest text-xs uppercase py-4 px-10 rounded-full hover:bg-[#606060] hover:-translate-y-1 transition-all duration-300 shadow-xl shadow-[#7c8f7c]/20"
          >
            Agendar Consulta
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
      
    </div>
  );
};

export default Productos;