import { memo } from 'react';
import { Section } from '../../shared/ui/section/section';
import { AuthForm } from '../../widgets/auth-form/auth-form';

const LoginPage = memo(() => {
  return (
    <>
      <Section type="top" />
      <Section type="main">
        <AuthForm name="Авторизация" />
      </Section>
    </>
  );
});

// Без дефолтного экспорта будут громоздкие импорты для lazy
// eslint-disable-next-line import/no-default-export
export default LoginPage;
