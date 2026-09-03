import type { Metadata } from 'next';
import HeroBanner from '@/components/home/HeroBanner';
import FeaturedCategories from '@/components/home/FeaturedCategories';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import FeaturesStrip from '@/components/layout/FeaturesStrip';

export const metadata: Metadata = {
  title: 'SitWell — Premium Office Chairs & Furniture',
  description:
    'Shop the finest collection of ergonomic office chairs, gaming chairs, accent chairs, recliners and more. Premium quality, expert curation, free delivery above ₹5,000.',
};

export default function HomePage() {
  return (
    <>
      <HeroBanner />
      <FeaturesStrip />
      <FeaturedCategories />
      <FeaturedProducts />
    </>
  );
}
