import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getStorage } from 'firebase/storage';
import { APP_CONFIGS } from '~/configs/_app.configs';

const FIREBASE_APP_CONFIGS = initializeApp({
  apiKey: APP_CONFIGS.API_KEY,
  authDomain: APP_CONFIGS.AUTH_DOMAIN,
  databaseURL: APP_CONFIGS.DATABASE_URL,
  projectId: APP_CONFIGS.PROJECT_ID,
  storageBucket: APP_CONFIGS.STORAGE_BUCKET,
  messagingSenderId: APP_CONFIGS.MESSAGING_SENDER_ID,
  appId: APP_CONFIGS.APP_ID,
  measurementId: APP_CONFIGS.MEASUREMENT_ID,
});

export const firebaseDatabase = getDatabase(FIREBASE_APP_CONFIGS);
export const firebaseStorage = getStorage(FIREBASE_APP_CONFIGS);
