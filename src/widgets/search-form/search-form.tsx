import clsx from 'clsx';
import { FC, memo, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { paths } from '../../shared/model/paths';
import { useTypedDispatch } from '../../shared/lib/use-typed-dispatch';
import { addedToHistory } from '../../features/history/model/added-to-history';
import { AuthContext } from '../../app/contexts/auth-context';

import s from './search-form.module.css';

type Props = {
  prevQuery: string;
};

export const SearchForm: FC<Props> = memo((props) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm<Input>({ mode: 'onChange' });
  const navigate = useNavigate();
  const dispatch = useTypedDispatch();
  const { isAuth } = useContext(AuthContext);

  const onFormSubmit = (input: Input) => {
    if (isAuth) {
      dispatch(addedToHistory(input.query));
    }
    navigate(`${paths.homePage}${paths.searchPage}?query=${input.query}`);
  };

  return (
    <form className={s.form} onSubmit={handleSubmit(onFormSubmit)}>
      <label htmlFor="search" className={s.inputContainer}>
        <input
          {...register('query', {
            required: {
              value: true,
              message: 'Поле обязательно должно быть заполнено'
            },
            minLength: {
              value: 2,
              message: 'Минимальное количество символов: 2'
            }
          })}
          defaultValue={props.prevQuery}
          className={s.input}
          type="text"
          id="search"
          name="query"
          placeholder="Для поиска фото введите ключевое слово(а)"
        />
        <span
          className={clsx(s.inputErrorText, {
            [s.inputErrorTextVisible]: !isValid
          })}
        >
          {errors.query?.message}
        </span>
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
