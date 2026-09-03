import Link from 'next/link';

const FOOTER_LINKS = {
  Shop: [
    { label: 'Workstation Chair',  href: '/categories/workstation-chair' },
    { label: 'Executive Chair',    href: '/categories/executive-chair'   },
    { label: 'Pantry Chair',       href: '/categories/pantry-chair'      },
    { label: 'Sofa Set',           href: '/categories/sofa-set'          },
    { label: 'Chair Spare Parts',  href: '/categories/chair-spare-parts' },
  ],
  Support: [
    { label: 'Track Order',    href: '/track-order' },
    { label: 'Returns',        href: '/returns'      },
    { label: 'Warranty',       href: '/warranty'     },
    { label: 'FAQs',           href: '/faq'          },
    { label: 'Contact Us',     href: '/contact'      },
  ],
  Company: [
    { label: 'About Us',       href: '/about'    },
    { label: 'Careers',        href: '/careers'  },
    { label: 'Press',          href: '/press'    },
    { label: 'Privacy Policy', href: '/privacy'  },
    { label: 'Terms',          href: '/terms'    },
  ],
};

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand col */}
          <div>
            <div className="footer-logo">Sit<span>Well</span></div>
            <p className="footer-tagline">
              Premium furniture, thoughtfully selected, professionally delivered.
              Elevate your workspace with chairs built to last.
            </p>
          </div>

          {/* Links */}
          {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
            <div key={heading}>
              <h3 className="footer-heading">{heading}</h3>
              <ul className="footer-links">
                {links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="footer-link">{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} SitWell. All rights reserved.</span>
          <span>Designed with care for modern workspaces.</span>
        </div>
      </div>
    </footer>
  );
}
