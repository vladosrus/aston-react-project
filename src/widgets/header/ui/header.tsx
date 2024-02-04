import { memo, useState } from 'react';
import clsx from 'clsx';
import s from './header.module.css';
import { Logo } from './logo/logo';
import { Navigation } from './navigation/navigation';

export const Header = memo(() => {
  // Временное решение для переключения темы
  const [theme, setTheme] = useState('light');

  return (
    <header className={s.header}>
      <div className={s.container}>
        <Logo />
        <Navigation />
        <div className={s.themeButtonsContainer}>
          <button
            type="button"
            className={clsx(s.lightThemeButton, {
              [s.lightThemeButtonActive]: theme === 'light'
            })}
            onClick={() => setTheme('light')}
            title="Изменить оформление страницы на светлое"
          />
          <button
            type="button"
            className={clsx(s.darkThemeButton, {
              [s.darkThemeButtonActive]: theme === 'dark'
            })}
            onClick={() => setTheme('dark')}
            title="Изменить оформление страницы на тёмное"
          />
        </div>
      </div>
    </header>
  );
});