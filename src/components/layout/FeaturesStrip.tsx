import { Truck, Package, ShieldCheck, Armchair, ArrowRight, Sparkles } from 'lucide-react';

export default function FeaturesStrip() {
  const features = [
    {
      id: '01',
      icon: <Truck className="w-6 h-6 stroke-[1.5]" />,
      title: 'Free Delivery',
      desc: 'Complimentary shipping on all orders above ₹5,000 across India. Fast, reliable & secure.',
    },
    {
      id: '02',
      icon: <Package className="w-6 h-6 stroke-[1.5]" />,
      title: '30-Day Returns',
      desc: 'Not satisfied? Return or exchange within 30 days, hassle-free. No questions asked.',
    },
    {
      id: '03',
      icon: <ShieldCheck className="w-6 h-6 stroke-[1.5]" />,
      title: '2-Year Warranty',
      desc: 'Every chair is backed by a manufacturer warranty for your peace of mind.',
    },
    {
      id: '04',
      icon: <Armchair className="w-6 h-6 stroke-[1.5]" />,
      title: 'Expert Curation',
      desc: 'Each product is hand-selected by our team of interior and ergonomics experts.',
    },
  ];

  return (
    <section className="py-24 bg-[var(--clr-bg)] border-t border-b border-[var(--clr-border)] relative z-10">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Header Area */}
        <div className="text-center max-w-3xl mx-auto mb-20 flex flex-col items-center">

          <h2 className="text-4xl md:text-5xl lg:text-6xl text-[var(--clr-text)] font-medium leading-tight text-center mb-10" style={{ fontFamily: 'var(--font-display)' }}>
            Trusted by Thousands.<br />Loved Every Day.
          </h2>

          {/* Strip (Moved from top to under the title) */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-[var(--clr-text-muted)] text-xs font-bold tracking-[0.15em] uppercase">
            <span>Premium Quality</span>
            <div className="w-px h-4 bg-[var(--clr-border-dark)]"></div>
            <Armchair className="w-6 h-6 text-[var(--clr-accent)]" strokeWidth={1.5} />
            <div className="w-px h-4 bg-[var(--clr-border-dark)]"></div>
            <span>Thoughtful Design</span>
            <div className="w-px h-4 bg-[var(--clr-border-dark)]"></div>
            <span>Lasting Comfort</span>
          </div>
        </div>

        {/* Cards Grid with New Look */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div 
              key={f.id} 
              className="group relative bg-white border border-[var(--clr-border)] hover:border-[var(--clr-accent)]/40 rounded-[24px] p-8 flex flex-col transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] hover:-translate-y-2 overflow-hidden"
            >
              {/* Decorative gradient blob on hover */}
              <div className="absolute -top-32 -right-32 w-64 h-64 bg-[var(--clr-accent)]/5 rounded-full blur-3xl group-hover:bg-[var(--clr-accent)]/10 transition-colors duration-700"></div>

              {/* Top Row: Icon & Number */}
              <div className="flex items-center justify-between mb-10 relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-[var(--clr-bg)] border border-[var(--clr-border)] flex items-center justify-center text-[var(--clr-text)] group-hover:scale-110 group-hover:bg-[var(--clr-accent)] group-hover:text-white group-hover:border-[var(--clr-accent)] transition-all duration-500 shadow-sm">
                  {f.icon}
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-[var(--clr-text-muted)] font-bold text-xl mb-1 opacity-40 group-hover:opacity-100 group-hover:text-[var(--clr-accent)] transition-all duration-500">{f.id}</span>
                </div>
              </div>

              {/* Text Content */}
              <div className="flex-1 relative z-10">
                <h3 className="text-2xl text-[var(--clr-text)] mb-4 font-medium" style={{ fontFamily: 'var(--font-display)' }}>
                  {f.title}
                </h3>
                <p className="text-[var(--clr-text-muted)] text-sm leading-relaxed">
                  {f.desc}
                </p>
              </div>

              {/* Bottom Arrow Button */}
              <div className="mt-10 flex justify-start relative z-10">
                <button className="flex items-center gap-2 text-sm font-semibold text-[var(--clr-text)] group-hover:text-[var(--clr-accent)] transition-colors duration-300">
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4 stroke-[2] group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
