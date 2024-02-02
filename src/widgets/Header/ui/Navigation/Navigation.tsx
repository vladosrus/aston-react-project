import { memo, useState } from 'react';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import s from './navigation.module.css';
import { navLinksForGuest, navLinksForUser } from './model/nav-links-lists';
import type { NavLinkInfo } from './model/nav-links-lists';

export const Navigation = memo(() => {
  // Временное решение для проверки авторизации
  const [isAuth] = useState(true);

  function renderLinkList(linksList: NavLinkInfo[]) {
    return linksList.map((navLink) => {
      return (
        <li className={s.listItem} key={navLink.text}>
          <NavLink
            to={navLink.to}
            className={({ isActive }) =>
              !isActive ? s.link : clsx(s.link, s.linkActive)
            }
            title={navLink.title}
          >
            {navLink.text}
          </NavLink>
        </li>
      );
    });
  }

  return (
    <ul className={s.list}>
      {isAuth
        ? renderLinkList(navLinksForUser)
        : renderLinkList(navLinksForGuest)}
      {isAuth && (
        <button type="button" className={s.logoutLink}>
          Выход
        </button>
      )}
    </ul>
  );
});
