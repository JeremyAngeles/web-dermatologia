import React from 'react';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import Valores from '../components/Valores';
import Especialidades from '../components/Especialidades';
import ProductosDestacados from '../components/ProductosDestacados';
import CTA from '../components/CTA';

import { productosDermatologicos } from '../data/mockProductos';

function Home() {
  const productosFamosos = productosDermatologicos.slice(0, 3);

  return (
    <div className="bg-white min-h-screen">
      {/* Ya NO va el Navbar aquí porque ya está en App.jsx */}
      <main>
        <Hero />
        <Valores />
        <Especialidades />
        <ProductosDestacados productos={productosFamosos} />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default Home;