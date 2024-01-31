import { memo, useState } from 'react';
import clsx from 'clsx';
import s from './SearchForm.module.css';

export const SearchForm = memo(() => {
  //TODO: Временное решение для показа текста ошибки
  const [error, setError] = useState(false);
  function handleSubmit(evt: React.FormEvent<HTMLFormElement>): void {
    evt.preventDefault();
    setError(!error);
  }

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label htmlFor="search" className={s.inputContainer}>
        <input
          className={s.input}
          type="text"
          id="search"
          name="search"
          placeholder="Введите ключевое слово(а) для поиска фото"
        />
        <span
          className={clsx(s.inputErrorText, {
            [s.inputErrorTextVisible]: error
          })}
        >
          Минимальное количество символов: 2
        </span>
      </label>

      <button type="submit" className={s.button}>
        Искать
      </button>
    </form>
  );
});
