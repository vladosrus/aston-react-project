import { Outlet } from 'react-router-dom';
import './HomePage.module.css';

export function HomePage() {
  return (
    <>
      <p>HomePage</p>
      <Outlet />
    </>
  );
}
