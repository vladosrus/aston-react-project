import { memo } from 'react';
import { Section } from '../../shared/ui/section/section';
import { HistoryList } from '../../widgets/history-list/history-list';

const historyList: string[] = [
  'котики',
  'бабушки',
  'ggggdffsdfdsfsdfsdfsdfsdfsdfsfsdfsdf',
  'gh',
  'dfdf',
  'sfsdfd'
];

const HistoryPage = memo(() => {
  return (
    <>
      <Section type="top" />
      <Section type="main">
        {historyList.length ? (
          <HistoryList history={historyList} />
        ) : (
          <h2>{'В Вашей истории поиска нет ни одного запроса :('}</h2>
        )}
      </Section>
    </>
  );
});

// Без дефолтного экспорта будут громоздкие импорты для lazy
// eslint-disable-next-line import/no-default-export
export default HistoryPage;