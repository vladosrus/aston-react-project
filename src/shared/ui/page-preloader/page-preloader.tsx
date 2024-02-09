import clsx from 'clsx';
import { useTheme } from '../../../features/theme/lib/use-theme';

import s from './page-preloader.module.css';

export const PagePreloader = () => {
  const { theme } = useTheme();

  return (
    <div
      className={clsx(s.preloader, { [s.preloaderDark]: theme === 'dark' })}
    />
  );
};
