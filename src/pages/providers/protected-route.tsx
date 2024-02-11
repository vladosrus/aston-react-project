import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { paths } from '../../shared/model/paths';
import { AuthContext } from '../../app/contexts/auth-context';

type Props = {
  children: JSX.Element;
};

export const ProtectedRoute = (props: Props) => {
  const { isAuth } = useContext(AuthContext);

  return isAuth ? (
    props.children
  ) : (
    <Navigate to={`${paths.homePage}${paths.registrationPage}`} replace />
  );
};
