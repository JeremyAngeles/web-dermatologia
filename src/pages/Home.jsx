import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { Star, Quote, Award, Users, Heart, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// Componentes
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import Valores from '../components/Valores';
import Especialidades from '../components/Especialidades';
import ProductosDestacados from '../components/ProductosDestacados';
import CTA from '../components/CTA';

// Datos e Imágenes
import { productosDermatologicos } from '../data/mockProductos';
import fotoDra from '../assets/foto-doctora.jpg'; // Tu foto principal

// COMPONENTE PARA EL CONTADOR ANIMADO
const Counter = ({ from, to }) => {
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const [displayValue, setDisplayValue] = useState(from);

  useEffect(() => {
    const controls = animate(count, to, { duration: 2 });
    return rounded.onChange((v) => setDisplayValue(v));
  }, [count, to, rounded]);

  return <span>{displayValue}</span>;
};

function Home() {
  const productosFamosos = productosDermatologicos.slice(0, 3);

  const testimonios = [
    {
      nombre: "María Fernanda R.",
      comentario: "La mejor dermatóloga que he visitado. Logró controlar mi acné después de años de intentarlo con otros tratamientos. ¡Súper profesional!",
      estrellas: 5
    },
    {
      nombre: "Carlos Huamán",
      comentario: "Excelente atención y tecnología de primera. Me realicé un tratamiento láser y los resultados superaron mis expectativas.",
      estrellas: 5
    },
    {
      nombre: "Lucía Méndez",
      comentario: "Me encanta su enfoque en la salud natural de la piel. No solo te trata, sino que te enseña cómo cuidarte en casa.",
      estrellas: 5
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      <main>
        {/* 1. HERO */}
        <Hero />

        {/* 2. SECCIÓN: SOBRE MÍ (INTERMEDIA) 
            Usamos el fondo #e0dcd1 para que la onda de VALORES que viene después no se vea "cortada"
        */}
        <section className="bg-[#e0dcd1] py-24 px-6 overflow-hidden">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Foto con diseño elegante */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-[#7c8f7c]/30 rounded-[3rem]" />
              <img 
                src={fotoDra} 
                alt="Dra. Karen Angeles" 
                className="relative z-10 w-full h-[400px] md:h-[500px] object-cover rounded-[3rem] shadow-2xl"
              />
            </motion.div>

            {/* Texto y Botón */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-center lg:text-left"
            >
              <span className="text-[#7c8f7c] font-bold tracking-[0.4em] text-[10px] uppercase block mb-4">Especialista en Piel</span>
              <h2 className="font-principal text-4xl md:text-6xl text-[#606060] mb-6 leading-tight">
                Ciencia y Estética <br /> en un solo lugar
              </h2>
              <p className="font-secundaria text-[#606060] text-sm md:text-base font-light mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Soy la Dra. Karen Angeles, dedicada a transformar la salud de tu piel mediante diagnósticos precisos y tratamientos de vanguardia. Mi compromiso es resaltar tu belleza natural con seguridad y ética médica.
              </p>
              <Link 
                to="/nosotros" 
                className="inline-flex items-center gap-3 bg-[#7c8f7c] text-white px-10 py-4 rounded-full font-bold tracking-widest text-[10px] uppercase hover:bg-[#606060] transition-all shadow-xl"
              >
                Más información <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* 3. VALORES (Ya tiene sus propias ondas arriba y abajo) */}
        <Valores />

        

        {/* 5. ESPECIALIDADES */}
        <Especialidades />
        

        
        {/* 6. PRODUCTOS DESTACADOS */}
        <ProductosDestacados productos={productosFamosos} />
          {/* 4. ESTADÍSTICAS (ABAJO DE VALORES) */}
        <section className="py-24 bg-[#fcfcfc] px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="flex flex-col items-center">
                <div className="bg-[#7c8f7c]/10 p-5 rounded-full mb-6 text-[#7c8f7c]">
                  <Award size={32} />
                </div>
                <h3 className="font-principal text-6xl text-[#606060] mb-2">
                  <Counter from={0} to={10} />+
                </h3>
                <p className="font-secundaria text-[10px] tracking-[0.4em] uppercase text-[#7c8f7c] font-bold">Años de Trayectoria</p>
              </motion.div>

              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="flex flex-col items-center border-x-0 md:border-x border-[#e0dcd1]/50 px-4">
                <div className="bg-[#7c8f7c]/10 p-5 rounded-full mb-6 text-[#7c8f7c]">
                  <Users size={32} />
                </div>
                <h3 className="font-principal text-6xl text-[#606060] mb-2">
                  <Counter from={0} to={5000} />+
                </h3>
                <p className="font-secundaria text-[10px] tracking-[0.4em] uppercase text-[#7c8f7c] font-bold">Pacientes Atendidos</p>
              </motion.div>

              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="flex flex-col items-center">
                <div className="bg-[#7c8f7c]/10 p-5 rounded-full mb-6 text-[#7c8f7c]">
                  <Heart size={32} />
                </div>
                <h3 className="font-principal text-6xl text-[#606060] mb-2">
                  <Counter from={0} to={100} />%
                </h3>
                <p className="font-secundaria text-[10px] tracking-[0.4em] uppercase text-[#7c8f7c] font-bold">Satisfacción</p>
              </motion.div>
            </div>
          </div>
        </section>
        {/* 7. TESTIMONIOS (ABAJO DE PRODUCTOS DESTACADOS) */}
        <section className="py-32 bg-[#e0dcd1]/30 px-6 relative overflow-hidden">
          <div className="max-w-7xl mx-auto relative z-10 text-center">
            <span className="text-[#7c8f7c] font-bold tracking-[0.5em] text-[10px] uppercase block mb-4">Excelencia comprobada</span>
            <h2 className="font-principal text-4xl md:text-6xl text-[#606060] mb-20">Nuestros pacientes <br/> nos recomiendan</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonios.map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white p-10 rounded-[3rem] shadow-sm border border-[#e0dcd1]/50 relative text-left group"
                >
                  <Quote className="absolute top-8 right-8 text-[#e0dcd1]/30 group-hover:text-[#7c8f7c]/20" size={40} />
                  <div className="flex gap-1 mb-6">
                    {[...Array(item.estrellas)].map((_, i) => (
                      <Star key={i} size={14} className="fill-[#7c8f7c] text-[#7c8f7c]" />
                    ))}
                  </div>
                  <p className="font-secundaria text-[#606060] text-sm leading-relaxed mb-8 italic">"{item.comentario}"</p>
                  <h4 className="font-principal text-xl text-[#7c8f7c]">{item.nombre}</h4>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 8. CTA FINAL */}
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default Home;