'use client';

import { useEffect, useState } from 'react';
import { getProductBySlug } from '@/services/productService';
import type { Product } from '@/types';
import { notFound, useParams } from 'next/navigation';
import { Star, Truck, ShieldCheck, CheckCircle2, ChevronRight, ShoppingCart } from 'lucide-react';
import Link from 'next/link';

export default function ProductDetailsPage() {
  const { slug } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (typeof slug !== 'string') return;
    
    getProductBySlug(slug)
      .then((data) => {
        if (!data) notFound();
        setProduct(data);
      })
      .catch(() => notFound())
      .finally(() => setLoading(false));
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[var(--clr-bg)] flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-[var(--clr-accent)] border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!product) return null;

  const hasDiscount = product.originalPrice !== undefined && product.originalPrice > product.retailPrice;
  const savedAmount = hasDiscount ? product.originalPrice! - product.retailPrice : 0;
  const discountPercentage = hasDiscount ? Math.round((savedAmount / product.originalPrice!) * 100) : 0;

  return (
    <div className="min-h-screen bg-[var(--clr-bg)] py-12 md:py-20 relative z-10">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-[var(--clr-text-muted)] mb-10 font-medium">
          <Link href="/" className="hover:text-[var(--clr-accent)] transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <Link href="/products" className="hover:text-[var(--clr-accent)] transition-colors">Products</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-[var(--clr-text)]">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Left Column: Image */}
          <div className="relative group">
            <div className="aspect-[4/5] md:aspect-square bg-white rounded-[32px] border border-[var(--clr-border)] overflow-hidden flex items-center justify-center p-8 relative z-10 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)]">
              {product.images?.[0] ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img 
                  src={product.images[0]} 
                  alt={product.name} 
                  className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-700"
                />
              ) : (
                <div className="text-6xl">🪑</div>
              )}
            </div>
            {/* Decorative blob behind image */}
            <div className="absolute -inset-4 bg-[var(--clr-accent)]/5 blur-3xl -z-10 rounded-full"></div>
          </div>

          {/* Right Column: Details */}
          <div className="flex flex-col justify-center">
            
            {/* Status badges */}
            <div className="flex items-center gap-3 mb-6">
              {product.stockStatus === 'in_stock' && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-green-100 text-green-700 text-xs font-bold tracking-widest uppercase">
                  <CheckCircle2 className="w-3.5 h-3.5" /> In Stock
                </span>
              )}
              {hasDiscount && (
                <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-[var(--clr-accent)] text-white text-xs font-bold tracking-widest uppercase shadow-sm">
                  Save {discountPercentage}%
                </span>
              )}
            </div>

            {/* Title & Reviews */}
            <h1 className="text-4xl md:text-5xl text-[var(--clr-text)] font-medium leading-tight mb-4" style={{ fontFamily: 'var(--font-display)' }}>
              {product.name}
            </h1>
            
            <div className="flex items-center gap-4 mb-8 pb-8 border-b border-[var(--clr-border)]">
              <div className="flex gap-1 text-yellow-400">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className={`w-5 h-5 ${s <= product.rating ? 'fill-current' : 'fill-transparent stroke-gray-300'}`} />
                ))}
              </div>
              <span className="text-[var(--clr-text-muted)] text-sm font-medium">({product.reviewCount} customer reviews)</span>
            </div>

            {/* Price */}
            <div className="mb-8">
              <div className="flex items-end gap-4">
                <span className="text-4xl text-[var(--clr-text)] font-bold">₹{product.retailPrice.toLocaleString()}</span>
                {hasDiscount && (
                  <span className="text-xl text-[var(--clr-text-muted)] line-through decoration-1 mb-1">
                    ₹{product.originalPrice!.toLocaleString()}
                  </span>
                )}
              </div>
              <p className="text-[var(--clr-text-muted)] text-sm mt-2">Inclusive of all taxes</p>
            </div>

            {/* Description */}
            <div className="prose prose-sm text-[var(--clr-text-muted)] leading-relaxed mb-10">
              <p>{product.description || product.shortDescription}</p>
            </div>

            {/* Benefits Strip */}
            <div className="grid grid-cols-2 gap-4 mb-10">
              <div className="flex items-center gap-3 p-4 rounded-2xl bg-white border border-[var(--clr-border)] shadow-sm">
                <div className="w-10 h-10 rounded-full bg-[var(--clr-bg)] flex items-center justify-center text-[var(--clr-accent)]">
                  <Truck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[var(--clr-text)]">Free Delivery</h4>
                  <p className="text-xs text-[var(--clr-text-muted)]">Across India</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-2xl bg-white border border-[var(--clr-border)] shadow-sm">
                <div className="w-10 h-10 rounded-full bg-[var(--clr-bg)] flex items-center justify-center text-[var(--clr-accent)]">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[var(--clr-text)]">2-Year Warranty</h4>
                  <p className="text-xs text-[var(--clr-text-muted)]">Manufacturer backed</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <button className="w-full h-16 rounded-full bg-[var(--clr-text)] hover:bg-[var(--clr-accent)] text-white text-lg font-bold transition-all duration-300 flex items-center justify-center gap-3 shadow-[0_10px_20px_-10px_rgba(0,0,0,0.2)] hover:shadow-[0_15px_30px_-10px_rgba(0,0,0,0.3)] hover:-translate-y-1">
              <ShoppingCart className="w-5 h-5" />
              Add to Cart — ₹{product.retailPrice.toLocaleString()}
            </button>

          </div>
        </div>
      </div>
    </div>
  );
}
