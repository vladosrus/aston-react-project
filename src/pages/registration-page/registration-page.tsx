import { memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Section } from '../../shared/ui/section/section';
import { AuthForm } from '../../widgets/auth-form/auth-form';
import { Inputs, registration } from '../../shared/api/firebase-api';
import { paths } from '../../shared/model/paths';

const RegistrationPage = memo(() => {
  const navigate = useNavigate();

  const handleRegistration = (date: Inputs) => {
    registration(date)
      .then(() => navigate(paths.homePage))
      .catch();
  };
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
