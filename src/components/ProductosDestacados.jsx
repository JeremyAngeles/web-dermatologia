import React from 'react';
import ProductoCard from './ProductoCard';

const ProductosDestacados = ({ productos }) => {
  return (
    <section className="py-24 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="font-principal text-5xl md:text-7xl text-[#7c8f7c] mb-4">Catálogo Seleccionado</h2>
          <div className="w-20 h-0.5 bg-[#e0dcd1] mx-auto" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {productos.map((producto, index) => (
            <ProductoCard key={producto.id} producto={producto} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductosDestacados;