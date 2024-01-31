import { memo, useState } from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

import s from './AuthForm.module.css';

type Props = {
  name: 'Авторизация' | 'Регистрация';
};

export const AuthForm = memo((props: Props) => {
  //TODO: Временное решение для показа текста ошибки
  const [isErrorVisible, setIsErrorVisible] = useState(false);
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsErrorVisible(!isErrorVisible);
  }

  return (
    <form className={s.form} onSubmit={handleSubmit} noValidate>
      <h2 className={s.title}>{props.name}</h2>
      <div className={s.inputContainer}>
        <label className={s.inputName} htmlFor="email">
          E-mail
        </label>
        <input
          className={clsx(s.input, {
            [s.errorInput]: isErrorVisible
          })}
          type="email"
          id="email"
          autoComplete="email"
        />
        <span
          className={clsx(s.errorMessage, {
            [s.errorMessageVisible]: !isErrorVisible
          })}
        >
          dfvdd
        </span>
      </div>
      <div className={s.inputContainer}>
        <label className={s.inputName} htmlFor="email">
          Password
        </label>
        <input
          className={clsx(s.input, {
            [s.errorInput]: isErrorVisible
          })}
          type="password"
          id="password"
        />
        <span
          className={clsx(s.errorMessage, {
            [s.errorMessageVisible]: !isErrorVisible
          })}
        >
          dfvdd
        </span>
      </div>
      <button type="submit" disabled={false} className={s.button}>
        {props.name === 'Регистрация' ? 'Зарегистрироваться' : 'Войти'}
      </button>

      <div className={s.captionContainer}>
        <p className={s.caption}>
          {props.name === 'Регистрация'
            ? 'Уже зарегистрированы? '
            : 'Ещё не зарегистрированы? '}

          <Link
            to={
              props.name === 'Регистрация'
                ? '/aston-react-project/signin'
                : '/aston-react-project/signup'
            }
            className={s.link}
          >
            {props.name === 'Регистрация' ? 'Войти' : 'Регистрация'}
          </Link>
        </p>
      </div>
    </form>
  );
});
