import { FC, memo } from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { Photo } from '../../shared/api/unsplash-api';
import { LikeButton } from '../../shared/ui/like-button/like-button';
import s from './photo-list.module.css';

type Props = {
  list: Photo[] | undefined;
};

export const PhotoList: FC<Props> = memo(({ list }) => {
  return (
    <ul className={s.list}>
      {list?.map((photoInfo: Photo) => (
        <li
          key={photoInfo.id}
          className={clsx(s.listItem, {
            [s.listItemLarge]: photoInfo.width < photoInfo.height
          })}
        >
          <figure className={s.figure}>
            <img
              className={s.img}
              src={photoInfo.url}
              alt={photoInfo.alt_description}
            />
            <figcaption className={s.figcaption}>
              <Link
                to={`/aston-react-project/photos/${photoInfo.id}`}
                className={s.infoButton}
              >
                Больше информации
              </Link>
              <LikeButton />
            </figcaption>
          </figure>
        </li>
      ))}
    </ul>
  );
});
