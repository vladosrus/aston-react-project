import { memo } from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { PhotoInfo } from '../../pages/home-page/home-page';
import { LikeButton } from '../../shared/ui/like-button/like-button';
import s from './photo-list.module.css';

type Props = {
  list: PhotoInfo[];
};

export const PhotoList = memo((props: Props) => {
  return (
    <ul className={s.list}>
      {props.list.map((photoInfo: PhotoInfo) => (
        <li
          key={photoInfo.id}
          className={clsx(s.listItem, {
            [s.listItemLarge]: photoInfo.width < photoInfo.height
          })}
        >
          <figure className={s.figure}>
            <img
              className={s.img}
              src={photoInfo.urls.raw}
              alt={photoInfo.alt_description}
            />
            <figcaption className={s.figcaption}>
              <Link
                to="/aston-react-project/photos/:id"
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