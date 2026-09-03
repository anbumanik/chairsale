'use client';
import { useEffect, useState } from 'react';
import { getFeaturedProducts } from '../../services/productService';
import type { Product } from '../../types';
import Link from 'next/link';

function Stars({ rating }: { rating: number }) {
  return (
    <div className="stars" aria-label={`${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((s) => (
        <span key={s} className={`star${s <= Math.round(rating) ? ' active' : ''}`}>★</span>
      ))}
    </div>
  );
}

function ProductCard({ product }: { product: Product }) {
  const hasDiscount =
    product.originalPrice !== undefined && product.originalPrice > product.retailPrice;
  const savedAmount = hasDiscount ? product.originalPrice! - product.retailPrice : 0;

  return (
    <Link
      href={`/products/${product.slug}`}
      className="product-card"
      id={`product-card-${product.id}`}
    >
      {/* Image area */}
      <div className="product-img-wrap">
        {product.images?.[0] ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={product.images[0]} alt={product.name} className="product-img" />
        ) : (
          <div className="product-img-placeholder">🪑</div>
        )}

        {hasDiscount && (
          <span className="product-badge">
            Save ₹{savedAmount.toLocaleString()}
          </span>
        )}

        {product.stockStatus === 'out_of_stock' && (
          <div className="product-out-overlay">Out of Stock</div>
        )}

        <button
          className="product-wishlist"
          aria-label="Add to wishlist"
          onClick={(e) => { e.preventDefault(); }}
        >
          ♡
        </button>
      </div>

      {/* Info */}
      <div className="product-body">
        <p className="product-category">Office Chair</p>
        <h3 className="product-name">{product.name}</h3>
        <p className="product-desc">{product.shortDescription}</p>

        <div className="product-rating-row">
          <Stars rating={product.rating} />
          <span className="product-review-count">({product.reviewCount} reviews)</span>
        </div>

        <div className="product-price-row">
          <span className="product-price">₹{product.retailPrice.toLocaleString()}</span>
          {hasDiscount && (
            <>
              <span className="product-original-price">
                ₹{product.originalPrice!.toLocaleString()}
              </span>
              <span className="product-save">
                {Math.round((savedAmount / product.originalPrice!) * 100)}% off
              </span>
            </>
          )}
        </div>
      </div>

      {/* Footer CTA */}
      <div className="product-footer">
        <button
          className="btn-cart"
          onClick={(e) => { e.preventDefault(); /* cartService.addToCart */ }}
        >
          Add to Cart
        </button>
      </div>
    </Link>
  );
}

function SkeletonCard() {
  return (
    <div className="skeleton-card">
      <div className="skeleton skeleton-img" />
      <div className="skeleton-body">
        <div className="skeleton skeleton-line skeleton-line-xs" />
        <div className="skeleton skeleton-line skeleton-line-xl" />
        <div className="skeleton skeleton-line skeleton-line-md" />
        <div className="skeleton skeleton-line skeleton-line-sm" />
        <div className="skeleton skeleton-line skeleton-line-btn" />
      </div>
    </div>
  );
}

export default function FeaturedProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getFeaturedProducts()
      .then(setProducts)
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className="section section-beige" id="featured-products">
      <div className="container">
        <div className="section-header centered">
          <span className="section-eyebrow">Bestsellers</span>
          <h2 className="section-title">Featured Products</h2>
          <div className="section-divider" />
          <p className="section-subtitle">
            Hand-picked from our premium range — chairs built to last and crafted to impress.
          </p>
        </div>

        <div className="products-grid">
          {loading
            ? Array.from({ length: 4 }).map((_, i) => <SkeletonCard key={i} />)
            : products.length > 0
            ? products.map((p) => <ProductCard key={p.id} product={p} />)
            : (
              <div className="empty-state">
                <div className="empty-state-icon">🪑</div>
                <p className="empty-state-title">Products Coming Soon</p>
                <p className="empty-state-desc">
                  We're curating the finest pieces for your workspace. Check back shortly.
                </p>
              </div>
            )}
        </div>

        {products.length > 0 && (
          <div className="section-cta">
            <Link href="/products" className="btn-secondary">View All Products</Link>
          </div>
        )}
      </div>
    </section>
  );
}
