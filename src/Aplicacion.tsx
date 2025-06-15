import React from 'react';
import Encabezado from './componentes/Encabezado';
import Heroe from './componentes/Heroe';
import Destinos from './componentes/Destinos';
import Encuesta from './componentes/Encuesta';
import Autenticacion from './componentes/Autenticacion';
import Favoritos from './componentes/Favoritos';
import Testimonios from './componentes/Testimonios';
import Blog from './componentes/Blog';
import Contacto from './componentes/Contacto';
import PiePagina from './componentes/PiePagina';

function Aplicacion() {
  return (
    <div className="min-h-screen bg-white">
      <Encabezado />
      <main>
        <Heroe />
        <Destinos />
        <Encuesta />
        <Testimonios />
        <Blog />
        <Contacto />
        <Autenticacion />
        <Favoritos />
      </main>
      <PiePagina />
    </div>
  );
}

export default Aplicacion;