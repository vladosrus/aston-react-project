import clsx from 'clsx';
import { memo } from 'react';
import NotFoundImage from '../../shared/ui/assets/not-found-page_img.svg?react';
import { Logo } from '../../widgets/header/ui/logo/logo';
import { useTheme } from '../../features/theme/lib/use-theme';

import s from './not-found-page.module.css';

const NotFoundPage = memo(() => {
  const { theme } = useTheme();

  return (
    <section className={clsx(s.section, { [s.sectionDark]: theme === 'dark' })}>
      <Logo />
      <NotFoundImage />
    </section>
  );
});

// Без дефолтного экспорта будут громоздкие импорты для lazy
// eslint-disable-next-line import/no-default-export
export default NotFoundPage;
