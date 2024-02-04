import { memo } from 'react';
import { Section } from '../../shared/ui/section/section';
import { AuthForm } from '../../widgets/auth-form/auth-form';
import { useAuth } from '../../shared/lib/use-auth';

const RegistrationPage = memo(() => {
  const { handleRegistration } = useAuth();

  return (
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
