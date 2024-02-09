import { lazy, useContext, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { paths } from '../../shared/model/paths';
import { AuthContext } from '../../app/contexts/auth-context';
import { ProtectedRoute } from '../providers/protected-route';
import { PagePreloader } from '../../shared/ui/page-preloader/page-preloader';
import { useTheme } from '../../features/theme/lib/use-theme';

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

export function Routing() {
  const { isAuthChecking } = useContext(AuthContext);
  const { isThemeLoading, handleLoadTheme } = useTheme();

  useEffect(() => {
    handleLoadTheme();
  }, [handleLoadTheme]);

  return isAuthChecking && isThemeLoading ? (
    <PagePreloader />
  ) : (
    <Routes>
      <Route path={paths.homePage} element={<BaseLayout />}>
        <Route index element={<HomePage />} />
        <Route path={paths.detailsPage} element={<DetailsPage />} />
        <Route path={paths.searchPage} element={<SearchPage />} />
        <Route path={paths.registrationPage} element={<RegistrationPage />} />
        <Route path={paths.loginPage} element={<LoginPage />} />
        <Route
          path={paths.historyPage}
          element={
            <ProtectedRoute>
              <HistoryPage />
            </ProtectedRoute>
          }
        />
        <Route
          path={paths.favoritesPage}
          element={
            <ProtectedRoute>
              <FavoritesPage />
            </ProtectedRoute>
          }
        />
      </Route>
      <Route path={paths.notFoundPage} element={<NotFoundPage />} />
    </Routes>
  );
}
