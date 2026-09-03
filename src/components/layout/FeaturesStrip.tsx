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
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <Sparkles className="w-4 h-4 text-[var(--clr-accent)]" />
            <div className="h-[1px] w-12 bg-[var(--clr-accent)]/30"></div>
            <span className="text-[var(--clr-accent)] text-xs font-bold tracking-[0.2em] uppercase">
              Crafted for comfort. Built to last.
            </span>
            <div className="h-[1px] w-12 bg-[var(--clr-accent)]/30"></div>
            <Sparkles className="w-4 h-4 text-[var(--clr-accent)]" />
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-[var(--clr-text)] font-medium leading-tight" style={{ fontFamily: 'var(--font-display)' }}>
            Trusted by Thousands.<br />Loved Every Day.
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((f) => (
            <div 
              key={f.id} 
              className="bg-white/60 backdrop-blur-sm border border-[var(--clr-border)] rounded-[24px] p-8 flex flex-col transition-transform hover:-translate-y-1 duration-300"
            >
              {/* Top Row: Icon & Number */}
              <div className="flex items-center justify-between mb-8">
                <div className="w-14 h-14 rounded-full bg-[var(--clr-bg-secondary)] flex items-center justify-center text-[var(--clr-text)]">
                  {f.icon}
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-[var(--clr-accent)] font-semibold text-sm mb-1">{f.id}</span>
                  <div className="w-5 h-[1.5px] bg-[var(--clr-accent)]"></div>
                </div>
              </div>

              {/* Text Content */}
              <div className="flex-1">
                <h3 className="text-2xl text-[var(--clr-text)] mb-3 font-medium" style={{ fontFamily: 'var(--font-display)' }}>
                  {f.title}
                </h3>
                <p className="text-[var(--clr-text-muted)] text-sm leading-relaxed">
                  {f.desc}
                </p>
              </div>

              {/* Bottom Arrow Button */}
              <div className="mt-8">
                <button className="w-10 h-10 rounded-full border border-[var(--clr-accent)] flex items-center justify-center text-[var(--clr-accent)] hover:bg-[var(--clr-accent)] hover:text-white transition-colors">
                  <ArrowRight className="w-4 h-4 stroke-[2]" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Footer Tags */}
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
    </section>
  );
}
