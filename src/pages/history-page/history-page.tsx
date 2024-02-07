import clsx from 'clsx';
import { memo } from 'react';
import { Section } from '../../shared/ui/section/section';
import { HistoryList } from '../../widgets/history-list/history-list';
import { useTheme } from '../../features/theme/lib/use-theme';

import s from './history-page.module.css';

const historyList: string[] = [
  'котики',
  'бабушки',
  'ggggdffsdfdsfsdfsdfsdfsdfsdfsfsdfsdf',
  'gh',
  'dfdf',
  'sfsdfd'
];

const HistoryPage = memo(() => {
  const { theme } = useTheme();

  return (
    <>
      <Section type="top" />
      <Section type="main">
        {historyList.length ? (
          <HistoryList history={historyList} />
        ) : (
          <h2 className={clsx(s.text, { [s.textDark]: theme === 'dark' })}>
            {'В Вашей истории поиска нет ни одного запроса :('}
          </h2>
        )}
      </Section>
    </>
  );
});

// Без дефолтного экспорта будут громоздкие импорты для lazy
// eslint-disable-next-line import/no-default-export
export default HistoryPage;
