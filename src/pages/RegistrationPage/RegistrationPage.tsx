import { memo } from 'react';
import './RegistrationPage.module.css';
import { Section } from '../../shared/ui/Section/Section';

const RegistrationPage = memo(() => {
  return (
    <>
      <Section type="top" />
      <Section type="main" />
    </>
  );
});

// Без дефолтного эспорта будут громоздкие импорты для lazy
// eslint-disable-next-line import/no-default-export
export default RegistrationPage;
