import clsx from 'clsx';
import { FC, memo } from 'react';
import { Link } from 'react-router-dom';
import { RawUnsplashData } from '../../../shared/api/unsplash-api';
import { paths } from '../../../shared/model/paths';

import s from './suggestion.module.css';

type Props = {
  suggestion: RawUnsplashData;
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
          src={props.suggestion.urls.small}
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
