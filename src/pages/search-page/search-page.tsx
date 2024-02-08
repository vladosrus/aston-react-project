import { memo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SearchForm } from '../../widgets/search-form/search-form';
import { Section } from '../../shared/ui/section/section';
import { PhotoList } from '../../widgets/photo-list/photo-list';
import { useGetPhotoByQueryQuery } from '../../shared/api';
import { PagePreloader } from '../../shared/ui/page-preloader/page-preloader';

const SearchPage = memo(() => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query');
  const { data: list, isLoading } = useGetPhotoByQueryQuery(query || '', {
    skip: query ? query.length <= 2 : true // если не передали запрос или запрос маленький, то не идём за данными
  });

  return (
    <>
      <Section type="top">
        <SearchForm prevQuery={query || ''} />
      </Section>
      <Section type="main">
        {isLoading ? (
          <PagePreloader />
        ) : list?.length ? (
          <PhotoList photoList={list} />
        ) : (
          <h2>{'По вашему запросу ничего не нашлось :('}</h2>
        )}
      </Section>
    </>
  );
});

// Без дефолтного экспорта будут громоздкие импорты для lazy
// eslint-disable-next-line import/no-default-export
export default SearchPage;
