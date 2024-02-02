import { memo } from 'react';
import { Link } from 'react-router-dom';
import { paths } from '../../shared/model/paths';
import SearchIcon from '../../shared/ui/assets/search_icon.svg?react';
import DeleteIcon from '../../shared/ui/assets/delete_icon.svg?react';
import s from './history-list.module.css';

export const HistoryList = memo(({ history }: { history: string[] }) => {
  return (
    <>
      <h2 className={s.title}>История поиска</h2>
      <ul className={s.list}>
        {history.map((query: string) => (
          <li className={s.listItem} key={query}>
            <Link to={`${paths.searchPage}?query=${query}`} className={s.link}>
              <SearchIcon className={s.icon} />
              <p className={s.text}>{query}</p>
            </Link>
            <button type="button" className={s.button}>
              <DeleteIcon fill="red" />
            </button>
          </li>
        ))}
      </ul>
      <button type="button" className={s.deleteButton}>
        Очистить историю
      </button>
    </>
  );
});
