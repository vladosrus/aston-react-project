import clsx from 'clsx';
import { memo } from 'react';
import { useTheme } from '../../../features/theme/lib/use-theme';
import { Logo } from './logo/logo';
import { Navigation } from './navigation/navigation';

import s from './header.module.css';

export const Header = memo(() => {
  const { theme, handleThemeButtonClick } = useTheme();

  return (
    <header className={clsx(s.header, { [s.headerDark]: theme === 'dark' })}>
      <div className={s.container}>
        <Logo />
        <Navigation />
        <div className={s.themeButtonsContainer}>
          <button
            type="button"
            className={clsx(s.themeButton, s.lightThemeButton, {
              [s.lightThemeButtonActive]: theme === 'dark'
            })}
            onClick={() => handleThemeButtonClick('dark')}
            title="Изменить оформление страницы на светлое"
          />
          <button
            type="button"
            className={clsx(s.themeButton, s.darkThemeButton, {
              [s.darkThemeButtonActive]: theme === 'dark'
            })}
            onClick={() => handleThemeButtonClick('light')}
            title="Изменить оформление страницы на тёмное"
          />
        </div>
      </div>
    </header>
  );
});
