import React from 'react';
import { Link } from 'react-router-dom'; // Importamos Link para la navegación
import ProductoCard from './ProductoCard';

const ProductosDestacados = ({ productos }) => {
  return (
    <section className="py-24 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="font-principal text-5xl md:text-7xl text-[#7c8f7c] mb-4">Catálogo Seleccionado</h2>
          <div className="w-20 h-0.5 bg-[#e0dcd1] mx-auto" />
        </div>

        {/* Le agregamos mb-16 para separar la grilla del botón */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          {productos.map((producto, index) => (
            <ProductoCard key={producto.id} producto={producto} index={index} />
          ))}
        </div>

        {/* BOTÓN "MÁS PRODUCTOS" ELEGANTE */}
        <div className="flex justify-center">
          <Link 
            to="/productos" 
            className="group relative inline-flex items-center justify-center px-10 py-4 text-xs font-bold tracking-[0.2em] uppercase text-[#7c8f7c] border border-[#7c8f7c] rounded-full overflow-hidden transition-all duration-500"
          >
            <span className="absolute inset-0 w-full h-full bg-[#7c8f7c] -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></span>
            <span className="relative flex items-center gap-3 group-hover:text-white transition-colors duration-300">
              Ver todos los productos
              <svg className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default ProductosDestacados;