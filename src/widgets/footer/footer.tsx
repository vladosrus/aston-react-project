import clsx from 'clsx';
import { useTheme } from '../../features/theme/lib/use-theme';

import s from './footer.module.css';

export const Footer = () => {
  const { theme } = useTheme();

  return (
    <footer className={clsx(s.footer, { [s.footerDark]: theme === 'dark' })}>
      <div className={s.container}>
        <p className={s.copyright}>© 2024. Влад Чиков</p>
      </div>
    </footer>
  );
};
