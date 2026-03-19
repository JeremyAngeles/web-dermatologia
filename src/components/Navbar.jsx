import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom'; // <-- IMPORTAMOS NavLink
import logoCompleto from '../assets/logo-karen-removebg-preview.png';

function Navbar() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  // Función para cerrar el menú al hacer clic en un link
  const cerrarMenu = () => setMenuAbierto(false);

  // Magia de NavLink: Si isActive es true (estás en la página), usa karen-gris. Si no, usa karen-verde.
  const estiloLink = ({ isActive }) => 
    `transition-all uppercase ${isActive ? 'text-karen-gris' : 'text-karen-verde hover:text-karen-arena'}`;

  return (
    <div className="fixed top-6 w-full z-50 px-6 md:px-12 flex justify-center">
      {/* BARRA PRINCIPAL */}
      <nav className="bg-white/95 backdrop-blur-md py-3 px-8 md:px-12 rounded-full shadow-2xl w-full max-w-7xl flex justify-between items-center border border-karen-arena/10">
        
        {/* IZQUIERDA: Escritorio */}
        <ul className="hidden lg:flex gap-10 text-xs font-bold tracking-[0.25em]">
          <li><NavLink to="/" className={estiloLink}>Inicio</NavLink></li>
          <li><NavLink to="/nosotros" className={estiloLink}>Nosotros</NavLink></li>
          <li><NavLink to="/servicios" className={estiloLink}>Servicios</NavLink></li>
        </ul>

        {/* CENTRO: Logo (Se queda como Link normal porque no necesita cambiar de color) */}
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
          <Link to="/">
            <img src={logoCompleto} alt="Logo" className="h-12 md:h-20 w-auto object-contain brightness-0" />
          </Link>
        </motion.div>

        {/* DERECHA: Escritorio + Botón Móvil */}
        <div className="flex items-center gap-8">
          <ul className="hidden lg:flex gap-10 text-xs font-bold tracking-[0.25em]">
            <li><NavLink to="/productos" className={estiloLink}>Productos</NavLink></li>
            <li><NavLink to="/contacto" className={estiloLink}>Contacto</NavLink></li>
            <li><NavLink to="/articulos" className={estiloLink}>Artículos</NavLink></li>
          </ul>

          {/* Icono Hamburguesa (Solo móvil) */}
          <button className="lg:hidden text-karen-verde" onClick={() => setMenuAbierto(!menuAbierto)}>
            {menuAbierto ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* MENÚ MÓVIL DESPLEGABLE */}
      <AnimatePresence>
        {menuAbierto && (
          <motion.div 
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            className="absolute top-24 left-6 right-6 lg:hidden bg-white rounded-[2.5rem] shadow-2xl border border-karen-arena/10 overflow-hidden z-40"
          >
            <ul className="flex flex-col gap-6 text-center py-12 font-bold tracking-[0.3em] text-sm">
              <li><NavLink to="/" onClick={cerrarMenu} className={estiloLink}>Inicio</NavLink></li>
              <li><NavLink to="/nosotros" onClick={cerrarMenu} className={estiloLink}>Nosotros</NavLink></li>
              <li><NavLink to="/servicios" onClick={cerrarMenu} className={estiloLink}>Servicios</NavLink></li>
              <li><NavLink to="/productos" onClick={cerrarMenu} className={estiloLink}>Productos</NavLink></li>
              <li><NavLink to="/contacto" onClick={cerrarMenu} className={estiloLink}>Contacto</NavLink></li>
              <li><NavLink to="/articulos" onClick={cerrarMenu} className={estiloLink}>Artículos</NavLink></li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Navbar;