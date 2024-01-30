import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { paths } from '../../shared/model/paths';

const HomePage = lazy(() => import('../HomePage/HomePage'));
const BaseLayout = lazy(() => import('../../widgets/BaseLayout/BaseLayout'));
const LoginPage = lazy(() => import('../LoginPage/LoginPage'));
const RegistrationPage = lazy(
  () => import('../RegistrationPage/RegistrationPage')
);
const DetailsPage = lazy(() => import('../DetailsPage/DetailsPage'));
const SearchPage = lazy(() => import('../SearchPage/SearchPage'));
const HistoryPage = lazy(() => import('../HistoryPage/HistoryPage'));
const FavoritesPage = lazy(() => import('../FavoritesPage/FavoritesPage'));
const NotFoundPage = lazy(() => import('../NotFoundPage/NotFoundPage'));

export function Routing() {
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
