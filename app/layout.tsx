import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import clsx from 'clsx';

import { Navbar } from '../components/molecules';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Fabio Carpinato',
  description: "Fabio Carpinato's personal website",
  authors: [{ name: 'Fabio Carpinato' }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={clsx(inter.className, 'bg-slate-900 text-gray-100')}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
