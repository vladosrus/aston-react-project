import { memo } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../header/ui/header';
import { Footer } from '../footer/footer';
import s from './base-layout.module.css';

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

// Без дефолтного экспорта будут громоздкие импорты для lazy
// eslint-disable-next-line import/no-default-export
export default BaseLayout;
