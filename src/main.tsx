import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Aplicacion from './Aplicacion.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Aplicacion />
  </StrictMode>
);