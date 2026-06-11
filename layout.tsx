import type { Metadata } from 'next';
import './globals.css';
import { Header, Footer } from '@/components/Layout';

export const metadata: Metadata = {
  title: 'MediPro | Kliniske apper for norsk helsepersonell',
  description: 'MediPro samler SykepleierPro, AmbulansePro og LegePro – moderne kliniske verktøy for norsk helsepersonell.',
  metadataBase: new URL('https://www.medipro.no'),
  openGraph: { title: 'MediPro', description: 'Kliniske apper for norsk helsepersonell.', url: 'https://www.medipro.no', siteName: 'MediPro', locale: 'nb_NO', type: 'website' }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="nb"><body><Header />{children}<Footer /></body></html>;
}
