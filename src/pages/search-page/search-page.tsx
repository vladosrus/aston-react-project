import clsx from 'clsx';
import { memo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import { SearchForm } from '../../features/search/search-form/search-form';
import { Section } from '../../shared/ui/section/section';
import { PhotoList } from '../../widgets/photo-list/photo-list';
import { useGetPhotosByQueryQuery } from '../../shared/api';
import { PagePreloader } from '../../shared/ui/page-preloader/page-preloader';
import { Fallback } from '../../shared/ui/fallback/fallback';
import { useTheme } from '../../features/theme/lib/use-theme';

import s from './search-page.module.css';

const SearchPage = memo(() => {
  const { theme } = useTheme();
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query');
  const {
    data: list,
    isLoading,
    error
  } = useGetPhotosByQueryQuery(query || '', {
    skip: query ? query.length <= 2 : true // если не передали запрос или запрос маленький, то не идём за данными
  });

  return (
    <>
      <Section type="top">
        <SearchForm prevQuery={query || ''} />
      </Section>
      <Section type="main">
        <ErrorBoundary FallbackComponent={Fallback}>
          {isLoading ? (
            <PagePreloader />
          ) : list?.length ? (
            <PhotoList photoList={list} error={error} />
          ) : (
            <h2 className={clsx(s.text, { [s.textDark]: theme === 'dark' })}>
              {'По вашему запросу ничего не нашлось :('}
            </h2>
          )}
          {/* Если будет ошибка запроса данных, то отработает ErrorBoundary */}
          {!list && <PhotoList photoList={list} error={error} />}
        </ErrorBoundary>
      </Section>
    </>
  );
});

// Без дефолтного экспорта будут громоздкие импорты для lazy
// eslint-disable-next-line import/no-default-export
export default SearchPage;
