"use client";

import React, { useEffect, useRef } from "react";

export default function Footer() {
  const pathRef = useRef<SVGPathElement>(null);
  const footerRef = useRef<HTMLElement>(null);
  const itemsRef = useRef<(HTMLDivElement | HTMLElement | null)[]>([]);

  useEffect(() => {
    const path = pathRef.current;
    const foot = footerRef.current;
    const items = itemsRef.current.filter(Boolean);
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const W = 1440, H = 200, STEPS = 60;
    let target = window.scrollY, current = target;
    let animFrame: number;

    function buildPath(s: number) {
      const p1 = s * 0.0045;
      const p2 = s * -0.0030 + 1.7;
      const a1 = 38 + 22 * Math.sin(s * 0.0017);
      const a2 = 18 + 10 * Math.cos(s * 0.0023);
      const base = 105;

      let d = 'M0 ' + H + ' V';
      const pts = [];
      for (let i = 0; i <= STEPS; i++) {
        const x = (i / STEPS) * W;
        const t = x / W * Math.PI * 2;
        const y = base
          - a1 * Math.sin(t * 0.9 + p1)
          - a2 * Math.sin(t * 1.9 + p2);
        pts.push([x, y]);
      }
      d += pts[0][1].toFixed(1);
      for (let i = 1; i < pts.length; i++) {
        const [x0, y0] = pts[i - 1];
        const [x1, y1] = pts[i];
        const cx = (x0 + x1) / 2;
        d += ' Q' + x0.toFixed(1) + ' ' + y0.toFixed(1) + ' ' + cx.toFixed(1) + ' ' + ((y0 + y1) / 2).toFixed(1);
      }
      d += ' L' + W + ' ' + pts[pts.length - 1][1].toFixed(1) + ' V' + H + ' Z';
      return d;
    }

    function reveal() {
      if (!foot) return;
      const r = foot.getBoundingClientRect();
      const vh = window.innerHeight;
      const prog = Math.min(1, Math.max(0, (vh - r.top) / (vh * 0.55)));
      items.forEach((el, i) => {
        if (!el) return;
        const local = Math.min(1, Math.max(0, prog * 1.4 - i * 0.18));
        el.style.opacity = local.toString();
        el.style.transform = 'translateY(' + ((1 - local) * 40) + 'px)';
      });
    }

    function frame() {
      current += (target - current) * 0.12;
      if (Math.abs(target - current) < 0.05) current = target;
      if (path) path.setAttribute('d', buildPath(current));
      reveal();
      animFrame = requestAnimationFrame(frame);
    }

    const onScroll = () => { target = window.scrollY; };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', reveal);

    if (reduce) {
      if (path) path.setAttribute('d', buildPath(0));
      reveal();
    } else {
      animFrame = requestAnimationFrame(frame);
    }

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', reveal);
      if (animFrame) cancelAnimationFrame(animFrame);
    };
  }, []);

  return (
    <>
      <section className="trust" aria-label="Why choose us" id="contact">
        <ul>
         
        </ul>
      </section>

      <footer className="site-footer" id="footer" ref={footerRef}>
        <svg className="wave" id="wave" viewBox="0 0 1440 200" preserveAspectRatio="none" aria-hidden="true">
          <path id="wavePath" ref={pathRef} d="M0 200V100H1440V200Z"/>
        </svg>

        <div className="footer-body">
          <div className="footer-inner">
            <div className="reveal" ref={(el) => { if (el) itemsRef.current[0] = el; }}>
              <h2>Want more COREPLANE?</h2>
              <p>Be the first to hear about new gift plans, festive offers and corporate gifting ideas. We won't share your information with any third parties and you can unsubscribe at any time.</p>
              <form className="signup" onSubmit={(e) => { e.preventDefault(); const btn = e.currentTarget.querySelector('button'); if(btn) btn.textContent='Thanks!'; }}>
                <input type="email" placeholder="Email address" aria-label="Email address" required />
                <button type="submit">Sign me up!</button>
              </form>
            </div>

            <nav className="reveal" aria-label="Customer service" ref={(el) => { if (el) itemsRef.current[1] = el; }}>
              <h3>Customer Service</h3>
              <ul>
                <li><a href="#">Contact us</a></li>
                <li><a href="#">Delivery information</a></li>
                <li><a href="#">Returns and refunds</a></li>
                <li><a href="#">FAQs</a></li>
                <li><a href="#">Policies</a></li>
              </ul>
            </nav>

            <nav className="reveal" aria-label="About Coreplane" ref={(el) => { if (el) itemsRef.current[2] = el; }}>
              <h3>We Are Coreplane</h3>
              <ul>
                <li><a href="#">Who we are</a></li>
                <li><a href="#">Our values</a></li>
                <li><a href="#plans">Gift plans</a></li>
                <li><a href="#">Corporate gifting</a></li>
              </ul>
            </nav>
          </div>
        </div>
        <p className="copyright">&copy; 2026 Coreplane. All rights reserved.</p>
      </footer>
    </>
  );
}
