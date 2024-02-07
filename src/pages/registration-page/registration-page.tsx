import { memo, useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { Section } from '../../shared/ui/section/section';
import { AuthForm } from '../../features/auth/ui/auth-form/auth-form';
import { useAuth } from '../../features/auth/lib/use-auth';
import { paths } from '../../shared/model/paths';
import { AuthContext } from '../../app/contexts/auth-context';

const RegistrationPage = memo(() => {
  const { isAuth } = useContext(AuthContext);
  const { handleRegistration } = useAuth();

  return isAuth ? (
    <Navigate to={paths.homePage} replace />
  ) : (
    <>
      <Section type="top" />
      <Section type="main">
        <AuthForm name="Регистрация" onSubmit={handleRegistration} />
      </Section>
    </>
  );
});

// Без дефолтного экспорта будут громоздкие импорты для lazy
// eslint-disable-next-line import/no-default-export
export default RegistrationPage;
