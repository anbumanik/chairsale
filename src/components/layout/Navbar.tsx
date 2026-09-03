'use client';
import Link from 'next/link';

const NAV_LINKS = [
  { label: 'Workstation Chair',  href: '/categories/workstation-chair'  },
  { label: 'Executive Chair',    href: '/categories/executive-chair'    },
  { label: 'Pantry Chair',       href: '/categories/pantry-chair'       },
  { label: 'Sofa Set',           href: '/categories/sofa-set'           },
  { label: 'Spare Parts',        href: '/categories/chair-spare-parts'  },
];

export default function Navbar() {
  return (
    <>
      {/* Announcement bar */}
      <div className="announce-bar">
        Free shipping on orders above ₹5,000 &nbsp;·&nbsp;
        <span>Use code CHAIR10 for 10% off your first order</span>
      </div>

      {/* Main navbar */}
      <header className="navbar">
        <div className="container navbar-inner">
          {/* Logo */}
          <Link href="/" className="navbar-logo" id="navbar-logo">
            Sit<span>Well</span>
          </Link>

          {/* Nav links */}
          <nav aria-label="Primary navigation">
            <ul className="navbar-links">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="navbar-link">{l.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Actions */}
          <div className="navbar-actions">
            <button className="navbar-icon-btn" aria-label="Search" id="navbar-search-btn">
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.7" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="7" /><path d="m21 21-4.35-4.35" strokeLinecap="round" />
              </svg>
            </button>

            <button className="navbar-icon-btn" aria-label="Wishlist" id="navbar-wishlist-btn">
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.7" viewBox="0 0 24 24">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <button className="navbar-icon-btn" aria-label="Cart" id="navbar-cart-btn" style={{ position: 'relative' }}>
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.7" viewBox="0 0 24 24">
                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" strokeLinecap="round" strokeLinejoin="round" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
              <span className="navbar-badge">0</span>
            </button>

            <Link href="/login" className="btn-primary" id="navbar-login-btn"
              style={{ padding: '0.55rem 1.25rem', fontSize: '0.82rem' }}>
              Sign In
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}
