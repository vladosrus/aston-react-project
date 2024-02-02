import { memo } from 'react';
import NotFoundImage from '../../shared/ui/assets/not-found-page_img.svg?react';
import { Logo } from '../../widgets/header/ui/logo/logo';

import s from './not-found-page.module.css';

const NotFoundPage = memo(() => {
  return (
    <section className={s.section}>
      <Logo />
      <NotFoundImage className={s.img} />
    </section>
  );
});

// Без дефолтного экспорта будут громоздкие импорты для lazy
// eslint-disable-next-line import/no-default-export
export default NotFoundPage;
