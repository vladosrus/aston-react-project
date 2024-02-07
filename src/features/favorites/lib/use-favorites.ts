import { useCallback } from 'react';
import { useTypedSelector } from '../../../shared/lib/use-typed-selector';
import { favoritesSelector } from '../../../entities/user/model/slice';
import { useTypedDispatch } from '../../../shared/lib/use-typed-dispatch';
import { deletedFromFavorites } from '../model/deleted-from-favorites';
import { addedToFavorites } from '../model/added-to-favorites';

export const useFavorites = (id: string | undefined) => {
  const dispatch = useTypedDispatch();
  const { favorites, isDeletedLoading, isAddedLoading } =
    useTypedSelector(favoritesSelector);
  let isFavorite: boolean = false;

  if (id) {
    isFavorite = favorites.includes(id);
  }
  const isLoading = isFavorite ? isDeletedLoading : isAddedLoading;

  const handleFavoriteButtonClick = useCallback(() => {
    if (id) {
      if (isFavorite) {
        dispatch(deletedFromFavorites(id));
      } else {
        dispatch(addedToFavorites(id));
      }
    }
  }, [isFavorite, dispatch, id]);
  return {
    isFavorite,
    isLoading,
    handleFavoriteButtonClick
  };
};
