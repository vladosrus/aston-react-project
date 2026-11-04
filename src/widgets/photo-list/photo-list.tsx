import clsx from 'clsx';
import { memo } from 'react';
import { SerializedError } from '@reduxjs/toolkit';
import { FavoriteCard } from '../../features/favorites/ui/favorite-card/favorite-card';
import { useTheme } from '../../features/theme/lib/use-theme';
import { PhotoCard } from '../../shared/ui/photo/photo-card';

import s from './photo-list.module.css';
import type { Photo } from '../../shared/api/unsplash-api';
import type { FetchBaseQueryError } from '@reduxjs/toolkit/query';

type Props = {
  photoList?: Photo[] | undefined;
  favoritesList?: string[];
  error?: FetchBaseQueryError | SerializedError | undefined;
  onLoadMore?: () => void;
  hasMore?: boolean;
  isLoadingMore?: boolean;
};

export const PhotoList = memo(
  ({
    error,
    photoList,
    favoritesList,
    onLoadMore,
    hasMore,
    isLoadingMore
  }: Props) => {
    const { theme } = useTheme();

    //Необходимо для вывода информации об произошедшей ошибке
    if (error) {
      if ('status' in error) {
        const errMsg =
          'error' in error ? error.error : JSON.stringify(error.data);
        throw new Error(errMsg);
      } else {
        const errMsg = error.message;
        throw new Error(errMsg);
      }
    }
    return (
      <>
        <ul className={s.list}>
          {photoList
            ? photoList.map((photoInfo) => (
                <li
                  key={photoInfo.id}
                  className={clsx(s.listItem, {
                    [s.listItemLarge]: photoInfo.width < photoInfo.height
                  })}
                >
                  <PhotoCard photoInfo={photoInfo} />
                </li>
              ))
            : favoritesList?.map((photoInfo) => (
                <FavoriteCard key={photoInfo} id={photoInfo} />
              ))}
        </ul>

        {onLoadMore && hasMore && (
          <button
            type="button"
            className={clsx(s.loadMoreButton, {
              [s.loadMoreButtonDark]: theme === 'dark'
            })}
            onClick={onLoadMore}
            disabled={isLoadingMore}
          >
            {isLoadingMore ? 'Загрузка...' : 'Больше фотографий'}
          </button>
        )}
      </>
    );
  }
);
