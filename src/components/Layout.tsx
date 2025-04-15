import './Layout.css';
import { PropsWithChildren } from 'react';

export function Layout({
  children,
  ...props
}: PropsWithChildren) {
  return (
    <>
      <main {...props}>
        {children}
      </main>
    </>
  );
}
