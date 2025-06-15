import React from 'react';
import { MapPin, Heart, Calendar } from 'lucide-react';
import { destinos } from '../datos/destinos';
import { useAutenticacion } from '../hooks/useAutenticacion';
import { useFavoritos } from '../hooks/useFavoritos';

const Destinos: React.FC = () => {
  const { usuario } = useAutenticacion();
  const { favoritos, agregarAFavoritos, quitarDeFavoritos, esFavorito } = useFavoritos();

  const manejarCambioFavorito = (idDestino: string) => {
    if (!usuario) {
      document.getElementById('login')?.scrollIntoView({ behavior: 'smooth' });
      return;
    }

    if (esFavorito(idDestino)) {
      quitarDeFavoritos(idDestino);
    } else {
      agregarAFavoritos(idDestino);
    }
  };

  const manejarReserva = (nombreDestino: string) => {
    alert(`Funcionalidad de reserva para ${nombreDestino} próximamente disponible`);
  };

  return (
    <section id="destinos" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-playfair font-bold text-gray-800 mb-6">
            Destinos Románticos
          </h2>
          <p className="text-xl text-gray-600 font-montserrat max-w-3xl mx-auto">
            Descubrí los lugares más hermosos de Argentina, cuidadosamente seleccionados 
            para crear momentos únicos e inolvidables en tu luna de miel.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinos.map((destino) => (
            <div
              key={destino.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={destino.imagen}
                  alt={destino.nombre}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-montserrat font-medium text-gray-700">
                    {destino.provincia}
                  </span>
                </div>
                <button
                  onClick={() => manejarCambioFavorito(destino.id)}
                  className={`absolute top-4 right-4 p-2 rounded-full transition-all duration-200 ${
                    esFavorito(destino.id)
                      ? 'bg-pink-500 text-white'
                      : 'bg-white/90 text-gray-600 hover:bg-pink-50 hover:text-pink-500'
                  }`}
                >
                  <Heart className={`h-5 w-5 ${esFavorito(destino.id) ? 'fill-current' : ''}`} />
                </button>
              </div>

              <div className="p-6">
                <div className="flex items-center mb-3">
                  <MapPin className="h-5 w-5 text-yellow-600 mr-2" />
                  <h3 className="text-2xl font-playfair font-bold text-gray-800">
                    {destino.nombre}
                  </h3>
                </div>

                <p className="text-gray-600 font-montserrat mb-4 leading-relaxed">
                  {destino.descripcion}
                </p>

                <div className="mb-6">
                  <h4 className="text-lg font-playfair font-semibold text-gray-800 mb-2">
                    Experiencias Románticas:
                  </h4>
                  <ul className="space-y-1">
                    {destino.actividades.slice(0, 3).map((actividad, indice) => (
                      <li key={indice} className="text-sm text-gray-600 font-montserrat flex items-start">
                        <span className="inline-block w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                        {actividad}
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => manejarReserva(destino.nombre)}
                  className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white px-6 py-3 rounded-full font-montserrat font-semibold transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg flex items-center justify-center space-x-2"
                >
                  <Calendar className="h-5 w-5" />
                  <span>Reservar Ahora</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-yellow-50 to-pink-50 rounded-2xl p-8">
            <h3 className="text-2xl font-playfair font-bold text-gray-800 mb-4">
              ¿No sabes cuál elegir?
            </h3>
            <p className="text-gray-600 font-montserrat mb-6">
              Completá nuestra encuesta personalizada y te ayudaremos a encontrar 
              el destino perfecto para tu luna de miel.
            </p>
            <button
              onClick={() => document.getElementById('encuesta')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-3 rounded-full font-montserrat font-semibold transition-colors duration-200"
            >
              Completar Encuesta
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Destinos;