import { memo } from 'react';

const FavoritesPage = memo(() => {
  return <p>FavoritesPage</p>;
});

// Без дефолтного эспорта будут громоздкие импорты для lazy
// eslint-disable-next-line import/no-default-export
export default FavoritesPage;
