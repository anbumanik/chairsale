import { app, isFirebaseConfigured } from './config';
import { getStorage } from 'firebase/storage';
import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
  deleteObject,
} from 'firebase/storage';

const storage = isFirebaseConfigured && app ? getStorage(app) : null;

export {
  storage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
  deleteObject,
};
