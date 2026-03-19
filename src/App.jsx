import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import WhatsAppButton from './components/WhatsAppButton.jsx'; // 1. IMPORTAMOS EL BOTÓN FLOTANTE
import Home from './pages/Home';
import SobreMi from './pages/SobreMi';
import Servicios from './pages/Servicios';
import Productos from './pages/Productos';
import Contacto from './pages/Contacto';
import Articulos from './pages/Articulos';

function App() {
  return (
    <Router>
      <Navbar /> {/* Al estar aquí, ya sale en TODAS las páginas automáticamente */}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nosotros" element={<SobreMi />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/articulos" element={<Articulos />} />
      </Routes>

      <WhatsAppButton /> {/* 2. PONEMOS EL BOTÓN AQUÍ, DESPUÉS DE LAS RUTAS */}
    </Router>
  );
}

export default App;