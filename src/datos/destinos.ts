import { Destino } from '../tipos';

export const destinos: Destino[] = [
  {
    id: 'bariloche',
    nombre: 'Bariloche',
    provincia: 'Bariloche',
    descripcion: 'Ubicado en el corazón de la Patagonia, Bariloche ofrece paisajes alpinos únicos con lagos cristalinos y montañas nevadas. El destino perfecto para parejas que buscan romance en un entorno de ensueño.',
    actividades: ['Cenas románticas frente al lago', 'Paseos en teleférico', 'Degustación de chocolates artesanales', 'Navegación por el Nahuel Huapi'],
    imagen: 'https://www.patagoniaandina.com/wp-content/uploads/2020/05/Bariloche-postada.jpg',
    destacado: true
  },
  {
    id: 'mendoza',
    nombre: 'Mendoza',
    provincia: 'Mendoza',
    descripcion: 'La capital mundial del Malbec te espera con sus viñedos infinitos y la majestuosa Cordillera de los Andes. Una experiencia gastronómica y vinícola inigualable para los amantes del buen vivir.',
    actividades: ['Tours por bodegas premium', 'Cenas maridadas con vinos', 'Spa con vinoterapia', 'Cabalgatas al amanecer'],
    imagen: 'https://resizer.iproimg.com/unsafe/1280x720/filters:format(webp):quality(85):max_bytes(102400)/assets.iprofesional.com/assets/jpg/2024/11/587935_landscape.jpg',',
    destacado: true
  },
  {
    id: 'ushuaia',
    nombre: 'Ushuaia',
    provincia: 'Tierra del Fuego',
    descripcion: 'En el fin del mundo encontras la experiencia más única. Glaciares, pingüinos y paisajes que quitan el aliento en la ciudad más austral del planeta.',
    actividades: ['Navegación por el Canal Beagle', 'Avistamiento de fauna marina', 'Trekking en Tierra del Fuego', 'Cenas en refugios patagónicos'],
    imagen: 'https://i0.wp.com/turismoushuaia.com/wp-content/uploads/2018/02/ACZ_8980-1.jpg?fit=2560%2C1709&ssl=1',
    destacado: true
  },
  {
    id: 'iguazu',
    nombre: 'Cataratas del Iguazú',
    provincia: 'Misiones',
    descripcion: 'Una de las siete maravillas naturales del mundo te espera en la selva misionera. La fuerza del agua y la exuberante naturaleza crean un ambiente mágico e inolvidable.',
    actividades: ['Circuitos por las cataratas', 'Vuelos en helicóptero', 'Safaris fotográficos', 'Cenas en la selva'],
    imagen: 'https://cdn.getyourguide.com/img/location/56125e9c3cbd5.jpeg/99.jpg',
    destacado: true
  },
  {
    id: 'salta',
    nombre: 'Salta',
    provincia: 'Salta',
    descripcion: 'La linda del norte te seduce con su arquitectura colonial, sus paisajes coloridos y su rica cultura. Perfecta para parejas que buscan historia, cultura y tradición.',
    actividades: ['City tour colonial', 'Excursión a Cafayate', 'Degustación de vinos torrontés', 'Recorrido por Purmamarca'],
    imagen: 'https://res.cloudinary.com/worldpackers/image/upload/c_limit,f_auto,q_auto,w_1140/gxamaxdbtldw9evpgvkv'
  },
  {
    id: 'elcalafate',
    nombre: 'El Calafate',
    provincia: 'Santa Cruz',
    descripcion: 'El Calafate es la puerta de entrada al majestuoso Glaciar Perito Moreno y a los paisajes helados de la Patagonia Austral. Ideal para parejas aventureras que buscan naturaleza imponente y experiencias únicas.',
    actividades: [
      'Excursión al Glaciar Perito Moreno',
      'Navegación por el Lago Argentino',
      'Caminatas sobre hielo',
      'Degustación de dulces regionales'
    ],
    imagen: '/james-cheung-6OUfJlD_vmQ-unsplash.jpg',
    destacado: true
  }
];
