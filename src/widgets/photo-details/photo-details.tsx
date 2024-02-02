import { ReactNode, memo } from 'react';
import { PhotoInfo } from '../../pages/details-page/details-page';
import { LikeButton } from '../../shared/ui/like-button/like-button';

import s from './photo-details.module.css';

export const PhotoDetails = memo(({ photoInfo }: { photoInfo: PhotoInfo }) => {
  const photoDescription: {
    category: string;
    description: string | ReactNode;
  }[] = [
    { category: 'Создатель:', description: photoInfo.user.name },
    { category: 'Страна:', description: photoInfo.user.location },
    {
      category: 'Описание:',
      description:
        photoInfo.description?.length > photoInfo.alt_description?.length
          ? photoInfo.description
          : photoInfo.alt_description
    },
    {
      category: 'Профиль создателя в Unsplash:',
      description: (
        <a
          href={photoInfo.user.links.html}
          target="_blank"
          rel="noopener noreferrer"
          className={s.link}
        >{`@${photoInfo.user.username}`}</a>
      )
    }
  ];

  return (
    <article className={s.article}>
      <img
        className={s.img}
        src={photoInfo.urls.raw}
        alt={
          photoInfo.description
            ? photoInfo.description
            : photoInfo.alt_description
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
