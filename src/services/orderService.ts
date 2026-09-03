import { getDb, ref, get, set, update, push, onValue, off } from '../firebase/database';
import type { Order } from '../types';

export async function createOrder(orderData: Omit<Order, 'id'>): Promise<string> {
  const db = getDb();
  if (!db) throw new Error('Firebase not configured');
  const newRef = push(ref(db, 'orders'));
  await set(newRef, { ...orderData, createdAt: Date.now(), updatedAt: Date.now() });
  return newRef.key!;
}

export async function getOrdersByUser(userId: string): Promise<Order[]> {
  const db = getDb();
  if (!db) return [];
  const snapshot = await get(ref(db, 'orders'));
  if (!snapshot.exists()) return [];
  const data = snapshot.val();
  return Object.keys(data)
    .map((id) => ({ id, ...data[id] } as Order))
    .filter((o) => o.userId === userId);
}

export async function getOrderById(orderId: string): Promise<Order | null> {
  const db = getDb();
  if (!db) return null;
  const snapshot = await get(ref(db, `orders/${orderId}`));
  if (!snapshot.exists()) return null;
  return { id: orderId, ...snapshot.val() } as Order;
}

export async function updateOrderStatus(
  orderId: string,
  status: Order['orderStatus'],
  trackingInfo?: string
): Promise<void> {
  const db = getDb();
  if (!db) throw new Error('Firebase not configured');
  const updates: Partial<Order> = { orderStatus: status, updatedAt: Date.now() };
  if (trackingInfo) updates.trackingInfo = trackingInfo;
  await update(ref(db, `orders/${orderId}`), updates);
}

export function subscribeToOrder(orderId: string, callback: (order: Order | null) => void) {
  const db = getDb();
  if (!db) return () => {};
  const orderRef = ref(db, `orders/${orderId}`);
  onValue(orderRef, (snapshot) => {
    if (!snapshot.exists()) return callback(null);
    callback({ id: orderId, ...snapshot.val() } as Order);
  });
  return () => off(orderRef);
}
