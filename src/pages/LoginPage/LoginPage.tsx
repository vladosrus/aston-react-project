import { memo } from 'react';
import { Section } from '../../shared/ui/Section/Section';
import { AuthForm } from '../../widgets/AuthForm/AuthForm';

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

// Без дефолтного эспорта будут громоздкие импорты для lazy
// eslint-disable-next-line import/no-default-export
export default LoginPage;
