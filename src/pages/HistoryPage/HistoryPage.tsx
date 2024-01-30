import { memo } from 'react';

const HistoryPage = memo(() => {
  return <p>HistoryPage</p>;
});

// Без дефолтного эспорта будут громоздкие импорты для lazy
// eslint-disable-next-line import/no-default-export
export default HistoryPage;
