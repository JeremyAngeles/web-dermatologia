import React from 'react';

function Footer() {
  return (
    <footer className="bg-karen-verde text-white text-center p-8 md:p-12 mt-auto">
      <div className="max-w-4xl mx-auto">
        <p className="font-principal text-3xl md:text-4xl mb-2">Dra. Karen Angeles</p>
        <p className="text-sm md:text-base font-light mb-8 opacity-90 font-secundaria">Dermatología Clínica y Estética</p>
        <div className="w-full h-px bg-white/20 mb-6"></div>
        <p className="text-xs md:text-sm font-light tracking-[0.2em] opacity-70 font-secundaria">
          © {new Date().getFullYear()} TODOS LOS DERECHOS RESERVADOS.
        </p>
      </div>
    </footer>
  );
}

export default Footer;