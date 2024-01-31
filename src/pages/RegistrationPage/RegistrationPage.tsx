import { memo } from 'react';
import { Section } from '../../shared/ui/Section/Section';
import { AuthForm } from '../../widgets/AuthForm/AuthForm';

const RegistrationPage = memo(() => {
  return (
    <>
      <Section type="top" />
      <Section type="main">
        <AuthForm name="Регистрация" />
      </Section>
    </>
  );
});

// Без дефолтного эспорта будут громоздкие импорты для lazy
// eslint-disable-next-line import/no-default-export
export default RegistrationPage;
