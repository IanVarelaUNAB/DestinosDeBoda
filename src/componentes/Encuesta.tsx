import React, { useState } from 'react';
import { Bot, Send, Loader, MapPin } from 'lucide-react';
import { RespuestaEncuesta } from '../tipos';
import { openai } from '../configuracion/openai';
import { useAutenticacion } from '../hooks/useAutenticacion';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../configuracion/firebase';

const Encuesta: React.FC = () => {
  const { usuario } = useAutenticacion();
  const [respuestas, setRespuestas] = useState<RespuestaEncuesta>({
    clima: 'cualquiera',
    experiencia: 'relajacion',
    presupuesto: 'medio',
    naturaleza: 3,
    actividades: 'mixtas'
  });
  const [cargando, setCargando] = useState(false);
  const [recomendacion, setRecomendacion] = useState<string>('');
  const [mostrarResultado, setMostrarResultado] = useState(false);

  const manejarEnvio = async (e: React.FormEvent) => {
    e.preventDefault();
    setCargando(true);
    setMostrarResultado(false);

    try {
      if (usuario) {
        await setDoc(doc(db, 'encuestas', `${usuario.uid}_${Date.now()}`), {
          idUsuario: usuario.uid,
          respuestas,
          marcaTiempo: new Date()
        });
      }

      // Create prompt for ChatGPT
        const prompt = `
            Basado en estas preferencias de viaje para un viaje de bodas en Argentina:
            - Clima preferido: ${respuestas.clima === 'calido' ? 'cálido' : respuestas.clima === 'frio' ? 'frío' : 'cualquiera'}
            - Tipo de experiencia: ${respuestas.experiencia === 'aventura' ? 'aventura' : respuestas.experiencia === 'relajacion' ? 'relajación' : respuestas.experiencia === 'cultura' ? 'cultura' : 'gastronomía'}
            - Presupuesto: ${respuestas.presupuesto === 'bajo' ? 'bajo' : respuestas.presupuesto === 'medio' ? 'medio' : 'alto'}
            - Importancia de la naturaleza (1-5): ${respuestas.naturaleza}
            - Preferencia de actividades: ${respuestas.actividades === 'exterior' ? 'al aire libre' : respuestas.actividades === 'interior' ? 'en interiores' : 'mixtas'}


            Seleccioná el mejor destino de viaje de bodas en Argentina entre: Bariloche, Mendoza, Ushuaia, Cataratas del Iguazú y Salta.

            Devolvé un texto que empiece con "Tu destino recomendado es [destino]" seguido de una explicación breve (máximo 150 palabras) de por qué es el destino ideal, usando lenguaje y modismos argentinos. No uses etiquetas ni formatos técnicos, solo texto natural.
        `;

        const completion = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [
                {
                    role: "system",
                    content: "Sos un experto en turismo romántico de Argentina. Respondé siempre en español argentino usando 'vos' y devolvé solo el texto solicitado sin comentarios extra."
                },
                {
                    role: "user",
                    content: prompt
                }
            ],
            max_tokens: 300,
            temperature: 0.7
        });

      const resultado = completion.choices[0]?.message?.content;
      if (resultado) {
        try {
          const resultadoParsed = JSON.parse(resultado);
          setRecomendacion(`Te recomendamos ${resultadoParsed.destino}. ${resultadoParsed.razon}`);
        } catch {
          setRecomendacion(resultado);
        }
      }
      
      setMostrarResultado(true);
    } catch (error) {
      console.error('Error obteniendo recomendación:', error);
      setRecomendacion('Lo sentimos, hubo un error al procesar tu encuesta. Por favor intenta nuevamente.');
      setMostrarResultado(true);
    } finally {
      setCargando(false);
    }
  };

  return (
    <section id="encuesta" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <Bot className="h-8 w-8 text-yellow-600 mr-3" />
            <h2 className="text-4xl sm:text-5xl font-playfair font-bold text-gray-800">
              Encuentra tu Destino Ideal
            </h2>
          </div>
          <p className="text-xl text-gray-600 font-montserrat max-w-2xl mx-auto">
            Responde estas preguntas y nuestra IA te recomendará el destino perfecto 
            para tu luna de miel en Argentina.
          </p>
        </div>

        <div className="bg-gradient-to-br from-yellow-50 to-pink-50 rounded-2xl p-8 shadow-lg">
          <form onSubmit={manejarEnvio} className="space-y-8">
            <div>
              <label className="block text-lg font-playfair font-semibold text-gray-800 mb-4">
                ¿Prefieres un destino con clima cálido o frío?
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { valor: 'calido', etiqueta: 'Cálido' },
                  { valor: 'frio', etiqueta: 'Frío' },
                  { valor: 'cualquiera', etiqueta: 'Cualquiera' }
                ].map((opcion) => (
                  <button
                    key={opcion.valor}
                    type="button"
                    onClick={() => setRespuestas({ ...respuestas, clima: opcion.valor as any })}
                    className={`p-4 rounded-lg border-2 font-montserrat font-medium transition-all duration-200 ${
                      respuestas.clima === opcion.valor
                        ? 'border-yellow-500 bg-yellow-100 text-yellow-800'
                        : 'border-gray-200 bg-white text-gray-700 hover:border-yellow-300'
                    }`}
                  >
                    {opcion.etiqueta}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-lg font-playfair font-semibold text-gray-800 mb-4">
                ¿Qué tipo de experiencia buscas?
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { valor: 'aventura', etiqueta: 'Aventura' },
                  { valor: 'relajacion', etiqueta: 'Relajación' },
                  { valor: 'cultura', etiqueta: 'Cultura' },
                  { valor: 'gastronomia', etiqueta: 'Gastronomía' }
                ].map((opcion) => (
                  <button
                    key={opcion.valor}
                    type="button"
                    onClick={() => setRespuestas({ ...respuestas, experiencia: opcion.valor as any })}
                    className={`p-4 rounded-lg border-2 font-montserrat font-medium transition-all duration-200 ${
                      respuestas.experiencia === opcion.valor
                        ? 'border-yellow-500 bg-yellow-100 text-yellow-800'
                        : 'border-gray-200 bg-white text-gray-700 hover:border-yellow-300'
                    }`}
                  >
                    {opcion.etiqueta}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-lg font-playfair font-semibold text-gray-800 mb-4">
                ¿Cuál es tu presupuesto aproximado?
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { valor: 'bajo', etiqueta: 'Bajo' },
                  { valor: 'medio', etiqueta: 'Medio' },
                  { valor: 'alto', etiqueta: 'Alto' }
                ].map((opcion) => (
                  <button
                    key={opcion.valor}
                    type="button"
                    onClick={() => setRespuestas({ ...respuestas, presupuesto: opcion.valor as any })}
                    className={`p-4 rounded-lg border-2 font-montserrat font-medium transition-all duration-200 ${
                      respuestas.presupuesto === opcion.valor
                        ? 'border-yellow-500 bg-yellow-100 text-yellow-800'
                        : 'border-gray-200 bg-white text-gray-700 hover:border-yellow-300'
                    }`}
                  >
                    {opcion.etiqueta}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-lg font-playfair font-semibold text-gray-800 mb-4">
                ¿Qué tan importante es la proximidad a la naturaleza? (1-5)
              </label>
              <div className="flex justify-center">
                <input
                  type="range"
                  min="1"
                  max="5"
                  value={respuestas.naturaleza}
                  onChange={(e) => setRespuestas({ ...respuestas, naturaleza: parseInt(e.target.value) })}
                  className="w-full max-w-md h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                />
              </div>
              <div className="flex justify-between max-w-md mx-auto mt-2 text-sm text-gray-600 font-montserrat">
                <span>Poco importante</span>
                <span className="font-semibold text-yellow-600">{respuestas.naturaleza}</span>
                <span>Muy importante</span>
              </div>
            </div>

            <div>
              <label className="block text-lg font-playfair font-semibold text-gray-800 mb-4">
                ¿Prefieres actividades al aire libre o en interiores?
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { valor: 'exterior', etiqueta: 'Al aire libre' },
                  { valor: 'interior', etiqueta: 'En interiores' },
                  { valor: 'mixtas', etiqueta: 'Mixtas' }
                ].map((opcion) => (
                  <button
                    key={opcion.valor}
                    type="button"
                    onClick={() => setRespuestas({ ...respuestas, actividades: opcion.valor as any })}
                    className={`p-4 rounded-lg border-2 font-montserrat font-medium transition-all duration-200 ${
                      respuestas.actividades === opcion.valor
                        ? 'border-yellow-500 bg-yellow-100 text-yellow-800'
                        : 'border-gray-200 bg-white text-gray-700 hover:border-yellow-300'
                    }`}
                  >
                    {opcion.etiqueta}
                  </button>
                ))}
              </div>
            </div>

            <div className="text-center">
              <button
                type="submit"
                disabled={cargando}
                className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 disabled:from-gray-400 disabled:to-gray-500 text-white px-8 py-4 rounded-full font-montserrat font-semibold transition-all duration-300 transform hover:scale-105 disabled:hover:scale-100 shadow-lg flex items-center space-x-2 mx-auto"
              >
                {cargando ? (
                  <>
                    <Loader className="h-5 w-5 animate-spin" />
                    <span>Analizando...</span>
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    <span>Obtener Recomendación</span>
                  </>
                )}
              </button>
            </div>
          </form>

          {mostrarResultado && (
            <div className="mt-8 p-6 bg-white rounded-xl shadow-lg border-l-4 border-yellow-500">
              <div className="flex items-start space-x-3">
                <MapPin className="h-6 w-6 text-yellow-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-playfair font-bold text-gray-800 mb-2">
                    Tu Destino Recomendado
                  </h3>
                  <p className="text-gray-700 font-montserrat leading-relaxed">
                    {recomendacion}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Encuesta;