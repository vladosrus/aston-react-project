import { memo, useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { Section } from '../../shared/ui/section/section';
import { AuthForm } from '../../features/auth/ui/auth-form/auth-form';
import { useAuth } from '../../features/auth/lib/use-auth';
import { paths } from '../../shared/model/paths';
import { AuthContext } from '../../app/contexts/auth-context';

const LoginPage = memo(() => {
  const { isAuth } = useContext(AuthContext);
  const { handleLogin } = useAuth();

  return isAuth ? (
    <Navigate to={paths.homePage} replace />
  ) : (
    <>
      <Section type="top" />
      <Section type="main">
        <AuthForm name="Авторизация" onSubmit={handleLogin} />
      </Section>
    </>
  );
});

// Без дефолтного экспорта будут громоздкие импорты для lazy
// eslint-disable-next-line import/no-default-export
export default LoginPage;
