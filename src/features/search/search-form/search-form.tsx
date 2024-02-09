import clsx from 'clsx';
import { FC, memo, useCallback, useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useTypedDispatch } from '../../../shared/lib/use-typed-dispatch';
import { useDebounce } from '../../../shared/lib/use-debounce';
import { paths } from '../../../shared/model/paths';
import { addedToHistory } from '../../history/model/added-to-history';
import { AuthContext } from '../../../app/contexts/auth-context';
import { SuggestionsList } from '../suggestions-list/suggestions-list';

import s from './search-form.module.css';

type Props = {
  prevQuery?: string;
};

export const SearchForm: FC<Props> = memo((props) => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm<Input>({ mode: 'onChange' });
  const { isAuth } = useContext(AuthContext);
  const navigate = useNavigate();
  const dispatch = useTypedDispatch();
  const debouncedQuery = useDebounce(watch('query')?.trim(), 500);
  const [isSuggestionsListShow, setIsSuggestionsListShow] =
    useState<boolean>(false);

  const onFormSubmit = useCallback(
    (input: Input) => {
      if (isAuth) {
        dispatch(addedToHistory(input.query));
      }
      navigate(`${paths.homePage}${paths.searchPage}?query=${input.query}`);
    },
    [dispatch, isAuth, navigate]
  );

  const handleBlur = useCallback(() => {
    setTimeout(() => {
      setIsSuggestionsListShow(false);
    }, 300);
  }, []);

  const handleFocus = useCallback(() => {
    setIsSuggestionsListShow(true);
  }, []);

  const { onChange, name, ref } = register('query', {
    required: {
      value: true,
      message: 'Поле обязательно должно быть заполнено'
    },
    minLength: {
      value: 2,
      message: 'Минимальное количество символов: 2'
    }
  });

  return (
    <form className={s.form} onSubmit={handleSubmit(onFormSubmit)}>
      <label htmlFor="search" className={s.inputContainer}>
        <input
          id="search"
          name={name}
          type="text"
          ref={ref}
          className={s.input}
          defaultValue={props.prevQuery}
          onBlur={handleBlur}
          onFocus={handleFocus}
          onChange={onChange}
          placeholder="Для поиска фото введите ключевое слово(а)"
        />
        <span
          className={clsx(s.inputErrorText, {
            [s.inputErrorTextVisible]: !isValid
          })}
        >
          {errors.query?.message}
        </span>
        {debouncedQuery &&
          isSuggestionsListShow &&
          debouncedQuery.length >= 2 && (
            <SuggestionsList query={debouncedQuery} />
          )}
      </label>

      <button type="submit" className={s.button} disabled={!isValid}>
        Искать
      </button>
    </form>
  );
});

type Input = {
  query: string;
};
