import { memo } from 'react';

const SearchPage = memo(() => {
  return <p>SearchPage</p>;
});

// Без дефолтного эспорта будут громоздкие импорты для lazy
// eslint-disable-next-line import/no-default-export
export default SearchPage;
