import admin from "firebase-admin";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let serviceAccount: any;

if (process.env.FIREBASE_SERVICE_ACCOUNT_JSON) {
  // ✅ Production / Render
  serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_JSON);
} else {
  // ✅ Local development fallback
  try {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    serviceAccount = require("./firebase-service-account.json");
  } catch (err) {
    throw new Error(
      "Firebase service account not found. Provide FIREBASE_SERVICE_ACCOUNT_JSON env variable or firebase-service-account.json locally."
    );
  }
}

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

export default admin;
