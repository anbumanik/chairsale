import { storage } from './config';
import { ref, uploadBytesResumable, getDownloadURL, deleteObject } from 'firebase/storage';

export {
  storage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
  deleteObject
};
