import React, { ReactNode } from 'react';
import Navbar from '../Navbar/Navbar';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      {/* <Navbar /> */}
      <main className='container mx-auto px-6 max-w-2xl'>
        {children}
      </main>
    </>
  );
};

export default Layout;
