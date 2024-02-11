import React, { createContext } from 'react';

export type ContextValue = {
  isAuth: boolean;
  isAuthChecking: boolean;
  setIsAuth: React.Dispatch<React.SetStateAction<boolean>>;
};

export const AuthContext = createContext<ContextValue>({
  isAuth: false,
  isAuthChecking: true,
  setIsAuth: () => false
});
