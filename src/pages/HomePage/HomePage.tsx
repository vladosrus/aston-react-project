import { memo } from 'react';
import { SearchSection } from '../../shared/ui/SearchSection/SearchSection';
import { PhotoSection } from '../../shared/ui/PhotoSection/PhotoSection';

const HomePage = memo(() => {
  return (
    <>
      <SearchSection />
      <PhotoSection />
    </>
  );
});

// Без дефолтного эспорта будут громоздкие импорты для lazy
// eslint-disable-next-line import/no-default-export
export default HomePage;
