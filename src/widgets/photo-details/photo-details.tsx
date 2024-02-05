import { FC, ReactNode, memo } from 'react';
import { Link } from 'react-router-dom';
import { LikeButton } from '../../shared/ui/like-button/like-button';
import { FullPhotoInfo } from '../../shared/api/unsplash-api';

import s from './photo-details.module.css';

type Props = {
  photoInfo: FullPhotoInfo | undefined;
};

export const PhotoDetails: FC<Props> = memo(({ photoInfo }) => {
  const photoDescription: PhotoDescription[] = [
    { category: 'Создатель:', description: photoInfo?.creator.name },
    { category: 'Страна:', description: photoInfo?.creator.country },
    {
      category: 'Описание:',
      description:
        (photoInfo?.description || '') > (photoInfo?.alt_description || '')
          ? photoInfo?.description
          : photoInfo?.alt_description
    },
    {
      category: 'Профиль создателя в Unsplash:',
      description: (
        <Link
          to={photoInfo?.creator.profileLink || '#'}
          className={s.link}
          target="_blank"
          rel="noopener noreferrer"
        >{`@${photoInfo?.creator.profileName}`}</Link>
      )
    }
  ];

  return (
    <article className={s.article}>
      <img
        className={s.img}
        src={photoInfo?.url}
        alt={
          photoInfo?.description
            ? photoInfo?.description
            : photoInfo?.alt_description
        }
      />
      <ul className={s.descriptionList}>
        {photoDescription.map((item) => {
          return (
            <li key={item.category} className={s.descriptionListItem}>
              <span className={s.category}>{item.category}</span>
              <p className={s.description}>{item.description}</p>
            </li>
          );
        })}
        <li className={s.descriptionListItem}>
          <LikeButton />
        </li>
      </ul>
    </article>
  );
});

type PhotoDescription = {
  category: string;
  description: string | ReactNode;
};
