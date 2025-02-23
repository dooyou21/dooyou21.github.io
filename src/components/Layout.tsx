import { Nav } from './Nav.tsx';
import './Layout.css';
import { PropsWithChildren } from 'react';

export function Layout({
  children,
  ...props
}: PropsWithChildren) {
  return (
    <>
      <Nav />
      <main {...props}>
        {children}
      </main>
    </>
  );
}
