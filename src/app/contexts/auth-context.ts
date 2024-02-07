import { createContext } from 'react';

type ContextValue = {
  isAuth: boolean;
  isAuthChecking: boolean;
};

export const AuthContext = createContext<ContextValue>({
  isAuth: false,
  isAuthChecking: true
});
