import './App.module.css';
import { Route, Routes } from 'react-router-dom';
import { paths } from '../../utils/paths';

import { HomePage } from '../HomePage/HomePage';
import { RegistrationPage } from '../RegistrationPage/RegistrationPage';
import { BaseLayout } from '../BaseLayout/BaseLayout';
import { LoginPage } from '../LoginPage/LoginPage';
import { DetailsPage } from '../DetailsPage/DetailsPage';
import { SearchPage } from '../SearchPage/SearchPage';
import { HistoryPage } from '../HistoryPage/HistoryPage';
import { FavoritesPage } from '../FavoritesPage/FavoritesPage';
import { NotFoundPage } from '../NotFoundPage/NotFoundPage';

export function App() {
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
