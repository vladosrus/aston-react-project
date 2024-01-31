import { memo } from 'react';
import { Link } from 'react-router-dom';
import { paths } from '../../../../shared/model/paths';
import s from './Logo.module.css';

export const Logo = memo(() => {
  return (
    <Link to={paths.homePage} className={s.link}>
      <div className={s.img} />
      <h1 className={s.text}>Фото by Unsplash</h1>
    </Link>
  );
});
