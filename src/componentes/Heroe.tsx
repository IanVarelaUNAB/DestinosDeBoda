import React from 'react';
import { ArrowDown, Sparkles } from 'lucide-react';

const Heroe: React.FC = () => {
  const irADestinos = () => {
    const elemento = document.getElementById('destinos');
    if (elemento) {
      elemento.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 182, 193, 0.3), rgba(255, 182, 193, 0.3)), url('https://images.pexels.com/photos/417344/pexels-photo-417344.jpeg')`
        }}
      >
      </div>

      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="flex items-center justify-center mb-6">
          <Sparkles className="h-8 w-8 text-yellow-400 mr-3" />
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-playfair font-bold">
            Viajes de Bodas
          </h1>
          <Sparkles className="h-8 w-8 text-yellow-400 ml-3" />
        </div>
        
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-playfair text-yellow-200 mb-6">
          Destinos Únicos en Argentina
        </h2>
        
        <p className="text-lg sm:text-xl font-montserrat text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
          Descubrí los rincones más románticos de Argentina. Desde los lagos patagónicos hasta las cataratas misioneras, 
          creamos experiencias únicas para celebrar tu amor.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20">
          <button
            onClick={irADestinos}
            className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-4 rounded-full font-montserrat font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Explorar Destinos
          </button>
          
          <button
            onClick={() => document.getElementById('encuesta')?.scrollIntoView({ behavior: 'smooth' })}
            className="border-2 border-white hover:bg-white hover:text-gray-800 text-white px-8 py-4 rounded-full font-montserrat font-semibold text-lg transition-all duration-300 transform hover:scale-105"
          >
            Encontrá tu Destino Ideal
          </button>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-white opacity-70" />
        </div>
      </div>

      <div className="absolute top-20 left-10 text-yellow-400 opacity-20">
        <Sparkles className="h-16 w-16" />
      </div>
      <div className="absolute bottom-20 right-10 text-yellow-400 opacity-20">
        <Sparkles className="h-12 w-12" />
      </div>
    </section>
  );
};

export default Heroe;