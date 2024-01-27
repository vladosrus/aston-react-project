import { Outlet } from 'react-router-dom';
import { Header } from '../Header/Header';

export function BaseLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <footer>Footer</footer>
    </>
  );
}
