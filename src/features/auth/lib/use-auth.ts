import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { type User } from 'firebase/auth';
import { checkAuth } from '../../../shared/api/firebase-api';
import { paths } from '../../../shared/model/paths';
import { useTypedDispatch } from '../../../shared/lib/use-typed-dispatch';
import { userRegistered } from '../registration/user-registered';
import { userLoggedIn } from '../login/user-logged-in';
import { userLoggedOut } from '../logout/user-logged-out';
import { userDbProfileSynchronized } from '../../user/user-db-profile-synchronized';
import { useTypedSelector } from '../../../shared/lib/use-typed-selector';
import {
  loginInfoSelector,
  registrationInfoSelector
} from '../../../entities/auth';
import type { Inputs } from '../../../shared/api/firebase-api';

export const useAuth = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [isAuthChecking, setIsAuthChecking] = useState(true);
  const { isLoading: isRegistrationLoading, error: registrationError } =
    useTypedSelector(registrationInfoSelector);
  const { isLoading: isLoginLoading, error: loginError } =
    useTypedSelector(loginInfoSelector);

  const navigate = useNavigate();
  const dispatch = useTypedDispatch();

  useEffect(() => {
    checkAuth((user: User | null) => {
      if (user?.email) {
        setIsAuth(true);
        dispatch(userDbProfileSynchronized(user.email));
      } else {
        setIsAuth(false);
      }
      setIsAuthChecking(false);
    });
  }, [dispatch]);

  const handleRegistration = (date: Inputs) => {
    dispatch(userRegistered(date));
  };
  const handleLogin = (data: Inputs) => {
    dispatch(userLoggedIn(data));
  };

  const handleLogout = () => {
    dispatch(userLoggedOut());
    navigate(paths.homePage);
  };

  return {
    isAuth,
    isAuthChecking,
    isLoginLoading,
    loginError,
    isRegistrationLoading,
    registrationError,
    handleLogin,
    handleRegistration,
    handleLogout
  };
};
