import { useCallback, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { paths } from '../../../shared/model/paths';
import { useTypedDispatch } from '../../../shared/lib/use-typed-dispatch';
import { userRegistered } from '../registration/user-registered';
import { userLoggedIn } from '../login/user-logged-in';
import { userLoggedOut } from '../logout/user-logged-out';
import { useTypedSelector } from '../../../shared/lib/use-typed-selector';
import { AuthContext } from '../../../app/contexts/auth-context';
import {
  loginInfoSelector,
  registrationInfoSelector
} from '../../../entities/auth';
import type { Inputs } from '../../../shared/api/firebase-api';

export const useAuth = () => {
  const { isLoading: isRegistrationLoading, error: registrationError } =
    useTypedSelector(registrationInfoSelector);
  const { isLoading: isLoginLoading, error: loginError } =
    useTypedSelector(loginInfoSelector);

  const navigate = useNavigate();
  const dispatch = useTypedDispatch();
  const { setAuth } = useContext(AuthContext);

  const handleRegistration = useCallback(
    (date: Inputs) => {
      dispatch(userRegistered(date)).then((res) => {
        if (
          res.type === 'auth/userRegistered/fulfilled' &&
          import.meta.env.VITE_REMOTE_STORE === 'ls'
        ) {
          setAuth(true);
        }
      });
    },
    [dispatch, setAuth]
  );
  const handleLogin = useCallback(
    (data: Inputs) => {
      dispatch(userLoggedIn(data)).then((res) => {
        if (
          res.type === 'auth/userLoggedIn/fulfilled' &&
          import.meta.env.VITE_REMOTE_STORE === 'ls'
        ) {
          setAuth(true);
        }
      });
    },
    [dispatch, setAuth]
  );

  const handleLogout = useCallback(() => {
    dispatch(userLoggedOut()).then((res) => {
      if (
        res.type === 'auth/userLoggedOut/fulfilled' &&
        import.meta.env.VITE_REMOTE_STORE === 'ls'
      ) {
        setAuth(false);
      }
    });
    navigate(paths.homePage);
  }, [dispatch, navigate, setAuth]);

  return {
    isLoginLoading,
    loginError,
    isRegistrationLoading,
    registrationError,
    handleLogin,
    handleRegistration,
    handleLogout
  };
};
