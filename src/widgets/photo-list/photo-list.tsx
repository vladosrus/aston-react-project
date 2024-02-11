import clsx from 'clsx';
import { memo } from 'react';
import { SerializedError } from '@reduxjs/toolkit';
import { PhotoCard } from '../../shared/ui/photo/photo-card';
import { FavoriteCard } from '../../features/favorites/ui/favorite-card/favorite-card';

import s from './photo-list.module.css';
import type { Photo } from '../../shared/api/unsplash-api';
import type { FetchBaseQueryError } from '@reduxjs/toolkit/query';

type Props = {
  photoList?: Photo[] | undefined;
  favoritesList?: string[];
  error?: FetchBaseQueryError | SerializedError | undefined;
};

export const PhotoList = memo((props: Props) => {
  //Необходимо для вывода информации об произошедшей ошибке
  if (props.error) {
    if ('status' in props.error) {
      const errMsg =
        'error' in props.error
          ? props.error.error
          : JSON.stringify(props.error.data);
      throw new Error(errMsg);
    } else {
      const errMsg = props.error.message;
      throw new Error(errMsg);
    }
  }
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
