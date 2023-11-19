import { useState, useEffect, useContext, createContext } from 'react';

import { initializeApp } from 'firebase/app';
import { auth } from '../lib/firebase_init';
import {
  //   getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  AuthErrorCodes,
  onAuthStateChanged,
} from 'firebase/auth';

// const firebaseApp = initializeApp({
//   apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_APP_ID,
//   measurementId: process.env.REACT_APP_MEASUREMENT_ID,
// });

// const auth = getAuth(firebaseApp);

const AuthContext = createContext();

const handleErrors = (error) => {
  switch (error.code) {
    case AuthErrorCodes.INVALID_PASSWORD:
      return 'invalid password';
    case AuthErrorCodes.INVALID_EMAIL:
      return 'invalid email';
    case AuthErrorCodes.EMAIL_EXISTS:
      return 'email already in use';
    case AuthErrorCodes.USER_DELETED:
      return 'User not found';
    case AuthErrorCodes.USER_DISABLED:
      return 'User Disabled';
    case AuthErrorCodes.USER_SIGNED_OUT:
      return 'User signed out';
    default:
      return 'authentication error';
  }
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const login = async (email, password) => {
    setLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user);
      setError('');
      setLoading(false);
      return userCredential.user;
    } catch (error) {
      const errorMessage = handleErrors(error);
      setUser(false);
      setError(errorMessage);
      setLoading(false);
    }
  };

  const signup = async (email, password) => {
    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user);
      setError('');
      setLoading(false);
      return userCredential.user;
    } catch (error) {
      const errorMessage = handleErrors(error);
      setUser(false);
      setError(errorMessage);
      setLoading(false);
    }
  };

  const logout = async () => {
    setLoading(true);
    try {
      await signOut(auth);
      setUser(false);
      setError('');
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(false);
      }
    });

    return () => {
      unsubscribe();
      setLoading(false);
    };
  }, [user]);

  const authMethods = {
    user,
    error,
    loading,
    login,
    signup,
    logout,
  };
  return <AuthContext.Provider value={authMethods}>{children}</AuthContext.Provider>;
};
