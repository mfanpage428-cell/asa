import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { initializeFirestore, setLogLevel, getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics, isSupported } from "firebase/analytics";

export const firebaseConfig = {
  apiKey: "AIzaSyBNNP86u74B6C4KyJaZgjrL3kwj_jnaN1w",
  authDomain: "asraworld-5764b.firebaseapp.com",
  projectId: "asraworld-5764b",
  storageBucket: "asraworld-5764b.firebasestorage.app",
  messagingSenderId: "647089465849",
  appId: "1:647089465849:web:0a9136fd23be419905b528",
  measurementId: "G-DY4EQ87J0R"
};

// Silence internal Firestore transport retry warnings in sandbox/iframe environments
setLogLevel("silent");

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);

// Initialize Firestore with long-polling to ensure stable connectivity in iframes and sandboxes
let firestoreDb: ReturnType<typeof getFirestore>;
try {
  firestoreDb = initializeFirestore(app, {
    experimentalForceLongPolling: true,
    ignoreUndefinedProperties: true
  });
} catch {
  firestoreDb = getFirestore(app);
}

export const db = firestoreDb;
export const storage = getStorage(app);

// Initialize Google Analytics if supported in browser environment
export let analytics: ReturnType<typeof getAnalytics> | null = null;
if (typeof window !== "undefined") {
  isSupported().then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
    }
  }).catch(() => {
    // Analytics optional fallback
  });
}

export default app;
