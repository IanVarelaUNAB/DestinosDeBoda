import React from 'react';
import { Facebook, Instagram, Twitter, Mail, Phone } from 'lucide-react';

const PiePagina: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/logo.png" 
                alt="Logo Viajes de Bodas" 
                className="h-10 w-10 object-contain"
              />
              <div>
                <h3 className="font-playfair text-xl font-bold">Viajes de Bodas</h3>
                <p className="text-sm text-gray-400 font-montserrat">Argentina</p>
              </div>
            </div>
            <p className="text-gray-400 font-montserrat leading-relaxed">
              Creamos experiencias únicas e inolvidables para celebrar el amor en los destinos más románticos de Argentina.
            </p>
          </div>

          <div>
            <h4 className="font-playfair text-lg font-semibold mb-4">Destinos</h4>
            <ul className="space-y-2 font-montserrat">
              <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors duration-200">Bariloche</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors duration-200">Mendoza</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors duration-200">Ushuaia</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors duration-200">Iguazú</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors duration-200">Salta</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-playfair text-lg font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2 font-montserrat">
              <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors duration-200">Paquetes Premium</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors duration-200">Hoteles Románticos</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors duration-200">Experiencias Gastronómicas</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors duration-200">Tours Privados</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors duration-200">Asesoramiento 24/7</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-playfair text-lg font-semibold mb-4">Contacto</h4>
            <div className="space-y-3 font-montserrat">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-yellow-400" />
                <span className="text-gray-400">+54 11 1234-5678</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-yellow-400" />
                <span className="text-gray-400">info@viajesdeBodasargentina.com</span>
              </div>
            </div>

            <div className="mt-6">
              <h5 className="font-montserrat font-medium mb-3">Síguenos</h5>
              <div className="flex space-x-3">
                <a
                  href="#"
                  className="bg-gray-800 hover:bg-yellow-600 p-2 rounded-full transition-colors duration-200"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="bg-gray-800 hover:bg-yellow-600 p-2 rounded-full transition-colors duration-200"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="bg-gray-800 hover:bg-yellow-600 p-2 rounded-full transition-colors duration-200"
                >
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 font-montserrat text-sm">
              © 2025 Viajes de Bodas Argentina. Todos los derechos reservados.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-yellow-400 font-montserrat text-sm transition-colors duration-200">
                Política de Privacidad
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 font-montserrat text-sm transition-colors duration-200">
                Términos y Condiciones
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default PiePagina;