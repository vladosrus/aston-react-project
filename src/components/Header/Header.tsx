import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import clsx from 'clsx';
import { paths } from '../../utils/paths';
import s from './Header.module.css';

export function Header() {
  // Временное решение для переключения темы
  const [theme, setTheme] = useState('light');

  return (
    <header className={s.header}>
      <div className={s.container}>
        <Link to={paths.homePage} className={s.logoLink}>
          <div className={s.logoImg} />
          <h1 className={s.logoText}>Фото by Unsplash</h1>
        </Link>
        <div className={s.navContainer}>
          <NavLink
            to={paths.loginPage}
            className={({ isActive }) =>
              !isActive ? s.navLink : s.navLinkActive
            }
          >
            Login
          </NavLink>
          <NavLink
            to={paths.registrationPage}
            className={({ isActive }) =>
              !isActive ? s.navLink : s.navLinkActive
            }
          >
            Registration
          </NavLink>
        </div>
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
}
