import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Calendar, Users } from 'lucide-react';

const Contacto: React.FC = () => {
  const [datosFormulario, setDatosFormulario] = useState({
    nombre: '',
    email: '',
    fecha: '',
    mensaje: ''
  });
  const [cargando, setCargando] = useState(false);
  const [mostrarExito, setMostrarExito] = useState(false);

  const manejarEnvio = async (e: React.FormEvent) => {
    e.preventDefault();
    setCargando(true);

    setTimeout(() => {
      setCargando(false);
      setMostrarExito(true);
      setDatosFormulario({ nombre: '', email: '', fecha: '', mensaje: '' });
      
      setTimeout(() => {
        setMostrarExito(false);
      }, 5000);
    }, 1000);
  };

  const manejarCambio = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setDatosFormulario({
      ...datosFormulario,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contacto" className="py-20 bg-gradient-to-br from-pink-50 to-pink-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-playfair font-bold text-gray-800 mb-6">
            Planificá tu Viaje de Bodas
          </h2>
          <p className="text-xl text-gray-600 font-montserrat max-w-3xl mx-auto">
            Contáctanos para recibir información personalizada sobre paquetes de viajes de bodas 
            y crear la experiencia perfecta para celebrar vuestro amor.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-playfair font-bold text-gray-800 mb-6">
              Solicita Información Personalizada
            </h3>

            {mostrarExito && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-green-700 font-montserrat">
                  ¡Mensaje enviado exitosamente! Te contactaremos pronto para ayudarte a planificar tu viaje de bodas perfecto.
                </p>
              </div>
            )}

            <form onSubmit={manejarEnvio} className="space-y-6">
              <div>
                <label className="block text-sm font-montserrat font-medium text-gray-700 mb-2">
                  Nombres de la Pareja
                </label>
                <div className="relative">
                  <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    name="nombre"
                    value={datosFormulario.nombre}
                    onChange={manejarCambio}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent font-montserrat"
                    placeholder="María & Carlos"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-montserrat font-medium text-gray-700 mb-2">
                  Correo Electrónico
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    value={datosFormulario.email}
                    onChange={manejarCambio}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent font-montserrat"
                    placeholder="maria@email.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-montserrat font-medium text-gray-700 mb-2">
                  Fecha Estimada del Viaje
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="date"
                    name="fecha"
                    value={datosFormulario.fecha}
                    onChange={manejarCambio}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent font-montserrat"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-montserrat font-medium text-gray-700 mb-2">
                  Contanos sobre sus sueños de viaje de bodas
                </label>
                <textarea
                  name="mensaje"
                  value={datosFormulario.mensaje}
                  onChange={manejarCambio}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent font-montserrat resize-none"
                  placeholder="Describe el tipo de experiencia que buscáis, destinos de interés, presupuesto aproximado..."
                  required
                />
              </div>

              <button
                type="submit"
                disabled={cargando}
                className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 disabled:from-gray-400 disabled:to-gray-500 text-white py-3 rounded-lg font-montserrat font-semibold transition-all duration-300 transform hover:scale-105 disabled:hover:scale-100 flex items-center justify-center space-x-2"
              >
                {cargando ? (
                  <span>Enviando...</span>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    <span>Enviar Consulta</span>
                  </>
                )}
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-playfair font-bold text-gray-800 mb-6">
                Información de Contacto
              </h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-100 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-yellow-600" />
                  </div>
                  <div>
                    <h4 className="font-montserrat font-semibold text-gray-800">Teléfono</h4>
                    <p className="text-gray-600 font-montserrat">+54 11 1234-5678</p>
                    <p className="text-sm text-gray-500 font-montserrat">Lun - Vie: 9:00 - 18:00</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-100 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-yellow-600" />
                  </div>
                  <div>
                    <h4 className="font-montserrat font-semibold text-gray-800">Email</h4>
                    <p className="text-gray-600 font-montserrat">info@viajesdeBodasargentina.com</p>
                    <p className="text-sm text-gray-500 font-montserrat">Respuesta en 24 horas</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-100 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-yellow-600" />
                  </div>
                  <div>
                    <h4 className="font-montserrat font-semibold text-gray-800">Oficina</h4>
                    <p className="text-gray-600 font-montserrat">Puerto Madero, Buenos Aires</p>
                    <p className="text-sm text-gray-500 font-montserrat">Argentina</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-yellow-500 to-pink-500 rounded-2xl shadow-lg p-8 text-white">
              <h3 className="text-2xl font-playfair font-bold mb-4">
                ¿Por qué elegirnos?
              </h3>
              <ul className="space-y-3 font-montserrat">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Más de 10 años especializados en viajes románticos
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Paquetes personalizados para cada pareja
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Atención 24/7 durante tu viaje
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Los mejores hoteles y experiencias de Argentina
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacto;