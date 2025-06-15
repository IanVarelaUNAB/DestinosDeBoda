import { useState, useEffect } from 'react';
import { 
  User as UsuarioFirebase, 
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut as cerrarSesionFirebase,
  onAuthStateChanged,
  updateProfile
} from 'firebase/auth';
import { auth, proveedorGoogle } from '../configuracion/firebase';
import { Usuario } from '../tipos';

export const useAutenticacion = () => {
  const [usuario, setUsuario] = useState<Usuario | null>(null);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const desuscribir = onAuthStateChanged(auth, (usuarioFirebase: UsuarioFirebase | null) => {
      if (usuarioFirebase) {
        setUsuario({
          uid: usuarioFirebase.uid,
          email: usuarioFirebase.email,
          nombreMostrar: usuarioFirebase.displayName
        });
      } else {
        setUsuario(null);
      }
      setCargando(false);
    });

    return desuscribir;
  }, []);

  const iniciarSesionConEmail = async (email: string, contrasena: string) => {
    try {
      await signInWithEmailAndPassword(auth, email, contrasena);
    } catch (error: any) {
      throw new Error(obtenerMensajeError(error.code));
    }
  };

  const registrarseConEmail = async (email: string, contrasena: string, nombreMostrar: string) => {
    try {
      const resultado = await createUserWithEmailAndPassword(auth, email, contrasena);
      if (resultado.user && nombreMostrar) {
        await updateProfile(resultado.user, { displayName: nombreMostrar });
      }
    } catch (error: any) {
      throw new Error(obtenerMensajeError(error.code));
    }
  };

  const iniciarSesionConGoogle = async () => {
    try {
      await signInWithPopup(auth, proveedorGoogle);
    } catch (error: any) {
      throw new Error(obtenerMensajeError(error.code));
    }
  };

  const cerrarSesion = async () => {
    try {
      await cerrarSesionFirebase(auth);
    } catch (error) {
      console.error('Error cerrando sesión:', error);
    }
  };

  const obtenerMensajeError = (codigoError: string): string => {
    switch (codigoError) {
      case 'auth/user-not-found':
        return 'No se encontró una cuenta con este correo electrónico.';
      case 'auth/wrong-password':
        return 'Contraseña incorrecta.';
      case 'auth/email-already-in-use':
        return 'Ya existe una cuenta con este correo electrónico.';
      case 'auth/weak-password':
        return 'La contraseña debe tener al menos 6 caracteres.';
      case 'auth/invalid-email':
        return 'El correo electrónico no es válido.';
      case 'auth/popup-closed-by-user':
        return 'El proceso de autenticación fue cancelado.';
      default:
        return 'Ocurrió un error inesperado. Por favor intenta nuevamente.';
    }
  };

  return {
    usuario,
    cargando,
    iniciarSesionConEmail,
    registrarseConEmail,
    iniciarSesionConGoogle,
    cerrarSesion
  };
};