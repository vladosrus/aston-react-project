import { memo } from 'react';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import { useAuth } from '../../../../shared/lib/use-auth';
import { Preloader } from '../../../../shared/ui/preloader/preloader';
import s from './navigation.module.css';
import { navLinksForGuest, navLinksForUser } from './model/nav-links-lists';
import type { NavLinkInfo } from './model/nav-links-lists';

export const Navigation = memo(() => {
  const { isAuth, isAuthChecking, handleLogout } = useAuth();

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

  return isAuthChecking ? (
    <Preloader />
  ) : (
    <ul className={s.list}>
      {isAuth
        ? renderLinkList(navLinksForUser)
        : renderLinkList(navLinksForGuest)}
      {isAuth && (
        <button
          type="button"
          className={s.logoutLink}
          onClick={() => handleLogout()}
        >
          Выход
        </button>
      )}
    </ul>
  );
});
