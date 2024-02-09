import { memo } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { SearchForm } from '../../features/search/search-form/search-form';
import { Section } from '../../shared/ui/section/section';
import { PhotoList } from '../../widgets/photo-list/photo-list';
import { useGetInitialPhotosQuery } from '../../shared/api/unsplash-api';
import { PagePreloader } from '../../shared/ui/page-preloader/page-preloader';
import { Fallback } from '../../shared/ui/fallback/fallback';

const HomePage = memo(() => {
  const { data: list, isLoading, error } = useGetInitialPhotosQuery();

  return (
    <>
      <Section type="top">
        <SearchForm />
      </Section>
      <Section type="main">
        <ErrorBoundary FallbackComponent={Fallback}>
          {isLoading ? (
            <PagePreloader />
          ) : (
            <PhotoList photoList={list} error={error} />
          )}
        </ErrorBoundary>
      </Section>
    </>
  );
});

// Без дефолтного экспорта будут громоздкие импорты для lazy
// eslint-disable-next-line import/no-default-export
export default HomePage;
