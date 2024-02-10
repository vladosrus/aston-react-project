import React, { createContext } from 'react';

type ContextValue = {
  isAuth: boolean;
  isAuthChecking: boolean;
  setAuth: React.Dispatch<React.SetStateAction<boolean>>;
};

export const AuthContext = createContext<ContextValue>({
  isAuth: false,
  isAuthChecking: true,
  setAuth: () => false
});
