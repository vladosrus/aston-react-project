import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  type User
} from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
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
