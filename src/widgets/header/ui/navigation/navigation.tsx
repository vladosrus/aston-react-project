import { memo, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import { useAuth } from '../../../../features/auth/lib/use-auth';
import { PagePreloader } from '../../../../shared/ui/page-preloader/page-preloader';
import { AuthContext } from '../../../../app/contexts/auth-context';
import s from './navigation.module.css';
import { navLinksForGuest, navLinksForUser } from './model/nav-links-lists';
import type { NavLinkInfo } from './model/nav-links-lists';

export const Navigation = memo(() => {
  const { isAuth, isAuthChecking } = useContext(AuthContext);
  const { handleLogout } = useAuth();

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
    <PagePreloader />
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
