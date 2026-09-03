import type { Metadata } from 'next';
import { Outfit, Playfair_Display } from 'next/font/google';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import './globals.css';

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-outfit',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'SitWell — Premium Office Chairs & Furniture',
    template: '%s | SitWell',
  },
  description:
    'Discover premium office chairs, gaming chairs, accent chairs and more. Thoughtfully curated for modern professionals. Free delivery on orders above ₹5,000.',
  keywords: ['office chairs', 'ergonomic chairs', 'premium furniture', 'gaming chairs', 'accent chairs'],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${outfit.variable} ${playfair.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
