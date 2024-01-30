import { useState } from 'react';
import clsx from 'clsx';
import s from './SearchSection.module.css';

export function SearchSection() {
  //Временное решение для показа текста ошибки
  const [error, setError] = useState(false);
  function handleSubmit(evt: React.FormEvent<HTMLFormElement>): void {
    evt.preventDefault();
    setError(!error);
  }

  return (
    <section className={s.section}>
      <form className={s.form} onSubmit={handleSubmit}>
        <label className={s.inputContainer}>
          <input
            className={s.input}
            type="text"
            placeholder="Введите ключевое слово(а) для поиска фото"
          />
          <span
            className={clsx(s.inputErrorText, {
              [s.inputErrorTextVisible]: !error
            })}
          >
            Минимальное количество символов: 2
          </span>
        </label>

        <button type="submit" className={s.button}>
          Искать
        </button>
      </form>
    </section>
  );
}
