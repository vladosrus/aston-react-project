import clsx from 'clsx';
import { FC, memo } from 'react';
import { Link } from 'react-router-dom';
import { paths } from '../../../shared/model/paths';

import s from './suggestion.module.css';
import type { Photo } from '../../../shared/api/unsplash-api';

type Props = {
  suggestion: Photo;
};

export const Suggestion: FC<Props> = memo((props) => {
  return (
    <li
      className={clsx(s.suggestion, {
        [s.imgVertical]: props.suggestion.width < props.suggestion.height
      })}
    >
      <Link
        to={`${paths.homePage}photos/${props.suggestion.id}`}
        className={s.link}
      >
        <img
          className={s.img}
          src={props.suggestion.url}
          alt={
            props.suggestion?.description
              ? props.suggestion?.description
              : props.suggestion?.alt_description
          }
        />
      </Link>
    </li>
  );
});
