import { memo } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../Header/ui/Header';
import { Footer } from '../Footer/Footer';
import s from './BaseLayout.module.css';

const BaseLayout = memo(() => {
  return (
    <>
      <Header />
      <main className={s.main}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
});

// Без дефолтного эспорта будут громоздкие импорты для lazy
// eslint-disable-next-line import/no-default-export
export default BaseLayout;
