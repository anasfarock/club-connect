'use client';

import { PrimaryButton } from '../buttons/PrimaryButton';
import { SecondaryButton } from '../buttons/SecondaryButton';

export const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-border-light px-10 py-3">
      <div className="flex items-center gap-4 text-neutral-900">
        <div className="w-4 h-4">
          <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 6H42L36 24L42 42H6L12 24L6 6Z" fill="currentColor"></path>
          </svg>
        </div>
        <h2 className="text-neutral-900 text-lg font-bold leading-tight tracking-light">
          CampusConnect
        </h2>
      </div>
      
      <div className="flex flex-1 justify-end gap-8">
        <nav className="flex items-center gap-9">
          <a className="nav-link" href="#features">Features</a>
          <a className="nav-link" href="#pricing">Pricing</a>
          <a className="nav-link" href="#contact">Contact</a>
        </nav>
        
        <div className="flex gap-2">
          <PrimaryButton>Login</PrimaryButton>
          <SecondaryButton>Register University</SecondaryButton>
        </div>
      </div>
    </header>
  );
};
