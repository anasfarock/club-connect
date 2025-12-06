import type { Metadata } from 'next';
import { manrope, notoSans } from '@/app/config/fonts';
import './globals.css';

export const metadata: Metadata = {
  title: 'CampusConnect - University Club Management Platform',
  description:
    'The all-in-one platform for university club management, event organization, and seamless QR ticketing.',
  keywords: ['campus', 'club management', 'events', 'ticketing', 'university'],
  authors: [{ name: 'CampusConnect' }],
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${manrope.variable} ${notoSans.variable}`}>
      <body className={manrope.className}>{children}</body>
    </html>
  );
}