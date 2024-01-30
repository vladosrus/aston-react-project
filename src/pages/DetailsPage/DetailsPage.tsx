import { memo } from 'react';

const DetailsPage = memo(() => {
  return <p>DetailsPage</p>;
});

// Без дефолтного эспорта будут громоздкие импорты для lazy
// eslint-disable-next-line import/no-default-export
export default DetailsPage;
