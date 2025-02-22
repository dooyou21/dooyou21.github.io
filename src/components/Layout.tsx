import { Outlet } from 'react-router';
import { Nav } from './Nav.tsx';
import './Layout.css';

export function Layout() {
  return (
    <>
      <Nav />
      <main>
        <Outlet />
      </main>
    </>
  );
}
