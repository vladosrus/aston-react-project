import { memo } from 'react';
import { Section } from '../../shared/ui/section/section';
import { PhotoList } from '../../widgets/photo-list/photo-list';
import { useTypedSelector } from '../../shared/lib/use-typed-selector';
import { favoritesSelector } from '../../entities/user/model/slice';
import { PagePreloader } from '../../shared/ui/page-preloader/page-preloader';

const FavoritesPage = memo(() => {
  const { favorites, isFavoritesLoading } = useTypedSelector(favoritesSelector);

  return isFavoritesLoading ? (
    <PagePreloader />
  ) : (
    <>
      <Section type="top" />
      <Section type="main">
        {favorites.length ? (
          <PhotoList favoritesList={favorites} />
        ) : (
          <h2>{'У Вашей ещё нет избранных фотографий :('}</h2>
        )}
      </Section>
    </>
  );
});

// Без дефолтного экспорта будут громоздкие импорты для lazy
// eslint-disable-next-line import/no-default-export
export default FavoritesPage;
