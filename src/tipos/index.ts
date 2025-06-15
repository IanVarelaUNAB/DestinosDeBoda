export interface Destino {
  id: string;
  nombre: string;
  provincia: string;
  descripcion: string;
  actividades: string[];
  imagen: string;
  destacado?: boolean;
}

export interface RespuestaEncuesta {
  clima: 'calido' | 'frio' | 'cualquiera';
  experiencia: 'aventura' | 'relajacion' | 'cultura' | 'gastronomia';
  presupuesto: 'bajo' | 'medio' | 'alto';
  naturaleza: number;
  actividades: 'exterior' | 'interior' | 'mixtas';
}

export interface Usuario {
  uid: string;
  email: string | null;
  nombreMostrar: string | null;
}

export interface Testimonio {
  id: string;
  nombres: string;
  ubicacion: string;
  contenido: string;
  calificacion: number;
  imagen?: string;
}

export interface PublicacionBlog {
  id: string;
  titulo: string;
  extracto: string;
  contenido: string;
  tiempoLectura: string;
  imagen: string;
}