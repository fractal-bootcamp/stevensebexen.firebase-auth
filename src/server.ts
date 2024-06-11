import admin from 'firebase-admin'
import express, { NextFunction, Request, Response } from 'express';
import loginHandler from './loginHandler';
import signupHandler from './signupHandler';

const firebaseApp = admin.initializeApp({
  credential: admin.credential.cert(process.env.SERVICE_ACCOUNT_PATH || '')
});

const expressApp = express();
const PORT = 3000;

const cors = (_: Request, res: Response, next: NextFunction) => {
  res.header('Access-Control-Request-Method', '*');
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '*');
  next()
}

expressApp.use(express.json());
expressApp.use(cors);

expressApp.post('/login', loginHandler);
expressApp.post('/signup', signupHandler);

expressApp.listen(PORT, () => { console.log(`Server listening on port ${PORT}.`) });