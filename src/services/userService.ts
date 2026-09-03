import { getDb, ref, get, set } from '../firebase/database';
import type { User } from '../types';

export async function getUserById(userId: string): Promise<User | null> {
  const db = getDb();
  if (!db) return null;
  const snapshot = await get(ref(db, `users/${userId}`));
  if (!snapshot.exists()) return null;
  return { id: userId, ...snapshot.val() } as User;
}

export async function createUser(userId: string, data: Omit<User, 'id'>): Promise<void> {
  const db = getDb();
  if (!db) throw new Error('Firebase not configured');
  await set(ref(db, `users/${userId}`), { ...data, createdAt: Date.now() });
}

export async function updateUser(userId: string, updates: Partial<User>): Promise<void> {
  const db = getDb();
  if (!db) throw new Error('Firebase not configured');
  const { update } = await import('../firebase/database');
  await update(ref(db, `users/${userId}`), updates);
}
