import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { photoList } from '../../utils/photoList';
import { LikeButton } from '../LikeButton/LikeButton';
import { PhotoInfo } from '../../utils/photoList';
import s from './PhotoSection.module.css';

export function PhotoSection() {
  return (
    <section className={s.section}>
      <ul className={s.photoList}>
        {photoList.map((photoInfo: PhotoInfo) => (
          <li
            key={photoInfo.id}
            className={clsx(s.photoListItem, {
              [s.photoListItemLarge]: photoInfo.width < photoInfo.height
            })}
          >
            <figure className={s.figure}>
              <img
                className={s.photoImg}
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
    </section>
  );
}
