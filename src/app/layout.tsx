import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'CampusConnect - University Club Management Platform',
  description: 'The all-in-one platform for university club management, event organization, and seamless QR ticketing.',
  keywords: ['campus', 'club management', 'events', 'ticketing', 'university'],
  authors: [{ name: 'CampusConnect' }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?display=swap&family=Manrope:wght@400;500;700;800&family=Noto+Sans:wght@400;500;700;900"
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}