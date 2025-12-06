'use client';

import React from 'react';
import { PrimaryButton } from '../buttons/PrimaryButton';
import { SecondaryButton } from '../buttons/SecondaryButton';

interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: 'Features', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
];

export const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-[#f0f2f4] px-10 py-3">
      <div className="flex items-center gap-4 text-[#111418]">
        <div className="w-4 h-4">
          <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 6H42L36 24L42 42H6L12 24L6 6Z" fill="currentColor"></path>
          </svg>
        </div>
        <h2 className="text-[#111418] text-lg font-bold leading-tight tracking-[-0.015em]">
          CampusConnect
        </h2>
      </div>

      <div className="flex flex-1 justify-end gap-8">
        <nav className="flex items-center gap-9">
          {navLinks.map((link) => (
            <a
              key={link.href}
              className="text-[#111418] text-sm font-medium leading-normal hover:text-[#1380ec] transition-colors"
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex gap-2">
          <PrimaryButton>Login</PrimaryButton>
          <SecondaryButton>Register University</SecondaryButton>
        </div>
      </div>
    </header>
  );
};