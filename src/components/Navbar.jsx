import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import logoCompleto from '../assets/logo-karen-removebg-preview.png';

function Navbar() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  // Función para cerrar el menú al hacer clic en un link
  const cerrarMenu = () => setMenuAbierto(false);

  return (
    <div className="fixed top-6 w-full z-50 px-6 md:px-12 flex justify-center">
      {/* BARRA PRINCIPAL */}
      <nav className="bg-white/95 backdrop-blur-md py-3 px-8 md:px-12 rounded-full shadow-2xl w-full max-w-7xl flex justify-between items-center border border-karen-arena/10">
        
        {/* IZQUIERDA: Escritorio */}
        <ul className="hidden lg:flex gap-10 text-xs font-bold tracking-[0.25em] text-karen-verde">
          <li><Link to="/" className="hover:text-karen-arena transition-all uppercase">Inicio</Link></li>
          <li><Link to="/nosotros" className="hover:text-karen-arena transition-all uppercase">Nosotros</Link></li>
          <li><Link to="/servicios" className="hover:text-karen-arena transition-all uppercase">Servicios</Link></li>
        </ul>

        {/* CENTRO: Logo */}
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
          <Link to="/">
            <img src={logoCompleto} alt="Logo" className="h-12 md:h-20 w-auto object-contain brightness-0" />
          </Link>
        </motion.div>

        {/* DERECHA: Escritorio + Botón Móvil */}
        <div className="flex items-center gap-8 text-karen-verde">
          <ul className="hidden lg:flex gap-10 text-xs font-bold tracking-[0.25em]">
            <li><Link to="/productos" className="hover:text-karen-arena transition-all uppercase">Productos</Link></li>
            <li><Link to="/contacto" className="hover:text-karen-arena transition-all uppercase">Contacto</Link></li>
            <li><Link to="/articulos" className="hover:text-karen-arena transition-all uppercase">Artículos</Link></li>
          </ul>

          {/* Icono Hamburguesa (Solo móvil) */}
          <button className="lg:hidden text-karen-verde" onClick={() => setMenuAbierto(!menuAbierto)}>
            {menuAbierto ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* MENÚ MÓVIL DESPLEGABLE */}
      {/* Está aquí afuera para que pueda flotar libremente debajo de la barra blanca */}
      <AnimatePresence>
        {menuAbierto && (
          <motion.div 
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            className="absolute top-24 left-6 right-6 lg:hidden bg-white rounded-[2.5rem] shadow-2xl border border-karen-arena/10 overflow-hidden z-40"
          >
            <ul className="flex flex-col gap-6 text-karen-verde text-center py-12 font-bold tracking-[0.3em] text-sm">
              <li><Link to="/" onClick={cerrarMenu} className="uppercase">Inicio</Link></li>
              <li><Link to="/nosotros" onClick={cerrarMenu} className="uppercase">Nosotros</Link></li>
              <li><Link to="/servicios" onClick={cerrarMenu} className="uppercase">Servicios</Link></li>
              <li><Link to="/productos" onClick={cerrarMenu} className="uppercase">Productos</Link></li>
              <li><Link to="/contacto" onClick={cerrarMenu} className="uppercase">Contacto</Link></li>
              <li><Link to="/articulos" onClick={cerrarMenu} className="uppercase">Artículos</Link></li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Navbar;