import { getDb, ref, get, set, update, remove, push, onValue, off, query, orderByChild, equalTo } from '../firebase/database';
import type { Product, PrivateProductData } from '../types';

export async function getProducts(): Promise<Product[]> {
  const db = getDb();
  if (!db) return [];
  const snapshot = await get(ref(db, 'products'));
  if (!snapshot.exists()) return [];
  const data = snapshot.val();
  return Object.keys(data)
    .map((id) => ({ id, ...data[id] } as Product))
    .filter((p) => p.isActive);
}

export async function getProductById(productId: string): Promise<Product | null> {
  const db = getDb();
  if (!db) return null;
  const snapshot = await get(ref(db, `products/${productId}`));
  if (!snapshot.exists()) return null;
  return { id: productId, ...snapshot.val() } as Product;
}

export async function getFeaturedProducts(): Promise<Product[]> {
  const db = getDb();
  if (!db) return [];
  const q = query(ref(db, 'products'), orderByChild('isFeatured'), equalTo(true));
  const snapshot = await get(q);
  if (!snapshot.exists()) return [];
  const data = snapshot.val();
  return Object.keys(data)
    .map((id) => ({ id, ...data[id] } as Product))
    .filter((p) => p.isActive);
}

export async function getProductsByCategory(categoryId: string): Promise<Product[]> {
  const db = getDb();
  if (!db) return [];
  const q = query(ref(db, 'products'), orderByChild('categoryId'), equalTo(categoryId));
  const snapshot = await get(q);
  if (!snapshot.exists()) return [];
  const data = snapshot.val();
  return Object.keys(data)
    .map((id) => ({ id, ...data[id] } as Product))
    .filter((p) => p.isActive);
}

export function subscribeToProduct(productId: string, callback: (product: Product | null) => void) {
  const db = getDb();
  if (!db) return () => {};
  const productRef = ref(db, `products/${productId}`);
  onValue(productRef, (snapshot) => {
    if (!snapshot.exists()) return callback(null);
    callback({ id: productId, ...snapshot.val() } as Product);
  });
  return () => off(productRef);
}

export async function createProduct(
  productData: Omit<Product, 'id'>,
  privateData?: PrivateProductData
): Promise<string> {
  const db = getDb();
  if (!db) throw new Error('Firebase not configured');
  const newRef = push(ref(db, 'products'));
  const productId = newRef.key!;
  await set(newRef, { ...productData, createdAt: Date.now() });
  if (privateData) {
    await set(ref(db, `admin/privateProducts/${productId}`), privateData);
  }
  return productId;
}

export async function updateProduct(productId: string, updates: Partial<Product>): Promise<void> {
  const db = getDb();
  if (!db) throw new Error('Firebase not configured');
  await update(ref(db, `products/${productId}`), updates);
}

export async function deleteProduct(productId: string): Promise<void> {
  const db = getDb();
  if (!db) throw new Error('Firebase not configured');
  await remove(ref(db, `products/${productId}`));
  await remove(ref(db, `admin/privateProducts/${productId}`));
}

export async function saveProductImages(productId: string, imageUrls: string[]): Promise<void> {
  const db = getDb();
  if (!db) throw new Error('Firebase not configured');
  await update(ref(db, `products/${productId}`), { images: imageUrls });
}
