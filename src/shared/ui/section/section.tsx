import clsx from 'clsx';
import { memo } from 'react';
import { useTheme } from '../../../features/theme/lib/use-theme';

import s from './section.module.css';

type Props = {
  type: 'main' | 'top';
  children?: JSX.Element;
};

export const Section = memo((props: Props) => {
  const { theme } = useTheme();
  return (
    <section
      className={clsx({
        [s.mainSection]: props.type === 'main',
        [s.topSection]: props.type === 'top',
        [s.topSectionDark]: props.type === 'top' && theme === 'dark',
        [s.mainSectionDark]: props.type === 'main' && theme === 'dark'
      })}
    >
      {props.children}
    </section>
  );
});
