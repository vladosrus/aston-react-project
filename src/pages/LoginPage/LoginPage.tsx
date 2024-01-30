import { memo } from 'react';
import './LoginPage.module.css';
import { Section } from '../../shared/ui/Section/Section';

const LoginPage = memo(() => {
  return (
    <>
      <Section type="top" />
      <Section type="main" />
    </>
  );
});

// Без дефолтного эспорта будут громоздкие импорты для lazy
// eslint-disable-next-line import/no-default-export
export default LoginPage;
