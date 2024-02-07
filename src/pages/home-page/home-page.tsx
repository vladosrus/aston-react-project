import { memo } from 'react';
import { SearchForm } from '../../widgets/search-form/search-form';
import { Section } from '../../shared/ui/section/section';
import { PhotoList } from '../../widgets/photo-list/photo-list';
import { useGetInitialPhotosQuery } from '../../shared/api/unsplash-api';
import { PagePreloader } from '../../shared/ui/page-preloader/page-preloader';

const HomePage = memo(() => {
  const { data: list, isLoading } = useGetInitialPhotosQuery();

  return (
    <>
      <Section type="top">
        <SearchForm />
      </Section>
      <Section type="main">
        {isLoading ? <PagePreloader /> : <PhotoList photoList={list} />}
      </Section>
    </>
  );
});

// Без дефолтного экспорта будут громоздкие импорты для lazy
// eslint-disable-next-line import/no-default-export
export default HomePage;
