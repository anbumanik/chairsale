'use client';
import { useEffect, useState } from 'react';
import { getCategories } from '../../services/categoryService';
import type { Category } from '../../types';
import Link from 'next/link';

/* Static category data with local images as fallback */
const STATIC_CATEGORIES = [
  {
    id: '1',
    name: 'Workstation Chair',
    slug: 'workstation-chair',
    desc: 'Designed for comfort and all-day productivity',
    image: '/cat-workstation.png',
    span: 'large', // top-left large card
  },
  {
    id: '2',
    name: 'Executive Chair',
    slug: 'executive-chair',
    desc: 'Premium style meets superior comfort',
    image: '/cat-executive.png',
    span: 'medium', // top-right
  },
  {
    id: '3',
    name: 'Pantry Chair',
    slug: 'pantry-chair',
    desc: 'Functional seating for break rooms',
    image: '/cat-pantry.png',
    span: 'medium', // bottom-left
  },
  {
    id: '4',
    name: 'Sofa Set',
    slug: 'sofa-set',
    desc: 'Elegant reception and lounge seating',
    image: '/cat-sofa.png',
    span: 'medium', // bottom-middle
  },
  {
    id: '5',
    name: 'Chair Spare Parts',
    slug: 'chair-spare-parts',
    desc: 'Genuine parts for all major brands',
    image: '/cat-spareparts.png',
    span: 'small', // bottom-right stacked
  },
];

export default function FeaturedCategories() {
  const [dbCategories, setDbCategories] = useState<Category[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    getCategories()
      .then(setDbCategories)
      .finally(() => setLoaded(true));
  }, []);

  // Merge DB image URLs into static list if available
  const merged = STATIC_CATEGORIES.map((sc) => {
    const fromDb = dbCategories.find((d) => d.slug === sc.slug);
    return { ...sc, image: fromDb?.imageUrl ?? sc.image };
  });

  return (
    <section className="cat-section" id="categories">
      <div className="container">
        {/* Header */}
        <div className="section-header centered">
          <span className="section-eyebrow">Explore Our Collection</span>
          <h2 className="section-title">Shop by Category</h2>
          <div className="section-divider" />
          <p className="section-subtitle">
            Discover the perfect seating solutions for every workspace and style.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="cat-bento">
          {/* Top row */}
          <Link href={`/categories/${merged[0].slug}`} className="cat-card cat-card--large">
            <img src={merged[0].image} alt={merged[0].name} className="cat-card-img" />
            <div className="cat-card-gradient" />
            <div className="cat-card-content">
              <h3 className="cat-card-name">{merged[0].name}</h3>
              <p className="cat-card-desc">{merged[0].desc}</p>
              <span className="cat-card-link">Explore Collection →</span>
            </div>
          </Link>

          <Link href={`/categories/${merged[1].slug}`} className="cat-card cat-card--medium">
            <img src={merged[1].image} alt={merged[1].name} className="cat-card-img" />
            <div className="cat-card-gradient" />
            <div className="cat-card-content">
              <h3 className="cat-card-name">{merged[1].name}</h3>
              <p className="cat-card-desc">{merged[1].desc}</p>
              <span className="cat-card-link">Explore Collection →</span>
            </div>
          </Link>

          {/* Bottom row */}
          <Link href={`/categories/${merged[2].slug}`} className="cat-card cat-card--medium">
            <img src={merged[2].image} alt={merged[2].name} className="cat-card-img" />
            <div className="cat-card-gradient" />
            <div className="cat-card-content">
              <h3 className="cat-card-name">{merged[2].name}</h3>
              <p className="cat-card-desc">{merged[2].desc}</p>
              <span className="cat-card-link">Explore Collection →</span>
            </div>
          </Link>

          <Link href={`/categories/${merged[3].slug}`} className="cat-card cat-card--medium">
            <img src={merged[3].image} alt={merged[3].name} className="cat-card-img" />
            <div className="cat-card-gradient" />
            <div className="cat-card-content">
              <h3 className="cat-card-name">{merged[3].name}</h3>
              <p className="cat-card-desc">{merged[3].desc}</p>
              <span className="cat-card-link">Explore Collection →</span>
            </div>
          </Link>

          <Link href={`/categories/${merged[4].slug}`} className="cat-card cat-card--small">
            <img src={merged[4].image} alt={merged[4].name} className="cat-card-img" />
            <div className="cat-card-gradient" />
            <div className="cat-card-content">
              <h3 className="cat-card-name">{merged[4].name}</h3>
              <p className="cat-card-desc">{merged[4].desc}</p>
              <span className="cat-card-link">Explore Collection →</span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
