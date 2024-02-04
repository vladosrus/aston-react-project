import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { checkAuth, login, logout, registration } from '../api/firebase-api';
import { userSignIn, userSignOut } from '../../entities/user';
import { paths } from '../model/paths';
import { useTypedDispatch } from './use-typed-dispatch';
import type { Inputs } from '../api/firebase-api';
import type { User } from 'firebase/auth';

export const useAuth = () => {
  const navigate = useNavigate();
  const dispatch = useTypedDispatch();
  const [isAuth, setIsAuth] = useState(false);
  const [isAuthChecking, setIsAuthChecking] = useState(true);

  useEffect(() => {
    setIsAuthChecking(true);
    checkAuth((user: User | null) => {
      if (user) {
        setIsAuth(true);
        dispatch(userSignIn({ email: user.email, id: user.uid }));
      } else {
        logout();
        dispatch(userSignOut());
        setIsAuth(false);
      }
    });
    setIsAuthChecking(false);
  }, [dispatch]);

  const handleLogin = (data: Inputs) => {
    setIsAuthChecking(true);
    login(data)
      .then((res) => {
        dispatch(userSignIn({ email: res.user.email, id: res.user.uid }));
        setIsAuth(true);
        navigate(paths.homePage);
      })
      .catch(() => setIsAuth(false))
      .finally(() => setIsAuthChecking(false));
  };

  const handleRegistration = (date: Inputs) => {
    setIsAuthChecking(true);
    registration(date)
      .then((res) => {
        dispatch(userSignIn({ email: res.user.email, id: res.user.uid }));
        setIsAuth(true);
        navigate(paths.homePage);
      })
      .catch(() => setIsAuth(false))
      .finally(() => setIsAuthChecking(false));
  };

  const handleLogout = () => {
    setIsAuthChecking(true);
    logout()
      .then(() => {
        dispatch(userSignOut());
        setIsAuth(false);
      })
      .catch()
      .finally(() => setIsAuthChecking(false));
  };

  return {
    isAuth,
    isAuthChecking,
    handleLogin,
    handleRegistration,
    handleLogout
  };
};
