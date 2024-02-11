import clsx from 'clsx';
import { memo } from 'react';
import { useGetPhotoByIdQuery } from '../../../../shared/api';
import { PagePreloader } from '../../../../shared/ui/page-preloader/page-preloader';
import { PhotoCard } from '../../../../shared/ui/photo/photo-card';

import s from '../../../../widgets/photo-list/photo-list.module.css';

type Props = {
  id: string;
};

export const FavoriteCard = memo((props: Props) => {
  const { data: photoInfo, isLoading, error } = useGetPhotoByIdQuery(props.id);

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
