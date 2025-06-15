import React, { useState } from 'react';
import { Menu, X, User, LogOut } from 'lucide-react';
import { useAutenticacion } from '../hooks/useAutenticacion';

const Encabezado: React.FC = () => {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [mostrarMenuUsuario, setMostrarMenuUsuario] = useState(false);
  const { usuario, cerrarSesion } = useAutenticacion();

  const irASeccion = (idSeccion: string) => {
    const elemento = document.getElementById(idSeccion);
    if (elemento) {
      elemento.scrollIntoView({ behavior: 'smooth' });
      setMenuAbierto(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-lg z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
            <img 
              src="/logo.png" 
              alt="Logo Viajes de Bodas" 
              className="h-12 w-12 object-contain"
            />
            <div>
              <h1 className="font-playfair text-xl font-bold text-gray-800">
                Viajes de Bodas
              </h1>
              <p className="text-xs text-gray-600 font-montserrat">Argentina</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => irASeccion('inicio')}
              className="text-gray-700 hover:text-yellow-600 font-montserrat font-medium transition-colors duration-200"
            >
              Inicio
            </button>
            <button
              onClick={() => irASeccion('destinos')}
              className="text-gray-700 hover:text-yellow-600 font-montserrat font-medium transition-colors duration-200"
            >
              Destinos
            </button>
            <button
              onClick={() => irASeccion('encuesta')}
              className="text-gray-700 hover:text-yellow-600 font-montserrat font-medium transition-colors duration-200"
            >
              Encuesta
            </button>
            <button
              onClick={() => irASeccion('blog')}
              className="text-gray-700 hover:text-yellow-600 font-montserrat font-medium transition-colors duration-200"
            >
              Guías
            </button>
            <button
              onClick={() => irASeccion('contacto')}
              className="text-gray-700 hover:text-yellow-600 font-montserrat font-medium transition-colors duration-200"
            >
              Contacto
            </button>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            {usuario ? (
              <div className="relative">
                <button
                  onClick={() => setMostrarMenuUsuario(!mostrarMenuUsuario)}
                  className="flex items-center space-x-2 bg-yellow-50 hover:bg-yellow-100 px-3 py-2 rounded-full transition-colors duration-200"
                >
                  <User className="h-4 w-4 text-yellow-600" />
                  <span className="text-sm font-medium text-gray-700">
                    {usuario.nombreMostrar || usuario.email}
                  </span>
                </button>
                
                {mostrarMenuUsuario && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200">
                    <button
                      onClick={() => {
                        irASeccion('favoritos');
                        setMostrarMenuUsuario(false);
                      }}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                    >
                      Mis Favoritos
                    </button>
                    <button
                      onClick={() => {
                        cerrarSesion();
                        setMostrarMenuUsuario(false);
                      }}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 flex items-center space-x-2"
                    >
                      <LogOut className="h-4 w-4" />
                      <span>Cerrar Sesión</span>
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <button
                onClick={() => irASeccion('login')}
                className="bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-2 rounded-full font-montserrat font-medium transition-colors duration-200"
              >
                Iniciar Sesión
              </button>
            )}
          </div>

          <button
            onClick={() => setMenuAbierto(!menuAbierto)}
            className="md:hidden p-2 rounded-lg text-gray-600 hover:text-gray-800 hover:bg-gray-100"
          >
            {menuAbierto ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {menuAbierto && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <button
                onClick={() => irASeccion('inicio')}
                className="text-left text-gray-700 hover:text-yellow-600 font-montserrat font-medium py-2"
              >
                Inicio
              </button>
              <button
                onClick={() => irASeccion('destinos')}
                className="text-left text-gray-700 hover:text-yellow-600 font-montserrat font-medium py-2"
              >
                Destinos
              </button>
              <button
                onClick={() => irASeccion('encuesta')}
                className="text-left text-gray-700 hover:text-yellow-600 font-montserrat font-medium py-2"
              >
                Encuesta
              </button>
              <button
                onClick={() => irASeccion('blog')}
                className="text-left text-gray-700 hover:text-yellow-600 font-montserrat font-medium py-2"
              >
                Guías
              </button>
              <button
                onClick={() => irASeccion('contacto')}
                className="text-left text-gray-700 hover:text-yellow-600 font-montserrat font-medium py-2"
              >
                Contacto
              </button>
              {usuario ? (
                <>
                  <button
                    onClick={() => irASeccion('favoritos')}
                    className="text-left text-gray-700 hover:text-yellow-600 font-montserrat font-medium py-2"
                  >
                    Mis Favoritos
                  </button>
                  <button
                    onClick={cerrarSesion}
                    className="text-left text-gray-700 hover:text-yellow-600 font-montserrat font-medium py-2"
                  >
                    Cerrar Sesión
                  </button>
                </>
              ) : (
                <button
                  onClick={() => irASeccion('login')}
                  className="text-left bg-yellow-600 text-white px-4 py-2 rounded-lg font-montserrat font-medium"
                >
                  Iniciar Sesión
                </button>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Encabezado;