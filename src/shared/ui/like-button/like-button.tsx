import clsx from 'clsx';
import { useState } from 'react';

import s from './like-button.module.css';

export function LikeButton() {
  //Временное решение
  const [isLiked, setIsLiked] = useState(false);

  return (
    <button
      type="button"
      className={clsx(s.likeButton, {
        [s.likeButtonActive]: isLiked
      })}
      onClick={() => setIsLiked(!isLiked)}
    />
  );
}
