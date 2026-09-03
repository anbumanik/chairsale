import { auth } from './config';
import { 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  signOut,
  onAuthStateChanged,
  User as FirebaseUser
} from 'firebase/auth';

// Add any custom auth utility functions here if needed.
// For example, role checks or specialized sign-in wrappers.

export {
  auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
};
export type { FirebaseUser };
