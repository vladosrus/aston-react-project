import { memo } from 'react';
import { Section } from '../../shared/ui/section/section';
import { AuthForm } from '../../widgets/auth-form/auth-form';
import { useAuth } from '../../shared/lib/use-auth';

const LoginPage = memo(() => {
  const { handleLogin } = useAuth();

  return (
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
