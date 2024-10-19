import admin from "firebase-admin";
import dotenv from "dotenv";
// Load environment variables from .env file
dotenv.config();
// Parse the Firebase service account key from the environment variable
const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY);

if (!serviceAccount) {
  throw new Error(
    "FIREBASE_SERVICE_ACCOUNT_KEY environment variable is not set."
  );
}

let parsedServiceAccount;

try {
  // Parse the service account JSON string
  parsedServiceAccount = serviceAccount;
} catch (error) {
  throw new Error(
    "Failed to parse FIREBASE_SERVICE_ACCOUNT_KEY: " + error.message
  );
}

// Initialize Firebase Admin SDK
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(parsedServiceAccount),
  });
}

export default admin;
