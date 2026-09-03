'use client';
import { useEffect, useState, useRef } from 'react';
import { getDb, ref, get } from '../../firebase/database';
import type { Banner } from '../../types';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';

const FALLBACK_BANNERS: Banner[] = [
  {
    id: 'fallback-1',
    title: 'Ergonomic\nComfort',
    subtitle: 'Premium office chairs and furniture, thoughtfully crafted for modern professionals who value comfort and aesthetics.',
    imageUrl: '/cat-workstation.png',
    buttonText: 'Shop Ergonomic',
    buttonLink: '/categories/workstation-chair',
    isActive: true,
  },
  {
    id: 'fallback-2',
    title: 'Executive\nElegance',
    subtitle: 'Premium style meets superior comfort. Elevate your executive workspace with our luxury collection.',
    imageUrl: '/cat-executive.png',
    buttonText: 'Shop Executive',
    buttonLink: '/categories/executive-chair',
    isActive: true,
  },
  {
    id: 'fallback-3',
    title: 'Modern\nReception',
    subtitle: 'Elegant reception and lounge seating to create the perfect first impression for your guests.',
    imageUrl: '/cat-sofa.png',
    buttonText: 'Shop Lounge',
    buttonLink: '/categories/sofa-set',
    isActive: true,
  }
];

export default function HeroBanner() {
  const [banners, setBanners] = useState<Banner[]>([]);
  const [loading, setLoading] = useState(true);

  // Scroll animation hooks
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  useEffect(() => {
    const db = getDb();
    if (!db) { setLoading(false); return; }
    get(ref(db, 'banners'))
      .then((snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val();
          const list: Banner[] = Object.keys(data)
            .map((id) => ({ id, ...data[id] } as Banner))
            .filter((b) => b.isActive);
          setBanners(list);
        }
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const displayBanners = banners.length > 0 ? banners : FALLBACK_BANNERS;

  // Horizontal translation: moves from 0 to -(N-1)*100vw
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ["0vw", `-${(displayBanners.length - 1) * 100}vw`]
  );

  return (
    <section 
      ref={targetRef} 
      style={{ height: `${displayBanners.length * 100}vh`, background: 'var(--clr-bg)' }}
    >
      {/* 
        Using top-0 and h-screen guarantees it exactly fills the viewport. 
        The navbar will overlay the top, which we'll handle with padding inside the slides.
      */}
      <div className="sticky top-0 w-full overflow-hidden" style={{ position: 'sticky', top: 0, height: '100dvh', width: '100%', overflow: 'hidden' }}>
        <motion.div 
          style={{ x, display: 'flex', flexDirection: 'row', width: `${displayBanners.length * 100}vw`, height: '100%' }}
        >
          {loading ? (
            <div className="hero-slide" style={{ width: '100vw' }}>
              <div className="hero-slide-img skeleton" />
              <div className="hero-slide-text" style={{ gap: '1.5rem' }}>
                <div className="skeleton skeleton-line skeleton-line-xs" />
                <div className="skeleton" style={{ height: '72px', width: '70%', borderRadius: '4px' }} />
                <div className="skeleton skeleton-line skeleton-line-lg" />
                <div className="skeleton skeleton-line skeleton-line-md" />
              </div>
            </div>
          ) : (
            displayBanners.map((banner) => (
              <div key={banner.id} className="hero-slide">
                {/* IMAGE PORTION */}
                <div className="hero-slide-img">
                  {banner.imageUrl ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={banner.imageUrl} alt={banner.title} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
                  ) : (
                    <div style={{ width: '100%', height: '100%', background: 'var(--clr-bg-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <span style={{ fontSize: '4rem' }}>🪑</span>
                    </div>
                  )}
                </div>

                {/* TEXT PORTION */}
                <div className="hero-slide-text">
                  <div className="hero-eyebrow" style={{ marginBottom: '1.5rem' }}>
                    <span className="hero-eyebrow-line" />
                    New Collection 2025
                  </div>

                  <h1 className="hero-title" style={{ marginBottom: '1.5rem' }}>
                    {banner.title.split('\n').map((line, i) => (
                      <span key={i} style={{ display: 'block' }}>{line}</span>
                    ))}
                  </h1>

                  {banner.subtitle && (
                    <p className="hero-subtitle" style={{ marginBottom: '2.5rem' }}>{banner.subtitle}</p>
                  )}

                  <div className="hero-actions" style={{ marginBottom: '3rem' }}>
                    <Link href={banner.buttonLink ?? '/products'} className="btn-primary">
                      {banner.buttonText ?? 'Shop Now'}
                    </Link>
                    <Link href="/categories" className="btn-secondary">Browse Categories</Link>
                  </div>

                  <div className="hero-stats">
                    <div>
                      <div className="hero-stat-value">500+</div>
                      <div className="hero-stat-label">Products</div>
                    </div>
                    <div>
                      <div className="hero-stat-value">12k+</div>
                      <div className="hero-stat-label">Happy Clients</div>
                    </div>
                    <div>
                      <div className="hero-stat-value">4.9★</div>
                      <div className="hero-stat-label">Avg. Rating</div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </motion.div>
      </div>
    </section>
  );
}
