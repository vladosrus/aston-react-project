import { Navigate } from 'react-router-dom';
import { useAuth } from '../../shared/lib/use-auth';
import { paths } from '../../shared/model/paths';

export function ProtectedRoute({ children }: { children: JSX.Element }) {
  const isAuth = useAuth();

  return isAuth ? (
    children
  ) : (
    <Navigate to={`${paths.homePage}${paths.registrationPage}`} replace />
  );
}
