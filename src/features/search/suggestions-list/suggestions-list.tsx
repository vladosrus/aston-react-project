import { memo } from 'react';
import { Suggestion } from '../suggestion/suggestion';
import { useGetSuggestionsByQueryQuery } from '../../../shared/api/unsplash-api';

import s from './suggestions-list.module.css';
import type { Photo } from '../../../shared/api/unsplash-api';

type Props = {
  query: string;
};

export const SuggestionsList = memo((props: Props) => {
  const { data: suggestions, isLoading } = useGetSuggestionsByQueryQuery(
    props.query
  );

  return (
    <ul className={s.list}>
      {isLoading ? (
        <p className={s.text}>Загрузка...</p>
      ) : suggestions?.length ? (
        <div className={s.container}>
          {suggestions.map((suggestion: Photo) => {
            return <Suggestion key={suggestion.id} suggestion={suggestion} />;
          })}
        </div>
      ) : (
        <p className={s.text}>{'Ничего не найдено :('}</p>
      )}
    </ul>
  );
});
