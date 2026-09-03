import { getDb, ref, get, set, update, remove, push, onValue, off } from '../firebase/database';
import type { CartItem } from '../types';

export async function getCart(userId: string): Promise<CartItem[]> {
  const db = getDb();
  if (!db) return [];
  const snapshot = await get(ref(db, `carts/${userId}`));
  if (!snapshot.exists()) return [];
  const data = snapshot.val();
  return Object.keys(data).map((productId) => ({ productId, ...data[productId] } as CartItem));
}

export async function addToCart(userId: string, item: CartItem): Promise<void> {
  const db = getDb();
  if (!db) throw new Error('Firebase not configured');
  await set(ref(db, `carts/${userId}/${item.productId}`), {
    quantity: item.quantity,
    variant: item.variant ?? null,
    addedAt: Date.now(),
  });
}

export async function updateCartItem(userId: string, productId: string, quantity: number): Promise<void> {
  const db = getDb();
  if (!db) throw new Error('Firebase not configured');
  await update(ref(db, `carts/${userId}/${productId}`), { quantity });
}

export async function removeFromCart(userId: string, productId: string): Promise<void> {
  const db = getDb();
  if (!db) throw new Error('Firebase not configured');
  await remove(ref(db, `carts/${userId}/${productId}`));
}

export async function clearCart(userId: string): Promise<void> {
  const db = getDb();
  if (!db) throw new Error('Firebase not configured');
  await remove(ref(db, `carts/${userId}`));
}

export function subscribeToCart(userId: string, callback: (items: CartItem[]) => void) {
  const db = getDb();
  if (!db) return () => {};
  const cartRef = ref(db, `carts/${userId}`);
  onValue(cartRef, (snapshot) => {
    if (!snapshot.exists()) return callback([]);
    const data = snapshot.val();
    const items = Object.keys(data).map((productId) => ({ productId, ...data[productId] } as CartItem));
    callback(items);
  });
  return () => off(cartRef);
}
