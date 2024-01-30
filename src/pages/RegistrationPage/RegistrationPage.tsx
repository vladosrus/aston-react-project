import { memo } from 'react';
import './RegistrationPage.module.css';

const RegistrationPage = memo(() => {
  return <p>RegistrationPage</p>;
});

// Без дефолтного эспорта будут громоздкие импорты для lazy
// eslint-disable-next-line import/no-default-export
export default RegistrationPage;
