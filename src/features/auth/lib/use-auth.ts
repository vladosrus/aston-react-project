import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { paths } from '../../../shared/model/paths';
import { useTypedDispatch } from '../../../shared/lib/use-typed-dispatch';
import { userRegistered } from '../registration/user-registered';
import { userLoggedIn } from '../login/user-logged-in';
import { userLoggedOut } from '../logout/user-logged-out';
import { useTypedSelector } from '../../../shared/lib/use-typed-selector';
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

  const handleRegistration = useCallback(
    (date: Inputs) => {
      dispatch(userRegistered(date));
    },
    [dispatch]
  );
  const handleLogin = useCallback(
    (data: Inputs) => {
      dispatch(userLoggedIn(data));
    },
    [dispatch]
  );

  const handleLogout = useCallback(() => {
    dispatch(userLoggedOut());
    navigate(paths.homePage);
  }, [dispatch, navigate]);

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
