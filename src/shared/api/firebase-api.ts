import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  type User
} from 'firebase/auth';
import {
  arrayRemove,
  arrayUnion,
  doc,
  getDoc,
  setDoc,
  updateDoc
} from 'firebase/firestore';
import { auth, db } from '../../app/firebase';
import type { RootUser } from '../../entities/user/model/slice';

export type Inputs = {
  email: string;
  password: string;
};

// Функции связанные с Firebase Auth
export const login = ({ email, password }: Inputs) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const registration = ({ email, password }: Inputs) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const checkAuth = (callBack: (user: User | null) => void) => {
  onAuthStateChanged(auth, (user) => {
    callBack(user);
  });
};

export const logout = () => signOut(auth);

export const createUserDbProfile = async (user: RootUser<string>) => {
  await setDoc(doc(db, 'users', user.email), {
    id: user.id,
    favorites: [],
    history: []
  });
};

export const getUserDbProfile = async (email: string) => {
  const userRef = doc(db, 'users', email);
  const docSnap = await getDoc(userRef);

  return docSnap;
};

export const addToFavorites = async (email: string, photoId: string) => {
  const userRef = doc(db, 'users', email);
  await updateDoc(userRef, {
    favorites: arrayUnion(photoId)
  });
};

export const deleteFromFavorites = async (email: string, photoId: string) => {
  const userRef = doc(db, 'users', email);
  await updateDoc(userRef, {
    favorites: arrayRemove(photoId)
  });
};

export const addToHistory = async (email: string, query: string) => {
  const userRef = doc(db, 'users', email);
  await updateDoc(userRef, {
    history: arrayUnion(query)
  });
};

export const deleteOneQueryFromHistory = async (
  email: string,
  query: string
) => {
  const userRef = doc(db, 'users', email);
  await updateDoc(userRef, {
    history: arrayRemove(query)
  });
};
export const deleteAllQueriesFromHistory = async (email: string) => {
  const userRef = doc(db, 'users', email);
  await updateDoc(userRef, {
    history: []
  });
};
