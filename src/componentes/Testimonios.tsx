import React from 'react';
import { Star, Quote } from 'lucide-react';
import { testimonios } from '../datos/testimonios';

const Testimonios: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-pink-50 to-yellow-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-playfair font-bold text-gray-800 mb-6">
            Historias de Amor
          </h2>
          <p className="text-xl text-gray-600 font-montserrat max-w-3xl mx-auto">
            Descubre las experiencias únicas que han vivido otras parejas en sus lunas de miel por Argentina.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonios.map((testimonio) => (
            <div
              key={testimonio.id}
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex items-center mb-6">
                <Quote className="h-8 w-8 text-yellow-400 mr-3" />
                <div className="flex text-yellow-400">
                  {[...Array(testimonio.calificacion)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
              </div>

              <blockquote className="text-gray-700 font-montserrat leading-relaxed mb-6 italic">
                "{testimonio.contenido}"
              </blockquote>

              <div className="flex items-center">
                <img
                  src={testimonio.imagen}
                  alt={testimonio.nombres}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <p className="font-playfair font-semibold text-gray-800">
                    {testimonio.nombres}
                  </p>
                  <p className="text-sm text-gray-600 font-montserrat">
                    {testimonio.ubicacion}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 font-montserrat mb-6">
            ¿Listo para crear tu propia historia de amor?
          </p>
          <button
            onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white px-8 py-3 rounded-full font-montserrat font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Planificar Mi Luna de Miel
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonios;