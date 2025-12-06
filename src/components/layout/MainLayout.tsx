import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col bg-white overflow-x-hidden">
      <div className="layout-container">
        <Header />
        <main className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container">
            {children}
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};