import clsx from 'clsx';
import { useTheme } from '../../../features/theme/lib/use-theme';

import s from './fallback.module.css';

export const Fallback = () => {
  const { theme } = useTheme();

  return (
    <div className={s.container}>
      <p className={s.title}>Ошибка!</p>
      <p className={clsx(s.text, { [s.textDark]: theme === 'dark' })}>
        На сайте произошла ошибка, мы уже начали разбираться с ней.
      </p>
      <p className={clsx(s.text, { [s.textDark]: theme === 'dark' })}>
        Приносим извинения за временные неудобства.
      </p>
    </div>
  );
};
