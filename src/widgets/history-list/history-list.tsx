import clsx from 'clsx';
import { memo, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { paths } from '../../shared/model/paths';
import { useTheme } from '../../features/theme/lib/use-theme';
import { useTypedDispatch } from '../../shared/lib/use-typed-dispatch';
import { deletedOneQueryFromHistory } from '../../features/history/model/deleted-one-query-from-history';
import { deletedAllQueriesFromHistory } from '../../features/history/model/deleted-all-queries-from-history';
import SearchIcon from '../../shared/ui/assets/search_icon.svg?react';
import SearchIconDark from '../../shared/ui/assets/search_icon_dark.svg?react';
import DeleteIcon from '../../shared/ui/assets/delete_icon.svg?react';

import s from './history-list.module.css';

export const HistoryList = memo(({ history }: { history: string[] }) => {
  const { theme } = useTheme();
  const dispatch = useTypedDispatch();

  const handleDeleteOneQuery = useCallback(
    (query: string) => {
      dispatch(deletedOneQueryFromHistory(query));
    },
    [dispatch]
  );
  const handleDeleteAllQueries = useCallback(() => {
    dispatch(deletedAllQueriesFromHistory());
  }, [dispatch]);

  return (
    <>
      <h2 className={clsx(s.title, { [s.titleDark]: theme === 'dark' })}>
        История поиска
      </h2>
      <ul className={s.list}>
        {history.map((query: string) => (
          <li
            className={clsx(s.listItem, { [s.listItemDark]: theme === 'dark' })}
            key={query}
          >
            <Link
              to={`${paths.homePage}${paths.searchPage}?query=${query}`}
              replace
              className={s.link}
            >
              {theme === 'dark' ? (
                <SearchIconDark className={s.icon} />
              ) : (
                <SearchIcon className={s.icon} />
              )}

              <p className={clsx(s.text, { [s.textDark]: theme === 'dark' })}>
                {query}
              </p>
            </Link>
            <button
              type="button"
              className={s.button}
              onClick={() => handleDeleteOneQuery(query)}
            >
              <DeleteIcon className={s.icon} />
            </button>
          </li>
        ))}
      </ul>
      <button
        type="button"
        className={clsx(s.deleteButton, {
          [s.deleteButtonDark]: theme === 'dark'
        })}
        onClick={handleDeleteAllQueries}
      >
        Очистить историю
      </button>
    </>
  );
});
