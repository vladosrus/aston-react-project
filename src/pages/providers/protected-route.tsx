import { FC, useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { paths } from '../../shared/model/paths';
import { AuthContext } from '../../app/contexts/auth-context';

type Props = {
  children: JSX.Element;
};

export const ProtectedRoute: FC<Props> = (props) => {
  const { isAuth } = useContext(AuthContext);

  return isAuth ? (
    props.children
  ) : (
    <Navigate to={`${paths.homePage}${paths.registrationPage}`} replace />
  );
};
