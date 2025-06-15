import React, { useState } from 'react';
import { Mail, Lock, User, Chrome, Eye, EyeOff } from 'lucide-react';
import { useAutenticacion } from '../hooks/useAutenticacion';

const Autenticacion: React.FC = () => {
  const [esInicioSesion, setEsInicioSesion] = useState(true);
  const [mostrarContrasena, setMostrarContrasena] = useState(false);
  const [datosFormulario, setDatosFormulario] = useState({
    email: '',
    contrasena: '',
    nombreMostrar: ''
  });
  const [error, setError] = useState('');
  const [cargando, setCargando] = useState(false);

  const { iniciarSesionConEmail, registrarseConEmail, iniciarSesionConGoogle } = useAutenticacion();

  const manejarEnvio = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setCargando(true);

    try {
      if (esInicioSesion) {
        await iniciarSesionConEmail(datosFormulario.email, datosFormulario.contrasena);
      } else {
        await registrarseConEmail(datosFormulario.email, datosFormulario.contrasena, datosFormulario.nombreMostrar);
      }
    } catch (error: any) {
      setError(error.message || 'Ocurrió un error. Por favor intenta nuevamente.');
    } finally {
      setCargando(false);
    }
  };

  const manejarInicioSesionGoogle = async () => {
    setError('');
    setCargando(true);
    
    try {
      await iniciarSesionConGoogle();
    } catch (error: any) {
      setError(error.message || 'Error al iniciar sesión con Google.');
    } finally {
      setCargando(false);
    }
  };

  return (
    <section id="login" className="py-20 bg-gradient-to-br from-yellow-50 to-pink-50">
      <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-playfair font-bold text-gray-800">
              {esInicioSesion ? 'Iniciar Sesión' : 'Crear Cuenta'}
            </h2>
            <p className="text-gray-600 font-montserrat mt-2">
              {esInicioSesion 
                ? 'Accede a tu área personal' 
                : 'Únete para guardar tus destinos favoritos'
              }
            </p>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-700 text-sm font-montserrat">{error}</p>
            </div>
          )}

          <form onSubmit={manejarEnvio} className="space-y-6">
            {!esInicioSesion && (
              <div>
                <label className="block text-sm font-montserrat font-medium text-gray-700 mb-2">
                  Nombre Completo
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    value={datosFormulario.nombreMostrar}
                    onChange={(e) => setDatosFormulario({ ...datosFormulario, nombreMostrar: e.target.value })}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent font-montserrat"
                    placeholder="Tu nombre completo"
                    required={!esInicioSesion}
                  />
                </div>
              </div>
            )}

            <div>
              <label className="block text-sm font-montserrat font-medium text-gray-700 mb-2">
                Correo Electrónico
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="email"
                  value={datosFormulario.email}
                  onChange={(e) => setDatosFormulario({ ...datosFormulario, email: e.target.value })}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent font-montserrat"
                  placeholder="tu@email.com"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-montserrat font-medium text-gray-700 mb-2">
                Contraseña
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type={mostrarContrasena ? 'text' : 'password'}
                  value={datosFormulario.contrasena}
                  onChange={(e) => setDatosFormulario({ ...datosFormulario, contrasena: e.target.value })}
                  className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent font-montserrat"
                  placeholder="••••••••"
                  required
                  minLength={6}
                />
                <button
                  type="button"
                  onClick={() => setMostrarContrasena(!mostrarContrasena)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {mostrarContrasena ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={cargando}
              className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 disabled:from-gray-400 disabled:to-gray-500 text-white py-3 rounded-lg font-montserrat font-semibold transition-all duration-300 transform hover:scale-105 disabled:hover:scale-100"
            >
              {cargando ? 'Procesando...' : (esInicioSesion ? 'Iniciar Sesión' : 'Crear Cuenta')}
            </button>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500 font-montserrat">O continúa con</span>
              </div>
            </div>

            <button
              onClick={manejarInicioSesionGoogle}
              disabled={cargando}
              className="mt-4 w-full flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200 disabled:opacity-50"
            >
              <Chrome className="h-5 w-5 text-gray-500 mr-3" />
              <span className="font-montserrat font-medium text-gray-700">Google</span>
            </button>
          </div>

          <div className="mt-6 text-center">
            <button
              onClick={() => {
                setEsInicioSesion(!esInicioSesion);
                setError('');
                setDatosFormulario({ email: '', contrasena: '', nombreMostrar: '' });
              }}
              className="text-yellow-600 hover:text-yellow-700 font-montserrat font-medium transition-colors duration-200"
            >
              {esInicioSesion 
                ? '¿No tienes cuenta? Regístrate aquí' 
                : '¿Ya tienes cuenta? Inicia sesión aquí'
              }
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Autenticacion;