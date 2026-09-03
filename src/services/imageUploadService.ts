import { ref as storageRef, uploadBytesResumable, getDownloadURL, deleteObject } from 'firebase/storage';
import { storage } from '../firebase/storage';

export type UploadPath = 'products' | 'categories' | 'banners' | 'reviews';

interface UploadResult {
  url: string;
  path: string;
}

/**
 * Upload a single file to Firebase Storage and return the download URL.
 * @param file       The File object to upload
 * @param path       Storage path category (products, categories, banners, reviews)
 * @param entityId   The entity ID this image belongs to (productId, categoryId, etc.)
 * @param fileName   Optional custom file name (defaults to original file name)
 * @param onProgress Optional progress callback (0–100)
 */
export function uploadImage(
  file: File,
  path: UploadPath,
  entityId: string,
  fileName?: string,
  onProgress?: (progress: number) => void
): Promise<UploadResult> {
  return new Promise((resolve, reject) => {
    if (!storage) {
      return reject(new Error('Firebase Storage is not initialized.'));
    }
    const name = fileName ?? file.name;
    const fullPath = `${path}/${entityId}/${name}`;
    const fileRef = storageRef(storage, fullPath);
    const uploadTask = uploadBytesResumable(fileRef, file);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        onProgress?.(Math.round(progress));
      },
      (error) => reject(error),
      async () => {
        const url = await getDownloadURL(uploadTask.snapshot.ref);
        resolve({ url, path: fullPath });
      }
    );
  });
}

/**
 * Upload multiple images sequentially and return all download URLs.
 */
export async function uploadMultipleImages(
  files: File[],
  path: UploadPath,
  entityId: string,
  onProgress?: (fileIndex: number, progress: number) => void
): Promise<string[]> {
  const urls: string[] = [];
  for (let i = 0; i < files.length; i++) {
    const result = await uploadImage(
      files[i],
      path,
      entityId,
      `image-${i + 1}-${Date.now()}`,
      (progress) => onProgress?.(i, progress)
    );
    urls.push(result.url);
  }
  return urls;
}

/**
 * Delete an image from Firebase Storage by its full storage path.
 */
export async function deleteImage(fullPath: string): Promise<void> {
  if (!storage) {
    throw new Error('Firebase Storage is not initialized.');
  }
  const fileRef = storageRef(storage, fullPath);
  await deleteObject(fileRef);
}
