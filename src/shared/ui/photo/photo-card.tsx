import { memo, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Photo } from '../../api/unsplash-api';
import { LikeButton } from '../like-button/like-button';
import SmallPreloader from '../assets/small_preloader.svg?react';
import { useFavorites } from '../../../features/favorites/lib/use-favorites';
import { AuthContext } from '../../../app/contexts/auth-context';
import { paths } from '../../model/paths';

import s from './photo-card.module.css';

type Props = {
  photoInfo: Photo;
};

export const PhotoCard = memo((props: Props) => {
  const { isAuth } = useContext(AuthContext);

  const { isFavorite, isLoading, handleFavoriteButtonClick } = useFavorites(
    props.photoInfo.id
  );

  return (
    <figure className={s.figure}>
      <img
        className={s.img}
        src={props.photoInfo.url}
        alt={props.photoInfo.alt_description}
      />
      <figcaption className={s.figcaption}>
        <Link
          to={`${paths.homePage}photos/${props.photoInfo.id}`}
          className={s.infoButton}
        >
          Больше информации
        </Link>
        {isAuth &&
          (isLoading ? (
            <SmallPreloader width={50} />
          ) : (
            <LikeButton
              isFavorite={isFavorite}
              handleFavoriteButtonClick={handleFavoriteButtonClick}
            />
          ))}
      </figcaption>
    </figure>
  );
});
