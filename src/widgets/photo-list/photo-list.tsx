import { FC, memo } from 'react';
import clsx from 'clsx';
import { Photo } from '../../shared/api/unsplash-api';
import { PhotoCard } from '../../shared/ui/photo/photo-card';
import { FavoriteCard } from '../../features/favorites/ui/favorite-card/favorite-card';
import s from './photo-list.module.css';

type Props = {
  photoList?: Photo[] | undefined;
  favoritesList?: string[];
};

export const PhotoList: FC<Props> = memo((props) => {
  return (
    <ul className={s.list}>
      {props.photoList
        ? props.photoList.map((photoInfo) => (
            <li
              key={photoInfo.id}
              className={clsx(s.listItem, {
                [s.listItemLarge]: photoInfo.width < photoInfo.height
              })}
            >
              <PhotoCard photoInfo={photoInfo} />
            </li>
          ))
        : props.favoritesList?.map((photoInfo) => (
            <FavoriteCard key={photoInfo} id={photoInfo} />
          ))}
    </ul>
  );
});
