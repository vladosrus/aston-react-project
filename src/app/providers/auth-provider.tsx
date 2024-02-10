import { FC, useEffect, useMemo, useState } from 'react';
import { AuthContext } from '../contexts/auth-context';
import { checkAuth } from '../../shared/api';
import { userDbProfileSynchronized } from '../../features/user/user-db-profile-synchronized';
import { useTypedDispatch } from '../../shared/lib/use-typed-dispatch';

type Props = {
  children: JSX.Element;
};

export const AuthProvider: FC<Props> = (props) => {
  const [auth, setAuth] = useState(false);
  const [authChecking, setAuthChecking] = useState(true);
  const isAuth = useMemo(() => auth, [auth]);
  const isAuthChecking = useMemo(() => authChecking, [authChecking]);
  const dispatch = useTypedDispatch();

  useEffect(() => {
    checkAuth((user) => {
      if (user?.email) {
        setAuth(true);
        dispatch(userDbProfileSynchronized(user.email));
      } else {
        setAuth(false);
      }
      setAuthChecking(false);
    });
  }, [dispatch]);

  return (
    <AuthContext.Provider value={{ isAuth, isAuthChecking, setAuth }}>
      {props.children}
    </AuthContext.Provider>
  );
};
