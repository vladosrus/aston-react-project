import clsx from 'clsx';
import { memo, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../../../features/auth/lib/use-auth';
import { PagePreloader } from '../../../../shared/ui/page-preloader/page-preloader';
import { AuthContext } from '../../../../app/contexts/auth-context';
import { useTheme } from '../../../../features/theme/lib/use-theme';
import { navLinksForGuest, navLinksForUser } from './model/nav-links-lists';

import s from './navigation.module.css';
import type { NavLinkInfo } from './model/nav-links-lists';

export const Navigation = memo(() => {
  const { theme } = useTheme();
  const { isAuth, isAuthChecking } = useContext(AuthContext);
  const { handleLogout } = useAuth();

  function renderLinkList(linksList: NavLinkInfo[]) {
    return linksList.map((navLink) => {
      return (
        <li className={s.listItem} key={navLink.text}>
          <NavLink
            to={navLink.to}
            className={({ isActive }) =>
              clsx(
                s.link,
                { [s.linkDark]: theme === 'dark' },
                { [s.linkActive]: isActive && theme === 'light' },
                { [s.linkActiveDark]: isActive && theme === 'dark' }
              )
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
          className={clsx(s.logoutLink, {
            [s.logoutLinkDark]: theme === 'dark'
          })}
          onClick={() => handleLogout()}
        >
          Выход
        </button>
      )}
    </ul>
  );
});
