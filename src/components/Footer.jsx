import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Instagram, Clock } from 'lucide-react';
// IMPORTA AQUÍ TU LOGO REAL
import logoFooter from '../assets/logo-karen-removebg-preview.png'; 

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-karen-verde text-white mt-auto pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Contenedor Principal con Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Columna 1: Marca y Logo */}
          <div className="flex flex-col items-start">
            <img 
              src={logoFooter} 
              alt="Logo Dra. Karen Angeles" 
              className="h-30  mb-6 object-contain filter brightness-0 invert" 
            />
            <h3 className="font-principal text-3xl mb-2">Dra. Karen Angeles</h3>
            <p className="font-secundaria text-sm font-light opacity-80 leading-relaxed mb-6">
              Especialista en dermatología clínica y estética. Cuidando la salud y belleza de tu piel con tratamientos personalizados y tecnología de vanguardia.
            </p>
            <div className="flex items-center gap-4">
              <a 
                href="https://www.instagram.com/derma.karenangeles/" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-karen-verde transition-colors duration-300"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="https://www.tiktok.com/@derma.karenangeles?_r=1&_t=ZS-94OTkKYVYKA" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-karen-verde transition-colors duration-300 font-bold text-sm leading-none"
              >
                TK
              </a>
            </div>
          </div>

          {/* Columna 2: Enlaces Rápidos (ACTUALIZADA) */}
          <div>
            <h4 className="font-principal text-xl mb-6 text-[#e0dcd1]">Explorar</h4>
            <ul className="space-y-3 font-secundaria font-light text-sm opacity-90">
              <li>
                <Link to="/" className="hover:text-[#e0dcd1] transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 bg-[#e0dcd1] rounded-full"></span> Inicio
                </Link>
              </li>
              <li>
                <Link to="/nosotros" className="hover:text-[#e0dcd1] transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 bg-[#e0dcd1] rounded-full"></span> Nosotros
                </Link>
              </li>
              <li>
                <Link to="/servicios" className="hover:text-[#e0dcd1] transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 bg-[#e0dcd1] rounded-full"></span> Servicios
                </Link>
              </li>
              <li>
                <Link to="/productos" className="hover:text-[#e0dcd1] transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 bg-[#e0dcd1] rounded-full"></span> Tienda Skincare
                </Link>
              </li>
              <li>
                <Link to="/articulos" className="hover:text-[#e0dcd1] transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 bg-[#e0dcd1] rounded-full"></span> Artículos
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="hover:text-[#e0dcd1] transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 bg-[#e0dcd1] rounded-full"></span> Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna 3: Información de Contacto */}
          <div>
            <h4 className="font-principal text-xl mb-6 text-[#e0dcd1]">Contacto</h4>
            <ul className="space-y-4 font-secundaria font-light text-sm opacity-90">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="shrink-0 mt-0.5 text-[#e0dcd1]" />
                <span>Av. San Felipe 1001<br/>Jesús María, Lima</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="shrink-0 text-[#e0dcd1]" />
                <span>+51 933 698 990</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="shrink-0 text-[#e0dcd1]" />
                <span>citas@drakarenangeles.com</span>
              </li>
            </ul>
          </div>

          {/* Columna 4: Horarios */}
          <div>
            <h4 className="font-principal text-xl mb-6 text-[#e0dcd1]">Horarios de Atención</h4>
            <ul className="space-y-4 font-secundaria font-light text-sm opacity-90">
              <li className="flex items-start gap-3">
                <Clock size={18} className="shrink-0 mt-0.5 text-[#e0dcd1]" />
                <div>
                  <p className="font-bold">Lunes a Viernes</p>
                  <p>09:00 am - 07:00 pm</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={18} className="shrink-0 mt-0.5 opacity-0" />
                <div>
                  <p className="font-bold">Sábados</p>
                  <p>09:00 am - 01:00 pm</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={18} className="shrink-0 mt-0.5 opacity-0" />
                <div>
                  <p className="font-bold text-red-300">Domingos cerrados</p>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Línea Divisoria */}
        <div className="w-full h-px bg-white/20 mb-6"></div>

        {/* Copyright y Legales */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 font-secundaria text-xs font-light opacity-70">
          <p className="tracking-[0.1em] text-center md:text-left uppercase">
            © {currentYear} Dra. Karen Angeles. Todos los derechos reservados.
          </p>
          <div className="flex gap-4 tracking-wider">
            <Link to="#" className="hover:text-white transition-colors">Privacidad</Link>
            <span>|</span>
            <Link to="#" className="hover:text-white transition-colors">Términos</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;