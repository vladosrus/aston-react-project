import clsx from 'clsx';
import { memo } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Fallback } from '../../shared/ui/fallback/fallback';
import { Section } from '../../shared/ui/section/section';
import { PhotoList } from '../../widgets/photo-list/photo-list';
import { useTypedSelector } from '../../shared/lib/use-typed-selector';
import { favoritesSelector } from '../../entities/user';
import { PagePreloader } from '../../shared/ui/page-preloader/page-preloader';
import { useTheme } from '../../features/theme/lib/use-theme';

import s from './favorites-page.module.css';

const FavoritesPage = memo(() => {
  const { favorites, isFavoritesLoading } = useTypedSelector(favoritesSelector);
  const { theme } = useTheme();

  return isFavoritesLoading ? (
    <PagePreloader />
  ) : (
    <>
      <Section type="top" />
      <Section type="main">
        <ErrorBoundary FallbackComponent={Fallback}>
          {favorites.length ? (
            <PhotoList favoritesList={favorites} />
          ) : (
            <h2 className={clsx(s.text, { [s.textDark]: theme === 'dark' })}>
              {'У Ваc ещё нет избранных фотографий :('}
            </h2>
          )}
        </ErrorBoundary>
      </Section>
    </>
  );
});

// Без дефолтного экспорта будут громоздкие импорты для lazy
// eslint-disable-next-line import/no-default-export
export default FavoritesPage;
