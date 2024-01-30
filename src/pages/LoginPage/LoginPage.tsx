import { memo } from 'react';
import './LoginPage.module.css';

const LoginPage = memo(() => {
  return (
    <>
      <p>sdfs</p>
      <span>dfsdf</span>
    </>
  );
});

// Без дефолтного эспорта будут громоздкие импорты для lazy
// eslint-disable-next-line import/no-default-export
export default LoginPage;
