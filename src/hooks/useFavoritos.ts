import { useState, useEffect } from 'react';
import { useAutenticacion } from './useAutenticacion';
import { 
  collection, 
  doc, 
  setDoc, 
  deleteDoc, 
  query, 
  where, 
  onSnapshot 
} from 'firebase/firestore';
import { db } from '../configuracion/firebase';

interface Favorito {
  id: string;
  idDestino: string;
  marcaTiempo: Date;
}

export const useFavoritos = () => {
  const { usuario } = useAutenticacion();
  const [favoritos, setFavoritos] = useState<Favorito[]>([]);
  const [cargando, setCargando] = useState(false);

  useEffect(() => {
    if (!usuario) {
      setFavoritos([]);
      return;
    }

    setCargando(true);
    const refFavoritos = collection(db, 'favoritos');
    const consulta = query(refFavoritos, where('idUsuario', '==', usuario.uid));

    const desuscribir = onSnapshot(consulta, (snapshot) => {
      const datosFavoritos: Favorito[] = [];
      snapshot.forEach((doc) => {
        const datos = doc.data();
        datosFavoritos.push({
          id: doc.id,
          idDestino: datos.idDestino,
          marcaTiempo: datos.marcaTiempo.toDate()
        });
      });
      setFavoritos(datosFavoritos);
      setCargando(false);
    });

    return desuscribir;
  }, [usuario]);

  const agregarAFavoritos = async (idDestino: string) => {
    if (!usuario) return;

    try {
      const idFavorito = `${usuario.uid}_${idDestino}`;
      await setDoc(doc(db, 'favoritos', idFavorito), {
        idUsuario: usuario.uid,
        idDestino,
        marcaTiempo: new Date()
      });
    } catch (error) {
      console.error('Error agregando a favoritos:', error);
    }
  };

  const quitarDeFavoritos = async (idDestino: string) => {
    if (!usuario) return;

    try {
      const idFavorito = `${usuario.uid}_${idDestino}`;
      await deleteDoc(doc(db, 'favoritos', idFavorito));
    } catch (error) {
      console.error('Error quitando de favoritos:', error);
    }
  };

  const esFavorito = (idDestino: string): boolean => {
    return favoritos.some(fav => fav.idDestino === idDestino);
  };

  return {
    favoritos,
    cargando,
    agregarAFavoritos,
    quitarDeFavoritos,
    esFavorito
  };
};