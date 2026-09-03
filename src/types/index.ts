export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  role: 'customer' | 'admin';
  createdAt: number;
  profileImage?: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string;
  imageUrl?: string;
  parentCategoryId?: string;
  isActive: boolean;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  categoryId: string;
  shortDescription: string;
  description: string;
  images: string[];
  variants?: any[];
  retailPrice: number;
  originalPrice?: number;
  discount?: number;
  features?: string[];
  specifications?: Record<string, string>;
  stock: number;
  stockStatus: string;
  warranty?: string;
  rating: number;
  reviewCount: number;
  isFeatured: boolean;
  isActive: boolean;
  createdAt: number;
}

export interface PrivateProductData {
  supplierId?: string;
  supplierCost: number;
  wholesalePrice: number;
  internalMargin?: number;
  privateSupplierNotes?: string;
}

export interface CartItem {
  productId: string;
  quantity: number;
  variant?: any;
  addedAt: number;
}

export interface OrderItem {
  productId: string;
  quantity: number;
  price: number;
  variant?: any;
}

export interface Order {
  id: string;
  userId: string;
  items: OrderItem[];
  subtotal: number;
  discount: number;
  shipping: number;
  total: number;
  shippingAddress: any;
  paymentStatus: 'pending' | 'paid' | 'failed';
  orderStatus: 'processing' | 'shipped' | 'delivered' | 'cancelled';
  trackingInfo?: string;
  createdAt: number;
  updatedAt: number;
}

export interface Review {
  id: string;
  userId: string;
  productId: string;
  rating: number;
  comment: string;
  images?: string[];
  createdAt: number;
}

export interface Coupon {
  id: string;
  code: string;
  type: 'percentage' | 'fixed';
  value: number;
  expiryDate: number;
  isActive: boolean;
}

export interface Banner {
  id: string;
  title: string;
  subtitle?: string;
  imageUrl: string;
  buttonText?: string;
  buttonLink?: string;
  isActive: boolean;
}
