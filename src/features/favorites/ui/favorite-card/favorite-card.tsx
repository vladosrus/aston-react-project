import { FC, memo } from 'react';
import clsx from 'clsx';
import { useGetPhotoByIdQuery } from '../../../../shared/api';
import { PagePreloader } from '../../../../shared/ui/page-preloader/page-preloader';
import s from '../../../../widgets/photo-list/photo-list.module.css';
import { PhotoCard } from '../../../../shared/ui/photo/photo-card';

type Props = {
  id: string;
};

export const FavoriteCard: FC<Props> = memo((props) => {
  const { data: photoInfo, isLoading } = useGetPhotoByIdQuery(props.id);

  return isLoading ? (
    <PagePreloader />
  ) : (
    photoInfo && (
      <li
        key={photoInfo.id}
        className={clsx(s.listItem, {
          [s.listItemLarge]: photoInfo.width < photoInfo.height
        })}
      >
        <PhotoCard photoInfo={photoInfo} />
      </li>
    )
  );
});
