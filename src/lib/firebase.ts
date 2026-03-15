import { Platform } from "react-native";
import { getAnalytics, isSupported } from "firebase/analytics";
import { FirebaseApp, getApp, getApps, initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.EXPO_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.EXPO_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.EXPO_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

const requiredConfig = Object.entries(firebaseConfig).filter(
  ([key, value]) => key !== "measurementId" && !value
);

if (requiredConfig.length > 0) {
  throw new Error(
    `Missing Firebase env vars: ${requiredConfig.map(([key]) => key).join(", ")}`
  );
}

export const app: FirebaseApp = getApps().length
  ? getApp()
  : initializeApp(firebaseConfig);

export const analyticsPromise =
  Platform.OS === "web"
    ? isSupported().then((supported) => (supported ? getAnalytics(app) : null))
    : Promise.resolve(null);
