import clsx from 'clsx';
import { FC, ReactNode, memo, useContext } from 'react';
import { Link } from 'react-router-dom';
import { LikeButton } from '../../shared/ui/like-button/like-button';
import { FullPhotoInfo } from '../../shared/api/unsplash-api';
import { useFavorites } from '../../features/favorites/lib/use-favorites';
import { AuthContext } from '../../app/contexts/auth-context';
import SmallPreloader from '../../shared/ui/assets/small_preloader.svg?react';
import { useTheme } from '../../features/theme/lib/use-theme';

import s from './photo-details.module.css';

type Props = {
  photoInfo: FullPhotoInfo | undefined;
};

export const PhotoDetails: FC<Props> = memo((props) => {
  const { isFavorite, isLoading, handleFavoriteButtonClick } = useFavorites(
    props.photoInfo?.id
  );
  const { isAuth } = useContext(AuthContext);
  const { theme } = useTheme();

  const photoDescription: PhotoDescription[] = [
    { category: 'Создатель:', description: props.photoInfo?.creator.name },
    { category: 'Страна:', description: props.photoInfo?.creator.country },
    {
      category: 'Описание:',
      description:
        (props.photoInfo?.description || '') >
        (props.photoInfo?.alt_description || '')
          ? props.photoInfo?.description
          : props.photoInfo?.alt_description
    },
    {
      category: 'Профиль создателя в Unsplash:',
      description: (
        <Link
          to={props.photoInfo?.creator.profileLink || '#'}
          className={clsx(s.link, {
            [s.linkDark]: theme === 'dark'
          })}
          target="_blank"
          rel="noopener noreferrer"
        >{`@${props.photoInfo?.creator.profileName}`}</Link>
      )
    }
  ];

  return (
    <article className={s.article}>
      <img
        className={s.img}
        src={props.photoInfo?.url}
        alt={
          props.photoInfo?.description
            ? props.photoInfo?.description
            : props.photoInfo?.alt_description
        }
      />
      <ul className={s.descriptionList}>
        {photoDescription.map((item) => {
          return (
            <li key={item.category} className={s.descriptionListItem}>
              <span className={s.category}>{item.category}</span>
              <p
                className={clsx(s.description, {
                  [s.descriptionDark]: theme === 'dark'
                })}
              >
                {item.description}
              </p>
            </li>
          );
        })}
        <li className={s.descriptionListItem}>
          {isAuth &&
            (isLoading ? (
              <SmallPreloader width={32} height={32} />
            ) : (
              <LikeButton
                isFavorite={isFavorite}
                handleFavoriteButtonClick={handleFavoriteButtonClick}
              />
            ))}
        </li>
      </ul>
    </article>
  );
});

type PhotoDescription = {
  category: string;
  description: string | ReactNode;
};
