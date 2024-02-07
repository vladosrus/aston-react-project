import clsx from 'clsx';
import { memo } from 'react';
import { Link } from 'react-router-dom';
import { paths } from '../../../../shared/model/paths';
import { useTheme } from '../../../../features/theme/lib/use-theme';

import s from './logo.module.css';

export const Logo = memo(() => {
  const { theme } = useTheme();

  return (
    <Link to={paths.homePage} className={s.link}>
      <div className={clsx(s.img, { [s.imgDark]: theme === 'dark' })} />
      <h1 className={clsx(s.text, { [s.textDark]: theme === 'dark' })}>
        Фото by Unsplash
      </h1>
    </Link>
  );
});
