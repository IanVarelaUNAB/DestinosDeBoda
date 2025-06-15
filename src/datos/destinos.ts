import { Destino } from '../tipos';

export const destinos: Destino[] = [
  {
    id: 'bariloche',
    nombre: 'Bariloche',
    provincia: 'Bariloche',
    descripcion: 'Ubicado en el corazón de la Patagonia, Bariloche ofrece paisajes alpinos únicos con lagos cristalinos y montañas nevadas. El destino perfecto para parejas que buscan romance en un entorno de ensueño.',
    actividades: ['Cenas románticas frente al lago', 'Paseos en teleférico', 'Degustación de chocolates artesanales', 'Navegación por el Nahuel Huapi'],
    imagen: 'https://images.pexels.com/photos/417344/pexels-photo-417344.jpeg',
    destacado: true
  },
  {
    id: 'mendoza',
    nombre: 'Mendoza',
    provincia: 'Mendoza',
    descripcion: 'La capital mundial del Malbec te espera con sus viñedos infinitos y la majestuosa Cordillera de los Andes. Una experiencia gastronómica y vinícola inigualable para los amantes del buen vivir.',
    actividades: ['Tours por bodegas premium', 'Cenas maridadas con vinos', 'Spa con vinoterapia', 'Cabalgatas al amanecer'],
    imagen: 'https://images.pexels.com/photos/1804577/pexels-photo-1804577.jpeg',
    destacado: true
  },
  {
    id: 'ushuaia',
    nombre: 'Ushuaia',
    provincia: 'Tierra del Fuego',
    descripcion: 'En el fin del mundo encontras la experiencia más única. Glaciares, pingüinos y paisajes que quitan el aliento en la ciudad más austral del planeta.',
    actividades: ['Navegación por el Canal Beagle', 'Avistamiento de fauna marina', 'Trekking en Tierra del Fuego', 'Cenas en refugios patagónicos'],
    imagen: 'https://images.pexels.com/photos/2901209/pexels-photo-2901209.jpeg',
    destacado: true
  },
  {
    id: 'iguazu',
    nombre: 'Cataratas del Iguazú',
    provincia: 'Misiones',
    descripcion: 'Una de las siete maravillas naturales del mundo te espera en la selva misionera. La fuerza del agua y la exuberante naturaleza crean un ambiente mágico e inolvidable.',
    actividades: ['Circuitos por las cataratas', 'Vuelos en helicóptero', 'Safaris fotográficos', 'Cenas en la selva'],
    imagen: 'https://images.pexels.com/photos/2356059/pexels-photo-2356059.jpeg',
    destacado: true
  },
  {
    id: 'salta',
    nombre: 'Salta',
    provincia: 'Salta',
    descripcion: 'La linda del norte te seduce con su arquitectura colonial, sus paisajes coloridos y su rica cultura. Perfecta para parejas que buscan historia, cultura y tradición.',
    actividades: ['City tour colonial', 'Excursión a Cafayate', 'Degustación de vinos torrontés', 'Recorrido por Purmamarca'],
    imagen: 'https://images.pexels.com/photos/2901215/pexels-photo-2901215.jpeg'
  }
];