import { memo } from 'react';

const NotFoundPage = memo(() => {
  return <p>NotFoundPage</p>;
});

// Без дефолтного эспорта будут громоздкие импорты для lazy
// eslint-disable-next-line import/no-default-export
export default NotFoundPage;
