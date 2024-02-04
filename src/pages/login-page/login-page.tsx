import { memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Section } from '../../shared/ui/section/section';
import { AuthForm } from '../../widgets/auth-form/auth-form';
import { Inputs, login } from '../../shared/api/firebase-api';
import { paths } from '../../shared/model/paths';

const LoginPage = memo(() => {
  const navigate = useNavigate();

  const handleLogin = (date: Inputs) => {
    login(date)
      .then(() => navigate(paths.homePage))
      .catch();
  };

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
