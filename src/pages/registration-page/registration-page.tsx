import { memo } from 'react';
import { Navigate } from 'react-router-dom';
import { Section } from '../../shared/ui/section/section';
import { AuthForm } from '../../features/auth/ui/auth-form/auth-form';
import { useAuth } from '../../features/auth/lib/use-auth';
import { paths } from '../../shared/model/paths';

const RegistrationPage = memo(() => {
  const { isAuth, handleRegistration } = useAuth();

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
