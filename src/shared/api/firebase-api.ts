import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from 'firebase/auth';
import { auth } from '../../app/firebase';
import type { User } from 'firebase/auth';

export type Inputs = {
  email: string;
  password: string;
};

export const login = ({ email, password }: Inputs) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const registration = ({ email, password }: Inputs) =>
  createUserWithEmailAndPassword(auth, email, password);

export const checkAuth = (cb: (user: User | null) => void) => {
  onAuthStateChanged(auth, (user) => {
    cb(user);
  });
};

export const logout = () => signOut(auth);
