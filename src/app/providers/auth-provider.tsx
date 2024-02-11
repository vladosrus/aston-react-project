import { FC, useEffect, useMemo, useState } from 'react';
import { AuthContext } from '../contexts/auth-context';
import { checkAuth } from '../../shared/api';
import { userDbProfileSynchronized } from '../../features/user/user-db-profile-synchronized';
import { useTypedDispatch } from '../../shared/lib/use-typed-dispatch';

type Props = {
  children: JSX.Element;
};

export const AuthProvider: FC<Props> = (props) => {
  const [isAuth, setIsAuth] = useState(false);
  const [isAuthChecking, setIsAuthChecking] = useState(true);
  const memoValues = useMemo(
    () => ({
      isAuth,
      isAuthChecking,
      setIsAuth
    }),
    [isAuth, isAuthChecking, setIsAuth]
  );
  const dispatch = useTypedDispatch();

  useEffect(() => {
    checkAuth((user) => {
      if (user?.email) {
        setIsAuth(true);
        dispatch(userDbProfileSynchronized(user.email));
      } else {
        setIsAuth(false);
      }
      setIsAuthChecking(false);
    });
  }, [dispatch]);

  return (
    <AuthContext.Provider value={memoValues}>
      {props.children}
    </AuthContext.Provider>
  );
};
