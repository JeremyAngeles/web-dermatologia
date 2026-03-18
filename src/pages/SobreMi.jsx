import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
// Asegúrate de que las rutas a las imágenes sean correctas
import fotoDra from '../assets/doctora.jpg'; 
import logoUNMSM from '../assets/unmsm-removebg-preview.png'; 
import Footer from '../components/Footer'; 

const SobreMi = () => {
  // Al entrar a la página, siempre iniciamos desde arriba
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen flex flex-col">
      
      {/* =========================================================
          1. SECCIÓN PRINCIPAL: PRESENTACIÓN (Fondo Blanco)
          ========================================================= */}
      <section className="relative pt-48 md:pt-56 pb-24 px-6 bg-white overflow-hidden">
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">
          
          {/* Lado Izquierdo: Foto Principal */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative mx-auto w-full max-w-md lg:max-w-full"
          >
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-[#e0dcd1] rounded-[3rem] z-0" />
            
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl bg-[#e0dcd1]/20">
              <img 
                src={fotoDra} 
                alt="Dra. Karen Angeles" 
                className="w-full h-[450px] md:h-[600px] object-cover object-top hover:scale-105 transition-transform duration-700" 
              />
            </div>

            <div className="absolute -bottom-6 -right-6 md:-right-10 bg-[#7c8f7c] text-white p-6 md:p-8 rounded-2xl shadow-xl hidden sm:block z-20">
              <p className="font-principal text-3xl md:text-4xl text-center">10+</p>
              <p className="font-secundaria text-[10px] uppercase tracking-widest font-bold text-center mt-1">
                Años de <br /> Experiencia
              </p>
            </div>
          </motion.div>

          {/* Lado Derecho: Títulos y Filosofía */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <span className="text-[#7c8f7c] font-bold tracking-[0.5em] text-[10px] md:text-xs uppercase block mb-4">
              Especialista en Dermatología
            </span>
            <h1 className="font-principal text-5xl md:text-7xl text-[#606060] mb-8 leading-tight">
              Dra. Karen <br className="hidden lg:block" /> Angeles
            </h1>
            
            <div className="space-y-6 font-secundaria text-[#606060] text-sm md:text-base font-light leading-relaxed max-w-2xl mx-auto lg:mx-0">
              <p>
                Bienvenido a mi espacio dedicado a la salud integral de la piel. Mi enfoque médico combina el rigor científico con una profunda sensibilidad hacia la estética natural de cada paciente.
              </p>
              
              <blockquote className="border-l-2 border-[#7c8f7c] pl-6 py-2 italic text-[#7c8f7c] font-medium my-8 bg-[#e0dcd1]/10 rounded-r-xl">
                "Mi objetivo no es solo tratar afecciones, sino educar a mis pacientes para que logren y mantengan una piel sana a largo plazo."
              </blockquote>
              
              <p>
                A través de un diagnóstico exhaustivo, desarrollo planes de tratamiento personalizados. Ya sea para condiciones clínicas complejas o procedimientos estéticos preventivos, mi prioridad es siempre tu bienestar y seguridad.
              </p>
            </div>
          </motion.div>
        </div>

        {/* ONDA INFERIOR: Blanco -> Arena */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[80px] md:h-[120px] fill-[#e0dcd1]/40">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
          </svg>
        </div>
      </section>

      {/* =========================================================
          2. SECCIÓN: TRAYECTORIA Y FORMACIÓN (Fondo Arena)
          ========================================================= */}
      <section className="relative pt-16 pb-24 md:pt-20 md:pb-32 bg-[#e0dcd1]/40 px-6 overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-50px" }}
          className="max-w-7xl mx-auto relative z-10"
        >
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-principal text-4xl md:text-5xl text-[#7c8f7c]">Trayectoria Profesional</h2>
            <div className="w-16 h-0.5 bg-[#7c8f7c]/30 mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Texto de Trayectoria */}
            <div className="space-y-10 font-secundaria text-[#606060] font-light order-2 md:order-1 text-center md:text-left">
              <div>
                <h3 className="text-xl font-bold text-[#7c8f7c] mb-3 flex items-center justify-center md:justify-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#7c8f7c] hidden md:block"></span>
                  Formación Académica
                </h3>
                <p className="text-sm md:text-base leading-relaxed">
                  Médico Cirujano y Especialista en Dermatología egresada de la prestigiosa <strong>Universidad Nacional Mayor de San Marcos (UNMSM)</strong>. Esta sólida base académica me permite ofrecer diagnósticos precisos y tratamientos avalados por la evidencia científica internacional.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#7c8f7c] mb-3 flex items-center justify-center md:justify-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#7c8f7c] hidden md:block"></span>
                  Actualización Médica Continua
                </h3>
                <p className="text-sm md:text-base leading-relaxed">
                  La dermatología es una ciencia en constante evolución. Por ello, mantengo una participación activa en diplomados y congresos mundiales. Mi compromiso es garantizar que mis pacientes de Lima Este accedan a las técnicas más innovadoras, eficaces y seguras.
                </p>
              </div>
            </div>

            {/* Logo de la Universidad - Destacado */}
            <div className="flex justify-center items-center order-1 md:order-2">
              <div className="bg-white p-10 md:p-12 rounded-[3rem] shadow-xl border border-white group hover:-translate-y-2 transition-transform duration-500 w-full max-w-sm flex flex-col items-center text-center">
                <img 
                  src={logoUNMSM} 
                  alt="Logo UNMSM" 
                  className="w-32 md:w-40 h-auto mb-8 opacity-90 group-hover:scale-110 transition-transform duration-500"
                />
                <h4 className="font-principal text-2xl text-[#7c8f7c] mb-2">UNMSM</h4>
                <p className="font-secundaria text-[10px] md:text-xs uppercase tracking-[0.2em] text-[#606060]/60 font-bold">
                  Alma Máter Médica
                </p>
              </div>
            </div>

          </div>
        </motion.div>

        {/* ONDA INFERIOR: Arena -> Blanco */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[80px] md:h-[120px] fill-white">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
          </svg>
        </div>
      </section>

      {/* =========================================================
          3. SECCIÓN NUEVA: ENFOQUE Y VALORES (Fondo Blanco)
          ========================================================= */}
      <section className="relative pt-16 pb-48 px-6 bg-white overflow-hidden flex-grow">
        
        {/* Agregamos relative z-10 aquí para que todo el contenido flote sobre la onda */}
        <div className="max-w-7xl mx-auto relative z-10">
          
          <div className="text-center mb-16">
            <h2 className="font-principal text-4xl md:text-5xl text-[#7c8f7c]">Mi Compromiso Contigo</h2>
            <div className="w-16 h-0.5 bg-[#7c8f7c]/30 mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Tarjeta 1 */}
            <div className="bg-[#e0dcd1]/10 p-10 rounded-[2.5rem] border border-[#e0dcd1]/30 text-center hover:bg-[#e0dcd1]/20 transition-colors duration-300">
              <span className="font-principal text-5xl text-[#7c8f7c]/30 block mb-4 italic">01</span>
              <h4 className="font-principal text-2xl text-[#606060] mb-4">Ética Médica</h4>
              <p className="font-secundaria text-sm text-[#606060] font-light leading-relaxed">
                Priorizo tratamientos que realmente necesitas. Mi evaluación es honesta, buscando siempre preservar la salud natural de tu piel antes que cualquier moda estética.
              </p>
            </div>

            {/* Tarjeta 2 */}
            <div className="bg-[#e0dcd1]/10 p-10 rounded-[2.5rem] border border-[#e0dcd1]/30 text-center hover:bg-[#e0dcd1]/20 transition-colors duration-300">
              <span className="font-principal text-5xl text-[#7c8f7c]/30 block mb-4 italic">02</span>
              <h4 className="font-principal text-2xl text-[#606060] mb-4">Acompañamiento</h4>
              <p className="font-secundaria text-sm text-[#606060] font-light leading-relaxed">
                El cuidado de la piel es un proceso. Te guío paso a paso, desde el diagnóstico inicial hasta la rutina de cuidado en casa para asegurar resultados sostenibles.
              </p>
            </div>

            {/* Tarjeta 3 */}
            <div className="bg-[#e0dcd1]/10 p-10 rounded-[2.5rem] border border-[#e0dcd1]/30 text-center hover:bg-[#e0dcd1]/20 transition-colors duration-300">
              <span className="font-principal text-5xl text-[#7c8f7c]/30 block mb-4 italic">03</span>
              <h4 className="font-principal text-2xl text-[#606060] mb-4">Tecnología Segura</h4>
              <p className="font-secundaria text-sm text-[#606060] font-light leading-relaxed">
                Trabajo exclusivamente con equipos dermatológicos aprobados y productos de alta gama clínica para minimizar riesgos y maximizar la efectividad en cada sesión.
              </p>
            </div>

          </div>
        </div>

        {/* ONDA INFERIOR: Blanco -> Verde (Esta es la que estaba estorbando, ahora tiene z-0 implicito por no declararlo) */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[80px] md:h-[120px] fill-[#7c8f7c]">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
          </svg>
        </div>
      </section>

      {/* =========================================================
          4. FOOTER
          ========================================================= */}
      <Footer />
      
    </div>
  );
};

export default SobreMi;