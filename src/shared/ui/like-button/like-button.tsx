import clsx from 'clsx';
import { memo } from 'react';

import s from './like-button.module.css';

type Props = {
  isFavorite: boolean;
  handleFavoriteButtonClick: () => void;
};

export const LikeButton = memo((props: Props) => {
  return (
    <button
      type="button"
      className={clsx(s.likeButton, {
        [s.likeButtonActive]: props.isFavorite
      })}
      onClick={() => props.handleFavoriteButtonClick()}
    />
  );
});
