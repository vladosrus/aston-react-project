import { FC, memo } from 'react';
import { Suggestion } from '../suggestion/suggestion';
import {
  Photo,
  useGetPhotosByQueryQuery
} from '../../../shared/api/unsplash-api';

import s from './suggestions-list.module.css';

type Props = {
  query: string;
};

export const SuggestionsList: FC<Props> = memo((props) => {
  const { data: suggestions, isLoading } = useGetPhotosByQueryQuery(
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
