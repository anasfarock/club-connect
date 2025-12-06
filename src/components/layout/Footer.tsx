import React from 'react';

interface FooterLink {
  label: string;
  href: string;
}

const footerLinks: FooterLink[] = [
  { label: 'Terms of Service', href: '#terms' },
  { label: 'Privacy Policy', href: '#privacy' },
  { label: 'Contact Us', href: '#contact' },
];

export const Footer: React.FC = () => {
  return (
    <footer className="flex justify-center border-t border-solid border-[#f0f2f4]">
      <div className="flex max-w-[960px] flex-1 flex-col">
        <div className="flex flex-col gap-6 px-5 py-10 text-center">
          <div className="flex flex-wrap items-center justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                className="text-[#617589] text-base font-normal leading-normal min-w-40 hover:text-[#111418] transition-colors"
                href={link.href}
              >
                {link.label}
              </a>
            ))}
          </div>
          <p className="text-[#617589] text-base font-normal leading-normal">
            © 2024 CampusConnect. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};