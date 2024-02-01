import { memo } from 'react';
import clsx from 'clsx';
import s from './Section.module.css';

type Props = { type: 'main' | 'top'; children?: JSX.Element };

export const Section = memo(({ type, children }: Props) => {
  return (
    <section
      className={clsx({
        [s.mainSection]: type === 'main',
        [s.topSection]: type === 'top'
      })}
    >
      {children}
    </section>
  );
});
