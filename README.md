![CI/CD Actions](https://github.com/vladosrus/aston-react-project/actions/workflows/actions.yml/badge.svg?event=push)

# Проект «Unsplash Photos»

## Что выполнено:

- Использовался API: [Unsplash API](https://unsplash.com/documentation)
- Ссылка на реализацию: [https://vladosrus...](https://vladosrus.github.io/aston-react-project/)

### 1 уровень (обязательный - необходимый минимум)

- [x] Реализованы `Требования к функциональности`

#### React

- [x] Используются функциональные компоненты c хуками в приоритете над классовыми: [favorites-page.tsx](https://github.com/vladosrus/aston-react-project/blob/main/src/pages/favorites-page/favorites-page.tsx)
- [x] Есть разделение на `умные` и `глупые компоненты`: Умный: [search-form.tsx](https://github.com/vladosrus/aston-react-project/blob/main/src/features/search/search-form/search-form.tsx), Глупый: [footer.tsx](https://github.com/vladosrus/aston-react-project/blob/main/src/widgets/footer/footer.tsx)
- [x] Есть `рендеринг списков`: [photo-list.tsx](https://github.com/vladosrus/aston-react-project/blob/main/src/widgets/photo-list/photo-list.tsx)
- [x] Реализована хотя бы одна `форма`: [auth-form.tsx](https://github.com/vladosrus/aston-react-project/blob/main/src/features/auth/ui/auth-form/auth-form.tsx)
- [x] Есть применение `Контекст API`: [auth-context.ts](https://github.com/vladosrus/aston-react-project/blob/main/src/app/contexts/auth-context.ts), [auth-provider.tsx](https://github.com/vladosrus/aston-react-project/blob/main/src/app/providers/auth-provider.tsx)
- [x] Есть применение `предохранителя`: [home-page.tsx](https://github.com/vladosrus/aston-react-project/blob/main/src/pages/home-page/home-page.tsx)
- [x] Есть хотя бы один `кастомный хук`: [use-favorites.ts](https://github.com/vladosrus/aston-react-project/blob/main/src/features/favorites/lib/use-favorites.ts)
- [x] Несколько компонентов используют `PropTypes`: [auth-form.tsx](https://github.com/vladosrus/aston-react-project/blob/main/src/features/auth/ui/auth-form/auth-form.tsx), [auth-provider.tsx](https://github.com/vladosrus/aston-react-project/blob/main/src/app/providers/auth-provider.tsx)
- [x] Поиск не должен триггерить много запросов к серверу (`debounce`): [use-debounce.tsx](https://github.com/vladosrus/aston-react-project/blob/main/src/shared/lib/use-debounce.tsx)
- [x] Есть применение `lazy + Suspense`: [lasy](https://github.com/vladosrus/aston-react-project/blob/main/src/pages/routing/routing.tsx), [Suspense](https://github.com/vladosrus/aston-react-project/blob/main/src/app/providers/router-provider.tsx)

#### Redux

- [x] Используется `Modern Redux with Redux Toolkit`: [store.ts](https://github.com/vladosrus/aston-react-project/blob/main/src/app/store/store.ts)
- [x] Используются `слайсы`: [authSlice](https://github.com/vladosrus/aston-react-project/blob/main/src/entities/auth/model/slice.ts), [userSlice](https://github.com/vladosrus/aston-react-project/blob/main/src/entities/user/model/slice.ts)
- [x] Есть `кастомная мидлвара`: [middlware.ts](https://github.com/vladosrus/aston-react-project/tree/main/src/app/store/middlware.ts)
- [x] Используется `RTK Query`: [unsplash-api.ts](https://github.com/vladosrus/aston-react-project/blob/main/src/shared/api/unsplash-api.ts)
- [x] Используется `Transforming Responses`: [transform-responses.ts](https://github.com/vladosrus/aston-react-project/tree/main/src/shared/lib/transform-responses.ts)

### 2 уровень (необязательный)

- [x] Используется `TypeScript`
- [x] С начала работы настроен `CI/CD` при помощи `GitHub Actions` + `GitHub Pages`
- [x] Реализована `низкая связанность` клиентского кода. <br>
      Для хранения учетных записей пользователей, их Избранного и Истории поиска, могут быть использованы `LocalStorage` или `FireBase`. Введена переменная окружения c именем REMOTE_STORE и значениями `ls` и `firebase`. В коде приложения есть одно место-переключатель, где в зависимости от значения переменной определяется логика работы: [api.ts](https://github.com/vladosrus/aston-react-project/blob/main/src/shared/api/api.ts)
- [x] Используются `мемоизированные селекторы` (createSelector): [authSlice](https://github.com/vladosrus/aston-react-project/blob/main/src/entities/auth/model/slice.ts), [userSlice](https://github.com/vladosrus/aston-react-project/blob/main/src/entities/user/model/slice.ts)

### Дополнительно

- [x] Проект собран при помощи [Vite](https://vitejs.dev)
- [x] Для работы с формами использовалась библиотека `react-hook-form`
- [x] Использовалась библиотека `clsx` для удобства работы с классами
- [x] При работе со стилями использовались `CSS Modules`
- [x] Кодовая база организована по методологи [Feature-Sliced Design](https://feature-sliced.design/ru/)

## Что можно добавить в будущем:

- Адаптацию сайта под мобильные устройства;
- Реализовать кнопку "Больше фотографий". Клик по ней будет подгружать ещё несколько фото;
