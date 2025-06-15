import React from 'react';
import { Heart, MapPin, Trash2 } from 'lucide-react';
import { useFavoritos } from '../hooks/useFavoritos';
import { destinos } from '../datos/destinos';
import { useAutenticacion } from '../hooks/useAutenticacion';

const Favoritos: React.FC = () => {
  const { usuario } = useAutenticacion();
  const { favoritos, quitarDeFavoritos } = useFavoritos();

  if (!usuario) {
    return (
      <section id="favoritos" className="py-20 bg-gradient-to-br from-pink-50 to-pink-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-playfair font-bold text-gray-800 mb-6">
            Mis Destinos Favoritos
          </h2>
          <p className="text-xl text-gray-600 font-montserrat">
            Inicia sesión para ver y gestionar tus destinos favoritos.
          </p>
        </div>
      </section>
    );
  }

  const destinosFavoritos = destinos.filter(dest => 
    favoritos.some(fav => fav.idDestino === dest.id)
  );

  return (
    <section id="favoritos" className="py-20 bg-gradient-to-br from-pink-50 to-pink-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <Heart className="h-8 w-8 text-pink-500 mr-3 fill-current" />
            <h2 className="text-4xl font-playfair font-bold text-gray-800">
              Mis Destinos Favoritos
            </h2>
          </div>
          <p className="text-xl text-gray-600 font-montserrat">
            Los destinos que has guardado para tu viaje de bodas perfecto.
          </p>
        </div>

        {destinosFavoritos.length === 0 ? (
          <div className="text-center py-12">
            <Heart className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-2xl font-playfair font-bold text-gray-800 mb-2">
              No tienes favoritos aún
            </h3>
            <p className="text-gray-600 font-montserrat mb-6">
              Explora nuestros destinos y guarda los que más te gusten.
            </p>
            <button
              onClick={() => document.getElementById('destinos')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-3 rounded-full font-montserrat font-semibold transition-colors duration-200"
            >
              Explorar Destinos
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinosFavoritos.map((destino) => (
              <div
                key={destino.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={destino.imagen}
                    alt={destino.nombre}
                    className="w-full h-full object-cover"
                  />
                  <button
                    onClick={() => quitarDeFavoritos(destino.id)}
                    className="absolute top-4 right-4 p-2 bg-white/90 rounded-full text-red-500 hover:bg-red-50 hover:text-red-600 transition-colors duration-200"
                    title="Quitar de favoritos"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>

                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <MapPin className="h-4 w-4 text-yellow-600 mr-2" />
                    <h3 className="text-xl font-playfair font-bold text-gray-800">
                      {destino.nombre}
                    </h3>
                  </div>

                  <p className="text-gray-600 font-montserrat text-sm mb-4 line-clamp-3">
                    {destino.descripcion}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500 font-montserrat">
                      {destino.provincia}
                    </span>
                    <div className="flex items-center text-pink-500">
                      <Heart className="h-4 w-4 fill-current mr-1" />
                      <span className="text-sm font-montserrat">Favorito</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Favoritos;