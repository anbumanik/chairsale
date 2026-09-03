import { app, isFirebaseConfigured } from './config';
import {
  getDatabase,
  ref,
  set,
  get,
  update,
  remove,
  child,
  push,
  onValue,
  off,
  query,
  orderByChild,
  equalTo,
  Database,
} from 'firebase/database';

/** Returns the database instance, or null if Firebase is not configured. */
export function getDb(): Database | null {
  if (!isFirebaseConfigured || !app) return null;
  return getDatabase(app);
}

export {
  ref,
  set,
  get,
  update,
  remove,
  child,
  push,
  onValue,
  off,
  query,
  orderByChild,
  equalTo,
};
