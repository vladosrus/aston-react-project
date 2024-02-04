import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { paths } from '../../shared/model/paths';
import { useTypedDispatch } from '../../shared/lib/use-typed-dispatch';
import { userSignIn, userSignOut } from '../../entities/user';
import { checkAuth, logout } from '../../shared/api/firebase-api';

const HomePage = lazy(() => import('../home-page/home-page'));
const BaseLayout = lazy(() => import('../../widgets/base-layout/base-layout'));
const LoginPage = lazy(() => import('../login-page/login-page'));
const RegistrationPage = lazy(
  () => import('../registration-page/registration-page')
);
const DetailsPage = lazy(() => import('../details-page/details-page'));
const SearchPage = lazy(() => import('../search-page/search-page'));
const HistoryPage = lazy(() => import('../history-page/history-page'));
const FavoritesPage = lazy(() => import('../favorites-page/favorites-page'));
const NotFoundPage = lazy(() => import('../not-found-page/not-found-page'));

import type { User } from 'firebase/auth';

export function Routing() {
  const dispatch = useTypedDispatch();

  useEffect(() => {
    checkAuth((user: User | null) => {
      if (user) {
        dispatch(userSignIn(user.email));
      } else {
        logout();
        dispatch(userSignOut());
      }
    });
  });

  return (
    <Routes>
      <Route path={paths.homePage} element={<BaseLayout />}>
        <Route index element={<HomePage />} />
        <Route path={paths.detailsPage} element={<DetailsPage />} />
        <Route path={paths.searchPage} element={<SearchPage />} />
        <Route path={paths.registrationPage} element={<RegistrationPage />} />
        <Route path={paths.loginPage} element={<LoginPage />} />

        {/* TODO: Позже роуты ниже будут защищены авторизацией */}
        <Route path={paths.historyPage} element={<HistoryPage />} />
        <Route path={paths.favoritesPage} element={<FavoritesPage />} />
      </Route>
      <Route path={paths.notFoundPage} element={<NotFoundPage />} />
    </Routes>
  );
}
