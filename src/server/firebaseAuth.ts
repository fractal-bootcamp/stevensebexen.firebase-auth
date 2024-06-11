import admin from 'firebase-admin';

const firebaseApp = admin.initializeApp({
  credential: admin.credential.cert(process.env.SERVICE_ACCOUNT_PATH || '')
});
const auth = firebaseApp.auth();

export default auth;