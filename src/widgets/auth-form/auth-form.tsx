import { memo } from 'react';
import { Link } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import clsx from 'clsx';

import s from './auth-form.module.css';
import type { Inputs } from '../../shared/api/firebase-api';

type Props = {
  name: 'Авторизация' | 'Регистрация';
  onSubmit: ({ email, password }: Inputs) => void;
};

export const AuthForm = memo((props: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset
  } = useForm<Inputs>({ mode: 'onChange' });

  const onSubmit: SubmitHandler<Inputs> = (data: Inputs) => {
    props.onSubmit(data);
    reset();
  };

  return (
    <form className={s.form} onSubmit={handleSubmit(onSubmit)} noValidate>
      <h2 className={s.title}>{props.name}</h2>
      <div className={s.inputContainer}>
        <label className={s.inputName} htmlFor="email">
          E-mail
        </label>
        <input
          {...register('email', {
            required: 'Это поле обязательно к заполнению',
            pattern: {
              value: /.+@.+..+/,
              message: 'Указан некорректный email'
            }
          })}
          type="email"
          id="email"
          autoComplete="email"
          className={clsx(s.input, {
            [s.errorInput]: errors.email
          })}
        />
        <span
          className={clsx(s.errorMessage, {
            [s.errorMessageVisible]: errors.email
          })}
        >
          {errors.email?.message}
        </span>
      </div>
      <div className={s.inputContainer}>
        <label className={s.inputName} htmlFor="email">
          Password
        </label>
        <input
          {...register('password', {
            required: 'Это поле обязательно к заполнению',
            pattern: {
              value: /^(?!.*[А-Я а-я]).{8,50}/,
              message: 'Указан некорректный пароль'
            },
            minLength: {
              value: 8,
              message: 'Минимальное количество символов - 8'
            },
            maxLength: {
              value: 50,
              message: 'Максимальное количество символов - 50'
            }
          })}
          className={clsx(s.input, {
            [s.errorInput]: errors.password
          })}
          type="password"
          id="password"
        />
        <span
          className={clsx(s.errorMessage, {
            [s.errorMessageVisible]: errors.password
          })}
        >
          {errors.password?.message}
        </span>
      </div>
      <button
        type="submit"
        disabled={!isValid}
        className={clsx(s.button, { [s.buttonDisabled]: !isValid })}
      >
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
