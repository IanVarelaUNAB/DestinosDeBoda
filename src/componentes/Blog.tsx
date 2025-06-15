import React from 'react';
import { Clock, ArrowRight, BookOpen } from 'lucide-react';
import { publicacionesBlog } from '../datos/publicacionesBlog';

const Blog: React.FC = () => {
  return (
    <section id="blog" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <BookOpen className="h-8 w-8 text-yellow-600 mr-3" />
            <h2 className="text-4xl sm:text-5xl font-playfair font-bold text-gray-800">
              Guías de Viaje
            </h2>
          </div>
          <p className="text-xl text-gray-600 font-montserrat max-w-3xl mx-auto">
            Consejos expertos y guías detalladas para planificar la luna de miel perfecta en Argentina.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {publicacionesBlog.map((publicacion) => (
            <article
              key={publicacion.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={publicacion.imagen}
                  alt={publicacion.titulo}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-yellow-600 text-white px-3 py-1 rounded-full text-xs font-montserrat font-medium">
                    {publicacion.tiempoLectura} de lectura
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-playfair font-bold text-gray-800 mb-3 line-clamp-2">
                  {publicacion.titulo}
                </h3>

                <p className="text-gray-600 font-montserrat mb-4 line-clamp-3">
                  {publicacion.extracto}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center text-gray-500">
                    <Clock className="h-4 w-4 mr-1" />
                    <span className="text-sm font-montserrat">{publicacion.tiempoLectura}</span>
                  </div>

                  <button className="flex items-center text-yellow-600 hover:text-yellow-700 font-montserrat font-medium transition-colors duration-200 group">
                    <span>Leer más</span>
                    <ArrowRight className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-200" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-yellow-50 to-pink-50 rounded-2xl p-8">
            <h3 className="text-2xl font-playfair font-bold text-gray-800 mb-4">
              ¿Necesitas asesoramiento personalizado?
            </h3>
            <p className="text-gray-600 font-montserrat mb-6">
              Nuestros expertos en viajes románticos están aquí para ayudarte a planificar 
              cada detalle de tu luna de miel perfecta.
            </p>
            <button
              onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-3 rounded-full font-montserrat font-semibold transition-colors duration-200"
            >
              Contactar Especialista
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;