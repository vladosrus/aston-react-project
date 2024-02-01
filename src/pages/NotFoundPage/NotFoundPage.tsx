import { memo } from 'react';
import NotFoundImage from '../../shared/ui/assets/notFoundPage_img.svg?react';
import { Logo } from '../../widgets/Header/ui/Logo/Logo';

import s from './NotFoundPage.module.css';

const NotFoundPage = memo(() => {
  return (
    <section className={s.section}>
      <Logo />
      <NotFoundImage className={s.img} />
    </section>
  );
});

// Без дефолтного эспорта будут громоздкие импорты для lazy
// eslint-disable-next-line import/no-default-export
export default NotFoundPage;
