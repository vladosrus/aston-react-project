import * as firebaseApi from './firebase-api';
import * as localStorageApi from './local-storage-api';
import type { RootUser } from '../../entities/user/model/slice';
import type { User } from 'firebase/auth';

export type Inputs = {
  email: string;
  password: string;
};

// Функции связанные с авторизацией
export const login = ({ email, password }: Inputs) => {
  return import.meta.env.VITE_REMOTE_STORE === 'firebase'
    ? firebaseApi.login({ email, password })
    : localStorageApi.login({ email, password });
};

export const registration = ({ email, password }: Inputs) => {
  return import.meta.env.VITE_REMOTE_STORE === 'firebase'
    ? firebaseApi.registration({ email, password })
    : localStorageApi.registration({ email, password });
};

export const checkAuth = (
  callBack: (user: (User | null) | (localStorageApi.LsUser | null)) => void
) => {
  return import.meta.env.VITE_REMOTE_STORE === 'firebase'
    ? firebaseApi.checkAuth(callBack)
    : localStorageApi.checkAuth(callBack);
};

export const logout = () => {
  return import.meta.env.VITE_REMOTE_STORE === 'firebase'
    ? firebaseApi.logout()
    : localStorageApi.logout();
};

// Функции для работы с данными в БД
export const createUserDbProfile = (user: RootUser<string>) => {
  return import.meta.env.VITE_REMOTE_STORE === 'firebase'
    ? firebaseApi.createUserDbProfile(user)
    : localStorageApi.createUserDbProfile(user);
};

export const getUserDbProfile = (email: string) => {
  return import.meta.env.VITE_REMOTE_STORE === 'firebase'
    ? firebaseApi.getUserDbProfile(email)
    : localStorageApi.getUserDbProfile(email);
};

export const addToFavorites = (email: string, photoId: string) => {
  return import.meta.env.VITE_REMOTE_STORE === 'firebase'
    ? firebaseApi.addToFavorites(email, photoId)
    : localStorageApi.addToFavorites(email, photoId);
};

export const deleteFromFavorites = (email: string, photoId: string) => {
  return import.meta.env.VITE_REMOTE_STORE === 'firebase'
    ? firebaseApi.deleteFromFavorites(email, photoId)
    : localStorageApi.deleteFromFavorites(email, photoId);
};

export const addToHistory = (email: string, query: string) => {
  return import.meta.env.VITE_REMOTE_STORE === 'firebase'
    ? firebaseApi.addToHistory(email, query)
    : localStorageApi.addToHistory(email, query);
};

export const deleteOneQueryFromHistory = (email: string, query: string) => {
  return import.meta.env.VITE_REMOTE_STORE === 'firebase'
    ? firebaseApi.deleteOneQueryFromHistory(email, query)
    : localStorageApi.deleteOneQueryFromHistory(email, query);
};
export const deleteAllQueriesFromHistory = (email: string) => {
  return import.meta.env.VITE_REMOTE_STORE === 'firebase'
    ? firebaseApi.deleteAllQueriesFromHistory(email)
    : localStorageApi.deleteAllQueriesFromHistory(email);
};
