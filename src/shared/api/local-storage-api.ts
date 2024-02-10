import type { RootUser } from '../../entities/user/model/slice';

export type Inputs = {
  email: string;
  password: string;
};

export type LsUser = {
  email: string | null;
};
export type RootLsUser = {
  id: string;
  favorites: string[];
  history: string[];
};

// Функции связанные с авторизацией
export const login = ({ email, password }: Inputs) => {
  const user = localStorage.getItem(email);
  if (user) {
    const lsPassword: RootLsUser = JSON.parse(user);

    if (lsPassword.id === password) {
      localStorage.setItem('email', email);
      localStorage.setItem('password', password);
      return;
    } else {
      throw new Error('Указаны неверные данные');
    }
  } else {
    throw new Error('Указаны неверные данные');
  }
};

export const registration = ({ email, password }: Inputs) => {
  if (localStorage.getItem(email)) {
    throw new Error('Такой email уже используется');
  } else {
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
    return { user: { email, uid: password } };
  }
};

export const checkAuth = (callBack: (user: LsUser | null) => void) => {
  const lsEmail = localStorage.getItem('email');
  const lsPassword = localStorage.getItem('password');

  if (lsEmail && lsPassword) {
    callBack({ email: lsEmail });
  } else {
    callBack(null);
  }
};

export const logout = () => {
  localStorage.removeItem('email');
  localStorage.removeItem('password');
};

// Функции для работы с данными в БД
export const createUserDbProfile = async (user: RootUser<string>) => {
  localStorage.setItem(
    user.email,
    JSON.stringify({
      id: user.id,
      favorites: [],
      history: []
    })
  );
};

export const getUserDbProfile = async (email: string) => {
  const user = localStorage.getItem(email);
  if (user) {
    return JSON.parse(user);
  } else {
    throw new Error('Нет такого пользователя в БД');
  }
};

export const addToFavorites = async (email: string, photoId: string) => {
  const user = localStorage.getItem(email);

  if (user) {
    const newUser: RootLsUser = JSON.parse(user);
    newUser.favorites = [...newUser.favorites, photoId];
    localStorage.setItem(email, JSON.stringify(newUser));
  } else {
    throw new Error('Нет такого пользователя в БД');
  }
};

export const deleteFromFavorites = async (email: string, photoId: string) => {
  const user = localStorage.getItem(email);

  if (user) {
    const newUser: RootLsUser = JSON.parse(user);
    newUser.favorites = newUser.favorites.filter((id) => id !== photoId);
    localStorage.setItem(email, JSON.stringify(newUser));
  } else {
    throw new Error('Нет такого пользователя в БД');
  }
};

export const addToHistory = async (email: string, query: string) => {
  const user = localStorage.getItem(email);

  if (user) {
    const newUser: RootLsUser = JSON.parse(user);
    newUser.history = [...newUser.history, query];
    localStorage.setItem(email, JSON.stringify(newUser));
  } else {
    throw new Error('Нет такого пользователя в БД');
  }
};

export const deleteOneQueryFromHistory = async (
  email: string,
  query: string
) => {
  const user = localStorage.getItem(email);

  if (user) {
    const newUser: RootLsUser = JSON.parse(user);
    newUser.history = newUser.history.filter((q) => q !== query);
    localStorage.setItem(email, JSON.stringify(newUser));
  } else {
    throw new Error('Нет такого пользователя в БД');
  }
};

export const deleteAllQueriesFromHistory = async (email: string) => {
  const user = localStorage.getItem(email);

  if (user) {
    const newUser: RootLsUser = JSON.parse(user);
    newUser.history = [];
    localStorage.setItem(email, JSON.stringify(newUser));
  } else {
    throw new Error('Нет такого пользователя в БД');
  }
};
