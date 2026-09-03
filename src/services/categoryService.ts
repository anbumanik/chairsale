import { getDb, ref, get, set, update, remove, push } from '../firebase/database';
import type { Category } from '../types';

export async function getCategories(): Promise<Category[]> {
  const db = getDb();
  if (!db) return [];
  const snapshot = await get(ref(db, 'categories'));
  if (!snapshot.exists()) return [];
  const data = snapshot.val();
  return Object.keys(data)
    .map((id) => ({ id, ...data[id] } as Category))
    .filter((c) => c.isActive);
}

export async function getCategoryById(categoryId: string): Promise<Category | null> {
  const db = getDb();
  if (!db) return null;
  const snapshot = await get(ref(db, `categories/${categoryId}`));
  if (!snapshot.exists()) return null;
  return { id: categoryId, ...snapshot.val() } as Category;
}

export async function createCategory(data: Omit<Category, 'id'>): Promise<string> {
  const db = getDb();
  if (!db) throw new Error('Firebase not configured');
  const newRef = push(ref(db, 'categories'));
  await set(newRef, data);
  return newRef.key!;
}

export async function updateCategory(categoryId: string, updates: Partial<Category>): Promise<void> {
  const db = getDb();
  if (!db) throw new Error('Firebase not configured');
  await update(ref(db, `categories/${categoryId}`), updates);
}

export async function deleteCategory(categoryId: string): Promise<void> {
  const db = getDb();
  if (!db) throw new Error('Firebase not configured');
  await remove(ref(db, `categories/${categoryId}`));
}
